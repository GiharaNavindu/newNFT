import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NFT = () => {
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:4000/api/nfts', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setNFTs(response.data);
      } catch (error) {
        console.error('Error fetching NFTs:', error);
      }
    };

    fetchNFTs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:4000/api/nfts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setNFTs(nfts.filter(nft => nft._id !== id));
    } catch (error) {
      console.error('Error deleting NFT:', error);
    }
  };

  return (
    <div>
      <h1>NFTs</h1>
      <div>
        {nfts.map(nft => (
          <div key={nft._id}>
            <img src={nft.imageUrl} alt={nft.title} />
            <p>{nft.title}</p>
            {/* Edit and Delete buttons */}
            <button onClick={() => handleDelete(nft._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFT;
