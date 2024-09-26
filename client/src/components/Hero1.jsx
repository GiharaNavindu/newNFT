
















import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Spline from '@splinetool/react-spline';


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
            <Spline
              className="w-full h-full"
              scene="https://prod.spline.design/HyjPIznPuelf15gG/scene.splinecode"
            />
          </motion.div>
        )}
      </motion.section>
    </>
  );
};

export default Hero1;
