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
  },[]);

  return (
    <div
      className={`flex md:justify-around xl:w-[100%] justify-between lg:w-[90%] lg:text-[17px] text-[14px] xl:text-[18px] md:mt-0 xl:mt-3 xl:ml-40 mt-5 font-outfit ml-10 lg:px-[7vw] px-[2vw] 
      
      ${isScrolled ? 'md:justify-around md:bg-zinc-100 bg-zinc-100 fixed -top-5 -ml-[1px] w-[100%] lg:w-[120%] xl:w-[100%] xl:-mt-1 xl:h-[180px] lg:left-0 lg:top-0 lg:h-[150px] h-[100px] md:-top-1 md:h-[120px] md:ml-0 md:-mt-1 md:w-[100%] z-50 transition-all duration-300' : 'bg-transparent'} `}
      id="header">

      <img src={logo} className={`md:w-[10vw] md:mt-7 xl:h-[110px] xl:-ml-40 xl:mt-10 mt-3 w-[20vw] -ml-7 lg:-ml-12 md:ml-[3px] lg:mt-10 lg:h-[12vh] h-[10vh] md:h-[11vh] transition-transform duration-300
       ${isScrolled ? 'translate-x-4 ml-2 mt-7 md:ml-[30px] xl:ml-[20px] lg:-ml-9' : ''}`}
  alt="Logo"/>

      <ul
        className={`flex flex-col ml-1 md:ml-5 xl:w-[80%]  md:mb-4 lg:text-[23px] lg:ml-14 lg:mt-16 lg:w-[130%] xl:-ml-4 xl:mt-20 md:relative absolute md:flex-row gap-y-10 md:gap-y-0 lg:gap-x-14 xl:gap-x-[4vw] gap-x-[6vw] mt-5 md:mt-12 text-gray-500 text-center cursor-pointer transition-all duration-300 
          ${isOpen ? 'block bg-green-900 mt-[90px] rounded-xl left-[3px] w-[115vw] h-[510px] justify-center text-white text-[25px] z-[9999] ': 'hidden md:flex'} 
          ${
            isScrolled ? 'w-[98%] lg:-mr-20 top-2 h-[560px] md:ml-[60px] lg:ml-[90px] xl:ml-[100px] xl:text-[30px]': ''}`}>
        <li className="hover:text-customColor">
          <a href="#ourProducts">School</a>
        </li>
        <li className="hover:text-customColor">
          <a href="#ourProducts">Office</a>
        </li>
        <li className="hover:text-customColor">
          <a href="#ourProducts">Children</a>
        </li>
        <li className="hover:text-customColor">
          <a href="#ourProducts">Special Combo</a>
        </li>
        <a href="#footer">
          <button className=" lg:w-[14vw] md:w-[17vw] lg:-mr-16 w-[45vw] lg:h-[10vh] h-[9vh] md:ml-5 lg:text-[20px] xl:ml-10 xl:text-[25px]  md:-mt-10 text-black text-[5vw] md:text-[17px] bg-customColor rounded-2xl hover:bg-lime-500 hover:text-white">
            Contact Us
          </button>
        </a>
      </ul>
      <div
        className={`md:hidden text-[6vw] cursor-pointer absolute top-7 -right-16 m-4 ${isScrolled ? ' right-16 fixed -mr-4 top-3' : ''}`}
        onClick={toggleMenu}
      >
        {isOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </div>
    </div>
  );
};

export default Header;
