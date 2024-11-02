import React from 'react';
import krish from '../../Assets/krish_wall.jpg';

const Krish = () => {
  return (
    <div
      className='w-full h-[300px] md:h-[50vw] lg:h-[45vw] xl:h-[40vw] relative overflow-hidden flex justify-center items-center bg-red-900'
      id='krishImage'
    >
      <img
        className='max-w-full w-full h-full object-fill rounded-lg shadow-md transition-transform duration-300 hover:scale-105'
        src={krish}
        alt='Krish Wall'
      />
    </div>
  );
};

export default Krish;
