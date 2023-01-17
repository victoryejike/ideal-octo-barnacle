import React from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import { navLinks, logoLink } from "../utils/constants";

const Header = ({ isMenuOpen, setisMenuOpen }) => {
  const handleClick = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 p-2 lg:p-6 pt-3 text-sm font-[iciel] font-bold">
      <nav className="flex justify-between items-center">
        <div className="mr-24">
          <Link to="/">
            <img className=" object-contain w-32 pl-2 lg:pl-6" src={logoLink} alt="Tesla logo" />
          </Link>
        </div>
        <div className="hidden lg:flex">
          {navLinks.slice(0, 6).map((nav, i) => (
            <div
              key={i}
              className="mx-1 px-4 py-1 hover:bg-[rgb(245,245,245)] rounded transition hover:ease-in-out duration-300">
              <Link to={nav.href}>
                <p className="">{nav.name}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="hidden xl:flex pr-3">
          {navLinks.slice(6, 8).map((nav, i) => (
            <div
              key={i}
              className="px-4 py-1 hover:bg-[rgb(245,245,245)] rounded transition hover:ease-in-out duration-300">
              <Link to={nav.href}>
                <p className="">{nav.name}</p>
              </Link>
            </div>
          ))}
          <div
            className=" px-4 py-1 hover:bg-[rgb(245,245,245)] rounded transition hover:ease-in-out duration-300"
            onClick={handleClick}>
            <p className="cursor-pointer">Menu</p>
            {isMenuOpen ? <MenuItems isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} /> : ""}
          </div>
        </div>
        {/* Mobile Nav */}
        <div
          className="block xl:hidden px-4 py-1 bg-[rgb(220,217,217)] rounded transition hover:ease-in-out duration-300"
          onClick={handleClick}>
          <p className="cursor-pointer">Menu</p>
          {isMenuOpen ? <MenuItems isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} /> : ""}
        </div>
      </nav>
    </header>
  );
};

export default Header;
