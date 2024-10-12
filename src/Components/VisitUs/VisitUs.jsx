import React from 'react';

const VisitUs = () => {
  return (
    <div className='font-outfit mt-10 w-full px-4 lg:px-8 xl:px-10' id='map'>
      {/* Title */}
      <h1 className='text-4xl md:text-5xl text-center mb-4 md:mb-6'>
        Visit Our Store
      </h1>

      {/* Address */}
      <p className='text-lg text-gray-500 text-center leading-snug mb-6 md:mb-8'>
        Visit Our Store @ Gugai,<br />
        Old Bus Stand, Salem - 636016
      </p>

      {/* Google Maps Embed */}
      <iframe 
        title="Google Map of Krish Stationery" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.579880200074!2d78.16752009999999!3d11.653256699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1c471ba716d%3A0x4bd10ef3d60928c7!2sKRISH%20STATIONERY!5e0!3m2!1sen!2sin!4v1725647280202!5m2!1sen!2sin"
        className='w-full h-[40vh] md:h-[50vh] lg:h-[60vh] rounded-lg mb-6'  // Adjusted height
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default VisitUs;
