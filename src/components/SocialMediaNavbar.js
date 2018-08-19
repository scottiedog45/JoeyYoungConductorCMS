import React from 'react'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const SocialMediaNavbar = () => (
  <nav className="socialNav navbar is-transparent">
    <div className="container">
      <div className="navbar-start">
        <Link className="navbar-item" to="https://twitter.com/youngconductor?lang=en">
        <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link className="navbar-item" to="https://www.instagram.com/youngconductor/">
        <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link className="navbar-item" to="https://www.facebook.com/YOUNGconductor/">
        <FontAwesomeIcon icon={faFacebook} />
        </Link>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  </nav>
)

export default SocialMediaNavbar