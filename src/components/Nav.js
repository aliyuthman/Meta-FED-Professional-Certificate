import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Menu</a>
          <a href="">Reservation</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="" role="button">
            Order online
          </a>
          <a href="" role="button">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
