import React from 'react';

// Importing images (replace with your actual image paths)
import img1 from '../../Assets/gal1.jpg';
import img2 from '../../Assets/gal2.jpg';
import img3 from '../../Assets/gal3.jpg';
import img4 from '../../Assets/review1.jpg';
import img5 from '../../Assets/review2.jpg';
import img6 from '../../Assets/review3.jpg';
import img7 from '../../Assets/review4.jpg';
import img8 from '../../Assets/review5.jpg';
import img9 from '../../Assets/review6.jpg';
import img10 from '../../Assets/review7.jpg';
import img11 from '../../Assets/review8.jpg';
import img12 from '../../Assets/review9.jpg';
import img13 from '../../Assets/review10.jpg';
import img14 from '../../Assets/review11.jpg';
import img15 from '../../Assets/review12.jpg';

const images = [
  {
    src: img1,
    alt: 'Beautiful Landscape',
  },
  {
    src: img2,
    alt: 'Modern Architecture',
  },
  {
    src: img3,
    alt: 'City Night View',
  },
  {
    src: img4,
    alt: 'Reviews',
  },
  {
    src: img5,
    alt: 'Reviews',
  },
  {
    src: img6,
    alt: 'Reviews',
  },
  {
    src: img7,
    alt: 'Reviews',
  },
  {
    src: img8,
    alt: 'Reviews',
  },
  {
    src: img9,
    alt: 'Reviews',
  },
  {
    src: img10,
    alt: 'Reviews',
  },
  {
    src: img11,
    alt: 'Reviews',
  },
  {
    src: img12,
    alt: 'Reviews',
  },
  {
    src: img13,
    alt: 'Reviews',
  },
  {
    src: img14,
    alt: 'Reviews',
  },
  {
    src: img15,
    alt: 'Reviews',
  },
];

const Gallery = () => {
  return (
    <div className="gallery w-full py-12 bg-gradient-to-br from-white to-blue-50">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900">Our Gallery</h2>
        <p className="text-lg text-gray-600 mt-2">
          Explore our collection of products and projects.
        </p>
      </div>

      {/* Grid layout for the gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 sm:px-10 lg:px-20">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-96 object-contain"
            />
            
            {/* Hover effect */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
