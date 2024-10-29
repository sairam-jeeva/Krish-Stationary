import React from 'react';
import krish from '../../Assets/krish_wall.jpg';

const AboutKrishStationary = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Krish Stationery Wholesale and Retail Shop</h2>
          <p className="text-lg text-gray-600">
            Krish Stationery Wholesale and Retail Shop is your one-stop destination for all types of stationery, fancy items, cosmetics, and seasonal products. 
            We cater to schools, colleges, offices, and individuals with a wide range of stationery products and accessories. 
            We also offer seasonal items like Diwali crackers, Independence Day flags, Republic Day flags, and Christmas decorations.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 p-4">
            <img
              src={krish}
              alt="Krish Stationery Shop"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
            <ul className="text-lg text-gray-600 space-y-2">
              <li>✔️ Wholesale and retail services for all types of stationery and fancy items</li>
              <li>✔️ Electricals and refrigeration sales and service</li>
              <li>✔️ Wide variety of seasonal items and festive decorations</li>
              <li>✔️ Own assembled Krish Mixer brand with 750 Watts motor and one year warranty</li>
              <li>✔️ Excellent customer service and affordable prices</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKrishStationary;
