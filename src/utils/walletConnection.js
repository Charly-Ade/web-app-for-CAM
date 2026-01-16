import Web3 from 'web3';

// Check if MetaMask is installed
export const checkIfWalletIsConnected = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      });
      if (accounts.length > 0) {
        return {
          isConnected: true,
          account: accounts[0],
          web3: new Web3(window.ethereum),
        };
      }
      return { isConnected: false, account: null, web3: null };
    } catch (error) {
      console.error('Error checking wallet connection:', error);
      return { isConnected: false, account: null, web3: null };
    }
  }
  return { isConnected: false, account: null, web3: null };
};

// Connect wallet function
export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      
      const web3 = new Web3(window.ethereum);
      const chainId = await web3.eth.getChainId();
      
      return {
        success: true,
        account: accounts[0],
        web3: web3,
        chainId: chainId,
      };
    } catch (error) {
      console.error('Error connecting wallet:', error);
      return { success: false, error: error.message };
    }
  } else {
    return { 
      success: false, 
      error: 'Please install MetaMask or another Web3 wallet' 
    };
  }
};

// Disconnect wallet
export const disconnectWallet = () => {
  // Note: MetaMask doesn't have a disconnect method
  // We just clear local state
  return { success: true };
};

// Switch network
export const switchNetwork = async (chainId) => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      });
      return { success: true };
    } catch (switchError) {
      // If the network hasn't been added to MetaMask
      if (switchError.code === 4902) {
        try {
          await addNetwork(chainId);
          return { success: true };
        } catch (addError) {
          console.error('Error adding network:', addError);
          return { success: false, error: addError.message };
        }
      }
      return { success: false, error: switchError.message };
    }
  }
  return { success: false, error: 'Wallet not connected' };
};

// Add network to MetaMask
const addNetwork = async (chainId) => {
  const networks = {
    1: {
      chainId: '0x1',
      chainName: 'Ethereum Mainnet',
      nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://mainnet.infura.io/v3/'],
      blockExplorerUrls: ['https://etherscan.io'],
    },
    137: {
      chainId: '0x89',
      chainName: 'Polygon Mainnet',
      nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18,
      },
      rpcUrls: ['https://polygon-rpc.com'],
      blockExplorerUrls: ['https://polygonscan.com'],
    },
  };

  const networkConfig = networks[chainId];
  if (!networkConfig) {
    throw new Error('Network not supported');
  }

  await window.ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [networkConfig],
  });
};

// Setup wallet listeners
export const setupWalletListeners = (callbacks = {}) => {
  if (!window.ethereum) return;

  const { onAccountsChanged, onChainChanged, onDisconnect } = callbacks;

  // Account changed
  window.ethereum.on('accountsChanged', (accounts) => {
    if (accounts.length === 0) {
      if (onDisconnect) onDisconnect();
    } else if (onAccountsChanged) {
      onAccountsChanged(accounts[0]);
    }
  });

  // Chain changed
  window.ethereum.on('chainChanged', () => {
    window.location.reload(); // Reload page on network change
    if (onChainChanged) onChainChanged();
  });

  // Disconnect
  window.ethereum.on('disconnect', (error) => {
    console.error('Wallet disconnected:', error);
    if (onDisconnect) onDisconnect();
  });

  // Return cleanup function
  return () => {
    if (window.ethereum.removeListener) {
      window.ethereum.removeListener('accountsChanged', onAccountsChanged);
      window.ethereum.removeListener('chainChanged', onChainChanged);
      window.ethereum.removeListener('disconnect', onDisconnect);
    }
  };
};

// Get wallet balance
export const getWalletBalance = async (web3, account) => {
  if (!web3 || !account) return '0';

  try {
    const balanceWei = await web3.eth.getBalance(account);
    const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
    return parseFloat(balanceEth).toFixed(4);
  } catch (error) {
    console.error('Error getting balance:', error);
    return '0';
  }
};

// Format address for display
export const formatAddress = (address) => {
  if (!address) return '';
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
};

// Copy to clipboard
export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert('Address copied to clipboard!');
    })
    .catch(err => {
      console.error('Failed to copy:', err);
    });
};

// Get network name by chainId
export const getNetworkName = (chainId) => {
  const networks = {
    1: 'Ethereum',
    3: 'Ropsten',
    4: 'Rinkeby',
    5: 'Goerli',
    42: 'Kovan',
    56: 'Binance Smart Chain',
    137: 'Polygon',
    80001: 'Mumbai',
    42161: 'Arbitrum',
    10: 'Optimism',
  };
  return networks[chainId] || `Unknown Network (${chainId})`;
};

// Get network color by chainId
export const getNetworkColor = (chainId) => {
  const colors = {
    1: '#627eea', // Ethereum blue
    137: '#8247e5', // Polygon purple
    56: '#f0b90b', // BSC yellow
    42161: '#28a0f0', // Arbitrum blue
    10: '#ff0420', // Optimism red
  };
  return colors[chainId] || '#666666';
};