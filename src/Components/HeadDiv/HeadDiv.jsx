import React from 'react' 
import rubix from '../../Assets/rubix_cube.jpg'

const HeadDiv = () => {
  return (
    
  <div className='md:mt-[3%] mt-[8%] md:ml-10 lg:ml-[7.0%] ml-[8px] lg:w-[85vw] w-[115%] md:w-[90vw] h-screen md:h-[23rem] bg-customColor place-content-center p-[6%] md:p-[3%] rounded-3xl font-outfit' id='headerdiv'> 
        <div className='flex'>  
        <div className='flex flex-col lg:w-[100%] md:w-[100%] w-[100%] -mt-10 md:h-[20%]'>
        <h2 className='text-[35px] md:text-[35px] md:mt-10'>Write your story, our stationery fuels your imagination</h2>
        <p className='text-lg mt-5 w-[100%] md:w-[70%] text-gray-800'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam ex, totam aliquid accusamus delectus nulla architecto illo alias</p>
        </div>
        <img src={rubix} className='md:h-[38vh] xl:h-[240px] lg:h-[230px] h-[40vw] contrast-200 absolute lg:translate-y-[-40px] lg:right-[12%] md:right-[7%] xl:right-[10%] -right-[15%] mt-60 md:mt-24 xl:mt-5  mix-blend-multiply' alt="" />
        </div>
        <div className=''>
        <a href="#ourProducts"><button className="bg-green-900 w-32 lg:mt-10 mt-10 ml-1  h-12 hover:bg-green-700 rounded-lg text-white">Shop Now</button></a>      
        </div>
        </div>  
  )
}

export default HeadDiv