import React from "react";
import { assets } from "../assets/frontend_assets/assets";
const ContactSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Section */}
        <div>
          <img
            src={assets.contact_img}
            alt="Office Desk"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold">Our Store</h3>
          <p className="text-gray-600 mt-2">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className="text-gray-600 mt-2">Tel: (415) 555-0132</p>
          <p className="text-gray-600 mt-2">Email: admin@forever.com</p>

          <h3 className="text-lg font-semibold mt-6">Careers at Forever</h3>
          <p className="text-gray-600 mt-2">
            Learn more about our teams and job openings.
          </p>
          <button className="mt-4 px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="mt-16 text-center">
        <h3 className="text-lg font-semibold">Subscribe now & get 20% off</h3>
        <p className="text-gray-600 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        {/* Subscription Input */}
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 px-4 py-2 rounded-l-lg focus:outline-none w-80"
          />
          <button className="px-4 py-2 bg-black text-white rounded-r-lg">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
