import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCardList from './ProductCardList';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaFire } from 'react-icons/fa';

export default function Products() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='bg-gradient-to-b from-black to-gray-900 px-4 sm:px-6 lg:px-8'>
      <section 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className='pt-2 pb-2 text-white rounded-lg backdrop-filter backdrop-blur-lg bg-gradient-to-b from-black to-gray-900 cursor-pointer'
      >
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col items-center space-y-12'>
            {/* Content */}
            <div className='flex flex-col items-center space-y-6'>
              <h1 
                className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 flex items-center ${
                  isHovered ? 'scale-105' : ''
                }`}
              >
                
              </h1>
              
            </div>
            {/* Collection of NFTs */}
            <div 
              className={`w-full ${
                isHovered ? 'scale-103' : ''
              }`}
            >
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
                <ProductCardList />
              </div>
            </div>
            <div 
              className={`md:flex items-center space-x-2 text-slate-300 font-semibold hidden ${
                isHovered ? 'transform-y-0' : 'transform-y-5'
              }`}
            >
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
