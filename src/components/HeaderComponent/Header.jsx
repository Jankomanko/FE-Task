import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import {StyledHeader} from "./StyledHeader.js";


const Header = () => {
  const [click, setClick] = useState(false);
  const clickHandler = () => setClick(!click);
  const menuIcon = click ? <FaTimes /> : <FaBars />;
  const navMenuClass = click ? "nav-menu active" : "nav-menu";
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(false);

  useEffect(() => {
    showButton();
  }, [button]);

  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  

  return (
    <StyledHeader className="navbar">
      <nav className="navbar-container">
        <Link to="/" className="navbar-logo">
          Travlog 
        </Link>
        <div className="menu-icon" onClick={clickHandler}>
          {menuIcon}
        </div>
        <ul className={navMenuClass}>
          <li className="nav-item-home">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={closeMobileMenu}>
              Destinations
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Packages
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
