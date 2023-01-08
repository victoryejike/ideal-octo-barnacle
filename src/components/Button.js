import React from "react";

const Button = ({ text, secondBtn }) => {
  return (
    <button
      className={`px-20 pt-3 pb-1 rounded mb-3 w-72 ${
        secondBtn
          ? "bg-[#f0edea] text-[#393C41] ml-0 lg:ml-5 "
          : "bg-[#3F4043] text-white place-items-center"
      }`}>
      {text}
    </button>
  );
};

export default Button;
