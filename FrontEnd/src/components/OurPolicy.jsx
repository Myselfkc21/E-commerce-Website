import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from "./Title";
const OurPolicy = () => {
  return (
    <div className="flex flex-col items-center justify-center my-32 w-full text-3xl">
      <Title text1={"OUR"} text2={"POLICY"}></Title>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-11 p-2 w-full mt-5">
        <div className="flex flex-col items-center justify-center">
          <img className="w-8" src={assets.exchange_icon} alt="" />
          <p className="text-gray-800 font-sans text-xl">
            Easy Exchange Policy
          </p>
          <p className="text-gray-300 font-sans text-sm">
            We offer hassle free exchange policy
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="w-8" src={assets.quality_icon} alt="" />
          <p className="text-gray-800 font-sans text-xl">
            7 Days Return Policy
          </p>
          <p className="text-gray-300 font-sans text-sm">
            We provide 7 days free return policy
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="w-8" src={assets.support_img} alt="" />
          <p className="text-gray-800 font-sans text-xl">
            Best Customer Support
          </p>
          <p className="text-gray-300 font-sans text-sm">
            We provide 24/7 customer support
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
