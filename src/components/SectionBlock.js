import React from "react";

const SectionBlock = () => {
  // { title, subTitle, bgUrl, actionBtn1, actionBtn2 }
  const sectionDescription = [
    {
      title: "Model Y",
      subTitle: "Schedule a Demo Drive",
      firstActionBtn: "Buy Now",
      secondActionBtn: "Custom Order",
      bgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70"
    },
    {
      title: "Model Y",
      subTitle: "Schedule a Demo Drive",
      firstActionBtn: "Buy Now",
      secondActionBtn: "Custom Order",
      bgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70"
    },
    {
      title: "Model S",
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
      {sectionDescription.map((section, index) => (
        <div
          key={index}
          style={{
            background: `url(${section.bgUrl}) no-repeat center`,
            backgroundSize: "cover"
          }}
          className=" top-0 bottom-0 left-0 right-0 grid place-items-center">
          <div className=" text-center mt-10">
            <h1 className="text-4xl font-normal">{section.title}</h1>
            <p className=" underline cursor-pointer">{section.subTitle}</p>
          </div>
          <div className="mt-64 flex place-items-center">
            <button className="px-20 py-1 bg-gray-800 text-gray-300 pt-4 rounded ml-20">
              {section.actionBtn1}
            </button>
            <button className="px-20 py-1 bg-gray-200 text-black pt-4 rounded ml-5">
              {section.actionBtn2}
            </button>
          </div>
        </div>
      ))}
    </div>
    // <div
    //   style={{
    //     background: `url(${bgUrl}) no-repeat center`,
    //     backgroundSize: "cover"
    //   }}
    //   className="absolute top-0 bottom-0 left-0 right-0 grid place-items-center">
    //   <div className=" text-center mt-10">
    //     <h1 className="text-4xl font-normal">{title}</h1>
    //     <p className=" underline cursor-pointer">{subTitle}</p>
    //   </div>
    //   <div className="mt-64 flex place-items-center">
    //     <button className="px-20 py-1 bg-gray-800 text-gray-300 pt-4 rounded ml-20">
    //       {actionBtn1}
    //     </button>
    //     <button className="px-20 py-1 bg-gray-200 text-black pt-4 rounded ml-5">
    //       {actionBtn2}
    //     </button>
    //   </div>
    // </div>
  );
};

export default SectionBlock;
