import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-50 sm:bg-white text-gray-400">
      {/* Main Footer Content */}
      <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between px-6 py-10">
        {/* Logo and Description */}
        <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-0 sm:w-1/3">
          <img className="w-24 mb-4" src={assets.logo} alt="Company Logo" />
          <p className="text-center sm:text-left text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            nesciunt beatae ipsa consectetur obcaecati aperiam amet ea ad dicta
            aliquam voluptas nulla ipsum quibusdam explicabo excepturi maxime,
            quo quisquam consequuntur?
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-0 sm:w-1/3">
          <p className="mb-4 text-black text-lg font-semibold">COMPANY</p>
          <ul className="text-sm space-y-2 text-center sm:text-left">
            <li>
              <a href="#home" className="hover:text-black transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-black transition">
                About us
              </a>
            </li>
            <li>
              <a href="#delivery" className="hover:text-black transition">
                Delivery
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-black transition">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="flex flex-col items-center sm:items-start sm:w-1/3">
          <p className="mb-4 text-black text-lg font-semibold">GET IN TOUCH</p>
          <div className="text-sm space-y-2 text-center sm:text-left">
            <p>+91 9652188766</p>
            <p>Arekapudikrishnachaitanya@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-300 py-4 text-center text-sm">
        <p>&copy; 2024 forever.com - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
