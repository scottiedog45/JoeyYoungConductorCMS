import React from 'react'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const SocialMediaNavbar = () => (
  <nav className="socialNav navbar is-transparent">
    <div className="container">
      <div className="navbar-start">
        <Link className="navbar-item" to="/twitter">
        <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link className="navbar-item" to="/instagram">
        <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link className="navbar-item" to="/facebook">
        <FontAwesomeIcon icon={faFacebook} />
        </Link>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  </nav>
)

export default SocialMediaNavbar