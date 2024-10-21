import React from 'react';
import founderImage from '../../Assets/founder.jpg'; // Update the path to your founder's image location
import mdImage from '../../Assets/managing_d.jpg'; // Update the path to the Managing Director's image location
import jr_mdImage from '../../Assets/jr_md.jpg'; // Update the path to the Junior Managing Director's image location

const Team = () => {
  return (
    <div className="container mx-auto p-6 md:p-10 lg:p-16 xl:p-24" id='founder'>
      {/* Founder Section */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center bg-gray-100 rounded-lg shadow-lg overflow-hidden mb-12">
        <div className="w-full md:w-1/2 lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
          <img 
            src={founderImage} 
            alt="Founder" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-16 bg-white flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            About the Founder
          </h2>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl mb-4 leading-relaxed">
            G. Naveen is a highly skilled professional with a diploma in Electrical and Electronics Engineering and a diploma in Computer Applications. He has extensive experience in the public service sector, having worked as a Gold Appraiser and providing Electrical and Refrigeration services since 2012.
          </p>
          <div className="bg-yellow-100 p-4 rounded-lg mb-6">
            <h3 className="text-2xl font-bold text-yellow-600 mb-2">
              Community Leader & Rotaract Member
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Naveen is an active member of the <strong>Rotaract Club of Salem Gugai</strong> and currently serves as the <strong>Community Service Chair for the 2024-2025 term</strong>. His dedication to community service and leadership plays a vital role in his efforts to uplift and support local communities.
            </p>
          </div>
        </div>
      </div>

      {/* Managing Director and Junior Managing Director Section */}
      <div className="mb-12" id='team'>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-gray-800">
          Our Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Managing Director */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img 
              src={mdImage} 
              alt="Managing Director" 
              className="w-full h-[300px] object-contain rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-center text-gray-800">Managing Director</h3>
            <p className="text-gray-600 text-center">Responsible for strategic decisions and guiding the company's vision forward.</p>
          </div>

          {/* Junior Managing Director */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img 
              src={jr_mdImage} 
              alt="Junior Managing Director" 
              className="w-full h-[300px] object-contain rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-center text-gray-800">Junior Managing Director</h3>
            <p className="text-gray-600 text-center">Supports the Managing Director in daily operations and plays a key role in team management.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
