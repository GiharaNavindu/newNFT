import React from 'react';

const NFTList = ({ nfts, onEdit, onDelete }) => {
  return (
    <div className="p-5 bg-gray-800 text-gray-200">
      <h1 className="text-3xl font-semibold text-teal-400 mb-5">My Creations</h1>
      <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="text-left px-6 py-4 text-gray-400">Image</th>
            <th className="text-left px-6 py-4 text-gray-400">Description</th>
            <th className="text-left px-6 py-4 text-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {nfts.map(nft => (
            <tr key={nft._id} className="border-b border-gray-600">
              <td className="px-6 py-4">
                <img src={nft.imageUrl} alt="NFT" className="w-20 h-20 object-cover" />
              </td>
              <td className="px-6 py-4">{nft.description}</td>
              <td className="px-6 py-4">
                <button
                  className="text-sm px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 mr-2"
                  onClick={() => onEdit(nft)}
                >
                  Edit
                </button>
                <button
                  className="text-sm px-4 py-2 bg-red-600 rounded-md hover:bg-red-700"
                  onClick={() => onDelete(nft._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NFTList;
