import Navbar from "../components/Navbar";
import StatsBar from "../components/StatsBar";
import TradeCard from "../components/TradeCard";

const inProgressTrades = [
  {
    token: "PEPE",
    usdc: 500,
    count: 100000000,
    price: 0.000001,
    marketCap: "$10M",
    date: "2024-06-01"
  },
  {
    token: "SHIBA",
    usdc: 300,
    count: 1000000000,
    price: 0.000007,
    marketCap: "$50M",
    date: "2024-06-02"
  }
];

const exitedTrades = [
  {
    token: "PEPE",
    usdc: 500,
    count: 100000000,
    price: 0.000001,
    marketCap: "$10M",
    date: "2024-06-01",
    exitPrice: 0.000003,
    exitDate: "2024-06-10",
    pl: "+$100"
  },
  {
    token: "SHIBA",
    usdc: 300,
    count: 1000000000,
    price: 0.000007,
    marketCap: "$50M",
    date: "2024-06-02",
    exitPrice: 0.000009,
    exitDate: "2024-06-12",
    pl: "+$200"
  }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar showFeaturesLink={false} />
      <StatsBar totalInvested={800} totalPL={300} totalPLPercent={37.5} portfolioValue={1100} />
      <main className="flex-1 flex flex-col md:flex-row gap-8 px-8 py-8 max-w-6xl mx-auto w-full">
        <section className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">In-Progress Trades</h2>
            <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100 transition">Add Trade</button>
          </div>
          <div className="flex flex-col gap-4">
            {inProgressTrades.map((trade, i) => (
              <TradeCard key={i} trade={trade} type="in-progress" />
            ))}
          </div>
        </section>
        <section className="flex-1">
          <h2 className="text-xl font-bold mb-4">Exited Trades</h2>
          <div className="flex flex-col gap-4">
            {exitedTrades.map((trade, i) => (
              <TradeCard key={i} trade={trade} type="exited" />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
} 