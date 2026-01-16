import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const TransferCoin = () => {
  const [transferType, setTransferType] = useState('crypto');
  const [formData, setFormData] = useState({
    coin: 'BTC',
    amount: '',
    address: '',
    bankName: '',
    accountNumber: '',
    accountName: '',
    usdAmount: ''
  });
  const { isDark } = useTheme();

  const handleSubmit = () => {
    if (transferType === 'crypto') {
      alert(`Transferring ${formData.amount} ${formData.coin} to ${formData.address}`);
    } else {
      alert(`Transferring $${formData.usdAmount} to ${formData.accountName} - ${formData.bankName}`);
    }
  };

  const bgClass = isDark ? 'bg-gray-800' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const borderClass = isDark ? 'border-gray-700' : 'border-gray-300';

  return (
    <div className={`${bgClass} ${textClass} rounded-2xl p-6 shadow-xl`}>
      <h2 className="text-2xl font-bold mb-6">Transfer Funds</h2>

      {/* Transfer Type Selector */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setTransferType('crypto')}
          className={`flex-1 py-2 rounded-lg font-semibold transition-colors ${
            transferType === 'crypto'
              ? 'bg-blue-500 text-white'
              : isDark
              ? 'bg-gray-700 text-gray-300'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Crypto Transfer
        </button>
        <button
          onClick={() => setTransferType('bank')}
          className={`flex-1 py-2 rounded-lg font-semibold transition-colors ${
            transferType === 'bank'
              ? 'bg-blue-500 text-white'
              : isDark
              ? 'bg-gray-700 text-gray-300'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Bank Transfer
        </button>
      </div>

      {/* Crypto Transfer Form */}
      {transferType === 'crypto' ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Select Coin</label>
            <select
              value={formData.coin}
              onChange={(e) => setFormData({ ...formData, coin: e.target.value })}
              className={`w-full ${bgClass} ${textClass} border ${borderClass} rounded-lg px-4 py-3`}
            >
              <option value="BTC">Bitcoin (BTC)</option>
              <option value="ETH">Ethereum (ETH)</option>
              <option value="USDT">Tether (USDT)</option>
              <option value="USDC">USD Coin (USDC)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-2">Amount</label>
            <input
              type="number"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              placeholder="0.00"
              className={`w-full ${bgClass} ${textClass} border ${borderClass} rounded-lg px-4 py-3`}
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Recipient Address</label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="0x..."
              className={`w-full ${bgClass} ${textClass} border ${borderClass} rounded-lg px-4 py-3`}
            />
          </div>
        </div>
      ) : (
        /* Bank Transfer Form */
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Amount (USD)</label>
            <input
              type="number"
              value={formData.usdAmount}
              onChange={(e) => setFormData({ ...formData, usdAmount: e.target.value })}
              placeholder="0.00"
              className={`w-full ${bgClass} ${textClass} border ${borderClass} rounded-lg px-4 py-3`}
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Bank Name</label>
            <input
              type="text"
              value={formData.bankName}
              onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
              placeholder="Bank of America"
              className={`w-full ${bgClass} ${textClass} border ${borderClass} rounded-lg px-4 py-3`}
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Account Number</label>
            <input
              type="text"
              value={formData.accountNumber}
              onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
              placeholder="1234567890"
              className={`w-full ${bgClass} ${textClass} border ${borderClass} rounded-lg px-4 py-3`}
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Account Name</label>
            <input
              type="text"
              value={formData.accountName}
              onChange={(e) => setFormData({ ...formData, accountName: e.target.value })}
              placeholder="John Doe"
              className={`w-full ${bgClass} ${textClass} border ${borderClass} rounded-lg px-4 py-3`}
            />
          </div>
        </div>
      )}

      <button
        onClick={handleSubmit}
        className="w-full mt-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
      >
        <Send size={20} />
        Transfer Now
      </button>
    </div>
  );
};

export default TransferCoin;