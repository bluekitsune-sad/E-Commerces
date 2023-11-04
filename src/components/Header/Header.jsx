import React, { useState } from "react";
import "./Header.css";
import logo from "../images/dukan_logo.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faChevronUp,
  faChevronDown,
  faSearch,
  faSignInAlt,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // Dummy data for cart items
  const cartItems = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20 },
  ];

  const categories = ["Category 1", "Category 2", "Category 3"];

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const closeCategory = () => {
    setTimeout(() => {
      setIsCategoryOpen(false);
    }, 1000);
  };

  return (
    <div className="header-container">
      <div className="top-bar">
        <button className="top-bar-button">
          <FontAwesomeIcon icon={faSignInAlt} />
          Shop-Login/Register
        </button>
        <button className="top-bar-button">
          <FontAwesomeIcon icon={faUserAlt} />
          Customer-Login/Register
        </button>
      </div>

      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="category-dropdown" onMouseLeave={closeCategory}>
          <button className="category-button" onClick={toggleCategory}>
            Browse Categories
            <FontAwesomeIcon
              icon={isCategoryOpen ? faChevronUp : faChevronDown}
            />
          </button>
          {isCategoryOpen && (
            <ul className="category-menu">
              {categories.map((category, index) => (
                <li key={index}>
                  <a href={`/${category.toLowerCase()}`}>{category}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="home">
          <a href="#">Home</a>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="cart-icon" onMouseEnter={toggleCart}>
          <FontAwesomeIcon icon={faShoppingCart} />
          {isCartOpen && (
            <div className="cart-dropdown" onMouseLeave={toggleCart}>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
              <button>Go to Cart</button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
