import React from "react";

const Button = ({ text, secondBtn }) => {
  return (
    <button
      className={`px-20 py-2 rounded mb-3 w-[17rem] text-sm font-[iciel] font-light ${
        secondBtn
          ? "bg-[#f0edea] text-[#393C41] ml-0 lg:ml-5 "
          : "bg-[#202020] text-white place-items-center"
      }`}>
      {text}
    </button>
  );
};

export default Button;
