import React from "react";
import "./Header.css";

const Header = () => {
  // TODO: replace images - copyright
  return (
    <header className="header">
      <img
        src="/images/autumn-leaves-left.png"
        alt="leaves-left"
        width="350"
        height="250"
      />
      <div>
        <h1 className="header-h1">Jen & Tomek Wedding</h1>
        <h2 className="header-h2">Wednesday 7th September 2022</h2>
        <h3 className="header-h3">Cambo Estate</h3>
      </div>
      <img
        src="/images/autumn-leaves-right.png"
        alt="leaves-right"
        width="350"
        height="250"
      />
    </header>
  );
};

export default Header;
