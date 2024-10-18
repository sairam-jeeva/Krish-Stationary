import React from "react";
// import stationeryImage from "../../Assets/stationery.jpg"; // Example image paths
// import seasonalImage from "../../Assets/seasonal.jpg";
// import electricalImage from "../../Assets/electrical.jpg";
// import tailoringImage from "../../Assets/tailoring.jpg";
// import fancyImage from "../../Assets/fancy.jpg";
// import educationalImage from "../../Assets/educational.jpg";
import book from '../../Assets/book.jpeg'

const OurProducts = () => {
  const products = [
    {
      title: "Stationery Items",
      description:
        "A wide range of stationery products including notebooks, pens, pencils, and school guides suitable for students and professionals.",
      price: 50,
      originalPrice: 70,
      image: book,
      discount: "20% Off",
    },
    {
      title: "Seasonal Products",
      description:
        "From Diwali crackers to Christmas decorations, we have seasonal items for various festivals, including school opening supplies.",
      price: 200,
      originalPrice: 250,
      image: book,
      discount: "25% Off",
    },
    {
      title: "Electrical Appliances",
      description:
        "We offer and service a variety of appliances including mixers, grinders, and air coolers. Our Krish Mixer comes with a one-year warranty.",
      price: 3000,
      originalPrice: 3500,
      image: book,
      discount: "15% Off",
    },
    // {
    //   title: "Tailoring Materials",
    //   description:
    //     "Tailoring materials such as fabrics, sewing threads, and accessories to cater to all your stitching and design needs.",
    //   price: 150,
    //   originalPrice: 200,
    //   image: tailoringImage,
    //   discount: "25% Off",
    // },
    // {
    //   title: "Fancy & Cosmetic Items",
    //   description:
    //     "A variety of fancy items, cosmetics, and accessories for personal care and fashion. Perfect for adding style and elegance.",
    //   price: 100,
    //   originalPrice: 130,
    //   image: fancyImage,
    //   discount: "30% Off",
    // },
    // {
    //   title: "Educational Toys & Guides",
    //   description:
    //     "Educational toys and guides designed to support learning and development for young minds. Ideal for students of all ages.",
    //   price: 250,
    //   originalPrice: 300,
    //   image: educationalImage,
    //   discount: "17% Off",
    // },
  ];

  return (
    <div className="font-outfit w-full bg-gray-50 py-10" id="ourProducts">
      <h1 className="text-4xl md:text-5xl xl:text-6xl text-center font-bold mb-12 text-gray-800">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-between items-center p-6 bg-white shadow-lg border border-gray-200 rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 h-full"
          >
            {/* Discount Badge */}
            <p className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white text-xs sm:text-sm md:text-base lg:text-lg rounded-lg">
              {product.discount}
            </p>

            {/* Product Image */}
            <img
              src={product.image}
              className="h-40 w-40 sm:h-48 sm:w-48 md:h-52 md:w-52 lg:h-56 lg:w-56 xl:h-60 xl:w-60 object-cover rounded-md mb-5"
              alt={product.title}
            />

            {/* Product Title */}
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 mt-2 text-center">
              {product.title}
            </h2>

            {/* Product Description */}
            <p className="text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl text-center leading-tight mt-2 px-2">
              {product.description}
            </p>

            {/* Product Price */}
            <div className="flex items-center justify-center mt-4 space-x-2">
              <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-purple-700 border-b-2 border-purple-700 pb-1">
                Rs.{product.price}
              </span>
              <sub className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-500 line-through">
                Rs.{product.originalPrice}
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
