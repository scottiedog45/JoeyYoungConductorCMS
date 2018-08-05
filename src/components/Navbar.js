import React from 'React'
import Link from 'gatsby-link'

import logo from '../img/logo.svg'

const Navbar = () => (
  <nav style={navBarStyle} className="navbar is-transparent">
    <div className="container">
      <div className="navbar-start">
        <Link className="navbar-item" to="/bio">
          About
        </Link>
        <Link className="navbar-item" to="/calendar">
          Calendar
        </Link>
        <Link className="navbar-item" to="/news">
          News
        </Link>
        <Link className="navbar-item" to="/video">
          Video
        </Link>
        <Link className="navbar-item" to="/photos">
          Photos
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  </nav>
)

const navBarStyle = {
  right: 0,
  float: 'right',
  
  top: 20
}

export default Navbar
