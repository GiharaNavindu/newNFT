

import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import NFTCardsList from './NFTCardsList.jsx';

function HotProducts() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='bg-gradient-to-t from-pink-900 to-black pt-20 pb-20 px-4 sm:px-6 lg:px-8'>
      <section 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className='pt-2 pb-2 text-white rounded-large  bg-black '
      >
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col items-center space-y-12'>
            {/* Content */}
            <div className='flex flex-col items-center space-y-6'>
              {/* <p 
                className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 flex items-center'
              >
                
                Explore Hot Products
                
              </p> */}
            </div>
            {/* Collection of NFTs */}
            <div className='w-full'>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
                <NFTCardsList />
              </div>
            </div>
            <div className='md:flex items-center space-x-2 text-slate-300 font-semibold hidden'>
              <Link
                to='/login'
                className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full duration-500 hover:from-purple-700 hover:to-pink-700 flex items-center transform hover:scale-105 transition-all shadow-lg hover:shadow-xl'
              >
                <p className='mr-2'>Explore All Items</p>
                <AiOutlineArrowRight className='animate-pulse' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HotProducts;
