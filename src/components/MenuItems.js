import React from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { useCustomWidth } from "../utils/useCustomWidth";

const MenuItems = ({ isMenuOpen, setisMenuOpen }) => {
  const menuLinks = [
    { name: "Model S", href: "models" },
    { name: "Model 3", href: "model3" },
    { name: "Model X", href: "modelx" },
    { name: "Model Y", href: "modely" },
    { name: "Solar Roof", href: "solarroof" },
    { name: "Solar Panels", href: "solarpanels" },
    { name: "Existing Inventory", href: "models" },
    { name: "Used Inventory", href: "model3" },
    { name: "Trade-In", href: "modelx" },
    { name: "Demo Drive", href: "modely" },
    { name: "Insurance", href: "solarroof" },
    { name: "Cybertruck", href: "solarpanels" },
    { name: "Roadster", href: "shop" },
    { name: "Charging", href: "teslaaccount" },
    { name: "Powerwall", href: "teslaaccount" },
    { name: "Commercial Energy", href: "teslaaccount" },
    { name: "Utilities", href: "teslaaccount" },
    { name: "Find Us", href: "teslaaccount" },
    { name: "Support", href: "teslaaccount" },
    { name: "Investor Relations", href: "teslaaccount" }
  ];

  const handleClick = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const [width] = useCustomWidth();

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-auto bg-[rgba(152,156,159,0.2)] backdrop-blur-sm z-20 rounded transition hover:ease-in-out duration-300">
      <div className="bg-white w-5/6 lg:w-1/5 ml-auto p-10 pr-8 pt-8 h-max">
        <div className="mb-8 p-3 ml-auto w-10 rounded hover:bg-[rgb(245,245,245)]">
          <GrClose className=" cursor-pointer " onClick={handleClick} />
        </div>

        {width >= 1440
          ? menuLinks.slice(6).map((menuLink, i) => (
              <div
                key={i}
                className="p-2 font-light flex justify-start items-center text-sm tracking-wider hover:bg-[rgb(245,245,245)] rounded transition hover:ease-in-out duration-300">
                <Link to={menuLink.href}>
                  <p className="pt-2">{menuLink.name}</p>
                </Link>
              </div>
            ))
          : menuLinks.map((menuLink, i) => (
              <div
                key={i}
                className="p-2 font-light flex justify-start items-center text-sm tracking-wider hover:bg-[rgb(245,245,245)] rounded transition hover:ease-in-out duration-300">
                <Link to={menuLink.href}>
                  <p className="pt-2">{menuLink.name}</p>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default MenuItems;
