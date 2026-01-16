import React from 'react';

const Transactions = ({ transactions }) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
      <div className="space-y-3">
        {transactions.map((tx, idx) => (
          <div 
            key={idx} 
            className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="font-semibold">{tx.type}</span>
              <span className={tx.type === 'Receive' ? 'text-green-400' : 'text-blue-300'}>
                {tx.amount}
              </span>
            </div>
            <div className="text-sm text-blue-300 space-y-1">
              <p>Hash: {tx.hash}</p>
              <p>To: {tx.to}</p>
              <div className="flex justify-between">
                <span>{tx.time}</span>
                <span className="text-green-400">{tx.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;