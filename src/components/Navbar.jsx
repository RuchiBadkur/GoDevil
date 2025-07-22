import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FaUser,
  FaThLarge,
  FaTags,
  FaBookOpen,
} from 'react-icons/fa';
import logo from '../assets/GoDevilLogo.svg';

const Navbar = () => {
  const [theme, setTheme] = useState('default');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('divine')) setTheme('divine');
    else if (location.pathname.includes('devil')) setTheme('devil');
    else setTheme('default');
  }, [location]);

  const toggleTheme = () => {
    const newTheme = theme === 'divine' ? 'devil' : 'divine';
    setTheme(newTheme);
    navigate(`/${newTheme}`);
  };

  const scrollToHero = () => {
    navigate('/');
    setTimeout(() => {
      const hero = document.getElementById('hero');
      if (hero) hero.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const themeClasses = {
    divine: {
      bg: 'bg-gradient-to-br from-pink-100 via-white to-purple-100',
      text: 'text-gray-900',
      accent: 'hover:text-pink-500',
    },
    devil: {
      bg: 'bg-gradient-to-br from-black via-gray-900 to-red-900',
      text: 'text-red-100',
      accent: 'hover:text-red-400',
    },
    default: {
      bg: 'bg-black',
      text: 'text-white',
      accent: 'hover:text-gray-300',
    },
  };

  const { bg, text, accent } = themeClasses[theme] || themeClasses.default;

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`${bg} ${text} fixed top-0 w-full z-50 px-6 md:px-10 py-3 shadow-lg flex items-center justify-between transition-all duration-500`}
      >
        {/* Left Side */}
        <div className="flex items-center space-x-6">
          <div onClick={scrollToHero} className="cursor-pointer flex-shrink-0">
            <img
              src={logo}
              alt="GoDevil Logo"
              className="h-10 w-auto transition-transform hover:scale-105"
            />
          </div>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:flex">
            <button
              onClick={toggleTheme}
              className={`w-14 h-8 flex items-center px-1 rounded-full transition-all duration-500 shadow-inner relative ${
                theme === 'divine' ? 'bg-pink-300' : 'bg-red-800'
              }`}
            >
              <div
                className={`h-6 w-6 bg-white rounded-full shadow-md transform transition-transform duration-300 text-sm ${
                  theme === 'divine' ? 'translate-x-0' : 'translate-x-6'
                } flex items-center justify-center`}
              >
                {theme === 'divine' ? '🪷' : '🌹'}
              </div>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium tracking-wide ml-6">
            <li>
              <a href="#categories" className={`${accent} transition`}>
                Categories
              </a>
            </li>
            <li>
              <a href="#collections" className={`${accent} transition`}>
                Collections
              </a>
            </li>
            <li>
              <a href="#stories" className={`${accent} transition`}>
                Stories
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products"
              className="rounded-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none w-64"
            />
            {/* You may add FaSearch icon if needed again */}
          </div>
          <FaUser className="cursor-pointer hover:text-gray-300 text-xl" title="Account" />
        </div>
      </nav>

      {/* Bottom Mobile Navbar */}
      <div
        className={`md:hidden fixed bottom-0 w-full ${bg} ${text} border-t border-white/10 shadow-xl z-50 py-2 px-6 flex justify-between items-center`}
      >
        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          className={`w-12 h-6 flex items-center px-1 rounded-full transition-all duration-500 shadow-inner relative ${
            theme === 'divine' ? 'bg-pink-300' : 'bg-red-800'
          }`}
        >
          <div
            className={`h-5 w-5 bg-white rounded-full shadow-md transform transition-transform duration-300 text-xs ${
              theme === 'divine' ? 'translate-x-0' : 'translate-x-6'
            } flex items-center justify-center`}
          >
            {theme === 'divine' ? '🪷' : '🌹'}
          </div>
        </button>

        {/* Mobile Navigation Icons */}
        <a href="#categories">
          <FaThLarge className="text-lg hover:scale-110 transition-transform" title="Categories" />
        </a>
        <a href="#collections">
          <FaTags className="text-lg hover:scale-110 transition-transform" title="Collections" />
        </a>
        <a href="#stories">
          <FaBookOpen className="text-lg hover:scale-110 transition-transform" title="Stories" />
        </a>
        <FaUser className="text-lg hover:scale-110 transition-transform" title="Profile" />
      </div>
    </>
  );
};

export default Navbar;
