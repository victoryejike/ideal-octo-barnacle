import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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

  return (
    <header className=" sticky left-0 top-0 z-10 p-6 pt-4">
      <nav className="flex justify-between items-center">
        <div>
          <Link to="/">
            <img className=" object-contain w-32 pl-6" src={logoLink} alt="Tesla logo" />
          </Link>
        </div>
        <div className="flex">
          {navLinks.slice(0, 6).map((nav, i) => (
            <div key={i} className="mx-3">
              <Link to={nav.href}>
                <p>{nav.name}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex">
          {navLinks.slice(6, 8).map((nav, i) => (
            <div key={i} className="mx-3">
              <Link to={nav.href}>
                <p>{nav.name}</p>
              </Link>
            </div>
          ))}
          <div className="mx-3 cursor-pointer">
            <p>Menu</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
