import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import eye from "../../assets/eye-pixel.png";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Entrepreneurial Hub</a>
    </p>
    <p>
      <a href="#what">Wizardry for Entrepreneurs</a>
    </p>
    <p>
      <a href="#features">All Creature Enterprises</a>
    </p>
    <p>
      <a href="#possibility">Opportunities in Gondor</a>
    </p>
    <p>
      <a href="#blog">Entrepreneurial Chronicles</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="company__navbar">
      <div className="company__navbar-links">
        <div className="company__navbar-links_logo">
          <a href="#home">
            <img src={eye} alt="logo" />
          </a>
        </div>
        <div className="company__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="company__navbar-sign">
        <p type="button">Login</p>
      </div>
      <div className="company__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="company__navbar-menu_container scale-up-center">
            <div className="company__navbar-menu-container-links">
              <Menu />
              <span className="company__navbar-divider"></span>
              <div className="company__navbar-menu_container-links-sign">
                <p type="button">Login</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
