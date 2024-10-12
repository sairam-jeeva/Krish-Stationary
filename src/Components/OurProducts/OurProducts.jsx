import React from "react";
import allthing from "../../Assets/allthings.jpg"; // Replace this with actual image paths

const OurProducts = () => {
  return (
    <div className="font-outfit w-full bg-gray-50 py-10" id="ourProducts">
      <h1 className="text-4xl md:text-5xl xl:text-6xl text-center font-bold mb-12 text-gray-800">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        {Array(9).fill("").map((_, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-between items-center p-6 bg-white shadow-lg border border-gray-200 rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 h-full"
          >
            {/* Discount Badge */}
            <p className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white text-xs sm:text-sm md:text-base lg:text-lg rounded-lg">
              30% Off
            </p>

            {/* Product Image */}
            <img
              src={allthing}
              className="h-40 w-40 sm:h-48 sm:w-48 md:h-52 md:w-52 lg:h-56 lg:w-56 xl:h-60 xl:w-60 object-cover rounded-md mb-5"
              alt="Product"
            />

            {/* Product Title */}
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 mt-2 text-center">
              Geometry Box
            </h2>

            {/* Product Description */}
            <p className="text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl text-center leading-tight mt-2 px-2">
              A perfect companion for all your geometrical needs. Includes various tools for accurate measurements.
            </p>

            {/* Product Price */}
            <div className="flex items-center justify-center mt-4 space-x-2">
              <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-purple-700 border-b-2 border-purple-700 pb-1">
                Rs.100
              </span>
              <sub className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-500 line-through">
                Rs.150
              </sub>
            </div>

            {/* Decorative Divider */}
            <hr className="my-4 w-full border-gray-200" />

            {/* Buy Now Button */}
            <button className="mt-auto bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-purple-500 transition duration-300 transform hover:scale-105">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
