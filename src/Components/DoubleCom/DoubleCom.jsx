import React from 'react'
import allthings from '../../Assets/allthings.jpg'
import stationary from '../../Assets/stationary.jpeg'
const DoubleCom = () => {
  return (
    <div className='flex gap-5 p-10 w-11/12 ml-10 font-outfit' id='doubleCom'>
        <div className='bg-customColor w-3/6 p-8 rounded-3xl flex'>
          <div className='w-5/6 '>
        <h1 className='text-3xl'>Wide Range in all type stationary items</h1>
            <p className='mt-1 text-gray-800'>Lorem ipsum dolor sit ametconsectetur, adipisicing elit. Qui quibusdam amet rerum maxime velit.</p>
           <a href="#ourProducts"><button className='bg-green-900 text-white hover:bg-green-700 h-14 w-28 rounded-xl mt-5'>View All</button></a> 
            </div>
            <img src={allthings} className='mix-blend-multiply h-32 w-36 mt-5 float-right' alt=""/>
        </div>
        <div className='bg-purple-100 w-3/6 p-8 rounded-3xl flex'>
        <div className='relative'>
          <h1 className='text-3xl'>Available all types of School books</h1>
            <p className='mt-1 text-gray-800'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum repudiandae et quis hic quibusdam </p>
           <a href="#ourProducts2"><button className='bg-purple-900 hover:bg-purple-600 text-white h-14 w-28 rounded-xl mt-5'>View All</button></a> 
        </div>
            <img src={stationary} alt="" className='mix-blend-multiply h-32  '/>
        </div>
    </div>
  )
}
export default DoubleCom