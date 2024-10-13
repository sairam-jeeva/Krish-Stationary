import React from 'react';
import founderImage from '../../Assets/founder.jpg'; // Update the path to your image location

const Founder = () => {
  return (
    <div className="container mx-auto p-6 md:p-10 lg:p-16 xl:p-24">
      <div className="relative flex flex-col lg:flex-row items-center justify-center bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        {/* Founder Image */}
        <div className="w-full md:w-1/2 lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
          <img 
            src={founderImage} 
            alt="Founder" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* About the Founder */}
        <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-16 bg-white flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            About the Founder
          </h2>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl mb-4 leading-relaxed">
            Barath U is the founder of TuneUp Technologies, a technical training and SaaS solutions company based in Salem, Tamil Nadu.
            With a passion for technology and a vision for transforming education and corporate training, Barath has developed a suite of
            innovative solutions that aim to bridge the skills gap and empower the workforce.
          </p>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
            His latest product, TaskUp, is designed to streamline corporate hiring assessments, providing a seamless and anti-malpractice
            experience for candidates and recruiters alike. Barath's journey as a startup founder is fueled by a dedication to excellence,
            continuous learning, and making a positive impact in the tech industry.
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
