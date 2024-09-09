import React from 'react' 
import logo from '../../Assets/logo.png'


const Header = () => {
               return (
    <div className='flex justify-around text-lg mt-5  font-outfit' id='header'>
        <img src={logo} className='w-28 h-20' alt="" />
        <ul className='flex gap-28 mt-5 text-gray-500 text-center cursor-pointer '>
            <li className='hover:text-customColor'><a href="#ourProducts">School</a></li>
            <li className='hover:text-customColor'><a href="#ourProducts">Office</a></li>
            <li className='hover:text-customColor'><a href="#ourProducts2">Children</a> </li>
            <li className='hover:text-customColor'><a href="#ourProducts2">Special Combo</a></li>
        </ul>
        <a href="#footer"><button className='w-32 h-14 mt-2 text-black  bg-customColor rounded-2xl hover:bg-lime-500 hover:text-white'>Contact Us</button></a>
    </div>
  )
}
export default Header

