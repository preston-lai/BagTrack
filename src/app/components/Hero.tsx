"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginPromptModal from "./LoginPromptModal";

export default function Hero() {
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const router = useRouter();
  // TODO: Replace this with actual auth check
  const isLoggedIn = false;

  const handleStartTracking = (e: React.MouseEvent) => {
    if (!isLoggedIn) {
      e.preventDefault();
      setShowLoginPrompt(true);
    }
  };

  const handleContinueWithoutSaving = () => {
    setShowLoginPrompt(false);
    router.push('/dashboard?mode=temporary');
  };

  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <h1 className="text-5xl font-bold mb-4">Swing Trade Tracking for Crypto</h1>
      <p className="mb-8 text-lg text-muted-foreground max-w-2xl">
        BagTrack helps swing traders in crypto (altcoins, meme coins, etc) easily record their trade entries—price, market cap, and date—so you never lose track of your moves.
      </p>
      <a
        href="/dashboard"
        onClick={handleStartTracking}
        className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition text-lg"
      >
        Start Tracking Now
      </a>

      <LoginPromptModal 
        isOpen={showLoginPrompt}
        onClose={handleContinueWithoutSaving}
      />
    </section>
  );
} 