


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import EditOrderModal from './EditOrderModal.jsx';
import nfts from '../../public/data/nfts.js';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const location = useLocation();
  const { username } = location.state; 

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from localStorage
        const response = await axios.get(`http://localhost:4000/api/orders/username/${username}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(response.data);
        setFilteredOrders(response.data); // Initialize filteredOrders with all orders
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [username]);

  useEffect(() => {
    // Filter orders based on searchTerm
    const filtered = orders.filter(order =>
      order.NFTTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOrders(filtered);
  }, [searchTerm, orders]);

  const handleEdit = (order) => {
    setSelectedOrder(order);
    setIsEditModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token'); // Get token from localStorage
      await axios.delete(`http://localhost:4000/api/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrders(orders.filter(order => order._id !== id));
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  const handleEditSubmit = async (updatedOrder) => {
    try {
      const token = localStorage.getItem('token'); // Get token from localStorage
      const response = await axios.put(`http://localhost:4000/api/orders/${updatedOrder._id}`, updatedOrder, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrders(orders.map(order => (order._id === response.data._id ? response.data : order)));
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="p-5">
      {/* <h1 className="text-3xl font-semibold text-teal-400 mb-5">Orders</h1> */}

      <div className="mb-4">
        <input
          type="text"
          className="px-4 py-2 w-full bg-gray-700 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring focus:border-teal-400"
          placeholder="Search by NFT Title"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredOrders.map(order => (
          <div key={order._id} className="w-64 h-70 flex group flex-col space-y-3 rounded-2xl overflow-hidden border border-slate-400/10 hover:border-pink-500/50 pb-6 hover:shadow-2xl hover:shadow-pink-500/20 duration-300 ease-in-out hover:scale-105 relative bg-gradient-to-b from-gray-900 to-black p-4">
            <div className="flex flex-col flex-1">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-pink-400">{order.NFTTitle}</h2>
              </div>
              <img
                src={nfts.find(nft => nft.title === order.NFTTitle)?.img}
                alt={order.NFTTitle}
                className="w-full h-40 object-cover p-2 rounded-lg transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="mt-4 text-gray-400 space-y-2">
                <p>Full Name: {order.Username}</p>
                <p>Email: {order.Email}</p>
                <p>Bid: ${order.Bid}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <button
                className="text-sm px-4 py-2 bg-pink-600 rounded-md hover:bg-pink-700"
                onClick={() => handleEdit(order)}
              >
                Edit
              </button>
              <button
                className="text-sm px-4 py-2 bg-red-600 rounded-md hover:bg-red-700"
                onClick={() => handleDelete(order._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isEditModalOpen && (
        <EditOrderModal
          order={selectedOrder}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
};

export default Orders;
