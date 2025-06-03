"use client";

import { useState } from 'react';
import Navbar from "../components/Navbar";
import StatsBar from "../components/StatsBar";
import TradeCard from "../components/TradeCard";
import AddTradeModal from "../components/AddTradeModal";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inProgressTrades, setInProgressTrades] = useState<any[]>([]);
  const [exitedTrades, setExitedTrades] = useState<any[]>([]);

  const handleAddTrade = (newTrade: any) => {
    setInProgressTrades([newTrade, ...inProgressTrades]);
  };

  const handleExitTrade = (tradeIndex: number, exitDetails: {
    exitPrice: number;
    exitMarketCap: string;
    exitDate: string;
  }) => {
    const trade = inProgressTrades[tradeIndex];
    
    // Calculate P/L
    const plAmount = (exitDetails.exitPrice - trade.price) * trade.count;
    const plFormatted = `${plAmount >= 0 ? '+' : ''}$${Math.abs(plAmount).toFixed(2)}`;
    
    // Create exited trade object
    const exitedTrade = {
      ...trade,
      exitPrice: exitDetails.exitPrice,
      exitMarketCap: exitDetails.exitMarketCap,
      exitDate: exitDetails.exitDate,
      pl: plFormatted
    };
    
    // Update trades
    setExitedTrades([exitedTrade, ...exitedTrades]);
    setInProgressTrades(inProgressTrades.filter((_, index) => index !== tradeIndex));
  };

  const handleEditTrade = (tradeIndex: number, updatedTrade: any) => {
    const newInProgressTrades = [...inProgressTrades];
    newInProgressTrades[tradeIndex] = updatedTrade;
    setInProgressTrades(newInProgressTrades);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar showFeaturesLink={false} />
      <StatsBar totalInvested={800} totalPL={300} totalPLPercent={37.5} portfolioValue={1100} />
      <main className="flex-1 px-8 py-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* In-Progress Trades Section */}
          <section className="bg-background border border-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">In-Progress Trades</h2>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-bold"
              >
                Add Trade
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {inProgressTrades.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No in-progress trades. Click "Add Trade" to get started.
                </div>
              ) : (
                inProgressTrades.map((trade, i) => (
                  <TradeCard 
                    key={i} 
                    trade={trade} 
                    type="in-progress"
                    onExitTrade={(exitDetails) => handleExitTrade(i, exitDetails)}
                    onEditTrade={(updatedTrade) => handleEditTrade(i, updatedTrade)}
                  />
                ))
              )}
            </div>
          </section>

          {/* Exited Trades Section */}
          <section className="bg-background border border-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6">Exited Trades</h2>
            <div className="flex flex-col gap-4">
              {exitedTrades.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No exited trades yet.
                </div>
              ) : (
                exitedTrades.map((trade, i) => (
                  <TradeCard key={i} trade={trade} type="exited" />
                ))
              )}
            </div>
          </section>
        </div>
      </main>

      <AddTradeModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTrade={handleAddTrade}
      />
    </div>
  );
} 