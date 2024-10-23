import { FaTools, FaBolt, FaHome, FaStar, FaStarHalfAlt } from "react-icons/fa"; 
import electricalLogo from '../../Assets/Krish_elec_logo.jpg';
import foundationLogo from '../../Assets/Krish_foundation.webp'; // Foundation logo

const KrishElectrical = () => {
  const services = [
    {
      name: "Krish Mixer 750W Motors + 2 Jars, 7 Solar Motors",
      description:
        "Includes a mixer of 750W motor, 3-speed, 4.5-star rating for power consumption with two jars and seven solar motors. Comes with a one-year service warranty.",
      icon: <FaTools />,
      price: 2500,
    },
    {
      name: "AC, Fridge, Refrigerator, Washing Machine Services",
      description:
        "Professional servicing of all major home appliances, including air conditioners, refrigerators, and washing machines.",
      icon: <FaBolt />,
    },
    {
      name: "Home Appliances",
      description:
        "Range of appliances including Fan, Mixy, Water Heater, Cooker, Grinder, Gas Stove, and Tower Fan.",
      icon: <FaHome />,
    },
  ];

  return (
    <div className="font-outfit w-full bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      
      {/* Krish Electricals Section */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="relative">
          <img
            src={electricalLogo}
            alt="Krish Electrical Logo"
            className="h-40 w-40 object-contain rounded-full border-purple-500 shadow-xl transition-transform duration-500 transform hover:scale-105"
          />
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          Krish Electrical
        </h1>
        <p className="text-gray-600 mt-4 text-lg sm:text-xl md:text-2xl max-w-5xl">
          Welcome to Krish Electrical, a trusted name in delivering cutting-edge electrical appliances and exceptional service solutions. Our team of experienced professionals is dedicated to offering reliable, energy-efficient products and ensuring the smooth functioning of your home and office appliances.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center bg-white p-6 sm:p-8 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:bg-gradient-to-br from-white to-blue-50"
          >
            <div className="text-purple-600 mb-4 text-4xl sm:text-5xl">
              {service.icon}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-3">
              {service.name}
            </h2>
            <p className="text-gray-600 text-center text-base sm:text-lg mb-6">
              {service.description}
            </p>

            {/* Star Rating */}
            {service.name === "Krish Mixer 750W Motors + 2 Jars, 7 Solar Motors" && (
              <div className="flex justify-center items-center mb-4">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStarHalfAlt className="text-yellow-500" />
              </div>
            )}

            {service.price && (
              <div className="text-lg font-semibold text-blue-700 mb-4">
                Rs.{service.price}
              </div>
            )}
            
            <button className="mt-auto bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-purple-500 transition duration-300 transform hover:scale-105">
              <a href="https://wa.me/message/BNVH64UXYSWZF1" target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </button>
            <div className="absolute top-0 left-0 w-full h-full bg-purple-100 opacity-0 group-hover:opacity-25 transition duration-300 rounded-lg"></div>
          </div>
        ))}
      </div>

      {/* Krish Foundation Section */}
      <div className="mt-16 flex flex-col items-center text-center">
        <div className="relative">
          <img
            src={foundationLogo}
            alt="Krish Foundation Logo"
            className="h-40 w-40 object-contain rounded-full border-blue-500 shadow-xl transition-transform duration-500 transform hover:scale-105"
          />
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          Krish Foundation
        </h1>
        <p className="text-gray-600 mt-4 text-lg sm:text-xl md:text-2xl max-w-5xl">
          Empowering communities through sustainable and impactful projects. We believe in giving back to the community. Through the Krish Foundation, we are dedicated to supporting sustainable development and fostering growth in underserved regions.  Our focus lies in promoting renewable energy solutions, providing educational support, and empowering local entrepreneurs. Join us in making a positive difference!
        </p>
      </div>
    </div>
  );
};

export default KrishElectrical;
