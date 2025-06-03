"use client";

import { useState } from 'react';
import ExitTradeModal from './ExitTradeModal';
import EditTradeModal from './EditTradeModal';

type Trade = {
  token: string;
  usdc: number;
  count: number;
  price: number;
  marketCap: string;
  date: string;
  contractAddress: string;
  dexscreenerLink: string;
  exitPrice?: number;
  exitDate?: string;
  pl?: string;
};

type TradeCardProps = {
  trade: Trade;
  type: 'in-progress' | 'exited';
  onExitTrade?: (exitDetails: {
    exitPrice: number;
    exitMarketCap: string;
    exitDate: string;
  }) => void;
  onEditTrade?: (updatedTrade: Trade) => void;
};

export default function TradeCard({ trade, type, onExitTrade, onEditTrade }: TradeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleExitClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card expansion when clicking exit button
    setIsExitModalOpen(true);
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card expansion when clicking edit button
    setIsEditModalOpen(true);
  };

  // Function to format large numbers with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  // Function to truncate contract address
  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <>
      <div className="bg-card border border-white rounded-lg p-6 shadow flex flex-col gap-2 cursor-pointer" onClick={toggleExpanded}>
        {/* Minimal View */}
        <div className="flex items-center justify-between">
          {/* Left Side */}
          <div className="flex flex-col">
            <div className="text-lg font-bold">{trade.token}</div>
            {type === 'in-progress' ? (
              <div className="text-xs text-muted-foreground">{trade.date}</div>
            ) : (
              <div className="text-xs text-muted-foreground">{trade.exitDate}</div>
            )}
          </div>
          {/* Right Side */}
          {type === 'in-progress' ? (
            <div className="flex flex-col items-end text-sm">
              <span className="text-lg font-bold">{formatNumber(trade.count)} {trade.token} at ${trade.price}</span>
              <span className="font-semibold">${trade.usdc}</span>
            </div>
          ) : (
            <div className="flex flex-col items-end">
              <span className={`text-lg font-bold ${trade.pl?.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                P/L: {trade.pl}
              </span>
            </div>
          )}
        </div>

        {/* Expanded Details (Conditional) */}
        {isExpanded && type === 'in-progress' && (
          <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2">
            <div className="text-sm">Amount Purchased: <span className="font-semibold">${trade.usdc}</span></div>
            <div className="text-sm">Price Entered At: <span className="font-semibold">${trade.price}</span></div>
            <div className="text-sm">Market Cap at Entry: <span className="font-semibold">{trade.marketCap}</span></div>
            <div className="text-sm">Date of Trade: <span className="font-semibold">{trade.date}</span></div>
            <div className="text-sm">Contract Address: <span className="font-mono text-xs">{truncateAddress(trade.contractAddress)}</span></div>
            <div className="text-sm">
              <a 
                href={trade.dexscreenerLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:text-blue-600 hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                View on Dexscreener
              </a>
            </div>
            {type === 'in-progress' && onExitTrade && onEditTrade && (
              <div className="flex gap-2 mt-4">
                <button 
                  onClick={handleEditClick}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition font-bold"
                >
                  Edit Trade
                </button>
                <button 
                  onClick={handleExitClick}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition font-bold"
                >
                  Exit Trade
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {type === 'in-progress' && onExitTrade && (
        <ExitTradeModal
          isOpen={isExitModalOpen}
          onClose={() => setIsExitModalOpen(false)}
          onExitTrade={onExitTrade}
          trade={trade}
        />
      )}

      {type === 'in-progress' && onEditTrade && (
        <EditTradeModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSaveChanges={onEditTrade}
          trade={trade}
        />
      )}
    </>
  );
}