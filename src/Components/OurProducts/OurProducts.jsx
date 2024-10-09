import React from 'react'
import allthing from '../../Assets/allthings.jpg'
// import book from '../../Assets/book.jpeg'
// import stationary from '../../Assets/stationary.jpeg'
// import rubixcube from '../../Assets/rubix_cube.jpg'

const OurProducts = () => {
  return (
    <div className='font-outfit' id='ourProducts'>
        <h1 className='xl:text-6xl text-[40px] ml-10 p-2 md:p-4 mt-10  md:ml-8 xl:ml-14 text-center mb-5'>Our Products</h1>

      <div className='md:flex grid grid-cols-2 lg:gap-x-2 md:gap-x-2 gap-x-[27%] gap-y-5 p-5 lg:gap-[3vw] md:ml-7 -ml-1 xl:ml-10 gap-1'>

      <div className='xl:h-[450px] lg:h-[330px] md:h-[35vw] h-[285px] md:p-3 p-1.5 w-[53vw] md:w-[21.5vw] lg:w-[24%] cursor-pointer justify-center text-center rounded-lg border-gray-500 border-2 '>
      <p className='border-2 border-green-500 bg-customColor xl:text-[1.5vw] lg:text-[18px] md:p-1 lg:w-[9vw] md:w-[10vw] w-[23vw] h-8 lg:h-[40px] xl:h-[3vw] absolute float-right rounded-lg xl:-mt-[1vw] lg:-mt-[1.4vw] md:-mt-[13px] md:-ml-[13px] -mt-[2vw] -ml-[2.1vw] xl:-ml-[1vw] lg:-ml-[1.3vw]'>30% Off</p>
      <img src={allthing} className='md:h-[10vw] md:w-[40vw] h-[70px] mt-9 rounded-3xl mix-blend-multiply md:ml-0 ml-[18%]' alt="" /> 
      <h2 className='md:text-[2vw] lg:text-[25px] xl:text-[35px] xl:mt-5 text-[20px] mt-3'>Geometry Box</h2>
      <p className='mt-1 text-gray-500 text-[4vw] md:text-[1.7vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className='md:mt-[10px] md:ml-[39px] mt-[20px]  ml-[27%] lg:ml-[6vw] lg:mt-5 text-center flex font-bold text-[20px] md:text-[2.2vw] text-purple-700'>RS.100 <sub><strike className='ml-2 text-[13px] md:text-[1.4vw] text-black'>Rs.150</strike></sub></button>  
      </div>
      <div className=' xl:h-[450px] lg:h-[330px] md:h-[35vw] h-[285px] md:p-3 p-1.5 w-[53vw] md:w-[21.5vw] lg:w-[24%] cursor-pointer justify-center text-center rounded-lg border-gray-500 border-2 '>
      <p className='border-2 border-green-500 bg-customColor xl:text-[1.5vw] lg:text-[18px] md:p-1 lg:w-[9vw] md:w-[10vw] w-[23vw] h-8 lg:h-[40px] xl:h-[3vw] absolute float-right rounded-lg xl:-mt-[1vw] lg:-mt-[1.4vw] md:-mt-[13px] md:-ml-[13px] -mt-[2vw] -ml-[2.1vw] xl:-ml-[1vw] lg:-ml-[1.3vw]'>30% Off</p>
      <img src={allthing} className='md:h-[10vw] md:w-[40vw] h-[70px] mt-9 rounded-3xl mix-blend-multiply md:ml-0 ml-[18%]' alt="" /> 
      <h2 className='md:text-[2vw] lg:text-[25px] xl:text-[35px] xl:mt-5 text-[20px]  mt-3'>Geometry Box</h2>
      <p className='mt-1 text-gray-500 text-[4vw] md:text-[1.7vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className='md:mt-[10px] md:ml-[39px] mt-[20px] ml-[27%] lg:ml-[6vw] lg:mt-5 text-center flex font-bold text-[20px] md:text-[2.2vw] text-purple-700'>RS.100 <sub><strike className='ml-2 text-[13px] md:text-[1.4vw] text-black'>Rs.150</strike></sub></button>  
      </div>

      <div className='xl:h-[450px] lg:h-[330px] md:h-[35vw] h-[285px] md:p-3 p-1.5 w-[53vw] md:w-[21.5vw] lg:w-[24%] cursor-pointer justify-center text-center rounded-lg border-gray-500 border-2 '>
      <p className='border-2 border-green-500 bg-customColor xl:text-[1.5vw] lg:text-[18px] md:p-1 lg:w-[8vw] md:w-[10vw] w-[23vw] h-8 lg:h-[40px] xl:h-[3vw] absolute float-right rounded-lg xl:-mt-[1vw] lg:-mt-[1.4vw] -mt-[2vw] md:-mt-[13px] md:-ml-[13px] -ml-[2.1vw] xl:-ml-[1vw] lg:-ml-[1.3vw]'>30% Off</p>
      <img src={allthing} className='md:h-[10vw] md:w-[40vw] h-[70px] mt-9 rounded-3xl mix-blend-multiply md:ml-0 ml-[18%]' alt="" /> 
      <h2 className='md:text-[2vw] lg:text-[25px] xl:text-[35px] xl:mt-5 text-[20px] mt-3'>Geometry Box</h2>
      <p className='mt-1 text-gray-500 text-[4vw] md:text-[1.7vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className='md:mt-[10px] md:ml-[39px] mt-[20px] ml-[27%] lg:ml-[6vw] lg:mt-5 text-center flex font-bold text-[20px] md:text-[2.2vw] text-purple-700'>RS.100 <sub><strike className='ml-2 text-[13px] md:text-[1.4vw] text-black'>Rs.150</strike></sub></button>  
      </div>

      <div className='xl:h-[450px] lg:h-[330px] md:h-[35vw] h-[285px] md:p-3 p-1.5 w-[53vw] md:w-[21.5vw] lg:w-[24%] cursor-pointer justify-center text-center rounded-lg border-gray-500 border-2 '>
      <p className='border-2 border-green-500 bg-customColor xl:text-[1.5vw] lg:text-[18px] md:p-1 lg:w-[8vw] md:w-[10vw] w-[23vw] h-8 lg:h-[40px] xl:h-[3vw] absolute float-right rounded-lg xl:-mt-[1vw] lg:-mt-[1.4vw] -mt-[2vw] -ml-[2.1vw] md:-mt-[13px] md:-ml-[13px] xl:-ml-[1vw] lg:-ml-[1.3vw]'>30% Off</p>
      <img src={allthing} className='md:h-[10vw] md:w-[40vw] h-[70px] mt-9 rounded-3xl mix-blend-multiply md:ml-0 ml-[18%]' alt="" />
      <h2 className='md:text-[2vw] lg:text-[25px] xl:text-[35px] xl:mt-5 text-[20px] mt-3'>Geometry Box</h2>
      <p className='mt-1 text-gray-500 text-[4vw] md:text-[1.7vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className='md:mt-[10px] md:ml-[39px] mt-[20px] ml-[27%] lg:ml-[6vw] lg:mt-5 text-center flex font-bold text-[20px] md:text-[2.2vw] text-purple-700'>RS.100 <sub><strike className='ml-2 text-[13px] md:text-[1.4vw] text-black'>Rs.150</strike></sub></button>  
      </div>
      </div>

      <div className='md:flex grid grid-cols-2 lg:gap-x-2 md:gap-x-2 gap-x-[27%]  gap-y-5 p-5 lg:gap-[3vw] md:ml-7 xl:ml-10 gap-2 -ml-1'>

      <div className='xl:h-[450px] lg:h-[330px] md:h-[35vw] h-[285px] md:p-3 p-1.5 w-[53vw] md:w-[21.5vw] lg:w-[24%] cursor-pointer justify-center text-center rounded-lg border-gray-500 border-2 '>
      <p className='border-2 border-green-500 bg-customColor xl:text-[1.5vw] lg:text-[18px] md:p-1 lg:w-[8vw] md:w-[10vw] w-[23vw] h-8 lg:h-[40px] xl:h-[3vw] absolute float-right rounded-lg xl:-mt-[1vw] lg:-mt-[1.4vw] -mt-[2vw] -ml-[2.1vw] md:-mt-[13px] md:-ml-[13px] xl:-ml-[1vw] lg:-ml-[1.3vw]'>30% Off</p>
      <img src={allthing} className='md:h-[10vw] md:w-[40vw] h-[70px] mt-9 rounded-3xl mix-blend-multiply md:ml-0 ml-[18%]' alt="" />
      <h2 className='md:text-[2vw] lg:text-[25px] xl:text-[35px] xl:mt-5 text-[20px] mt-3'>Geometry Box</h2>
      <p className='mt-1 text-gray-500 text-[4vw] md:text-[1.7vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className='md:mt-[10px] md:ml-[39px] mt-[20px] ml-[27%] lg:ml-[6vw] lg:mt-5 text-center flex font-bold text-[20px] md:text-[2.2vw] text-purple-700'>RS.100 <sub><strike className='ml-2 text-[13px] md:text-[1.4vw] text-black'>Rs.150</strike></sub></button>  
      </div>
      <div className='xl:h-[450px] lg:h-[330px] md:h-[35vw] h-[285px] md:p-3 p-1.5 w-[53vw] md:w-[21.5vw] lg:w-[24%] cursor-pointer justify-center text-center rounded-lg border-gray-500 border-2 '>
      <p className='border-2 border-green-500 bg-customColor xl:text-[1.5vw] lg:text-[18px] md:p-1 lg:w-[8vw] md:w-[10vw] w-[23vw] h-8 lg:h-[40px] xl:h-[3vw] absolute float-right rounded-lg xl:-mt-[1vw] lg:-mt-[1.4vw] -mt-[2vw] -ml-[2.1vw] md:-mt-[13px] md:-ml-[13px] xl:-ml-[1vw] lg:-ml-[1.3vw]'>30% Off</p>
      <img src={allthing} className='md:h-[10vw] md:w-[40vw] h-[70px] mt-9 rounded-3xl mix-blend-multiply md:ml-0 ml-[18%]' alt="" />
      <h2 className='md:text-[2vw] lg:text-[25px] xl:text-[35px] xl:mt-5 text-[20px] mt-3'>Geometry Box</h2>
      <p className='mt-1 text-gray-500 text-[4vw] md:text-[1.7vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className='md:mt-[10px] md:ml-[39px] mt-[20px] ml-[27%] lg:ml-[6vw] lg:mt-5 text-center flex font-bold text-[20px] md:text-[2.2vw] text-purple-700'>RS.100 <sub><strike className='ml-2 text-[13px] md:text-[1.4vw] text-black'>Rs.150</strike></sub></button>  
      </div>
            
      <div className='xl:h-[450px] lg:h-[330px] md:h-[35vw] h-[285px] md:p-3 p-1.5 w-[53vw] md:w-[21.5vw] lg:w-[24%] cursor-pointer justify-center text-center rounded-lg border-gray-500 border-2 '>
      <p className='border-2 border-green-500 bg-customColor xl:text-[1.5vw] lg:text-[18px] md:p-1 lg:w-[8vw] md:w-[10vw] w-[23vw] h-8 lg:h-[40px] xl:h-[3vw] absolute float-right rounded-lg xl:-mt-[1vw] lg:-mt-[1.4vw] -mt-[2vw] -ml-[2.1vw] md:-mt-[13px] md:-ml-[13px] xl:-ml-[1vw] lg:-ml-[1.3vw]'>30% Off</p>
      <img src={allthing} className='md:h-[10vw] md:w-[40vw] h-[70px] mt-9 rounded-3xl mix-blend-multiply md:ml-0 ml-[18%]' alt="" />
      <h2 className='md:text-[2vw] lg:text-[25px] xl:text-[35px] xl:mt-5 text-[20px] mt-3'>Geometry Box</h2>
      <p className='mt-1 text-gray-500 text-[4vw] md:text-[1.7vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className='md:mt-[10px] md:ml-[39px] mt-[20px] ml-[27%] lg:ml-[6vw] lg:mt-5 text-center flex font-bold text-[20px] md:text-[2.2vw] text-purple-700'>RS.100 <sub><strike className='ml-2 text-[13px] md:text-[1.4vw] text-black'>Rs.150</strike></sub></button>  
      </div>

      <div className='xl:h-[450px] lg:h-[330px] md:h-[35vw] h-[285px] md:p-3 p-1.5 w-[53vw] md:w-[21.5vw] lg:w-[24%] cursor-pointer justify-center text-center rounded-lg border-gray-500 border-2 '>
      <p className='border-2 border-green-500 bg-customColor xl:text-[1.5vw] lg:text-[18px] md:p-1 lg:w-[8vw] md:w-[10vw] w-[23vw] h-8 lg:h-[40px] xl:h-[3vw] absolute float-right rounded-lg xl:-mt-[1vw] lg:-mt-[1.4vw] -mt-[2vw] -ml-[2.1vw] md:-mt-[13px] md:-ml-[13px] xl:-ml-[1vw] lg:-ml-[1.3vw]'>30% Off</p>
      <img src={allthing} className='md:h-[10vw] md:w-[40vw] h-[70px] mt-9 rounded-3xl mix-blend-multiply md:ml-0 ml-[18%]' alt="" />
      <h2 className='md:text-[2vw] lg:text-[25px] xl:text-[35px] xl:mt-5 text-[20px] mt-3'>Geometry Box</h2>
      <p className='mt-1 text-gray-500 text-[4vw] md:text-[1.7vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className='md:mt-[10px] md:ml-[39px] mt-[20px] ml-[27%] lg:ml-[6vw] lg:mt-5  text-center flex font-bold text-[20px] md:text-[2.2vw] text-purple-700'>RS.100 <sub><strike className='ml-2 text-[13px] md:text-[1.4vw] text-black'>Rs.150</strike></sub></button>  
      </div>
      </div>    
    </div>
  )
}
export default OurProducts
