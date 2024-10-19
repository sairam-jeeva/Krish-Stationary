import React from 'react';
import founderImage from '../../Assets/founder.jpg'; // Update the path to your image location

const Founder = () => {
  return (
    <div className="container mx-auto p-6 md:p-10 lg:p-16 xl:p-24" id='founder'>
      <div className="relative flex flex-col lg:flex-row items-center justify-center bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        {/* Founder Image */}
        <div className="w-full md:w-1/2 lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
          <img 
            src={founderImage} 
            alt="Founder" 
            className="w-full h-full object-fit"
          />
        </div>
        {/* About the Founder */}
        <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-16 bg-white flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            About the Founder
          </h2>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl mb-4 leading-relaxed">
            G. Naveen is a highly skilled professional with a diploma in Electrical and Electronics Engineering and a diploma in Computer Applications. He has a wealth of experience in the public service sector, having worked as a Gold Appraiser and providing Electrical and Refrigeration services since 2012.
          </p>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
            With two branches in Salem and Dharmapuri, Naveen's expertise in both technical and appraisal services showcases his commitment to quality and customer satisfaction. His diverse skill set empowers him to deliver exceptional services and support the community in various capacities.
          </p>
          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://wa.me/yourwhatsapplink" // Replace with actual WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-500 text-2xl transition-colors duration-300"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://instagram.com/yourinstagram" // Replace with actual Instagram link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 text-2xl transition-colors duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://youtube.com/youryoutubechannel" // Replace with actual YouTube link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-500 text-2xl transition-colors duration-300"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        {/* Overlay for Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-40 lg:opacity-30"></div>
      </div>
    </div>
  );
};

export default Founder;
