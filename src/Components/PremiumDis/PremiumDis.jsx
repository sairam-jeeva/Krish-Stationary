import React from 'react' 
import artskit from '../../Assets/artskit.jpeg'
import schoolkit from  '../../Assets/schoolkit.jpeg'
import officekit from  '../../Assets/officekit.jpeg'

const PremiumDis = () => {
  return (
    <div className='p-10 font-outfit' id='premiumDis'>
         <div>
         <h1 className='text-5xl text-center'>Premium Offers</h1>
         <div className='flex justify-center mt-4 p-10 gap-12'>

         <div className='h-5/6 bg-purple-100  text-center rounded-lg border-purple-900 border-2 w-80'>
        <button className='absolute ml-8 bg-purple-900 text-white p-3 rounded-md font-bold text-2xl'>Just at 99</button> 
        <div className='p-10'>
        <img src={schoolkit} className='mix-blend-multiply w-32 ml-10 mt-3 absolute'  alt="" /> 
        <h2 className='text-3xl text-left font-bold mt-36 ml-6'>Educational kit</h2>
        <ul className='mt-5 flex flex-col gap-3 text-left ml-5 text-gray-700'>
        <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>
        <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>  
        <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>
        <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>
        </ul> 
        <button className='mt-10 text-center hover:bg-purple-600 bg-purple-900 p-3 ml-12 rounded-md flex font-bold text-white text-2xl'>Buy Now</button> 
        </div>
        </div>

        <div className='h-5/6 bg-customColor mt-10 text-center rounded-lg border-green-900 border-2 w-80'>
        <button className='absolute ml-7 bg-green-900 text-white p-3  font-bold text-2xl'>Just at 99</button> 
        <div className='p-10'>
        <img src={schoolkit} className='mix-blend-multiply w-32 ml-10 mt-3 absolute'  alt="" /> 
        <h2 className='text-3xl text-left font-bold mt-36 ml-6'>Educational kit</h2>
        <ul className='mt-5 flex flex-col gap-3 text-left ml-5  text-gray-700'>
        <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>
        <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>
        <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>
        <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>
        </ul> 
        <button className='mt-10 text-center bg-green-900 hover:bg-green-600 text-white  p-3 ml-12 rounded-md flex font-bold  text-2xl'>Buy Now</button> 
        </div>
        </div>

        <div className='h-5/6 bg-purple-100  text-center border-purple-900 rounded-lg border-2 w-80'>
        <button className='absolute ml-8 bg-purple-900 text-white p-3 rounded-md font-bold text-2xl'>Just at 99</button> 
        <div className='p-10'>
        <img src={schoolkit} className='mix-blend-multiply w-32 ml-10 mt-3 absolute'  alt="" /> 
        <h2 className='text-3xl text-left font-bold mt-36 ml-6'>Educational kit</h2>
        <ul className='mt-5 flex flex-col gap-3 text-left ml-5  text-gray-700'>
                  <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>
                  <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>
                  <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>
                  <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>
        </ul> 
        <button className='mt-10 text-center hover:bg-purple-600 bg-purple-900 p-3 ml-12 rounded-md flex font-bold text-white text-2xl'>Buy Now</button> 
        </div>
        </div>

        </div>
        </div>
    </div>
  )
}
export default PremiumDis
