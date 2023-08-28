import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul>
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

      <ul>
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
  );
};

export default Nav;
