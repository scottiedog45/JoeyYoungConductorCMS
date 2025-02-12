import React from "react";
import Link from "gatsby-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaNavbarBlack = () => (
  <nav className="socialNav navbar is-transparent">
    <div className="container">
      <div className="navbar-start">
        <a
          className="navbar-item black"
          href="https://twitter.com/youngconductor?lang=en"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          className="navbar-item black"
          href="https://www.instagram.com/youngconductor/"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          className="navbar-item black facebook-navbar"
          href="https://www.facebook.com/YOUNGconductor/"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <div className="navbar-end" />
    </div>
  </nav>
);

export default SocialMediaNavbarBlack;
