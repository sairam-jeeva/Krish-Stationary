import React from 'react' 
import rubix from '../../Assets/rubix_cube.jpg'

const HeadDiv = () => {
  return (
    <div className='w-10/12 p-10 bg-customColor justify-center rounded-3xl mt-14 ml-24 h-96 font-outfit' id='headerdiv'> 
         <img src={rubix} className='absolute h-72 right-40 contrast-200 mt-1 mix-blend-multiply' alt="" />
        <h2 className='text-5xl w-8/12 ml-5'>Write your story, our stationery fuels your imagination.</h2>
        <p className='text-lg w-8/12 ml-5 mt-8 text-gray-800'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam ex, totam aliquid accusamus delectus nulla architecto illo alias</p>
      <a href="#ourProducts"><button className="bg-green-900 w-32 mt-5 ml-5 hover:bg-green-700 h-12 rounded-lg text-white hover:bg-white">Shop Now</button></a>   
    </div>
  )
}

export default HeadDiv