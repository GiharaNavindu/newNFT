import { ScaleIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const Links = [
    { name: 'HOME', link: '/' },
    { name: 'SERVICE', link: '/' },
    { name: 'ABOUT', link: '/' },
    { name: 'CONTACT', link: '/' },
  ];

  return (
    <div className='w-full bg-gradient-to-b from-black to-gray-900'>
      <div className='max-w-7xl mx-auto px-4 flex justify-between items-center h-16 md:h-[90px]'>
        <div className='flex items-center gap-1 text-white'>
          <ScaleIcon className='w-7 h-7 text-pink-600' />
          <span className='text-3xl font-bold cursor-pointer'>PixBid</span>
        </div>

        {/* Menu Icon for Mobile */}
        <div className='md:hidden'>
          <button onClick={toggleNav} className='text-white focus:outline-none bg-black'>
            {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>

        {/* Links Section */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gradient-to-b from-black to-gray-900 top-16 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${navOpen ? 'block' : 'hidden md:block'}`}>
          {Links.map((link, index) => (
            <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
              <Link to={link.link} className='text-white hover:text-pink-400 duration-500'>{link.name}</Link>
            </li>
          ))}
          {/* {token && (
            <li className='md:ml-8 md:my-0 my-7 font-semibold'>
              <button onClick={handleLogout} className='btn bg-pink-600 text-white px-3 py-1 rounded duration-500'>Logout</button>
            </li>
          )} */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
