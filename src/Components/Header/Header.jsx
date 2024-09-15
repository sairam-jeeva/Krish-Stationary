import React,{useState} from 'react' 
import logo from '../../Assets/logo.png'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); 
  
    const toggleMenu = () => {
      setIsOpen(!isOpen); 
    };

    return (
    <div className='flex justify-between lg:text-[17px] text-[14px]  mt-5 font-outfit ml-1 lg:px-[8vw] px-[2vw]' id='header'>
        <img src={logo} className='md:w-[8vw] w-[24vw] lg:ml-0 md:ml-[10vh] lg:h-[14vh] h-[11vh]' alt="" />
        
        <ul className={`flex flex-col ml-10 md:relative absolute   md:flex-row gap-y-4 md:gap-y-0 gap-x-[6vw] mt-5 md:mt-10 text-gray-500 text-center cursor-pointer transition-all duration-300 
        ${isOpen ? 'block' : 'hidden md:flex'}`}>
            <li className='hover:text-customColor'><a href="#ourProducts">School</a></li>
            <li className='hover:text-customColor'><a href="#ourProducts">Office</a></li>
            <li className='hover:text-customColor'><a href="#ourProducts">Children</a> </li>
            <li className='hover:text-customColor'><a href="#ourProducts">Special Combo</a></li>
            <a href="#footer"><button className='lg:w-[12vw] w-[14vw] lg:h-[10vh] h-[9vh] ml-10 md:-mt-10  text-black text-[1.5vw] bg-customColor rounded-2xl hover:bg-lime-500 hover:text-white'>Contact Us</button></a>
        </ul>
        <div className="md:hidden text-[6vw] cursor-pointer mt-2" onClick={toggleMenu}>
        {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </div>
     </div>
  )
}
export default Header

