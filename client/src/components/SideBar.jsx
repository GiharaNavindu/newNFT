// import React, { useEffect, useState, createContext, useContext } from 'react';
// import { MoreVertical, ChevronLast, ChevronFirst, Home, Box, ShoppingCart, Palette } from "lucide-react";
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Products from '../pages/Products.jsx';
// import Dashboard from "./Dashboard.jsx";
// import Creations from './Creations.jsx';
// import Orders from "./Orders.jsx";
// import Navbar from "./Navbar1.jsx";
// import { useMediaQuery } from 'react-responsive';
// import { AiOutlineMenu } from 'react-icons/ai';

// const SidebarContext = createContext();

// export default function Sidebar({ children }) {
//   const [expanded, setExpanded] = useState(true);
//   const [selected, setSelected] = useState('dashboard');
//   const [username, setUsername] = useState('');
//   const [userInfo, setUserInfo] = useState(null);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

//   useEffect(() => {
//     const fetchUserInfo = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const storedUsername = localStorage.getItem('username');
//         if (storedUsername) {
//           setUsername(storedUsername);
//         }
//         const response = await axios.get('http://localhost:4000/api/users/me', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserInfo(response.data);
//         if (!storedUsername) {
//           setUsername(response.data.username);
//           localStorage.setItem('username', response.data.username);
//         }
//       } catch (error) {
//         console.error('Error fetching user info:', error);
//       }
//     };

//     fetchUserInfo();
//   }, []);

//   useEffect(() => {
//     if (!isMobile) {
//       setIsDrawerOpen(false);
//     }
//   }, [isMobile]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('username');
//     navigate('/');
//   };

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <SidebarContext.Provider value={{ expanded }}>
//       <Navbar/>
//       {isMobile && (
//         <button onClick={toggleDrawer} className="fixed top-4 left-4 z-50 text-white">
//           <AiOutlineMenu size={30} />
//         </button>
//       )}
//       <div className="flex h-4/5">
//         <nav className={`flex flex-col bg-black text-white transition-all duration-300 ${expanded ? "w-64" : "w-20"} ${isMobile && isDrawerOpen ? 'fixed inset-0 z-40' : ''}`}>
//           <div className="p-4 flex justify-between items-center">
//             {/* Add toggle button for non-mobile */}
//             {!isMobile && (
//               <button onClick={() => setExpanded(!expanded)} className="text-white">
//                 {expanded ? <ChevronFirst size={20} /> : <ChevronLast size={20} />}
//               </button>
//             )}
//           </div>

//           <ul className="flex-1 px-3 py-4 space-y-2 overflow-y-auto custom-scrollbar">
//             <SidebarItem 
//               icon={<Home size={20} />} 
//               text="Dashboard" 
//               onClick={() => setSelected('dashboard')} 
//               active={selected === 'dashboard'} 
//             />
//             <SidebarItem 
//               icon={<Box size={20} />} 
//               text="Products" 
//               onClick={() => setSelected('products')} 
//               active={selected === 'products'} 
//             />
//             <SidebarItem 
//               icon={<ShoppingCart size={20} />} 
//               text="Orders" 
//               onClick={() => setSelected('orders')} 
//               active={selected === 'orders'} 
//             />
//             <SidebarItem 
//               icon={<Palette size={20} />} 
//               text="Creations" 
//               onClick={() => setSelected('creations')} 
//               active={selected === 'creations'} 
//             />
//             {children}
//           </ul>

//           <div className="border-t border-gray-700 p-4">
//             <div className="flex items-center space-x-4">
//               <img
//                 src={`https://ui-avatars.com/api/?name=${username}&background=c7d2fe&color=3730a3&bold=true`}
//                 alt="User Avatar"
//                 className="w-10 h-10 rounded-full"
//               />
//               <div className={`flex-1 ${expanded ? "" : "hidden"}`}>
//                 <h4 className="font-semibold">{username}</h4>
//                 <button 
//                   className="text-xs text-gray-400 hover:text-white"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </button>
//               </div>
//               {expanded && <MoreVertical size={20} className="text-gray-400 cursor-pointer" />}
//             </div>
//           </div>
//         </nav>
//         <main className={`flex-1 p-6 bg-gradient-to-b from-black to-gray-900 overflow-y-auto custom-scrollbar ${isMobile && isDrawerOpen ? 'hidden' : 'block'}`}>
//           {selected === 'dashboard' && <Dashboard />}
//           {selected === 'products' && <Products />}
//           {selected === 'orders' && <Orders username={username} />}
//           {selected === 'creations' && <Creations />}
//         </main>
//       </div>
//     </SidebarContext.Provider>
//   );
// }

// function SidebarItem({ icon, text, onClick, active }) {
//   const { expanded } = useContext(SidebarContext);

