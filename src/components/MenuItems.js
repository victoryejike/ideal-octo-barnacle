import React from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { useCustomWidth } from "../utils/useCustomWidth";
import { menuLinks } from "../utils/constants";

const MenuItems = ({ isMenuOpen, setisMenuOpen }) => {
  const handleClick = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const [width] = useCustomWidth();

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-auto bg-[rgba(152,156,159,0.2)] backdrop-blur-sm z-20 rounded transition hover:ease-in-out duration-300">
      <div className="bg-white w-5/6 lg:w-1/5 ml-auto p-10 pr-8 pt-8 h-max lg:h-full">
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
