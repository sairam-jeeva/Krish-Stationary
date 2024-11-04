import React from 'react';
import logo from '../../Assets/logo.png';
import youtube from '../../Assets/youtube_logo.svg'
import wp from '../../Assets/wp.png'
import insta from '../../Assets/insta.png'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white font-outfit" id='footer'>
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo and Social Media Icons */}
        <div className=" flex flex-col items-center justify-center">
          <img src={logo} className="w-32 h-auto mb-4" alt="Logo" />
          <div className="bg-white px-1 py-1 items-center rounded-xl flex gap-2 mb-4">
            <a href="https://www.instagram.com/Krish_stationary_salem1/" aria-label="Instagram">
              {/* Instagram SVG */}
              <img src={insta} className="w-[30px]" alt="" />
            </a>
            <a href="https://wa.me/message/BNVH64UXYSWZF1" aria-label="whatsapp">
              {/* Whatsapp SVG */}
              <img src={wp} className="w-[25px]" alt="" />
            </a>
            <a href="https://www.youtube.com/@KrishstationerySalem15" aria-label="YouTube">
              {/* YouTube SVG */}
              <img src={youtube} className="w-[30px]" alt="" srcset="" />
            </a>
          </div>
        </div>

        {/* About Us Section */}
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl mb-4 text-center md:text-left">About Us</h1>
          <ul className="text-sm font-light flex flex-col space-y-2">
            <li className="hover:text-blue-500 cursor-pointer"><a href="#founder">Our Founder </a></li>
            <li className="hover:text-blue-500 cursor-pointer"><a href="#team">Our Team</a> </li>
            <li className="hover:text-blue-500 cursor-pointer"><a href="#map">Visit store</a></li>
            <li className="hover:text-blue-500 cursor-pointer"><a href="#services">Our Services </a> </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col mr-10">
          <h1 className="font-bold text-2xl mb-4 text-center md:text-left">Contact Us</h1>
          <p className="text-sm mb-2"><span className='font-bold'> Email: </span><a href="mailto:krishstationerysalem1@gmail.com" className="hover:text-blue-500">krishstationerysalem1@gmail.com</a></p>
          <p className="text-sm"><span className='font-bold'>Phone:</span> <a href="tel:+919944500207" className="hover:text-blue-500">+91 9500899155</a></p>
        </div>

        {/* Google Reviews Section */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-bold text-2xl mb-4 text-center md:text-left">Leave a Review</h1>
          <p className="text-sm font-light text-center md:text-left mb-4">
            We appreciate your feedback! Click below to write a review on Google.
          </p>
          <div className="flex justify-center md:justify-start mb-6">
            <a
              href="https://www.google.co.in/maps/place/KRISH+STATIONERY/@11.6532567,78.1649452,17z/data=!4m8!3m7!1s0x3babf1c471ba716d:0x4bd10ef3d60928c7!8m2!3d11.6532567!4d78.1675201!9m1!1b1!16s%2Fg%2F11ks08v_y1?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 transform hover:scale-105"
            >
              Write a Review
            </a>
          </div>
          <p>Level up by <a href="tuneuptech.in" className="text-blue-500 hover:text-white">TuneUp Technologies</a></p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center p-4 bg-gray-900">
        &copy; All rights reserved by Krish Stationery Salem
      </div>
    </footer>
  );
};
export default Footer;
