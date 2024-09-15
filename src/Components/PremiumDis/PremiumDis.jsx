import React from 'react' 
import artskit from '../../Assets/artskit.jpeg'
import schoolkit from  '../../Assets/schoolkit.jpeg'
import officekit from  '../../Assets/officekit.jpeg'

const PremiumDis = () => {
  return (
    <div className='p-[30px] font-outfit' id='premiumDis'>
         <div>
         <h1 className='text-5xl text-center'>Premium Offers</h1>
         <div className='flex justify-center ml-[2vw] lg:mt-4 -mt-3 p-10 gap-3 lg:gap-12'>

        <div className='lg:h-[480px] h-[53vw] bg-purple-100  rounded-lg border-purple-900 border-2 '>
        <button className='absolute  bg-purple-900 text-white p-2 rounded-md font-bold lg:text-[1.6vw] text-[2vw] -mt-0.5 '>Just at 99</button> 
        <div className='lg:p-10 p-8'>
        <img src={schoolkit} className='mix-blend-multiply lg:w-32 w-[13vw] ml-5 lg:ml-10 -mt-4 absolute'  alt="" /> 
        <h2 className='text-[4vh] text-center font-bold mt-[10vw] lg:mt-31 ml-6'>Educational kit</h2>
        <ul className='mt-5 flex flex-col gap-3 text-left ml-5 text-gray-700'>
        <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>
        <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>  
        <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>
        <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>
        </ul> 
        <button className='mt-6  ml-6  lg:ml-10 hover:bg-purple-600 bg-purple-900 justify-center text-center w-[13vw] lg:w-[10vw] h-[40px] rounded-md font-bold text-white text-[17px]'>Buy Now</button> 
        </div>
        </div>
        <div className='lg:h-[480px] h-[53vw] bg-green-100 mt-10 rounded-lg border-green-900 border-2 '>
        <button className='absolute  bg-green-900 text-white p-2 rounded-md font-bold lg:text-[1.6vw] text-[2vw] -mt-0.5 '>Just at 99</button> 
        <div className='lg:p-10 p-8'>
        <img src={schoolkit} className='mix-blend-multiply lg:w-32 w-[13vw] ml-5 lg:ml-10 -mt-4 absolute'  alt="" /> 
        <h2 className='text-[4vh] text-center font-bold mt-[10vw] lg:mt-31 ml-6'>Educational kit</h2>
        <ul className='mt-5 flex flex-col gap-3 text-left ml-5 text-gray-700'>
        <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>
        <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>  
        <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>
        <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>
        </ul> 
        <button className='mt-6 ml-6 lg:ml-10 hover:bg-green-600 bg-green-900 justify-center text-center w-[13vw] lg:w-[10vw] h-[40px] rounded-md font-bold text-white text-[17px]'>Buy Now</button> 
        </div>
        </div>

        <div className='lg:h-[480px] h-[53vw] bg-purple-100  rounded-lg border-purple-900 border-2 '>
        <button className='absolute  bg-purple-900 text-white p-2 rounded-md font-bold lg:text-[1.6vw] text-[2vw] -mt-0.5 '>Just at 99</button> 
        <div className='lg:p-10 p-8'>
        <img src={schoolkit} className='mix-blend-multiply lg:w-32 w-[13vw] ml-5 lg:ml-10 -mt-4 absolute'  alt="" /> 
        <h2 className='text-[4vh] text-center font-bold mt-[10vw] lg:mt-31 ml-6'>Educational kit</h2>
        <ul className='mt-5 flex flex-col gap-3 text-left ml-5 text-gray-700'>
        <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>
        <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>  
        <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>
        <li className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pencil - 4</li>
        </ul> 
        <button className='mt-6 ml-6 lg:ml-10 hover:bg-purple-600 bg-purple-900 justify-center text-center w-[13vw] lg:w-[10vw] h-[40px] rounded-md font-bold text-white text-[17px]'>Buy Now</button> 
        </div>
        </div>

        </div>
        </div>
    </div>
  )
}
export default PremiumDis
