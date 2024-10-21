import React from 'react';
import krish from '../../Assets/krish_wall.jpg';

const Krish = () => {
  return (
    <div
      className='w-full h-[60vw] md:h-[50vw] lg:h-[45vw] xl:h-[40vw] relative overflow-hidden flex justify-center items-center bg-gray-100'
      id='krishImage'
    >
      <img
        className='max-w-full w-[95vw] h-auto sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105'
        src={krish}
        alt='Krish Wall'
      />
    </div>
  );
};

export default Krish;
