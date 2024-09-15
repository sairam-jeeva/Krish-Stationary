import React from 'react'
import krish from '../../Assets/krish_wall.jpg'

const Krish = () => {
  return (
    <div className='lg:h-[50vw] h-[51vw]  overflow-hidden mb-10' id='krishImage'>
        <img  className='lg:w-[90vw] w-[90%] lg:ml-[5vw] ml-10 rounded-2xl' src={krish} alt="" srcset="" />
    </div>
  )
}

export default Krish