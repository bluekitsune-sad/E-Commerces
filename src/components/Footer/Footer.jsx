import React from "react";
import "./Footer.css";
import logo from "../images/dukan_logo.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Footer Logo" />
        </div>
        <div className="footer-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="footer-contact">
          <p>Contact Info:</p>
          <p>Email: example@example.com</p>
          <p>Phone: +123-456-7890</p>
        </div>
        <div className="footer-follow">
          <p>Follow Us:</p>
          <div className="follow-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <i class="fab fa-facebook-f"></i> */}
              <FontAwesomeIcon icon={faFacebookF} spin spinReverse />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} spin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} spin spinReverse />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
