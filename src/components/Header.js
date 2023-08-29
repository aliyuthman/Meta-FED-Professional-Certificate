import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <nav className="">
        {/* Brand - logo and label */}

        <div className="brand">
          <img src={logo} alt="" />
          <span>Little Lemon</span>
        </div>
        {/* Right Nav */}
        <ul className="left-nav">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>

          <li>
            <a href="">Reservation</a>
          </li>
        </ul>

        {/* Left Nav */}
        <ul className="right-nav">
          <li>
            <a href="" role="button">
              Order online
            </a>
          </li>

          <li>
            <a href="" role="button">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
