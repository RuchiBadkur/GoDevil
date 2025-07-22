import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import goddessImg from '../assets/angel-side-ruchi-pastel.png';
import devilImg from '../assets/devil-side-ruchi.png';
import introLogo from '../assets/godevil-logo.svg';
import GoDevilLogo from '../assets/GoDevilLogo.svg';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [showIntro, setShowIntro] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleExploreDivine = () => navigate('/divine');
  const handleExploreDevil = () => navigate('/devil');
  const skipIntro = () => setShowIntro(false);

  return (
    <section className="relative w-full h-screen overflow-hidden font-serif text-white bg-gradient-to-r from-red-950 via-black to-pink-100">

      {/* Top Left Logo */}
      {!showIntro && (
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-30">
          <img
            src={GoDevilLogo}
            alt="GoDevil Logo"
            className="w-20 sm:w-24 md:w-28 h-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          />
        </div>
      )}

      {/* Intro Overlay */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            onClick={skipIntro}
            className="absolute inset-0 z-50 bg-gradient-to-r from-pink-950 via-black to-red-900 flex flex-col items-center justify-center text-center px-6 cursor-pointer"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="flex flex-col items-center max-w-xl"
            >
              <img src={introLogo} alt="Intro Logo" className="w-48 md:w-64 drop-shadow-[0_0_35px_rgba(255,0,0,0.7)]" />
              <img src={GoDevilLogo} alt="GoDevil Logo" className="mt-4 w-[100px] sm:w-[120px] h-auto" />
              <p className="mt-6 text-sm sm:text-base md:text-lg text-pink-100 leading-relaxed tracking-wide">
                Welcome to <span className="font-bold text-white">GoDevil</span> — a fashion haven for the modern woman
                who embraces both her grace and her fire. Discover a unique collection that celebrates duality:
                <span className="italic"> divine elegance</span> and <span className="italic"> bold confidence</span>. 💃<br />
                Created with love by <span className="font-semibold text-pink-200">Ruchi Badkur</span>, for women who know they’re nothing short of extraordinary. 🌟
              </p>
              <p className="mt-4 text-sm sm:text-base text-pink-300 font-medium tracking-wide">
                ✨ You are special. You are style. Tap to explore →
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!showIntro && (
        <div className="w-full h-full flex flex-col md:flex-row" id="hero">

          {/* Goddess Side */}
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 h-1/2 md:h-full relative z-10 cursor-pointer group"
            onClick={handleExploreDivine}
          >
            <img
              src={goddessImg}
              alt="Goddess"
              className="object-cover w-full h-full object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-6 left-4 sm:left-6 bg-white/20 px-4 py-2 sm:px-6 rounded-xl backdrop-blur-lg text-sm sm:text-lg tracking-wide text-white font-light shadow-md group-hover:scale-105 transition duration-300 flex items-center gap-2"
            >
              ✨ Explore Divine Elegance <span className="animate-bounce">→</span>
            </motion.div>
          </motion.div>

          {/* Devil Side */}
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 h-1/2 md:h-full relative z-10 cursor-pointer group"
            onClick={handleExploreDevil}
          >
            <img
              src={devilImg}
              alt="Devil"
              className="object-cover w-full h-full object-center brightness-90 group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-16 sm:bottom-6 right-4 sm:right-6 bg-red-900/40 px-4 py-2 sm:px-6 rounded-xl backdrop-blur-lg text-red-200 text-sm sm:text-lg tracking-wide font-semibold shadow-md group-hover:scale-105 transition duration-300 flex items-center gap-2"
            >
              🔥 Discover Bold Confidence <span className="animate-bounce">→</span>
            </motion.div>
          </motion.div>

          {/* Tagline - desktop */}
          <div className="hidden md:block absolute top-[45%] left-1/2 -translate-x-1/2 text-center z-20 px-4">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 1.2 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-widest uppercase leading-tight"
            >
              <span className="bg-gradient-to-r from-pink-200 via-white to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,200,220,0.8)] animate-pulse">
                Half Goddess
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-700 via-black to-red-900 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,0,0,0.9)] animate-pulse">
                Half Devil
              </span>
            </motion.h2>
          </div>

          {/* Tagline - mobile (bottom clean text) */}
          <div className="md:hidden absolute bottom-2 left-1/2 -translate-x-1/2 z-30 text-center px-4">
            <p className="text-xs text-pink-200 font-light tracking-wide">
              Half Goddess • Half Devil • All You
            </p>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />
        </div>
      )}
    </section>
  );
};

export default Hero;
