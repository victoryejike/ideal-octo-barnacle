import React from "react";
import Button from "./Button";

const SectionBlock = () => {
  const sectionDescription = [
    {
      title: "Model Y",
      subTitle: "Schedule a Demo Drive",
      underline: true,
      firstActionBtn: "Buy Now",
      secondActionBtn: "Custom Order",
      bgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70"
    },
    {
      title: "Model 3",
      subTitle: "Schedule a Demo Drive",
      underline: true,
      firstActionBtn: "Buy Now",
      secondActionBtn: "Custom Order",
      bgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD"
    },
    {
      title: "Model S",
      subTitle: "Schedule a Demo Drive",
      underline: true,
      firstActionBtn: "Buy Now",
      secondActionBtn: "Custom Order",
      bgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/538ac149-d103-4834-9d38-641d8ae447ef/bvlatuR/std/4096x2560/Homepage-Model-S-Desktop-LHD"
    },
    {
      title: "Model X",
      subTitle: "Schedule a Demo Drive",
      underline: true,
      firstActionBtn: "Buy Now",
      secondActionBtn: "Custom Order",
      bgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/ddc135ed-1638-40fb-8ab1-f8045059ecef/bvlatuR/std/4096x2560/Homepage-Model-X-Desktop-LHD"
    },
    {
      title: "Solar Panels",
      subTitle: "Lowest Cost Solar Panels in America",
      underline: false,
      firstActionBtn: "Order Now",
      secondActionBtn: "Learn More",
      bgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D"
    },
    {
      title: "Solar Roof",
      subTitle: "Produce Clean Energy From Your Roof",
      underline: false,
      firstActionBtn: "Order Now",
      secondActionBtn: "Learn More",
      bgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/4a41ec0e-7316-46a8-8ce9-e2f195ba644d/bvlatuR/std/2880x1800/Homepage-SolarRoof-Desktop-Global?quality=auto-medium&format=auto"
    },
    {
      title: "Accessories",
      firstActionBtn: "Shop Now",
      // secondActionBtn: "Learn More",
      bgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/0x0/dd739764-bcaa-4263-9488-8c73bc9fb046"
    }
  ];
  return (
    <div className="h-screen font-normal">
      {sectionDescription.map((section, index) => (
        <div
          key={index}
          style={{
            background: `url(${section.bgUrl}) no-repeat center`,
            backgroundSize: "cover"
          }}
          className="h-screen grid place-items-center">
          <div className=" text-center mt-24 lg:mt-10">
            <h1 className="text-[42px] leading-[45px] font-normal">{section.title}</h1>
            <p
              className={`${
                section.underline ? "underline" : ""
              }  cursor-pointer text-sm  tracking-wide`}>
              {section.subTitle}
            </p>
          </div>
          <div className="mt-64 block lg:flex place-items-center">
            <Button text={section.firstActionBtn} secondBtn={false} />
            {section.secondActionBtn && <Button text={section.secondActionBtn} secondBtn={true} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionBlock;
