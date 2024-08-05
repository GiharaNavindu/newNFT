import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NFTForm from './NFTForm';
import NFTList from './NFTList';
import EditNFTModal from './EditNFTModal';

const NFTSubmission = () => {
  const [nfts, setNfts] = useState([]);
  const [editingNft, setEditingNft] = useState(null);

  useEffect(() => {
    const fetchNFTs = async () => {
      const token = localStorage.getItem('token');

      try {
        const res = await axios.get('http://localhost:4000/api/nfts', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setNfts(res.data);
      } catch (err) {
        console.error('Error fetching NFTs:', err);
      }
    };

    fetchNFTs();
  }, []);

  const handleCreate = (newNft) => {
    setNfts([...nfts, newNft]);
  };

  const handleEdit = (nft) => {
    setEditingNft(nft);
  };

  const handleUpdate = async (updatedNft) => {
    const token = localStorage.getItem('token');

    try {
      const res = await axios.put(`http://localhost:4000/api/nfts/${updatedNft._id}`, updatedNft, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setNfts(nfts.map((nft) => (nft._id === updatedNft._id ? res.data : nft)));
      setEditingNft(null);
    } catch (err) {
      console.error('Error updating NFT:', err);
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');

    try {
      await axios.delete(`http://localhost:4000/api/nfts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNfts(nfts.filter((nft) => nft._id !== id));
    } catch (err) {
      console.error('Error deleting NFT:', err);
    }
  };

  return (
    <div className="container mx-auto p-5 bg-gray-900 text-gray-200">
      <NFTForm onSubmit={handleCreate} />
      <NFTList nfts={nfts} onEdit={handleEdit} onDelete={handleDelete} />
      {editingNft && (
        <EditNFTModal nft={editingNft} onClose={() => setEditingNft(null)} onSubmit={handleUpdate} />
      )}
    </div>
  );
};

export default NFTSubmission;
