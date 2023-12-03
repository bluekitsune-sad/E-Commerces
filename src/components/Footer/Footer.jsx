import React from "react";
import "./Footer.css";
import logo from "../images/logo-head (1).png";
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
        <div className="col-xl-5 p-3">
        <div className="footer-logo">
          <img src={logo} alt="Footer Logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        </div>
        
        {/* <div className="footer-description">
        </div> */}

        <div className="col-xl-2 p-3">
        <div className="footer-links">
          <ul>
          <li>
              <a href="/" className="fw-bold">Menu</a>
            </li>
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
        </div>
        
        <div className="col-xl-3 p-3">
        <div className="footer-contact">
          <p className="fw-bold">INFORMATION</p>
          <p><FontAwesomeIcon icon={faFacebookF} />
             +123-456-7890</p>
          <p><FontAwesomeIcon icon={faFacebookF} />
            example@example.com</p>
        </div>
        </div>

        <div className="col-xl-2 p-3">
        <div className="footer-follow">
          <p className="fw-bold">FOLLOW US:</p>
          <div className="follow-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <i class="fab fa-facebook-f"></i> */}
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter}  />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        </div>
       
      </div>
      
    </footer>
  );
};

export default Footer;
