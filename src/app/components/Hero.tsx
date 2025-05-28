import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <h1 className="text-5xl font-bold mb-4">Swing Trade Tracking for Crypto</h1>
      <p className="mb-8 text-lg text-muted-foreground max-w-2xl">
        BagTrack helps swing traders in crypto (altcoins, meme coins, etc) easily record their trade entries—price, market cap, and date—so you never lose track of your moves.
      </p>
      <Link
        href="/dashboard"
        className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold shadow hover:bg-gray-100 transition text-lg"
      >
        Start Tracking Now
      </Link>
    </section>
  );
} 