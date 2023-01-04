import React from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

const Header = ({ isMenuOpen, setisMenuOpen }) => {
  const navLinks = [
    { name: "Model S", href: "models" },
    { name: "Model 3", href: "model3" },
    { name: "Model X", href: "modelx" },
    { name: "Model Y", href: "modely" },
    { name: "Solar Roof", href: "solarroof" },
    { name: "Solar Panels", href: "solarpanels" },
    { name: "Shop", href: "shop" },
    { name: "Account", href: "teslaaccount" },
    { name: "Menu", href: "" }
  ];

  const logoLink =
    "https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png";

  const handleClick = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 left-0 z-20 p-6 pt-3 text-sm">
      <nav className="flex justify-between items-center">
        <div className="mr-24">
          <Link to="/">
            <img className=" object-contain w-32 pl-6" src={logoLink} alt="Tesla logo" />
          </Link>
        </div>
        <div className="flex">
          {navLinks.slice(0, 6).map((nav, i) => (
            <div
              key={i}
              className="mx-1 px-4 py-1 hover:bg-[rgb(245,245,245)] rounded transition hover:ease-in-out duration-300">
              <Link to={nav.href}>
                <p className="pt-2">{nav.name}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex pr-3">
          {navLinks.slice(6, 8).map((nav, i) => (
            <div
              key={i}
              className="px-4 py-1 hover:bg-[rgb(245,245,245)] rounded transition hover:ease-in-out duration-300">
              <Link to={nav.href}>
                <p className="pt-2">{nav.name}</p>
              </Link>
            </div>
          ))}
          <div
            className=" px-4 py-1 hover:bg-[rgb(245,245,245)] rounded transition hover:ease-in-out duration-300"
            onClick={handleClick}>
            <p className="cursor-pointer  pt-2">Menu</p>
            {isMenuOpen ? <MenuItems isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} /> : ""}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
