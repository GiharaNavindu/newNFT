import React from 'react';
import NFTCard from './NFTCard.jsx';
import nfts from '../../public/data/nfts.js';

function NFTCardsList() {
  return (
    <>
      {nfts.map((nft, idx) => (
        <div key={idx}>
          <NFTCard
            key={nft.title}
            img={nft.img}
            title={nft.title}
            price={nft.price}
            likes={nft.likes}
            sale={nft.sale}
          />
        </div>
      ))}
    </>
  );
}

export default NFTCardsList;
