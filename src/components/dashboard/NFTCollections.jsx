import React from 'react';

const NFTCollections = () => {
  const nfts = [
    { id: 1, name: 'NFT #1', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'NFT #2', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">NFT Collection</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {nfts.map((nft) => (
          <div key={nft.id} className="border rounded-lg p-2">
            <img src={nft.image} alt={nft.name} className="w-full rounded" />
            <p className="text-sm mt-2 text-center">{nft.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTCollections;