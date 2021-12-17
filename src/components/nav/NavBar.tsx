import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <a className="nav-link">Home</a>
      <a className="nav-link">Our Story</a>
      <a className="nav-link">Wedding</a>
      <a className="nav-link">Venue</a>
      <a className="nav-link">Travel</a>
      <a className="nav-link">Gift Registry</a>
      <a className="nav-link">Photos</a>
      <a className="nav-link">Contact</a>
    </nav>
  );
};

export default NavBar;
