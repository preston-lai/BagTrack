import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { createAdminClient } from '@/lib/supabase-admin';

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 1. Create the auth user with the regular Supabase client
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      console.error('Auth signup error:', authError);
      return NextResponse.json(
        { error: authError.message },
        { status: authError.status || 400 }
      );
    }

    if (!authData.user) {
      console.error('No user data returned from signup');
      return NextResponse.json(
        { error: 'Failed to create user' },
        { status: 500 }
      );
    }

    // 2. Use the admin client (with Service Role Key) to create the user profile, bypassing RLS
    const supabaseAdmin = createAdminClient();

    const { data: profile, error: profileError } = await supabaseAdmin
      .from('profiles')
      .insert([
        {
          id: authData.user.id,
          email: authData.user.email,
          name: name,
        },
      ])
      .select()
      .single();

    if (profileError) {
      console.error('Profile creation error (admin client):', profileError);
      // Optional: Clean up the auth user if profile creation fails
      // await supabaseAdmin.auth.api.deleteUser(authData.user.id);
      return NextResponse.json(
        { error: `Failed to create user profile: ${profileError.message}` },
        { status: 500 }
      );
    }

    // 3. Return user info (including profile data if needed) - here we just return basic auth user info
    return NextResponse.json({
      user: {
        id: authData.user.id,
        email: authData.user.email,
        name: name, // Include name from the request as the profile was successful
      },
    });
  } catch (error) {
    console.error('Signup API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 