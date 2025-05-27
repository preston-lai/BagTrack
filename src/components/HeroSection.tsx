import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-16 max-w-6xl mx-auto">
      <div className="flex-1 flex flex-col items-start justify-center">
        <h1 className="text-5xl font-bold mb-4 leading-tight">Track Your Meme Coin & Altcoin Trades</h1>
        <p className="mb-8 text-lg text-muted-foreground max-w-lg">BagTrack helps you log, monitor, and analyze your swing trades. Stay organized and maximize your gains with easy trade tracking, tagging, and performance insights.</p>
        <Button asChild size="lg">
          <a href="/tracker">Get Started</a>
        </Button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img src="/src/assets/react.svg" alt="Placeholder" className="w-64 h-64 object-contain opacity-80" />
      </div>
    </section>
  )
} 
