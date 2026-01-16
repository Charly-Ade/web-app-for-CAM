import React from 'react';

const WalletConnect = ({ account, connectWallet, disconnectWallet }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Wallet Connection</h3>
      {account ? (
        <div>
          <p className="text-sm text-gray-600 mb-2">Connected Account:</p>
          <p className="font-mono text-sm bg-gray-100 p-2 rounded mb-4">
            {account.slice(0, 6)}...{account.slice(-4)}
          </p>
          <button
            onClick={disconnectWallet}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnect;