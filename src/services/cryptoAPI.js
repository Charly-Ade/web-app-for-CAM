import axios from 'axios';

// Using CoinGecko API (Free, no API key required)
const BASE_URL = 'https://api.coingecko.com/api/v3';

// Coin ID mapping
const COIN_IDS = {
  BTC: 'bitcoin',
  ETH: 'ethereum',
  BNB: 'binancecoin',
  ADA: 'cardano',
  SOL: 'solana',
  XRP: 'ripple',
  DOT: 'polkadot',
  DOGE: 'dogecoin',
  LTC: 'litecoin',
  MATIC: 'matic-network',
  LINK: 'chainlink',
  AVAX: 'avalanche-2',
  UNI: 'uniswap',
  USDC: 'usd-coin',
  USDT: 'tether',
  ATOM: 'cosmos',
  XLM: 'stellar',
  TRX: 'tron'
};

// Get current prices for multiple coins
export const getCurrentPrices = async (symbols) => {
  try {
    const ids = symbols.map(symbol => COIN_IDS[symbol]).filter(Boolean).join(',');
    const response = await axios.get(`${BASE_URL}/simple/price`, {
      params: {
        ids,
        vs_currencies: 'usd',
        include_24hr_change: true,
        include_24hr_vol: true,
        include_market_cap: true
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching prices:', error);
    return null;
  }
};

// Get historical chart data for a coin (7 days)
export const getCoinChartData = async (coinId, days = 7) => {
  try {
    const response = await axios.get(`${BASE_URL}/coins/${coinId}/market_chart`, {
      params: {
        vs_currency: 'usd',
        days: days,
        interval: days === 1 ? 'hourly' : 'daily'
      }
    });
    return response.data.prices.map(([timestamp, price]) => ({
      time: new Date(timestamp).toLocaleDateString(),
      price: price.toFixed(2)
    }));
  } catch (error) {
    console.error('Error fetching chart data:', error);
    return [];
  }
};

// Get trending coins
export const getTrendingCoins = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/search/trending`);
    return response.data.coins;
  } catch (error) {
    console.error('Error fetching trending coins:', error);
    return [];
  }
};

// Get coin details
export const getCoinDetails = async (coinId) => {
  try {
    const response = await axios.get(`${BASE_URL}/coins/${coinId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching coin details:', error);
    return null;
  }
};

export { COIN_IDS };