import React from "react";

const Button = ({ text, secondBtn }) => {
  return (
    <button
      className={`px-20 py-1  pt-4 rounded ml-0 lg:ml-20 mb-3 w-72 ${
        secondBtn ? "bg-[#f0edea] text-[#393C41]" : "bg-[#1E2026] text-white"
      }`}>
      {text}
    </button>
  );
};

export default Button;
