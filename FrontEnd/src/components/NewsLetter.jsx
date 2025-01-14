import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center my-16 ">
      <p className="text-[#373737] font-semibold text-2xl sm:text-3xl  font-sans">
        Subscribe now & get 20% off
      </p>
      <p className="text-[#9A9A9A] font-sans p-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="flex flex-row items-center justify-center w-full sm:mt-2">
        <input
          className="w-[60%] border border-gray-300 p-3"
          type="text"
          placeholder="Enter your email id"
        />
        <button className="bg-black p-3 text-white">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default NewsLetter;
