"use client";

import { useState } from 'react';

type AddTradeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddTrade: (trade: {
    token: string;
    usdc: number;
    count: number;
    price: number;
    marketCap: string;
    date: string;
    contractAddress: string;
    dexscreenerLink: string;
  }) => void;
};

export default function AddTradeModal({ isOpen, onClose, onAddTrade }: AddTradeModalProps) {
  const [formData, setFormData] = useState({
    token: '',
    usdc: '',
    price: '',
    marketCap: '',
    date: new Date().toISOString().split('T')[0],
    contractAddress: '',
    dexscreenerLink: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Calculate token count based on USDC amount and price
    const count = Math.floor(Number(formData.usdc) / Number(formData.price));
    
    onAddTrade({
      token: formData.token.toUpperCase(),
      usdc: Number(formData.usdc),
      count,
      price: Number(formData.price),
      marketCap: formData.marketCap,
      date: formData.date,
      contractAddress: formData.contractAddress,
      dexscreenerLink: formData.dexscreenerLink,
    });
    
    // Reset form and close modal
    setFormData({
      token: '',
      usdc: '',
      price: '',
      marketCap: '',
      date: new Date().toISOString().split('T')[0],
      contractAddress: '',
      dexscreenerLink: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-background p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New Trade</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Token Symbol</label>
            <input
              type="text"
              value={formData.token}
              onChange={(e) => setFormData({ ...formData, token: e.target.value })}
              className="w-full p-2 border rounded bg-background"
              placeholder="e.g., PEPE"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Smart Contract Address</label>
            <input
              type="text"
              value={formData.contractAddress}
              onChange={(e) => setFormData({ ...formData, contractAddress: e.target.value })}
              className="w-full p-2 border rounded bg-background font-mono text-sm"
              placeholder="Enter contract address"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Link to Dexscreener Page</label>
            <input
              type="url"
              value={formData.dexscreenerLink}
              onChange={(e) => setFormData({ ...formData, dexscreenerLink: e.target.value })}
              className="w-full p-2 border rounded bg-background"
              placeholder="https://dexscreener.com/..."
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Amount Purchased (USDC)</label>
            <input
              type="number"
              value={formData.usdc}
              onChange={(e) => setFormData({ ...formData, usdc: e.target.value })}
              className="w-full p-2 border rounded bg-background"
              placeholder="e.g., 500"
              required
              min="0"
              step="0.01"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Price Entered At (USD)</label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full p-2 border rounded bg-background"
              placeholder="e.g., 0.000001"
              required
              min="0"
              step="0.000000000001"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Market Cap at Entry</label>
            <input
              type="text"
              value={formData.marketCap}
              onChange={(e) => setFormData({ ...formData, marketCap: e.target.value })}
              className="w-full p-2 border rounded bg-background"
              placeholder="e.g., $10M"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Date of Trade</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
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
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-bold"
            >
              Add Trade
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 