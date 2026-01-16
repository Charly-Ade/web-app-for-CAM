import React from 'react';
import { TrendingUp } from 'lucide-react';

const BalanceCards = ({ balance, nftCount }) => {
  const totalValue = (parseFloat(balance) * 1753.82).toFixed(2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <p className="text-blue-200 text-sm mb-2">Total Balance</p>
        <p className="text-4xl font-bold mb-1">${totalValue}</p>
        <p className="text-green-400 text-sm flex items-center gap-1">
          <TrendingUp size={16} /> +12.5% this month
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <p className="text-blue-200 text-sm mb-2">ETH Balance</p>
        <p className="text-4xl font-bold mb-1">{balance} ETH</p>
        <p className="text-blue-300 text-sm">≈ ${totalValue}</p>
      </div>

      <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <p className="text-blue-200 text-sm mb-2">NFT Collections</p>
        <p className="text-4xl font-bold mb-1">{nftCount}</p>
        <p className="text-blue-300 text-sm">Total items</p>
      </div>
    </div>
  );
};

export default BalanceCards;