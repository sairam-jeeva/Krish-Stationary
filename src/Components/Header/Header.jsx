import React, { useState, useEffect } from 'react';
import logo from '../../Assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-between items-center fixed top-0 w-full px-4 md:px-8 lg:px-16 xl:px-24 transition duration-1000 ease-in-out
      ${isScrolled ? 'bg-gray-800 shadow-lg fixed top-0 w-full z-50 transition duration-1000 ease-in-out' : 'bg-transparent'} ${isOpen ? 'fixed top-0 w-full z-50' : ''}`}
      id="header"
      style={{ height: isScrolled ? '80px' : '80px', top: isOpen ? '0' : isScrolled ? '0' : '0' }}
    >
      <img 
        src={logo} 
        className={`w-12 h-12 md:w-20 md:h-16 transition-transform duration-300`} 
        alt="Logo" 
      />
      
      <ul
        className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 transition-all duration-100 
        ${isOpen ? 'absolute top-0 left-0 w-full bg-slate-500 text-white h-screen flex flex-col items-center justify-center md:static md:bg-transparent' : 'hidden md:flex'}`}
      >
        <div className={`absolute top-0 left-0 w-full h-full bg-black opacity-50 ${isOpen ? 'block' : 'hidden'} transition-opacity duration-300`} onClick={toggleMenu}></div>  
        <li className={`text-xl md:text-lg py-2 md:py-0  duration-200 ${isOpen ? 'text-white' : isScrolled ? 'text-white' : 'text-gray-600'}`}>
          <a href="#krishImage" onClick={() => setIsOpen(false)}>Stationery</a>
        </li>
        <li className={`text-xl md:text-lg py-2 md:py-0 duration-200 ${isOpen ? 'text-white' : isScrolled ? 'text-white' : 'text-gray-600'}`}>
          <a href="#krish_electricals" onClick={() => setIsOpen(false)}>Electricals</a>
        </li>
        <li className={`text-xl md:text-lg py-2 md:py-0 duration-200 ${isOpen ? 'text-white' : isScrolled ? 'text-white' : 'text-gray-600'}`}>
          <a href="#additionals" onClick={() => setIsOpen(false)}>Additional </a>
        </li>
        <li className={`text-xl md:text-lg py-2 md:py-0 duration-200 ${isOpen ? 'text-white' : isScrolled ? 'text-white' : 'text-gray-600'}`}>
          <a href="#premiumDis" onClick={() => setIsOpen(false)}>Special Combo</a>
        </li>
        <li className="mt-4 md:mt-0">
          <a href="#footer">
            <button 
              className={`bg-${isScrolled ? 'customColor text-black' : 'customColor'}  text-black rounded-lg hover:bg-opacity-80 py-2 px-4 transition-all duration-300`}>
              Contact Us
            </button>
          </a>
        </li>
      </ul>

      <div className={`md:hidden text-2xl cursor-pointer ${isScrolled ? 'fixed right-4 top-7' : 'absolute top-8 right-6'}`} onClick={toggleMenu}>
        {isOpen ? (
          <i className={`fas fa-times ${isScrolled ? 'text-white' : 'text-black'}`}></i>
        ) : (
          <i className={`fas fa-bars ${isScrolled ? 'text-white' : 'text-black'}`}></i>
        )}
      </div>
    </div>
  );
};

export default Header;
