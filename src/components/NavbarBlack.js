import React from "react";
import Link from "gatsby-link";

import logo from "../img/logo.svg";

const NavbarBlack = () => (
  <nav className="navbar is-transparent">
    <div className="navbar-start">
      <Link className="navbar-item black" to="/bio">
        About
      </Link>
      <Link className="navbar-item black" to="/calendar">
        Calendar
      </Link>
      <Link className="navbar-item black" to="/news">
        News
      </Link>
      <Link className="navbar-item black" to="/videos">
        Video
      </Link>
      <Link className="navbar-item black" to="/pics">
        Photos
      </Link>
      <Link className="navbar-item black contact-navbar" to="/contact">
        Contact
      </Link>
    </div>
  </nav>
);

export default NavbarBlack;
