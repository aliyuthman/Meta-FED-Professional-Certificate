import React from "react";
import logo from "../assets/logo.svg";
import Nav from "./Nav";

const Footer = () => {
  return (
    <footer>
      <>
        <img src={logo} alt="" />
      </>
      <Nav />
      <ul>
        <li>Phone number</li>
        <li>Email</li>
        <li>Address</li>
      </ul>
      <nav>
        <ul>
          <li>
            <a href="">Facebook</a>
            <a href="">Instagram</a>
            <a href="">Twitter</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
