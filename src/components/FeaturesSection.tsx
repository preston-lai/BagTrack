const features = [
  {
    icon: "💹",
    title: "Log Trades",
    description: "Easily record your buy and sell transactions for any coin or token.",
  },
  {
    icon: "📈",
    title: "Track Performance",
    description: "Monitor your portfolio and see your gains and losses over time.",
  },
  {
    icon: "🏷️",
    title: "Tag Coins",
    description: "Organize your trades with custom tags and categories.",
  },
  {
    icon: "📝",
    title: "Add Notes",
    description: "Attach notes to each trade for future reference and strategy review.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <div key={i} className="bg-card rounded-xl shadow p-8 flex flex-col items-center text-center border border-border">
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
} 