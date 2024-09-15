import React from 'react'
import allthings from '../../Assets/allthings.jpg'
import stationary from '../../Assets/stationary.jpeg'
const DoubleCom = () => {
  return (
    <div className='flex gap-5 ml-16 mb-10 mr-16 font-outfit' id='doubleCom'>
        
        <div className='bg-customColor h-[52vh] w-[50%] p-3 rounded-xl flex'>
         <div className='flex flex-col ml-7 '>
          <div className='flex flex-col gap-[1.5vw] lg:gap-[3vw]'>
          <div>
          <h1 className='lg:text-[2.5vw]  mt-5 text-[2.3vw] md:w-[35vw]'>Wide Range in all type stationary items</h1>
          <p className='mt-1 lg:text-[1.3vw] text-[1.9vw] text-gray-800 lg:w-[28.8vw] w-[22vw]'>Lorem ipsum dolor sit ametconsectetur, adipisicing elit. Qui quibusdam amet rerum maxime velit.sjsujf safas </p>
          </div>
          <div>
          <a href="#ourProducts"><button className='bg-green-900 text-white hover:bg-green-700 lg:h-[4vw] h-[4.8vw] lg:w-[9vw] w-[13vw] rounded-md'>View All</button></a> 
          </div>
          </div>
         </div>
          <img src={allthings} className='mix-blend-multiply lg:w-[24vh] w-[20vh] lg:h-[15vw] h-[13vw] absolute mt-24 lg:mt-36 left-[35%] lg:left-[30%]' alt=""/>
        </div>

                
        <div className='bg-purple-300 h-[52vh] w-[50%] p-3 rounded-xl flex'>
         <div className='flex flex-col ml-7 '>
          <div className='flex flex-col gap-[1.5vw] lg:gap-[3vw]'>
          <div>
          <h1 className='lg:text-[2.5vw]  mt-5 text-[2.3vw] md:w-[35vw]'>Wide Range in all type stationary items</h1>
          <p className='mt-1 lg:text-[1.3vw] text-[1.9vw] text-gray-800 lg:w-[28.8vw] w-[22vw]'>Lorem ipsum dolor sit ametconsectetur, adipisicing elit. Qui quibusdam amet rerum maxime velit.sjsujf safas </p>
          </div>
          <div>
          <a href="#ourProducts"><button className='bg-purple-900 text-white hover:bg-purple-700 lg:h-[4vw] h-[4.8vw] lg:w-[9vw] w-[13vw] rounded-md'>View All</button></a> 
          </div>
          </div>
         </div>
          <img src={stationary} className='mix-blend-multiply lg:w-[24vh] w-[20vh] lg:h-[15vw] h-[13vw] absolute lg:mt- mt-24 right-[8%] lg:right-[9%]' alt=""/>
        </div>
    </div>
  )
}
export default DoubleCom