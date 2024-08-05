import React from 'react';
import { motion } from 'framer-motion';

function AvatarCard({ img, name, handle }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)' }}
      className='w-full md:w-52 rounded-lg overflow-hidden border border-gray-300 pb-6 duration-500 ease-in-out'
    >
      <div className='flex flex-col'>
        {/* Avatar */}
        <div className='self-center mt-4 mb-6'>
          <img
            src={img}
            alt={`${name}'s avatar`}
            className='rounded-full bg-center object-cover w-24 h-24 overflow-hidden'
          />
        </div>
        {/* Content */}
        <div className='text-center mb-6 md:mb-2'>
          <h3 className='text-xl text-gray-800'>{name}</h3>
          <p className='text-gray-500 text-sm'>{handle}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default AvatarCard;
