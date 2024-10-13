import React from 'react';

const DoubleCom = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-4 md:px-8 lg:px-16 mb-10 font-outfit' id='doubleCom'>
      
      {/* First Grid Item */}
      <div className='bg-lime-300 h-auto p-5 rounded-xl flex flex-col relative'>
        <div className='flex flex-col w-full'>
          <h1 className='text-[24px] md:text-[28px] xl:text-[33px] font-bold'>
          Bulk Order and Corporate Solutions for events
          </h1>
          <p className='mt-3 text-[14px] md:text-[16px] xl:text-[18px] text-gray-800'>
          We are providing bulk orders for schools, offices or events and corporate gifting or customized stationery for companies.
          </p>
          <a href="#ourProducts" className='mt-5'>
            <button className='bg-lime-900 text-white hover:bg-lime-700 h-[40px] w-[120px] md:h-[50px] md:w-[150px] rounded-md'>
              View All
            </button>
          </a>
        </div>
      </div>

      {/* Second Grid Item */}
      <div className='bg-purple-300 h-auto p-5 rounded-xl flex flex-col relative'>
        <div className='flex flex-col w-full'>
          <h1 className='text-[24px] md:text-[28px] xl:text-[33px] font-bold'>
            Wide Range in All Types of Stationary Items
          </h1>
          <p className='mt-3 text-[14px] md:text-[16px] xl:text-[18px] text-gray-800'>
            Krish Stationary provides wide range of Stationary products in all kinds of industries and for wide range of peoples
          </p>
          <a href="#ourProducts" className='mt-5'>
            <button className='bg-purple-900 text-white hover:bg-purple-700 h-[40px] w-[120px] md:h-[50px] md:w-[150px] rounded-md'>
              View All
            </button>
          </a>
        </div>
      </div>

    </div>
  );
}

export default DoubleCom;
