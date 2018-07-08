import React from 'react'
import Link from 'gatsby-link'

const SocialMediaNavbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-start">
        <Link className="navbar-item" to="/twitter">
          TWIT
        </Link>
        <Link className="navbar-item" to="/instagram">
          INSTA
        </Link>
        <Link className="navbar-item" to="/facebook">
          FB
        </Link>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  </nav>
)

export default SocialMediaNavbar