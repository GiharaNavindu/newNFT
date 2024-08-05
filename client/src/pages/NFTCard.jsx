

// import React from "react";
// import { AiOutlineClockCircle, AiFillHeart } from "react-icons/ai";
// import { FaEthereum } from "react-icons/fa";

// const NFTCard = ({ img, sale, title, price, likes }) => {
//   return (
//     <div className="w-64 h-70 flex group flex-col space-y-3 rounded-2xl overflow-hidden border border-pink-400/10 hover:border-pink-500/50 pb-6 hover:shadow-2xl hover:shadow-pink-500/20 duration-300 ease-in-out hover:scale-105 relative bg-gradient-to-b from-gray-900 to-black p-4">
//       {/* Image & Counter */}
//       <div className="w-full h-40 flex flex-col items-start relative overflow-hidden rounded-xl group-hover:shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300 p-2">
//         <img
//           src={img}
//           alt="NFT"
//           className="w-full h-full object-cover p-2 rounded-lg transform group-hover:scale-110 transition-transform duration-300"
//         />
//         {sale && (
//           <div className="flex space-x-2 items-center justify-center px-4 py-1 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-pink-500 rounded-full absolute bottom-3 left-3 shadow-lg">
//             <AiOutlineClockCircle className="animate-pulse" />
//             <p className="text-xs font-semibold">66 : 08 : 19 : 27</p>
//           </div>
//         )}
//       </div>
//       {/* Content */}
//       <div className="px-2 flex flex-col space-y-3 flex-1">
//         {/* Title */}
//         <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
//           {title}
//         </h1>
//         {/* Price & Like */}
//         <div className="flex justify-between items-center pt-2">
//           {/* Price */}
//           <div className="flex space-x-2 text-indigo-400 items-center group">
//             <FaEthereum size={18} className="group-hover:animate-bounce" />
//             <p className="text-sm font-semibold group-hover:text-indigo-300 transition-colors duration-300">
//               {price} ETH
//             </p>
//           </div>
//           {/* Like */}
//           <div className="flex space-x-2 items-center group">
//             <AiFillHeart className="text-rose-600 group-hover:text-rose-500 transition-colors duration-300 group-hover:scale-110 transform" />
//             <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
//               {likes}
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* Hover overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
        
//       </div>
//     </div>
//   );
// }

// export default NFTCard;














import React from "react";
import { AiFillHeart, AiOutlineClockCircle } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";

const NFTCard = ({ img, sale, title, price, likes }) => {
  return (
    <div className="w-64 h-70 flex group flex-col space-y-3 rounded-2xl overflow-hidden border border-pink-500 pb-6 hover:shadow-2xl hover:shadow-pink-500/20 duration-300 ease-in-out hover:scale-105 relative bg-black p-4">
      {/* Image & Counter */}
      <div className="w-full h-40 flex flex-col items-start relative overflow-hidden rounded-xl group-hover:shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300 p-2">
        <img
          src={img}
          alt="NFT"
          className="w-full h-full object-cover p-2 rounded-lg transition-transform duration-300" // Ensure corners are rounded
        />
        {sale && (
          <div className="flex space-x-2 items-center justify-center px-4 py-1 bg-rose-500 rounded-full absolute bottom-3 left-3 shadow-lg">
            <AiOutlineClockCircle className="animate-pulse" />
            <p className="text-xs font-semibold">66 : 08 : 19 : 27</p>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="px-2 flex flex-col space-y-3 flex-1">
        {/* Title */}
        <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {title}
        </h1>
        {/* Price & Like */}
        <div className="flex justify-between items-center pt-2">
          {/* Price */}
          <div className="flex space-x-2 text-indigo-400 items-center group">
            <FaEthereum size={18} className="group-hover:animate-bounce" />
            <p className="text-sm font-semibold group-hover:text-indigo-300 transition-colors duration-300">
              {price} ETH
            </p>
          </div>
          {/* Like */}
          <div className="flex space-x-2 items-center group">
            <AiFillHeart className="text-rose-600 group-hover:text-rose-500 transition-colors duration-300 group-hover:scale-110 transform" />
            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
              {likes}
            </p>
          </div>
        </div>
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
        
      </div>
    </div>
  );
}

export default NFTCard;
