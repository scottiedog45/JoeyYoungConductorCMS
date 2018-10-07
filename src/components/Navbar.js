import React from "react";
import Link from "gatsby-link";

import logo from "../img/logo.svg";

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="navbar-start">
      <Link className="navbar-item white" to="/bio">
        Bio
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
  </nav>
);

export default Navbar;
