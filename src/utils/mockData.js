export const tokens = [
  { 
    name: 'Bitcoin', 
    symbol: 'BTC', 
    balance: '0.3456', 
    value: '$14,892.45', 
    change: '+3.8%', 
    positive: true,
    color: 'from-orange-400 to-yellow-500',
    logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png'
  },
  { 
    name: 'Ethereum', 
    symbol: 'ETH', 
    balance: '2.5847', 
    value: '$4,532.18', 
    change: '+5.2%', 
    positive: true,
    color: 'from-blue-400 to-purple-500',
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png'
  },
  { 
    name: 'Binance Coin', 
    symbol: 'BNB', 
    balance: '8.234', 
    value: '$2,456.78', 
    change: '+2.1%', 
    positive: true,
    color: 'from-yellow-400 to-orange-500',
    logo: 'https://cryptologos.cc/logos/bnb-bnb-logo.png'
  },
  { 
    name: 'Cardano', 
    symbol: 'ADA', 
    balance: '1,234.56', 
    value: '$987.65', 
    change: '+1.5%', 
    positive: true,
    color: 'from-blue-500 to-cyan-500',
    logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png'
  },
  { 
    name: 'Solana', 
    symbol: 'SOL', 
    balance: '45.67', 
    value: '$3,234.56', 
    change: '+7.3%', 
    positive: true,
    color: 'from-purple-400 to-pink-500',
    logo: 'https://cryptologos.cc/logos/solana-sol-logo.png'
  },
  { 
    name: 'Ripple', 
    symbol: 'XRP', 
    balance: '2,345.67', 
    value: '$1,456.78', 
    change: '-1.2%', 
    positive: false,
    color: 'from-gray-400 to-blue-500',
    logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.png'
  },
  { 
    name: 'Polkadot', 
    symbol: 'DOT', 
    balance: '156.78', 
    value: '$876.54', 
    change: '+4.5%', 
    positive: true,
    color: 'from-pink-400 to-rose-500',
    logo: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png'
  },
  { 
    name: 'Dogecoin', 
    symbol: 'DOGE', 
    balance: '12,345.00', 
    value: '$987.60', 
    change: '+12.8%', 
    positive: true,
    color: 'from-yellow-400 to-amber-500',
    logo: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png'
  },
  { 
    name: 'Litecoin', 
    symbol: 'LTC', 
    balance: '23.45', 
    value: '$1,234.56', 
    change: '+2.7%', 
    positive: true,
    color: 'from-gray-300 to-gray-500',
    logo: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png'
  },
  { 
    name: 'Polygon', 
    symbol: 'MATIC', 
    balance: '567.89', 
    value: '$456.78', 
    change: '+3.4%', 
    positive: true,
    color: 'from-purple-500 to-indigo-500',
    logo: 'https://cryptologos.cc/logos/polygon-matic-logo.png'
  },
  { 
    name: 'Chainlink', 
    symbol: 'LINK', 
    balance: '45.32', 
    value: '$678.90', 
    change: '-2.3%', 
    positive: false,
    color: 'from-blue-400 to-cyan-500',
    logo: 'https://cryptologos.cc/logos/chainlink-link-logo.png'
  },
  { 
    name: 'Avalanche', 
    symbol: 'AVAX', 
    balance: '34.56', 
    value: '$876.54', 
    change: '+5.6%', 
    positive: true,
    color: 'from-red-400 to-rose-500',
    logo: 'https://cryptologos.cc/logos/avalanche-avax-logo.png'
  },
  { 
    name: 'Uniswap', 
    symbol: 'UNI', 
    balance: '89.12', 
    value: '$534.67', 
    change: '+1.8%', 
    positive: true,
    color: 'from-pink-400 to-purple-500',
    logo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png'
  },
  { 
    name: 'USD Coin', 
    symbol: 'USDC', 
    balance: '1,250.00', 
    value: '$1,250.00', 
    change: '+0.1%', 
    positive: true,
    color: 'from-blue-400 to-cyan-400',
    logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png'
  },
  { 
    name: 'Tether', 
    symbol: 'USDT', 
    balance: '2,500.00', 
    value: '$2,500.00', 
    change: '0.0%', 
    positive: true,
    color: 'from-green-400 to-emerald-500',
    logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png'
  },
  { 
    name: 'Cosmos', 
    symbol: 'ATOM', 
    balance: '67.89', 
    value: '$456.78', 
    change: '+2.9%', 
    positive: true,
    color: 'from-indigo-400 to-purple-500',
    logo: 'https://cryptologos.cc/logos/cosmos-atom-logo.png'
  },
  { 
    name: 'Stellar', 
    symbol: 'XLM', 
    balance: '3,456.78', 
    value: '$345.67', 
    change: '-0.8%', 
    positive: false,
    color: 'from-gray-400 to-slate-500',
    logo: 'https://cryptologos.cc/logos/stellar-xlm-logo.png'
  },
  { 
    name: 'Tron', 
    symbol: 'TRX', 
    balance: '5,678.90', 
    value: '$567.89', 
    change: '+1.2%', 
    positive: true,
    color: 'from-red-400 to-pink-500',
    logo: 'https://cryptologos.cc/logos/tron-trx-logo.png'
  },
];

export const transactions = [
  { 
    hash: '0x1a2b3c...', 
    type: 'Send', 
    amount: '-0.5 ETH', 
    to: '0x742d...', 
    time: '2 mins ago', 
    status: 'Success' 
  },
  { 
    hash: '0x4d5e6f...', 
    type: 'Receive', 
    amount: '+1.2 ETH', 
    to: '0x8f9a...', 
    time: '1 hour ago', 
    status: 'Success' 
  },
  { 
    hash: '0x2b3c4d...', 
    type: 'Receive', 
    amount: '+0.0234 BTC', 
    to: '0x3c4d...', 
    time: '2 hours ago', 
    status: 'Success' 
  },
  { 
    hash: '0x7g8h9i...', 
    type: 'Send', 
    amount: '-0.3 ETH', 
    to: '0x1b2c...', 
    time: '3 hours ago', 
    status: 'Success' 
  },
  { 
    hash: '0x5e6f7g...', 
    type: 'Swap', 
    amount: '2.5 BNB', 
    to: '125 MATIC', 
    time: '5 hours ago', 
    status: 'Success' 
  },
  { 
    hash: '0xjk1l2m...', 
    type: 'Swap', 
    amount: '100 USDC', 
    to: '0.048 ETH', 
    time: '1 day ago', 
    status: 'Success' 
  },
  { 
    hash: '0x9h8i7j...', 
    type: 'Send', 
    amount: '-5.6 SOL', 
    to: '0x9i8j...', 
    time: '1 day ago', 
    status: 'Success' 
  },
  { 
    hash: '0x3d4e5f...', 
    type: 'Receive', 
    amount: '+250 ADA', 
    to: '0x4e5f...', 
    time: '2 days ago', 
    status: 'Success' 
  },
];

export const nfts = [
  { 
    name: 'Bored Ape #1234', 
    collection: 'BAYC', 
    image: '🎨' 
  },
  { 
    name: 'CryptoPunk #5678', 
    collection: 'Punks', 
    image: '👾' 
  },
  { 
    name: 'Azuki #9012', 
    collection: 'Azuki', 
    image: '🎭' 
  },
  { 
    name: 'Doodle #3456', 
    collection: 'Doodles', 
    image: '🎪' 
  },
  { 
    name: 'Cool Cat #7890', 
    collection: 'Cool Cats', 
    image: '😺' 
  },
  { 
    name: 'Moonbird #2345', 
    collection: 'Moonbirds', 
    image: '🦉' 
  },
];