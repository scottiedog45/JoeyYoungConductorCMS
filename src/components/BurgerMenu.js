import React from "react";
import PropTypes from "prop-types";
import { slide as TinyMenu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

class BurgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <TinyMenu right>
        <a id="home" className="burger-menu-item" href="/">
          Home
        </a>
        <a id="about" className="burger-menu-item" href="/bio">
          About
        </a>
        <a id="calendar" className="burger-menu-item" href="/calendar">
          Calendar
        </a>
        <a id="news" className="burger-menu-item" href="/news">
          News
        </a>
        <a id="video" className="burger-menu-item" href="/videos">
          Video
        </a>
        <a id="photos" className="burger-menu-item" href="/pics">
          Pics
        </a>
        <a id="contact" className="burger-menu-item" href="/contact">
          Contact
        </a>
        <a
          id="home"
          className="burger-menu-item bm-social"
          href="https://twitter.com/youngconductor?lang=en"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          id="home"
          className="burger-menu-item bm-social"
          href="https://www.instagram.com/youngconductor/"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          id="home"
          className="burger-menu-item bm-social"
          href="https://www.facebook.com/YOUNGconductor/"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </TinyMenu>
    );
  }
}

export default BurgerMenu;