//   return (
//     <li
//       className={`
//         relative flex items-center py-2 px-3 my-1
//         font-medium rounded-md cursor-pointer
//         transition-colors group
//         ${
//           active
//             ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
//             : "hover:bg-gray-800 text-gray-400 hover:text-white"
//         }
//       `}
//       onClick={onClick}
//     >
//       {icon}
//       <span
//         className={`overflow-hidden transition-all ${
//           expanded ? "w-52 ml-3" : "w-0"
//         }`}
//       >
//         {text}
//       </span>
//       {!expanded && (
//         <div
//           className={`
//             absolute left-full rounded-md px-2 py-1 ml-6
//             bg-indigo-100 text-indigo-800 text-sm
//             invisible opacity-20 -translate-x-3 transition-all
//             group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
//           `}
//         >
//           {text}
//         </div>
//       )}
//     </li>
//   );
// }

















import axios from 'axios';
import { Box, ChevronFirst, ChevronLast, Home, MoreVertical, Palette, ShoppingCart } from "lucide-react";
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';
import Products from '../pages/Products.jsx';
import Creations from './Creations.jsx';
import Dashboard from "./Dashboard.jsx";
import Navbar from "./Navbar1.jsx";
import Orders from "./Orders.jsx";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [selected, setSelected] = useState('dashboard');
  const [username, setUsername] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
        const response = await axios.get('http://localhost:4000/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserInfo(response.data);
        if (!storedUsername) {
          setUsername(response.data.username);
          localStorage.setItem('username', response.data.username);
        }
      } 
      catch (error) {
  console.error('Error fetching user info:', error.response ? error.response.data : error.message);
}

    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsDrawerOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setExpanded(false);
        setIsDrawerOpen(false);
      } else {
        setExpanded(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on initial load

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/');
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <SidebarContext.Provider value={{ expanded }}>
      <Navbar />
      {isMobile && (
        <button onClick={toggleDrawer} className="fixed top-4 left-4 z-50 text-white">
          <AiOutlineMenu size={30} />
        </button>
      )}
      <div className="flex h-4/5">
        <nav className={`flex flex-col bg-black text-white transition-all duration-300 ${expanded ? "w-64" : "w-20"} ${isMobile && isDrawerOpen ? 'fixed inset-0 z-40' : ''}`}>
          <div className="p-4 flex justify-between items-center">
            {/* Add toggle button for non-mobile */}
            {!isMobile && (
              <button onClick={() => setExpanded(!expanded)} className="text-white">
                {expanded ? <ChevronFirst size={20} /> : <ChevronLast size={20} />}
              </button>
            )}
          </div>

          <ul className="flex-1 px-3 py-4 space-y-2 overflow-y-auto custom-scrollbar">
            <SidebarItem 
              icon={<Home size={20} />} 
              text="Dashboard" 
              onClick={() => setSelected('dashboard')} 
              active={selected === 'dashboard'} 
            />
            <SidebarItem 
              icon={<Box size={20} />} 
              text="Products" 
              onClick={() => setSelected('products')} 
              active={selected === 'products'} 
            />
            <SidebarItem 
              icon={<ShoppingCart size={20} />} 
              text="Orders" 
              onClick={() => setSelected('orders')} 
              active={selected === 'orders'} 
            />
            <SidebarItem 
              icon={<Palette size={20} />} 
              text="Creations" 
              onClick={() => setSelected('creations')} 
              active={selected === 'creations'} 
            />
            {children}
          </ul>

          <div className="border-t border-gray-700 p-4">
            <div className="flex items-center space-x-4">
              <img
                src={`https://ui-avatars.com/api/?name=${username}&background=c7d2fe&color=3730a3&bold=true`}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className={`flex-1 ${expanded ? "" : "hidden"}`}>
                <h4 className="font-semibold">{username}</h4>
                <button 
                  className="text-xs text-gray-400 hover:text-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
              {expanded && <MoreVertical size={20} className="text-gray-400 cursor-pointer" />}
            </div>
          </div>
        </nav>
        <main className={`flex-1 p-6 bg-gradient-to-b from-black to-gray-900 overflow-y-auto custom-scrollbar ${isMobile && isDrawerOpen ? 'hidden' : 'block'}`}>
          {selected === 'dashboard' && <Dashboard />}
          {selected === 'products' && <Products />}
          {selected === 'orders' && <Orders username={username} />}
          {selected === 'creations' && <Creations />}
        </main>
      </div>
    </SidebarContext.Provider>
  );
}

function SidebarItem({ icon, text, onClick, active }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-gray-800 text-gray-400 hover:text-white"
        }
      `}
      onClick={onClick}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {!expanded && (
        <div
          className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
        >
          {text}
        </div>
      )}
    </li>
  );
}











