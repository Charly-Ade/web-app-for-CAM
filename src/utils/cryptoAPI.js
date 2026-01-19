// Fetch live crypto prices from CoinGecko (FREE)
export const fetchCryptoPrices = async () => {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,solana&vs_currencies=usd&include_24hr_change=true'
    );
    const data = await response.json();
    
    return {
      bitcoin: {
        price: data.bitcoin.usd,
        change: data.bitcoin.usd_24h_change
      },
      ethereum: {
        price: data.ethereum.usd,
        change: data.ethereum.usd_24h_change
      },
      tether: {
        price: data.tether.usd,
        change: data.tether.usd_24h_change
      },
      solana: {
        price: data.solana.usd,
        change: data.solana.usd_24h_change
      }
    };
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    return null;
  }
};