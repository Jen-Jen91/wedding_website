import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <a className="nav-link" href="#Home">
        Home
      </a>
      <a className="nav-link" href="#Story">
        Our Story
      </a>
      <a className="nav-link" href="#Wedding">
        Wedding
      </a>
      <a className="nav-link" href="#Venue">
        Venue
      </a>
      <a className="nav-link" href="#Travel">
        Travel
      </a>
      <a className="nav-link" href="#Gifts">
        Gift Registry
      </a>
      <a className="nav-link" href="#Photos">
        Photos
      </a>
      <a className="nav-link" href="#Contact">
        Contact
      </a>
    </nav>
  );
};

export default NavBar;
