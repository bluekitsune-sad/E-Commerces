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
import { businessCategories } from "../Constants/Constant";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Dummy data for cart items
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { id: 1, name: "Item 1", description: "Description for Item 1" },
    { id: 2, name: "Item 2", description: "Description for Item 2" },
    { id: 3, name: "Item 3", description: "Description for Item 3" },
    // Add more items with descriptions
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
  };

  const filteredItems = businessCategories.filter((item) =>
    item.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  const cartItems = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20 },
  ];

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
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

        <div className="dropdown-button-container">
          <div className="dropdown-container">
            <button
              className={`dropdown-button${isDropdownOpen ? " open" : ""}`}
              onClick={toggleDropdown}
            >
              Browse Categories
              <FontAwesomeIcon
                icon={isDropdownOpen ? faChevronUp : faChevronDown}
              />
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <ul className="scrollable-list">
                  {filteredItems.map((item) => (
                    <li
                      key={item.value}
                      onMouseEnter={() => setSelectedItem(item)}
                      onClick={() => handleItemClick(item)}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
                {selectedItem && (
                  <div
                    className={`description ${selectedItem ? "active" : ""}`}
                  >
                    <p>{selectedItem.description}</p>
                  </div>
                )}
              </div>
            )}
          </div>
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
