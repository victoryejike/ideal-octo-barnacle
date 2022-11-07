import React from "react";

const Header = () => {
  const navLinks = [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Solar Roof",
    "Solar Panels",
    "Shop",
    "Account",
    "Menu"
  ];
  return (
    <header>
      <nav className="flex justify-between items-center">
        <div>
          <img src="" alt="Tesla logo" />
        </div>
        {navLinks.map((nav, i) => (
          <div key={i}>
            <p>{nav}</p>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
