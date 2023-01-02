import React from "react";

const HeaderBlock = () => {
  // { title, subTitle, bgUrl, actionBtn1, actionBtn2 }
  const headerDescription = [
    {
      title: "Model Y",
      subTitle: "Schedule a Demo Drive",
      firstActionBtn: "Buy Now",
      secondActionBtn: "Custom Order",
      bgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70"
    }
  ];
  // console.log(title);
  return (
    <div>
      <div className=" h-screen">
        {headerDescription.map((header, index) => (
          <div
            key={index}
            style={{
              height: "100vh",
              background: `url(${header.bgUrl}) no-repeat center`,
              backgroundSize: "cover"
            }}
            className="absolute top-0 -bottom-40 left-0 right-0 grid place-items-center h-screen">
            <div className=" text-center mt-10">
              <h1 className="text-4xl font-normal">{header.title}</h1>
              <p className=" underline cursor-pointer">{header.subTitle}</p>
            </div>
            <div className="mt-64 flex place-items-center">
              <button className="px-20 py-1 bg-gray-800 text-gray-300 pt-4 rounded ml-20">
                {header.firstActionBtn}
              </button>
              <button className="px-20 py-1 bg-gray-200 text-black pt-4 rounded ml-5">
                {header.secondActionBtn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderBlock;
