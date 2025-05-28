import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar showFeaturesLink={false} />
      <main className="flex-1">
        <Hero />
        <Features />
      </main>
    </div>
  );
}
