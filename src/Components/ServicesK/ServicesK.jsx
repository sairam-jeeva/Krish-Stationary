import React from 'react';
import { FaTools, FaGift, FaHandsHelping } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-500">
            We offer a range of services that cater to your needs, from appliance servicing to seasonal and community-related services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <FaTools className="text-5xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Electricals & Refrigeration</h3>
            <p className="text-center">
              Sales and servicing for appliances like mixers, grinders, and air coolers. Our Krish Mixer offers high quality with a one-year service warranty.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-gradient-to-r from-green-400 to-green-500 text-white p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <FaGift className="text-5xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Seasonal Products</h3>
            <p className="text-center">
              Your go-to store for seasonal items, including Diwali crackers, Christmas decorations, and school supplies. 
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <FaHandsHelping className="text-5xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Krish Foundation</h3>
            <p className="text-center">
              Empowering communities through education and development programs. Dedicated to serving society and uplifting the needy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
