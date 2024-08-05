// src/components/EditOrderModal.jsx

import React, { useState } from 'react';
import Modal from 'react-modal';

const EditOrderModal = ({ order, onClose, onSubmit }) => {
  const [userName, setUserName] = useState(order.Username);
  const [email, setEmail] = useState(order.Email);
  const [bid, setBid] = useState(order.Bid);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...order, Username: userName, Email: email, Bid: bid });
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Edit Order"
      className="bg-gray-800 text-gray-200 p-5 rounded-lg max-w-lg mx-auto my-20"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <h2 className="text-2xl font-semibold text-teal-400 mb-4">Edit Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            className="w-full p-2 bg-gray-700 rounded-md"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 bg-gray-700 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Bid</label>
          <input
            type="number"
            className="w-full p-2 bg-gray-700 rounded-md"
            value={bid}
            onChange={(e) => setBid(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-700"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-teal-600 rounded-md hover:bg-teal-700"
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditOrderModal;
