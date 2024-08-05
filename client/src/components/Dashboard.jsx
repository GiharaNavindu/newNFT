import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import EditOrderModal from './EditOrderModal.jsx';
import nfts from './nfts.js';

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5);
  const [hoveredOrder, setHoveredOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }

      try {
        const res = await axios.get('http://localhost:4000/api/orders', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setOrders(res.data);
      } catch (err) {
        if (err.response && err.response.status === 400 && err.response.data === 'Invalid token') {
          console.error('Invalid token:', err);
          // Optionally, handle token refresh logic here
          // handleTokenRefresh();
        } else {
          console.error('Error fetching orders:', err);
        }
      }
    };

    fetchOrders();
  }, []);

  const handleTokenRefresh = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        console.error('No refresh token found');
        return;
      }

      const res = await axios.post('http://localhost:4000/api/refresh-token', { refreshToken });
      localStorage.setItem('token', res.data.token);
      // Retry fetching orders after refreshing token
      fetchOrders();
    } catch (err) {
      console.error('Error refreshing token:', err);
    }
  };

  const handleSort = () => {
    const sortedOrders = [...orders].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.Bid - b.Bid;
      } else {
        return b.Bid - a.Bid;
      }
    });
    setOrders(sortedOrders);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMouseEnter = (order) => {
    setHoveredOrder(order);
  };

  const handleMouseLeave = () => {
    setHoveredOrder(null);
  };

  const filteredOrders = orders.filter(order => 
    order.Username.toLowerCase().includes(searchTerm.toLowerCase()) || 
    order.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.NFTTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="p-5 bg-gradient-to-b from-black to-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <input 
          type="text"
          placeholder="Search orders..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-3 rounded-lg border border-gray-600 bg-gray-800 text-white w-64 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button 
          className="text-sm px-6 py-3 bg-pink-500 text-black rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={handleSort}
        >
          Sort by Bid <FontAwesomeIcon icon={faSort} className="ml-2" /> {sortOrder === 'asc' ? '↑' : '↓'}
        </button>
      </div>
      <div className="space-y-6 custom-scrollbar" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 250px)' }}>
        <AnimatePresence>
          {currentOrders.map(order => {
            const nft = nfts.find(nft => nft.title === order.NFTTitle);
            const isHovered = hoveredOrder && hoveredOrder._id === order._id;
            return (
              <motion.div 
                key={order._id} 
                className="relative bg-black rounded-lg overflow-hidden shadow-lg flex items-center p-6 hover:bg-gray-800 transition duration-300"
                onMouseEnter={() => handleMouseEnter(order)}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {nft && (
                  <img src={nft.img} alt={nft.title} className="w-40 h-40 object-cover rounded-lg mr-6 shadow-md" />
                )}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-pink-400 mb-2">{order.NFTTitle}</h3>
                  <p className="text-gray-300 mb-1">Username: {order.Username}</p>
                  <p className="text-gray-300 mb-1">Email: {order.Email}</p>
                  <p className="text-gray-300 mb-2">Bid: <span className="text-pink-400 font-semibold">${order.Bid.toFixed(2)}</span></p>
                  {order.Bid > 100 && (
                    <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">High Bid</span>
                  )}
                </div>
                <AnimatePresence>
                  {isHovered && (
                    <motion.div 
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-l-md text-white font-bold text-8xl shadow-lg overflow-hidden"
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 100, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.span
                        className="relative inline-block"
                        initial={{ textShadow: "0 0 0px rgba(255, 255, 255, 0)" }}
                        animate={{ 
                          textShadow: [
                            "0 0 4px rgba(255, 255, 255, 0.7)",
                            "0 0 8px rgba(255, 255, 255, 0.5)",
                            "0 0 4px rgba(255, 255, 255, 0.7)"
                          ]
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 1.5, 
                          ease: "easeInOut" 
                        }}
                      >
                        {order.Username}
                      </motion.span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="flex justify-center mt-8">
        <Pagination
          ordersPerPage={ordersPerPage}
          totalOrders={filteredOrders.length}
          paginate={paginate}
          currentPage={currentPage}
        />
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

const Pagination = ({ ordersPerPage, totalOrders, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalOrders / ordersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex space-x-2">
        {pageNumbers.map(number => (
          <li key={number}>
            <button 
              onClick={() => paginate(number)} 
              className={`px-4 py-2 rounded-md transition duration-300 ease-in-out ${
                currentPage === number 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Dashboard;
