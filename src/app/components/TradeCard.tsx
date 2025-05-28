"use client";

import { useState } from 'react';

type Trade = {
  token: string;
  usdc: number;
  count: number;
  price: number;
  marketCap: string;
  date: string;
  exitPrice?: number;
  exitDate?: string;
  pl?: string;
};

type TradeCardProps = {
  trade: Trade;
  type: 'in-progress' | 'exited';
};

export default function TradeCard({ trade, type }: TradeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to format large numbers with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="bg-card border border-white rounded-lg p-6 shadow flex flex-col gap-2 cursor-pointer" onClick={toggleExpanded}>
      {/* Minimal View */}
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-2 text-lg font-bold">
          {trade.token}
        </div>
        {/* Right Side */}
        <div className="flex flex-col items-end text-sm">
          <span className="text-lg font-bold">{formatNumber(trade.count)} {trade.token} at ${trade.price}</span>
          <span className="font-semibold">${trade.usdc}</span>
        </div>
      </div>

      {/* Expanded Details (Conditional) */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2">
          <div className="text-sm">Amount Purchased: <span className="font-semibold">${trade.usdc}</span></div>
          <div className="text-sm">Price Entered At: <span className="font-semibold">${trade.price}</span></div>
          <div className="text-sm">Market Cap at Entry: <span className="font-semibold">{trade.marketCap}</span></div>
          <div className="text-sm">Date of Trade: <span className="font-semibold">{trade.date}</span></div>
          {type === 'exited' && (
            <>
              <div className="text-sm">Exit Price: <span className="font-semibold">${trade.exitPrice}</span></div>
              <div className="text-sm">Exit Date: <span className="font-semibold">{trade.exitDate}</span></div>
              <div className="text-sm">P/L: <span className={trade.pl?.startsWith('+') ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>{trade.pl}</span></div>
            </>
          )}
          {type === 'in-progress' && (
             <button className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-gray-100 transition w-fit">Exit Trade</button>
          )}
        </div>
      )}
      
    </div>
  );
}