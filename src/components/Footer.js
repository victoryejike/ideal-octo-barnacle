import React from "react";
import { useCustomWidth } from "../utils/useCustomWidth";

const Footer = () => {
  const [width] = useCustomWidth();
  const footerLinks = [
    "Tesla © 2023",
    "Privacy & Legal",
    "Vehicle Recalls",
    "Careers",
    "News",
    "Contact",
    "Engage",
    "Location"
  ];
  return (
    <footer className="flex flex-col lg:flex-row justify-center items-center text-sm py-4 font-[GothamMedium]">
      {width >= 1440
        ? footerLinks.map((link, index) => (
            <li className="list-none" key={index}>
              {link}
            </li>
          ))
        : footerLinks.slice(0, 5).map((link, index) => (
            <li className="list-none" key={index}>
              {link}
            </li>
          ))}
    </footer>
  );
};

export default Footer;
