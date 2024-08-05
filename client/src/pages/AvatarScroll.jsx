import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import AvatarCard from './AvatarCard.jsx';
import users from '../../public/data/users.js';

function AvatarScroll() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className='relative'>
      <div className='flex items-center mb-4'>
        <button
          onClick={() => scroll('left')}
          className='p-2 rounded-full bg-gray-200 hover:bg-gray-300 absolute left-0'
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => scroll('right')}
          className='p-2 rounded-full bg-gray-200 hover:bg-gray-300 absolute right-0'
        >
          <FaArrowRight />
        </button>
      </div>
      <div 
        ref={scrollRef} 
        className='flex space-x-4 overflow-x-scroll scrollbar-hide p-4'
      >
        {users.map((user) => (
          <AvatarCard
            key={user.name}
            img={user.img}
            name={user.name}
            handle={user.handle}
          />
        ))}
      </div>
    </div>
  );
}

export default AvatarScroll;
