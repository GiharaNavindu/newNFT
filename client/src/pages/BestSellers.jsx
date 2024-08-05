





import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { AiFillCrown, AiOutlineArrowRight } from 'react-icons/ai';
import { BsNewspaper } from 'react-icons/bs';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// CryptoInfo component
const CryptoInfo = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const generateRandomPrice = (basePrice) => {
      const change = (Math.random() - 0.5) * 100;
      return basePrice + change;
    };

    const generateInitialData = () => {
      return [
        { name: 'Bitcoin', price: 50000, data: Array(10).fill().map(() => ({ price: generateRandomPrice(50000) })) },
        { name: 'Ethereum', price: 3000, data: Array(10).fill().map(() => ({ price: generateRandomPrice(3000) })) },
      ];
    };

    setCryptoData(generateInitialData());

    const interval = setInterval(() => {
      setCryptoData(prevData => 
        prevData.map(crypto => ({
          ...crypto,
          price: generateRandomPrice(crypto.price),
          data: [...crypto.data.slice(1), { price: generateRandomPrice(crypto.price) }]
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getCryptoIcon = (name) => {
    switch (name) {
      case 'Bitcoin': return <FaBitcoin className="text-yellow-500" />;
      case 'Ethereum': return <FaEthereum className="text-blue-400" />;
      case 'Solana': return <SiSolana className="text-purple-500" />;
      default: return null;
    }
  };

  return (
    <div ref={ref} className="space-y-8">
      {cryptoData.map((crypto, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-black rounded-lg p-4 shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-shadow duration-300"
          whileHover={{
            boxShadow: "0 0 15px rgba(59, 130, 246, 0.4)",
            transition: { duration: 0.3 }
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              {getCryptoIcon(crypto.name)}
              <span className="text-xl font-bold text-white">{crypto.name}</span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-white">${crypto.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
              <span className={`block text-sm ${crypto.price > crypto.data[crypto.data.length - 2].price ? 'text-green-500' : 'text-red-500'}`}>
                {crypto.price > crypto.data[crypto.data.length - 2].price ? '▲' : '▼'}
                {Math.abs((crypto.price - crypto.data[crypto.data.length - 2].price) / crypto.data[crypto.data.length - 2].price * 100).toFixed(2)}%
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={crypto.data}>
              <defs>
                <linearGradient id={`color${crypto.name}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" hide={true} />
              <YAxis domain={['auto', 'auto']} hide={true} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
                labelStyle={{ display: 'none' }}
                formatter={(value) => [`$${value.toFixed(2)}`, crypto.name]}
              />
              <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} dot={false} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 flex justify-between">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Buy
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Trade
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// BestSeller component
const BestSeller = ({ rank, name, sales, image }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-center space-x-4 bg-black p-4 rounded-lg hover:bg-opacity-30 transition-all duration-300"
  >
    <div className="text-2xl font-bold text-pink-500">{rank}</div>
    <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
    <div className="flex-grow">
      <h3 className="text-lg font-semibold text-pink-200">{name}</h3>
      <p className="text-sm text-pink-300">{sales} sales</p>
    </div>
    <AiFillCrown className="text-yellow-400 text-xl" />
  </motion.div>
);

// MarketTrends component
const MarketTrends = () => {
  const trends = [
    { id: 1, text: "NFT sales surge 150% in Q2", icon: "📈" },
    { id: 2, text: "New AI-generated art collection launches", icon: "🎨" },
    { id: 3, text: "Top collector acquires rare digital land", icon: "🏞️" },
    { id: 4, text: "DeFi protocols see 200% growth in TVL", icon: "💰" },
    { id: 5, text: "Major brand enters metaverse with virtual store", icon: "🏪" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black rounded-lg p-4 h-full hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-shadow duration-300"
      whileHover={{
        boxShadow: "0 0 15px rgba(59, 130, 246, 0.4)",
        transition: { duration: 0.3 }
      }}
    >
      <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center">
        <BsNewspaper className="mr-2" /> Market Trends
      </h3>
      <ul className="space-y-3">
        {trends.map((trend) => (
          <motion.li
            key={trend.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: trend.id * 0.1 }}
            className="flex items-start space-x-2 text-gray-300 hover:text-pink-300 transition-colors duration-300 p-2 rounded-md"
            whileHover={{
              backgroundColor: "rgba(55, 65, 81, 0.5)",
              transition: { duration: 0.3 }
            }}
          >
            <span className="text-lg">{trend.icon}</span>
            <span className="text-sm">{trend.text}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

// Mock data for sellers
const sellers = [
  { rank: 1, name: "CryptoArtist1", sales: 150, image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { rank: 2, name: "NFTCreator2", sales: 130, image: "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { rank: 3, name: "DigitalMaster3", sales: 120, image: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { rank: 4, name: "ArtGenius4", sales: 110, image: "https://images.pexels.com/photos/5922695/pexels-photo-5922695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { rank: 5, name: "PixelWizard5", sales: 100, image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
];
// Main BestSellers component
const BestSellers = () => {
  const [hoveredSeller, setHoveredSeller] = useState(null);

  return (
    <section className="p-4 py-24 text-white bg-gradient-to-t from-black to-pink-900">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
            {/* <motion.h1 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 tracking-wide mb-6"
            >
              Best Creators & Sellers
            </motion.h1> */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8"
            >
              <p className="text-lg text-pink-200 mb-4 md:mb-0">
                Top performers of the week
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center space-x-2 text-pink-400 font-semibold hover:text-pink-300 transition-colors duration-300 focus:outline-none"
              >
                <span>See All Rankings</span>
                <AiOutlineArrowRight size={16} />
              </motion.button>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              {sellers.map((seller, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setHoveredSeller(seller.rank)}
                  onHoverEnd={() => setHoveredSeller(null)}
                >
                  <BestSeller {...seller} />
                  <AnimatePresence>
                    {hoveredSeller === seller.rank && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="mt-2 text-sm text-pink-300"
                      >
                        <AiFillCrown className="inline-block mr-1" />
                        Top {seller.rank} performer this week!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
            <motion.button 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 md:hidden flex items-center space-x-2 text-pink-400 font-semibold hover:text-pink-300 transition-colors duration-300 focus:outline-none"
            >
              <span>See All Rankings</span>
              <AiOutlineArrowRight size={16} />
            </motion.button>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 pl-0 lg:pl-4">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/3 lg:pr-4">
                <CryptoInfo />
              </div>
              <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
                <MarketTrends />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BestSellers;