import React, { useState } from "react";
import book from '../../Assets/book.jpeg';
import markers from '../../Assets/markers.jpg';
import paperclips from '../../Assets/paperclips.jpg';
import pen from '../../Assets/pen.jpg';
import pencil from '../../Assets/pencil.jpg';
import sketchpad from '../../Assets/skecthpad.jpg';
import stapers from '../../Assets/stapers.jpg';
import stickynotes from '../../Assets/stickynote.jpg';
import whiteboardmarkers from '../../Assets/whiteboardmarkers.jpg';
import folder from '../../Assets/folder.jpg';
import eraser from '../../Assets/eraser.jpg';
import glue from '../../Assets/glue.jpg';

const OurProducts = () => {
  const [showAll, setShowAll] = useState(false); // State to toggle between showing limited and all products

  const products = [
    {
      title: "Notebooks",
      description:
        "High-quality notebooks for all your writing needs, perfect for students and professionals alike.",
      price: 50,
      originalPrice: 70,
      image: book,
      discount: "20% Off",
    },
    {
      title: "Pens",
      description:
        "Smooth writing pens available in various colors, suitable for note-taking and artistic purposes.",
      price: 20,
      originalPrice: 30,
      image: pen,
      discount: "33% Off",
    },
    {
      title: "Pencils",
      description:
        "Durable pencils ideal for sketching and writing, comes with erasers for convenience.",
      price: 10,
      originalPrice: 15,
      image: pencil,
      discount: "33% Off",
    },
    {
      title: "Markers",
      description:
        "Vibrant markers for art and projects, available in multiple colors and tip sizes.",
      price: 100,
      originalPrice: 120,
      image: markers,
      discount: "17% Off",
    },
    {
      title: "Sketch Pads",
      description:
        "Specially designed pads for artists, providing a smooth surface for sketches.",
      price: 150,
      originalPrice: 180,
      image: sketchpad,
      discount: "17% Off",
    },
    {
      title: "Sticky Notes",
      description:
        "Colorful sticky notes for reminders and quick notes, available in various sizes.",
      price: 30,
      originalPrice: 40,
      image: stickynotes,
      discount: "25% Off",
    },
    {
      title: "Paper Clips",
      description:
        "Essential paper clips to keep your documents organized and tidy.",
      price: 10,
      originalPrice: 15,
      image: paperclips,
      discount: "33% Off",
    },
    {
      title: "Staplers",
      description:
        "Durable staplers for binding papers together, ideal for office and school use.",
      price: 200,
      originalPrice: 250,
      image: stapers,
      discount: "20% Off",
    },
    {
      title: "Whiteboard Markers",
      description:
        "Specialized markers for whiteboards, easy to wipe off and available in various colors.",
      price: 80,
      originalPrice: 100,
      image: whiteboardmarkers,
      discount: "20% Off",
    },
    {
      title: "Folders",
      description:
        "Plastic folders for keeping documents organized and protected, available in multiple colors.",
      price: 40,
      originalPrice: 50,
      image: folder,
      discount: "20% Off",
    },
    {
      title: "Erasers",
      description:
        "High-quality erasers for clean and precise erasing, suitable for students, artists, and professionals.",
      price: 5,
      originalPrice: 10,
      image: eraser,
      discount: "50% Off",
    },
    {
      title: "Glue Sticks",
      description:
        "Easy-to-use glue sticks for crafting and office use, providing a strong hold without the mess.",
      price: 25,
      originalPrice: 35,
      image: glue,
      discount: "29% Off",
    },
    
  ];

  const handleSeeAllClick = () => {
    setShowAll(!showAll); // Toggle between showing all products and the default limited set
  };

  const displayedProducts = showAll ? products : products.slice(0, 6); // Show either all products or the first 6

  return (
    <div className="font-outfit w-full bg-gray-50 py-10" id="ourProducts">
      <h1 className="text-4xl md:text-5xl xl:text-6xl text-center font-bold mb-12 text-gray-800">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        {displayedProducts.map((product, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-between items-center p-6 bg-white shadow-lg border border-gray-200 rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 h-full"
          >
            <p className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white text-xs sm:text-sm md:text-base lg:text-lg rounded-lg">
              {product.discount}
            </p>
            <img
              src={product.image}
              className="h-40 w-40 sm:h-48 sm:w-48 md:h-52 md:w-52 lg:h-56 lg:w-56 xl:h-60 xl:w-60 object-cover rounded-md mb-5"
              alt={product.title}
            />
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 mt-2 text-center">
              {product.title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl text-center leading-tight mt-2 px-2">
              {product.description}
            </p>
            <div className="flex items-center justify-center mt-4 space-x-2">
              <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-purple-700 border-b-2 border-purple-700 pb-1">
                Rs.{product.price}
              </span>
              <sub className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-500 line-through">
                Rs.{product.originalPrice}
              </sub>
            </div>
            <hr className="my-4 w-full border-gray-200" />
            <button className="mt-auto bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-purple-500 transition duration-300 transform hover:scale-105">
              Buy Now
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={handleSeeAllClick}
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 transform hover:scale-105"
        >
          {showAll ? "Show Less" : "See All"}
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
