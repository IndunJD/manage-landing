import React, { useState } from "react";
import { Button } from "reactstrap";
import logo from "../assets/images/logo.svg";
import imageOverlay from "../assets/images/bg-tablet-pattern.svg";
import menuicon from "../assets/images/icon-hamburger.svg";
import closeicon from "../assets/images/icon-close.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="pattern-container">
        <img src={imageOverlay} alt="shape" className="pattern-img" />
      </div>
      <nav className="header-nav">
        <div>
          <img src={logo} alt="manage-logo" />
        </div>
        <div>
          <ul className={menuOpen ? "menu-open" : ""}>
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>
        </div>
        <div>
          <Button className="btn-orange-1">Get Started</Button>
        </div>
        <div className="menu-icon-container" onClick={toggleMenu}>
          <img src={menuOpen ? closeicon : menuicon} alt="menu-icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
