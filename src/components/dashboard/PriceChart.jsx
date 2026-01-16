import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getCoinChartData, COIN_IDS } from '../../services/cryptoAPI';
import { useTheme } from '../../context/ThemeContext';

const PriceChart = ({ symbol }) => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState(7);
  const { isDark } = useTheme();

  useEffect(() => {
    const fetchChartData = async () => {
      setLoading(true);
      const coinId = COIN_IDS[symbol];
      if (coinId) {
        const data = await getCoinChartData(coinId, timeframe);
        setChartData(data);
      }
      setLoading(false);
    };

    fetchChartData();
    const interval = setInterval(fetchChartData, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [symbol, timeframe]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex gap-2 mb-4">
        {[1, 7, 30, 90].map((days) => (
          <button
            key={days}
            onClick={() => setTimeframe(days)}
            className={`px-3 py-1 rounded-lg text-sm transition-colors ${
              timeframe === days
                ? 'bg-blue-500 text-white'
                : isDark
                ? 'bg-white/5 text-white hover:bg-white/10'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {days}D
          </button>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
          <XAxis 
            dataKey="time" 
            stroke={isDark ? '#9ca3af' : '#6b7280'}
            fontSize={12}
          />
          <YAxis 
            stroke={isDark ? '#9ca3af' : '#6b7280'}
            fontSize={12}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? '#1f2937' : '#ffffff',
              border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
              borderRadius: '8px',
              color: isDark ? '#ffffff' : '#000000'
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;