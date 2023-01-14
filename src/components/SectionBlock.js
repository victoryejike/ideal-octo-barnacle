import React from "react";
import Button from "./Button";
import { useCustomWidth } from "../utils/useCustomWidth";
import Footer from "./Footer";
import { sectionDescription } from "../utils/constants";

const SectionBlock = () => {
  const [width] = useCustomWidth();
  // const myRef = useRef();
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setIsIntersecting(entry.isIntersecting);
  //   });

  //   observer.observe(myRef.current);
  // }, [myRef]);

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
          className="h-screen grid place-items-center snap-start snap-always">
          <div className={`${section.footer ? "mt-20 lg:mt-28" : "mt-11 lg:mt-10"} text-center `}>
            <h1 className="text-4xl font-[GothamBook] font-light">{section.title}</h1>
            <p
              className={`${
                section.underline ? "underline" : ""
              }  cursor-pointer text-sm  tracking-wide font-[GothamMedium] pt-3 lg:pt-1 underline-offset-4`}>
              {section.subTitle}
            </p>
          </div>
          <div
            className={`${
              section.footer ? "mt-80 lg:mt-96" : "lg:mt-64 mt-24"
            } flex-col flex lg:flex-row mx-auto`}>
            <Button text={section.firstActionBtn} secondBtn={false} />
            {section.secondActionBtn && <Button text={section.secondActionBtn} secondBtn={true} />}
          </div>
          {section.footer && <Footer />}
        </div>
      ))}
    </div>
  );
};

export default SectionBlock;
