import React, { useState } from 'react';
import Modal from 'react-modal';

// Make sure to set the app element for accessibility
Modal.setAppElement('#root');

const EditNFTModal = ({ nft, onClose, onSubmit }) => {
  const [imageUrl, setImageUrl] = useState(nft.imageUrl);
  const [description, setDescription] = useState(nft.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...nft, imageUrl, description });
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Edit NFT"
      className="bg-gray-800 p-5 rounded-md text-gray-200"
      overlayClassName="ReactModal__Overlay"
    >
      <h2 className="text-2xl mb-4 text-teal-400">Edit NFT</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Image URL</label>
          <input
            type="text"
            className="w-full p-2 bg-gray-700 rounded-md"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Description</label>
          <textarea
            className="w-full p-2 bg-gray-700 rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-teal-600 rounded-md hover:bg-teal-700 mr-2">
          Save
        </button>
        <button type="button" className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-700" onClick={onClose}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default EditNFTModal;
