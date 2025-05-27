const features = [
  {
    icon: "📝",
    title: "Log Trade Entries",
    description: "Quickly record your trade entry price, market cap, and date for any altcoin or meme coin."
  },
  {
    icon: "📊",
    title: "View Trade History",
    description: "See a complete history of your trades and easily review past performance."
  },
  {
    icon: "🏷️",
    title: "Tag & Organize Coins",
    description: "Add tags to your trades for better organization and faster searching."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <div key={i} className="bg-card rounded-xl shadow p-8 flex flex-col items-center text-center border">
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 