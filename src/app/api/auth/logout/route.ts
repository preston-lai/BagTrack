import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST() {
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    return NextResponse.json(
      { error: 'Failed to logout' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
} 