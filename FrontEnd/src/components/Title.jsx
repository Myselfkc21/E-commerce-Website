import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center justify-center mb-3">
      <p className="text-gray-400 font-sans text-center text-2xl sm:text-3xl">
        {text1}
      </p>
      <span className="text-black text-center font-sans font-medium text-2xl sm:text-3xl">
        {text2}
      </span>
      <hr className="hidden sm:block sm:w-12 h-[1px] sm:h-[4px] bg-black"></hr>
    </div>
  );
};

export default Title;
