import React from 'react';

const TokenBalances = ({ tokens }) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 mb-8">
      <h2 className="text-2xl font-bold mb-4">Token Balances</h2>
      <div className="space-y-4">
        {tokens.map((token, idx) => (
          <div 
            key={idx} 
            className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center font-bold">
                {token.symbol[0]}
              </div>
              <div>
                <p className="font-semibold">{token.name}</p>
                <p className="text-sm text-blue-300">{token.symbol}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">{token.balance}</p>
              <p className="text-sm text-blue-300">{token.value}</p>
              <p className={`text-sm ${token.positive ? 'text-green-400' : 'text-red-400'}`}>
                {token.change}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenBalances;