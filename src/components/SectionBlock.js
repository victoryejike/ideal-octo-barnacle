import React from "react";
import Button from "./Button";
import { useCustomWidth } from "../utils/useCustomWidth";
import Footer from "./Footer";

const SectionBlock = () => {
  const [width] = useCustomWidth();
  const sectionDescription = [
    {
      title: "Model Y",
      subTitle: "Schedule a Demo Drive",
      underline: true,
      firstActionBtn: "Buy Now",
      secondActionBtn: "Custom Order",
      mobBgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/3304be3b-dd0a-4128-9c26-eb61c0b98d61/bvlatuR/std/0x0/3304be3b-dd0a-4128-9c26-eb61c0b98d61",
      bgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70"
    },
    {
      title: "Model 3",
      subTitle: "Schedule a Demo Drive",
      underline: true,
      firstActionBtn: "Buy Now",
      secondActionBtn: "Custom Order",
      mobBgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/9160c5a3-b818-42dd-bb98-b8597948c636/bvlatuR/std/1927x4096/M3-Homepage-Mobile-LHD",
      bgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD"
    },
    {
      title: "Model S",
      subTitle: "Schedule a Demo Drive",
      underline: true,
      firstActionBtn: "Buy Now",
      secondActionBtn: "Custom Order",
      mobBgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/093bea90-b72d-494e-a5dd-b9bfec81873a/bvlatuR/std/750x1624/Homepage-Model-S-Mobile-LHD?quality=auto-medium&amp;format=auto",
      bgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/538ac149-d103-4834-9d38-641d8ae447ef/bvlatuR/std/4096x2560/Homepage-Model-S-Desktop-LHD"
    },
    {
      title: "Model X",
      subTitle: "Schedule a Demo Drive",
      underline: true,
      firstActionBtn: "Buy Now",
      secondActionBtn: "Custom Order",
      mobBgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/43068421-32b9-4b5e-aa48-dc31a499fc90/bvlatuR/std/750x1624/Homepage-Model-X-Mobile-LHD?quality=auto-medium&amp;format=auto",
      bgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/ddc135ed-1638-40fb-8ab1-f8045059ecef/bvlatuR/std/4096x2560/Homepage-Model-X-Desktop-LHD"
    },
    {
      title: "Solar Panels",
      subTitle: "Lowest Cost Solar Panels in America",
      underline: false,
      firstActionBtn: "Order Now",
      secondActionBtn: "Learn More",
      mobBgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/066f19b7-d68e-45e2-8575-ad0a6f8375a8/bvlatuR/std/600x1576/_25-HP-SolarPanels-M",
      bgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D"
    },
    {
      title: "Solar Roof",
      subTitle: "Produce Clean Energy From Your Roof",
      underline: false,
      firstActionBtn: "Order Now",
      secondActionBtn: "Learn More",
      mobBgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/e5c48745-ec05-4488-9585-5b3daf8075ac/bvlatuR/std/750x1624/Homepage-SolarRoof-Mobile-Global?quality=auto-medium&format=auto",
      bgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/4a41ec0e-7316-46a8-8ce9-e2f195ba644d/bvlatuR/std/2880x1800/Homepage-SolarRoof-Desktop-Global?quality=auto-medium&format=auto"
    },
    {
      title: "Accessories",
      firstActionBtn: "Shop Now",
      // secondActionBtn: "Learn More",
      mobBgUrl:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/69095129-86c5-4f6c-a77a-740ceac04e82/bvlatuR/std/0x0/69095129-86c5-4f6c-a77a-740ceac04e82",
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
            backgroundImage: width > 768 ? `url(${section.bgUrl})` : `url(${section.mobBgUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
          }}
          className="h-screen grid place-items-center">
          <div className=" text-center mt-14 lg:mt-10">
            <h1 className="text-5xl font-[iciel] font-light">{section.title}</h1>
            <p
              className={`${
                section.underline ? "underline" : ""
              }  cursor-pointer text-sm  tracking-wide font-[GothamMedium] pt-3 lg:pt-1 underline-offset-4`}>
              {section.subTitle}
            </p>
          </div>
          <div className="mt-40 lg:mt-64 flex-col flex lg:flex-row mx-auto">
            <Button text={section.firstActionBtn} secondBtn={false} />
            {section.secondActionBtn && <Button text={section.secondActionBtn} secondBtn={true} />}
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default SectionBlock;
