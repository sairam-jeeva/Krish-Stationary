import React from 'react' 
import rubix from '../../Assets/rubix_cube.jpg'

const HeadDiv = () => {
  return (
    
    <div className='mt-[3%] lg:ml-[7.5%] ml-[7%] lg:w-[85vw] w-[90vw] h-[23rem] bg-customColor place-content-center p-[3%] rounded-3xl font-outfit' id='headerdiv'> 
        <div className='flex'>  
        <div className='flex flex-col lg:w-[70%] w-[80%] h-[20%]'>
        <h2 className='text-4xl '>Write your story, our stationery fuels your imagination.</h2>
        <p className='text-lg mt-5 w-[86%] text-gray-800'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam ex, totam aliquid accusamus delectus nulla architecto illo alias</p>
        </div>
        <img src={rubix} className='h-[40vh] contrast-200 absolute lg:mb-10 lg:right-[15%] right-[6%] lg:mt-0 mt-20 mix-blend-multiply' alt="" />
        </div>
        <div className=''>
        <a href="#ourProducts"><button className="bg-green-900 w-32 lg:mt-10 mt-14 ml-1 h-12 hover:bg-green-700 rounded-lg text-white">Shop Now</button></a>      
        </div>
        </div>  
  )
}

export default HeadDiv