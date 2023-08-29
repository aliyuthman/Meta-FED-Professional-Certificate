import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

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
            {/* <a href="">Home</a> */}
            <Link to="/home">Home</Link>
          </li>
          <li>
            {/* <a href="">About</a> */}
            <Link to="about">About</Link>
          </li>
          <li>
            {/* <a href="">Menu</a> */}
            <Link to="menu">Menu</Link>
          </li>

          <li>
            {/* <a href="">Reservation</a> */}
            <Link to="bookingPage">Reservation</Link>
          </li>
        </ul>

        {/* Left Nav */}
        <ul className="right-nav">
          <li>
            {/* <a href="" role="button">
              Order online
            </a> */}

            <Link to="order-online">Order Online</Link>
          </li>

          <li>
            {/* <a href="" role="button">
              Login
            </a> */}

            <Link to="login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
