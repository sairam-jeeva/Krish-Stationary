import React from 'react';
import rubix from '../../Assets/rubix_cube.jpg';

const HeadDiv = () => {
  return (
    <div className='mt-[8%] md:mt-[3%] mx-auto w-[90%] lg:w-[85vw] h-auto bg-customColor flex flex-col justify-center p-[6%] md:p-[3%] rounded-3xl font-outfit' id='headerdiv'>
      
      <div className='relative flex flex-col md:flex-row justify-between items-center md:items-start'>

        {/* Text Content */}
        <div className='flex flex-col w-full md:w-[65%] lg:w-[70%] xl:w-[75%]'>
          <h2 className='text-[28px] md:text-[32px] lg:text-[36px] xl:text-[38px] font-semibold text-center md:text-left leading-tight'>
          Krish Stationary – Your One-Stop Shop for All Stationery Needs! </h2>
          <p className='text-base md:text-lg lg:text-[17px] xl:text-[18px] mt-4 md:mt-5 text-gray-800 text-center md:text-left leading-relaxed'>
          Krish Stationary offers a wide selection of high-quality stationery products, office supplies, art materials, and school essentials. Whether you're a student, professional, or artist, we have everything you need to get creative and stay organized.
          </p></div>

        {/* Image */}
        <div className='mt-10 md:mt-0 md:w-[35%] lg:w-[30%] xl:w-[25%] flex justify-center md:justify-end'>
          <img 
            src={rubix} 
            className='w-[80%] md:w-full lg:w-[90%] xl:w-[85%] h-auto object-cover rounded-md mix-blend-multiply contrast-200 shadow-none' 
            alt="Rubix Cube"
          />
        </div>
        
      </div>

      {/* Button */}
      <div className='mt-8 md:mt-10 flex justify-center md:justify-start'>
        <a href="#ourProducts">
          <button className="bg-green-900 px-6 py-3 lg:px-8 lg:py-3.5 hover:bg-green-700 rounded-lg text-white transition duration-200 transform hover:scale-105">
            Shop Now
          </button>
        </a>
      </div>
      
    </div>
  );
}

export default HeadDiv;
