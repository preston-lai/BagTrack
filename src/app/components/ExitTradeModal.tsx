"use client";

import { useState } from 'react';

type ExitTradeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onExitTrade: (exitDetails: {
    exitPrice: number;
    exitMarketCap: string;
    exitDate: string;
  }) => void;
  trade: {
    usdc: number;
    price: number;
  };
};

export default function ExitTradeModal({ isOpen, onClose, onExitTrade, trade }: ExitTradeModalProps) {
  const [formData, setFormData] = useState({
    exitPrice: '',
    exitMarketCap: '',
    exitDate: new Date().toISOString().split('T')[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onExitTrade({
      exitPrice: Number(formData.exitPrice),
      exitMarketCap: formData.exitMarketCap,
      exitDate: formData.exitDate,
    });
    
    // Reset form and close modal
    setFormData({
      exitPrice: '',
      exitMarketCap: '',
      exitDate: new Date().toISOString().split('T')[0],
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-background p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Exit Trade</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Exit Price (USDC)</label>
            <input
              type="number"
              value={formData.exitPrice}
              onChange={(e) => setFormData({ ...formData, exitPrice: e.target.value })}
              className="w-full p-2 border rounded bg-background"
              placeholder="e.g., 0.000003"
              required
              min="0"
              step="0.000000000001"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Market Cap at Exit</label>
            <input
              type="text"
              value={formData.exitMarketCap}
              onChange={(e) => setFormData({ ...formData, exitMarketCap: e.target.value })}
              className="w-full p-2 border rounded bg-background"
              placeholder="e.g., $20M"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Exit Date</label>
            <input
              type="date"
              value={formData.exitDate}
              onChange={(e) => setFormData({ ...formData, exitDate: e.target.value })}
              className="w-full p-2 border rounded bg-background"
              required
            />
          </div>
          
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition font-bold"
            >
              Exit Trade
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 