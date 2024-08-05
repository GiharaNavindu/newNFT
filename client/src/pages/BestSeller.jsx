import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineTrophy } from 'react-icons/ai';


const BestSeller = ({ rank, name, sales, image }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-center space-x-4 bg-pink-900 bg-opacity-20 p-4 rounded-lg hover:bg-opacity-30 transition-all duration-300"
  >
    <div className="text-2xl font-bold text-pink-500">{rank}</div>
    <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
    <div className="flex-grow">
      <h3 className="text-lg font-semibold text-pink-200">{name}</h3>
      <p className="text-sm text-pink-300">{sales} sales</p>
    </div>
    <AiOutlineTrophy className="text-yellow-400 text-xl" />
  </motion.div>
);

export default BestSeller;
