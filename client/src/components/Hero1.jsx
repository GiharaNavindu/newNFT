// import React from 'react';
// import robot from "../assets/how.png";

// const Hero1 = () => {
//   return (
//     <section id="home" className="flex md:flex-row flex-col py-16 min-h-screen items-center">
//       <div className="flex-1 flex flex-col justify-center items-center xl:px-0 sm:px-16 px-6">
        

//         <div className="flex flex-col justify-center items-center w-full">
//           <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] text-center">
//           The Future <br className="sm:block hidden" />{" "}
//             <span className="text-gradient">of Digital</span>{" "}
//           </h1>
//         </div>

//         <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full text-center">
//         Auctions.
//         </h1>
//         <p className="text-base text-gray-400 max-w-[470px] mt-5 text-center">
//         Bid on unique digital assets with HEXA, the platform that ensures secure and transparent auctions. Experience the next level of digital bidding.
//         </p>
//       </div>

//       <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative md:m-20">
//         <img
//           src={robot}
//           alt="billing"
//           className="max-w-full h-auto absolute z-[5]"
//         />

//         {/* gradient start */}
//         {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 bg-pink-500 opacity-50" />
//         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bg-white opacity-50 bottom-40" />
//         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 bg-blue-500 opacity-50" /> */}
//         {/* gradient end */}
//       </div>
//     </section>
//   );
// };

// export default Hero1;






















// // import Spline from '@splinetool/react-spline';
// import React from 'react';
// import Navbar from './Navbar.jsx';



// const Hero1 = () => {
//   return (
//     <div>
//       <Navbar />
//       <section id="home" className="flex md:flex-row flex-col min-h-screen items-center bg-black">
        
//         <div className="flex-1 flex flex-col justify-center items-center xl:px-0 sm:px-16 px-6">
//           <div className="flex flex-col justify-center items-center w-full">
//           <h1 className="font-poppins font-semibold ss:text-[120px] text-[85px] text-white ss:leading-[144px] leading-[108px] text-center glow">
//             The Future <br className="sm:block hidden" />{" "}
//             <span className="text-gradient">of Digital</span>{" "}
//             <h1 className="font-poppins font-semibold ss:text-[84px] text-[64px] text-white ss:leading-[120.8px] leading-[90px] w-full text-center glow">
//             Auctions.
//             </h1>
            
//           </h1>

//           </div>
          
//           {/* <h1 className="font-poppins font-semibold ss:text-[84px] text-[64px] text-white ss:leading-[120.8px] leading-[90px] w-full text-center glow">
//             Auctions.
//           </h1> */}
//           <p className="text-base text-pink-400 max-w-[570px] mt-5 text-center">
//             Bid on unique digital assets with PixBid, the platform that ensures secure and transparent auctions. Experience the next level of digital bidding.
//           </p>
//         </div>

//         <div className="flex-1 w-full h-[500px] md:h-[700px] mt-12 md:mt-0">
//           {/* <Spline
//             className="w-full h-full"
//             scene="https://prod.spline.design/HyjPIznPuelf15gG/scene.splinecode"
//           /> */}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Hero1;



















import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Hero1 = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar /> {/* Display Navbar above Hero1 */}
      <motion.section 
        id="home" 
        className="flex md:flex-row flex-col min-h-screen items-center bg-black overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex-1 flex flex-col justify-center items-center xl:px-0 sm:px-16 px-6 z-10">
          <motion.div 
            className="flex flex-col justify-center items-center w-full"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="font-poppins font-semibold ss:text-[120px] text-[85px] text-white ss:leading-[144px] leading-[108px] text-center glow">
              The Future <br className="sm:block hidden" />{" "}
              <span className="text-gradient">of Digital</span>{" "}
            </h1>
            <h1 className="font-poppins font-semibold ss:text-[84px] text-[64px] text-white ss:leading-[120.8px] leading-[90px] w-full text-center glow">
              Auctions.
            </h1>
          </motion.div>
          <motion.p 
            className="text-base text-pink-400 max-w-[570px] mt-5 text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Bid on unique digital assets with PixBid, the platform that ensures secure and transparent auctions. Experience the next level of digital bidding.
          </motion.p>
        </div>
        
        {!isMobile && (
          <motion.div 
            className="flex-1 w-full h-[500px] md:h-[700px] mt-12 md:mt-0"
            style={{ y }}
          >
            {/* <Spline
              className="w-full h-full"
              scene="https://prod.spline.design/HyjPIznPuelf15gG/scene.splinecode"
            /> */}
          </motion.div>
        )}
      </motion.section>
    </>
  );
};

export default Hero1;
