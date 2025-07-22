import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const footerRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Check if footer is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollTop(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowScrollTop(false); // Hide after click
  };

  return (
    <>
      {/* Scroll to Top Arrow */}
      {showScrollTop && (
        <motion.div
          className="fixed bottom-20 right-6 bg-gradient-to-r from-purple-700 via-pink-500 to-red-600 p-3 rounded-full shadow-lg cursor-pointer z-50 hover:scale-110 transition-all"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleScrollTop}
        >
          <FaArrowUp className="text-white text-xl" />
        </motion.div>
      )}

      {/* Footer */}
      <motion.footer
        ref={footerRef}
        className="bg-gradient-to-b from-black to-gray-900 text-gray-300 pt-12 pb-8 px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Tagline */}
          <div>
            <h3 className="text-2xl font-bold text-white">GoDevil</h3>
            <p className="text-sm mt-2 text-gray-400">
              HALF GODDESS, HALF DEVIL. ALL YOU.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Shop</h4>
            <ul className="text-sm space-y-2">
              <li className="hover:text-white cursor-pointer transition">New Arrivals</li>
              <li className="hover:text-white cursor-pointer transition">Best Sellers</li>
              <li className="hover:text-white cursor-pointer transition">Collections</li>
              <li className="hover:text-white cursor-pointer transition">Offers</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">About</h4>
            <ul className="text-sm space-y-2">
              <li className="hover:text-white cursor-pointer transition">Our Story</li>
              <li className="hover:text-white cursor-pointer transition">Careers</li>
              <li className="hover:text-white cursor-pointer transition">Sustainability</li>
              <li className="hover:text-white cursor-pointer transition">Divine & Devil Ethos</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Help</h4>
            <ul className="text-sm space-y-2">
              <li className="hover:text-white cursor-pointer transition">Contact Us</li>
              <li className="hover:text-white cursor-pointer transition">Returns</li>
              <li className="hover:text-white cursor-pointer transition">FAQs</li>
              <li className="hover:text-white cursor-pointer transition">Order Tracking</li>
            </ul>
          </div>
        </div>

        {/* Social + Rights */}
        <div className="mt-10 border-t border-gray-700 pt-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-white">Ruchi Badkur</span> ✍🏼 — All rights reserved.
          </div>

          <div className="flex gap-4 text-xl">
            <a href="https://github.com/RuchiBadkur" target="_blank" rel="noreferrer" className="hover:text-white transition-all">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ruchi-badkur/" target="_blank" rel="noreferrer" className="hover:text-white transition-all">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/richie_ruchh?igsh=MWI0cGVlYWx2b256Yg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="hover:text-white transition-all">
              <FaInstagram />
            </a>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
