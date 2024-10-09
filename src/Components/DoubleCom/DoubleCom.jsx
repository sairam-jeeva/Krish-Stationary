import React from 'react'
import allthings from '../../Assets/allthings.jpg'
// import stationary from '../../Assets/stationary.jpeg'
const DoubleCom = () => {
  return (
    <div className='md:flex grid grid-cols-1 gap-5 md:gap-3 ml-[52px] md:ml-8 lg:ml-16 mb-10 mr-16 md:h-[350px] font-outfit' id='doubleCom'>
        
        <div className='bg-lime-300 h-[70vh] w-[113vw] md:h-full md:w-[45vw] p-3 -ml-10 md:-ml-0 rounded-xl flex justify-between'>
          <div className='flex flex-col pl-7 w-[20vw] h-full justify-between'>
          <div className='md:w-[35vw] w-[90vw]'>
          <h1 className='xl:text-[33px] md:text-[28px] text-[30px] mt-5'>Wide Range in all type stationary items</h1>
          <p className='mt-1 xl:text-[23px] text-[16px] text-gray-800'>Lorem ipsum dolor sit ametconsectetur, adipisicing elit. Qui quibusdam amet rerum maxime velit.sjsujf safas </p>
          </div>
          <div className='xl:pb-4 pb-16'>
          <a href="#ourProducts"><button className='bg-lime-900 text-white hover:bg-lime-700 lg:h-[4vw] md:h-[4.8vw] lg:w-[9vw] md:w-[13vw] md:p-0 w-[100px] p-3 rounded-md'>View All</button></a> 
          </div>
          </div>
        <div className='md:min-w-[170px] md:max-w-[220px] w-[200px] items-end pb-5 flex'>
        <img src={allthings} className='object-fit mix-blend-multiply' alt=""/>
        </div>
        </div>

        <div className='bg-purple-300 h-[70vh] w-[113vw] md:h-full md:w-[45vw] p-3 -ml-10 md:ml-0 rounded-xl flex justify-between'>
          <div className='flex flex-col pl-7 w-[20vw] h-full justify-between'>
          <div className='md:w-[35vw] w-[90vw]'>
          <h1 className='xl:text-[33px] md:text-[28px] text-[30px] mt-5'>Wide Range in all type stationary items</h1>
          <p className='mt-1 xl:text-[23px] text-[16px] text-gray-800'>Lorem ipsum dolor sit ametconsectetur, adipisicing elit. Qui quibusdam amet rerum maxime velit.sjsujf safas </p>
          </div>
          <div className='xl:pb-4 pb-16'>
          <a href="#ourProducts"><button className='bg-purple-900 text-white hover:bg-purple-700 lg:h-[4vw] md:h-[4.8vw] lg:w-[9vw] md:w-[13vw] md:p-0 w-[100px] p-3 rounded-md'>View All</button></a> 
          </div>
          </div>
        <div className='md:min-w-[170px] md:max-w-[220px] w-[200px] items-end pb-5 flex'>
        <img src={allthings} className='object-fit mix-blend-multiply' alt=""/>
        </div>
        </div>
</div>
  )
}
export default DoubleCom