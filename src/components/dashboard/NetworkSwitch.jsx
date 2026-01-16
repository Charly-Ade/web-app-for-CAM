import React from 'react';

const NetworkSwitch = ({ network }) => {
  const getNetworkName = (chainId) => {
    const networks = {
      '0x1': 'Ethereum Mainnet',
      '0x5': 'Goerli Testnet',
      '0x89': 'Polygon Mainnet',
      '0x13881': 'Mumbai Testnet'
    };
    return networks[chainId] || 'Unknown Network';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Network</h3>
      <p className="text-gray-700">
        {network ? getNetworkName(network) : 'Not Connected'}
      </p>
    </div>
  );
};

export default NetworkSwitch;