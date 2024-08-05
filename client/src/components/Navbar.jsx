
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import { ScaleIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

// const Navbar = () => {
//   const [navOpen, setNavOpen] = useState(false);

//   const toggleNav = () => {
//     setNavOpen(!navOpen);
//   };

//   const Links = [
//     { name: 'HOME', link: '/' },
//     { name: 'SERVICE', link: '/' },
//     { name: 'ABOUT', link: '/' },
//     { name: 'CONTACT', link: '/' },
//   ];

//   return (
//     <div className='w-full bg-black'>
//       <div className='max-w-7xl mx-auto px-4 flex justify-between items-center h-16 md:h-[90px]'>
//         <div className='flex items-center gap-1 text-white'>
//           <ScaleIcon className='w-12 h-12 text-pink-600' />
//           <span className='text-3xl font-bold cursor-pointer'>PixBid</span>
//         </div>

//         {/* Menu Icon for Mobile */}
//         <div className='md:hidden'>
//           <button onClick={toggleNav} className='text-white focus:outline-none'>
//             {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
//           </button>
//         </div>

//         {/* Links Section */}
//         <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black top-16 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${navOpen ? 'top-16' : '-top-20 md:top-0'}`}>
//           {/* {Links.map((link, index) => (
//             <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
//               <Link to={link.link} className='text-white hover:text-blue-400 duration-500'>{link.name}</Link>
//             </li>
//           ))} */}
//           <li className='md:ml-8 md:my-0 my-7 font-semibold'>
//             <Link to='/' className='btn text-white hover:text-pink-400 duration-500'>HOME</Link>
//           </li>
//           <li className='md:ml-8 md:my-0 my-7 font-semibold'>
//             <Link to='/' className='btn text-white hover:text-pink-400 duration-500'>SERVICE</Link>
//           </li>
//           <li className='md:ml-8 md:my-0 my-7 font-semibold'>
//             <Link to='/' className='btn text-white hover:text-pink-400 duration-500'>ABOUT</Link>
//           </li>
//           <li className='md:ml-8 md:my-0 my-7 font-semibold'>
//             <Link to='/login' className='btn bg-pink-600 text-white px-3 py-1 rounded duration-500 md:static'>Get Started</Link>
//           </li>
          
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;






// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import { ScaleIcon } from '@heroicons/react/24/solid';

// const Navbar = () => {
//   const [navOpen, setNavOpen] = useState(false);

//   const toggleNav = () => {
//     setNavOpen(!navOpen);
//   };

//   const Links = [
//     { name: 'HOME', link: '/' },
//     { name: 'SERVICE', link: '/' },
//     { name: 'ABOUT', link: '/' },
//     { name: 'CONTACT', link: '/' },
//   ];

//   return (
//     <div className='w-full bg-black'>
//       <div className='max-w-7xl mx-auto px-4 flex justify-between items-center h-16 md:h-[90px]'>
//         <div className='flex items-center gap-1 text-white'>
//           <ScaleIcon className='w-12 h-12 text-pink-600' />
//           <span className='text-3xl font-bold cursor-pointer'>PixBid</span>
//         </div>

//         {/* Menu Icon for Mobile */}
//         <div className='md:hidden'>
//           <button onClick={toggleNav} className='text-white focus:outline-none bg-black'>
//             {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
//           </button>
//         </div>

//         {/* Links Section */}
//         <ul className={`md:flex md:items-center absolute md:static bg-black top-16 left-0 w-full md:w-auto transition-all duration-500 ease-in ${navOpen ? 'block' : 'hidden md:block'}`}>
//           {Links.map((link, index) => (
//             <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
//               <Link to={link.link} className='text-white hover:text-pink-400 duration-500'>{link.name}</Link>
//             </li>
//           ))}
//           <li className='md:ml-8 md:my-0 my-7 font-semibold'>
//             <Link to='/login' className='btn bg-pink-600 text-white px-3 py-1 rounded duration-500'>Get Started</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




















import { ScaleIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const Links = [
    { name: 'HOME', link: '/' },
    { name: 'SERVICE', link: '/' },
    { name: 'ABOUT', link: '/' },
    { name: 'CONTACT', link: '/' },
  ];

  return (
    <div className='w-full bg-black'>
      <div className='max-w-7xl mx-auto px-4 flex justify-between items-center h-16 md:h-[90px]'>
        <div className='flex items-center gap-1 text-white'>
          <ScaleIcon className='w-12 h-12 text-pink-600' />
          <span className='text-3xl font-bold cursor-pointer'>PixBid</span>
        </div>

        <div className='md:hidden'>
          <button onClick={toggleNav} className='text-white focus:outline-none bg-black'>
            {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>

        <ul className={`md:flex md:items-center absolute md:static bg-black top-16 left-0 w-full md:w-auto transition-all duration-500 ease-in ${navOpen ? 'block' : 'hidden md:block'}`}>
          {Links.map((link, index) => (
            <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
              <Link to={link.link} className='text-white hover:text-pink-400 duration-500'>{link.name}</Link>
            </li>
          ))}
          <li className='md:ml-8 md:my-0 my-7 font-semibold'>
            <Link to='/login' className='btn bg-pink-600 text-white px-3 py-1 rounded duration-500'>Get Started</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;