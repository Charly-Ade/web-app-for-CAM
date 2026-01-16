import React, { useState, useEffect } from 'react';
import { ArrowUpDown } from 'lucide-react';
import { getCurrentPrices, COIN_IDS } from '../../services/cryptoAPI';
import { useTheme } from '../../context/ThemeContext';

const SwapCoin = () => {
  const [fromCoin, setFromCoin] = useState('BTC');
  const [toCoin, setToCoin] = useState('ETH');
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [prices, setPrices] = useState({});
  const { isDark } = useTheme();

  const coins = Object.keys(COIN_IDS);

  useEffect(() => {
    const fetchPrices = async () => {
      const data = await getCurrentPrices(coins);
      const formattedPrices = {};
      Object.entries(data || {}).forEach(([id, priceData]) => {
        const symbol = Object.keys(COIN_IDS).find(key => COIN_IDS[key] === id);
        if (symbol) {
          formattedPrices[symbol] = priceData.usd;
        }
      });
      setPrices(formattedPrices);
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (fromAmount && prices[fromCoin] && prices[toCoin]) {
      const converted = (fromAmount * prices[fromCoin]) / prices[toCoin];
      setToAmount(converted.toFixed(6));
    }
  }, [fromAmount, fromCoin, toCoin, prices]);

  const handleSwap = () => {
    const tempCoin = fromCoin;
    const tempAmount = fromAmount;
    setFromCoin(toCoin);
    setToCoin(tempCoin);
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  };

  const handleSwapExecution = () => {
    alert(`Swapping ${fromAmount} ${fromCoin} for ${toAmount} ${toCoin}`);
  };

  const bgClass = isDark ? 'bg-gray-800' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const borderClass = isDark ? 'border-gray-700' : 'border-gray-300';

  return (
    <div className={`${bgClass} ${textClass} rounded-2xl p-6 shadow-xl`}>
      <h2 className="text-2xl font-bold mb-6">Swap Coins</h2>

      <div className="space-y-4">
        {/* From Section */}
        <div className={`border ${borderClass} rounded-xl p-4`}>
          <label className="text-sm opacity-70 block mb-2">From</label>
          <div className="flex gap-4">
            <select
              value={fromCoin}
              onChange={(e) => setFromCoin(e.target.value)}
              className={`${bgClass} ${textClass} border ${borderClass} rounded-lg px-3 py-2 w-32`}
            >
              {coins.map((coin) => (
                <option key={coin} value={coin}>{coin}</option>
              ))}
            </select>
            <input
              type="number"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              placeholder="0.00"
              className={`${bgClass} ${textClass} border ${borderClass} rounded-lg px-4 py-2 flex-1`}
            />
          </div>
          {prices[fromCoin] && (
            <p className="text-sm opacity-70 mt-2">
              ≈ ${(fromAmount * prices[fromCoin]).toFixed(2)} USD
            </p>
          )}
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSwap}
            className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors"
          >
            <ArrowUpDown size={20} className="text-white" />
          </button>
        </div>

        {/* To Section */}
        <div className={`border ${borderClass} rounded-xl p-4`}>
          <label className="text-sm opacity-70 block mb-2">To</label>
          <div className="flex gap-4">
            <select
              value={toCoin}
              onChange={(e) => setToCoin(e.target.value)}
              className={`${bgClass} ${textClass} border ${borderClass} rounded-lg px-3 py-2 w-32`}
            >
              {coins.map((coin) => (
                <option key={coin} value={coin}>{coin}</option>
              ))}
            </select>
            <input
              type="text"
              value={toAmount}
              readOnly
              placeholder="0.00"
              className={`${bgClass} ${textClass} border ${borderClass} rounded-lg px-4 py-2 flex-1 opacity-70`}
            />
          </div>
          {prices[toCoin] && toAmount && (
            <p className="text-sm opacity-70 mt-2">
              ≈ ${(toAmount * prices[toCoin]).toFixed(2)} USD
            </p>
          )}
        </div>

        <button
          onClick={handleSwapExecution}
          disabled={!fromAmount || !toAmount}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Swap Now
        </button>
      </div>
    </div>
  );
};

export default SwapCoin;