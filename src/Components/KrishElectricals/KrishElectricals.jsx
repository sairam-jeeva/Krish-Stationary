import { FaTools, FaBolt, FaHome } from "react-icons/fa"; 
import logo from '../../Assets/Krish_elec_logo.jpg'; 

const KrishElectrical = () => {
 const services = [
    {
      name: "Krish Mixer + 2 Jars, 7 Solar Motors",
      description:
        "Includes a mixer with two jars and seven solar motors. Comes with a one-year service warranty.",
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
        "Range of appliances including Fan, Mixy, Water Heater, Cooker, Grinder, Gas Stove, and Tower Jar.",
      icon: <FaHome />,
    },
  ];

  return (
    <div className="font-outfit w-full bg-gradient-to-br from-blue-50 to-blue-100 py-12" id="krishElectrical">
      <div className="flex flex-col items-center mb-12">
        <div className="relative">
          <img
            src={logo}
            alt="Krish Electrical Logo"
            className="h-40 w-40 object-contain rounded-full  border-purple-500 shadow-xl transition-transform duration-500 transform hover:scale-105"
          />
          <div className="absolute inset-0 rounded-full "></div>
        </div>
        <h1 className="mt-6 text-5xl font-extrabold text-gray-900 tracking-tight">
          Krish Electrical
        </h1>
        <p className="text-gray-600 text-center mt-2 text-lg sm:text-xl md:text-2xl">
          Your one-stop solution for all electrical needs
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 sm:px-10 lg:px-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center bg-white p-8 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:bg-gradient-to-br from-white to-blue-50"
          >
            <div className="text-purple-600 mb-4 text-5xl">
              {service.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-3">
              {service.name}
            </h2>
            <p className="text-gray-600 text-center text-base mb-6">
              {service.description}
            </p>
            {service.price && (
              <div className="text-lg font-semibold text-blue-700 mb-4">
                Rs.{service.price}
              </div>
            )}
            <button className="bg-purple-600 text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-purple-500 transition duration-300 transform hover:scale-110">
             <a href="https://wa.me/message/BNVH64UXYSWZF1">Learn More</a> 
            </button>
            <div className="absolute top-0 left-0 w-full h-full bg-purple-100 opacity-0 group-hover:opacity-25 transition duration-300 rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KrishElectrical;
