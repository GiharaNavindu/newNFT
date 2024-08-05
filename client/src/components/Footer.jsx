import { motion } from 'framer-motion';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMediumSquare, AiOutlineTwitter } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container bg-black mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">NFT Marketplace</h3>
            <p className="text-pink-200 mb-4">Discover, collect, and sell extraordinary NFTs</p>
            <div className="flex space-x-4">
              <SocialIcon Icon={AiOutlineTwitter} href="https://twitter.com" />
              <SocialIcon Icon={FaDiscord} href="https://discord.com" />
              <SocialIcon Icon={AiFillGithub} href="https://github.com" />
              <SocialIcon Icon={AiFillLinkedin} href="https://linkedin.com" />
              <SocialIcon Icon={AiFillMediumSquare} href="https://medium.com" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-4 text-pink-400">Marketplace</h4>
            <FooterLink href="#" text="All NFTs" />
            <FooterLink href="#" text="Art" />
            <FooterLink href="#" text="Music" />
            <FooterLink href="#" text="Domain Names" />
            <FooterLink href="#" text="Virtual Worlds" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4 text-pink-400">My Account</h4>
            <FooterLink href="#" text="Profile" />
            <FooterLink href="#" text="Favorites" />
            <FooterLink href="#" text="Watchlist" />
            <FooterLink href="#" text="My Collections" />
            <FooterLink href="#" text="Settings" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold mb-4 text-pink-400">Resources</h4>
            <FooterLink href="#" text="Help Center" />
            <FooterLink href="#" text="Platform Status" />
            <FooterLink href="#" text="Partners" />
            <FooterLink href="#" text="Blog" />
            <FooterLink href="#" text="Newsletter" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} NFT Marketplace. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon, href }) => (
  <motion.a
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
  >
    <Icon size={24} />
  </motion.a>
);

const FooterLink = ({ href, text }) => (
  <motion.a
    whileHover={{ x: 5 }}
    href={href}
    className="block text-gray-300 hover:text-pink-400 transition-colors duration-300 py-1"
  >
    {text}
  </motion.a>
);

export default Footer;