import React from 'react'
import nfts from '../components/nfts.js'
import ProductCard from './ProductCard.jsx'


function ProductCardList() {

  return (
    <>
      {nfts.map((nft, idx) => {
        return (
          <div key={idx}>
            <ProductCard
              key={nft.title}
              img={nft.img}
              title={nft.title}
              price={nft.price}
              likes={nft.likes}
              sale={nft.sale}
            />
          </div>
        )
      })}
    </>
  )
}

export default ProductCardList