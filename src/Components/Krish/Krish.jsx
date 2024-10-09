import React from 'react'
import krish from '../../Assets/krish_wall.jpg'

const Krish = () => {
  return (
    <div className='xl:h-[45vw] lg:h-[50vw] md:h-[51vw] w-[115%] lg:-ml-7 xl:-ml-2 md:w-screen h-[120vw] overflow-hidden  md:mb-10' id='krishImage'>
        <img  className='lg:w-[90vw] md:w-[90vw] h-[90vh]  lg:ml-20 md:ml-10 ml-4 rounded-1xl' src={krish} alt="" srcset="" />
    </div>
  )
}

export default Krish
