import React from "react";

const SectionBlock = () => {
  const sectionDescription = [
    {
      title: "Model 3",
      subTitle: "Schedule a Demo Drive",
      firstActionBtn: "Buy Now",
      secondActionBtn: "Custom Order",
      bgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD"
    },
    {
      title: "Model S",
      subTitle: "Schedule a Demo Drive",
      firstActionBtn: "Buy Now",
      secondActionBtn: "Custom Order",
      bgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/538ac149-d103-4834-9d38-641d8ae447ef/bvlatuR/std/4096x2560/Homepage-Model-S-Desktop-LHD"
    },
    {
      title: "Model X",
      subTitle: "Schedule a Demo Drive",
      firstActionBtn: "Buy Now",
      secondActionBtn: "Custom Order",
      bgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/ddc135ed-1638-40fb-8ab1-f8045059ecef/bvlatuR/std/4096x2560/Homepage-Model-X-Desktop-LHD"
    }
  ];
  return (
    <div className="relative h-screen -my-[4.6rem]">
      {sectionDescription.map((section, index) => (
        <div
          key={index}
          style={{
            background: `url(${section.bgUrl}) no-repeat center`,
            backgroundSize: "cover"
          }}
          className="h-full grid place-items-center">
          <div className=" text-center mt-10">
            <h1 className="text-4xl font-normal">{section.title}</h1>
            <p className=" underline cursor-pointer">{section.subTitle}</p>
          </div>
          <div className="mt-64 flex place-items-center">
            <button className="px-20 py-1 bg-gray-800 text-gray-300 pt-4 rounded ml-20">
              {section.firstActionBtn}
            </button>
            <button className="px-20 py-1 bg-gray-200 text-black pt-4 rounded ml-5">
              {section.secondActionBtn}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionBlock;
