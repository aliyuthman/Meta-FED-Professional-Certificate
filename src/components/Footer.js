import React from "react";
import logo from "../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer>
      <article>
        <img src={logo} alt="" />
        <nav>
          <ul>
            <li>Navigation</li>
            <li> Home</li>
            <li> About</li>
            <li> Menu</li>
            <li> Reservations </li>
            <li> Order Online </li>
            <li> Login</li>
          </ul>
        </nav>

        <address>
          <ul>
            <li>Contact</li>
            <li>678 Pisa Ave, Chicago, IL 60611</li>
            <li>(312) 593-2744</li>
            <li> customer@littlelemon.com</li>
          </ul>
        </address>

        <nav>
          <ul>
            <li>Social Media</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </nav>
      </article>
    </footer>
  );
};

export default Footer;
