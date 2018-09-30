import React from "react";
import Link from "gatsby-link";

import logo from "../img/logo.svg";

//factor out navbar style below

const Navbar = () => (
  <nav style={navBarStyle} className="navbar is-transparent">
    <div className="container">
      <div className="navbar-start">
        <Link className="navbar-item white" to="/bio">
          About
        </Link>
        <Link className="navbar-item white" to="/calendar">
          Calendar
        </Link>
        <Link className="navbar-item white" to="/news">
          News
        </Link>
        <Link className="navbar-item white" to="/videos">
          Video
        </Link>
        <Link className="navbar-item white" to="/pics">
          Photos
        </Link>
        <Link className="navbar-item white contact-navbar" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

const navBarStyle = {
  right: 0,
  float: "right",
  top: 20
};

export default Navbar;
