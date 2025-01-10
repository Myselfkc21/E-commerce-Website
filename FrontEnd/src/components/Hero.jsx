import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-300">
      {/* left part */}
      <div className="flex flex-col p-10 text-[#414141] sm:w-1/2 items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-2 ">
          <hr className="w-10 h-1 bg-[#414141]" />
          <p>OUR BESTSELLERS</p>
        </div>
        <p className="prata-regular text-5xl leading-relaxed text-nowrap lg:text-7xl ">
          Latest Arrivals
        </p>
        <div className="flex flex-row items-center justify-center gap-2 ">
          <p>SHOP NOW</p>
          <hr className="w-10 h-1 bg-[#414141]" />
        </div>
      </div>
      {/* right */}
      <div className="lg:w-1/2 sm:pr-9 md:pr-0  flex items-center justify-center bg-center  ">
        <img src={assets.hero_img} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
