import React from "react";

const SectionBlock = ({ title, subTitle, bgUrl, actionBtn1, actionBtn2 }) => {
  console.log(title);
  return (
    <div
      style={{
        background: `url(${bgUrl}) no-repeat center`,
        backgroundSize: "cover"
      }}
      className="absolute top-0 bottom-0 left-0 right-0 grid place-items-center">
      <div className=" text-center mt-10">
        <h1 className="text-4xl font-normal">{title}</h1>
        <p className=" underline cursor-pointer">{subTitle}</p>
      </div>
      <div className="mt-64 flex place-items-center">
        <button className="px-20 py-1 bg-gray-800 text-gray-300 pt-4 rounded ml-20">
          {actionBtn1}
        </button>
        <button className="px-20 py-1 bg-gray-200 text-black pt-4 rounded ml-5">
          {actionBtn2}
        </button>
      </div>
    </div>
  );
};

export default SectionBlock;
