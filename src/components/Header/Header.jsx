import React, { useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  // Dummy data for cart items
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

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
    navigate(`/category/${item.value}`);
    setSelectedItem(item);
    setIsDropdownOpen(false);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  const filteredItems = businessCategories.filter((item) =>
    item.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  useEffect(() => {
    // Add default cart items when the component loads
    setCartItems([
      { id: 1, name: "Product 1", price: 10 },
      { id: 2, name: "Product 2", price: 15 },
      { id: 3, name: "Product 3", price: 20 },
    ]);
  }, []);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const cartIcon = (
    <div className="cart-icon" onClick={toggleCart}>
      <FontAwesomeIcon icon={faShoppingCart} />
      {cartItems.length > 0 && (
        <div className="cart-badge">{cartItems.length}</div>
      )}
      {isCartOpen && (
        <div
          className="cart-dropdown"
          onClick={(e) => e.stopPropagation()}
          onMouseLeave={toggleCart}
        >
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <Link to="/cartPage">
            <button>View Cart</button>
          </Link>
          <Link to="/checkoutPage">
            <button>Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <div className="header-container">
      <div className="top-bar">
        <Link to="/registration" className="top-bar-button">
          <FontAwesomeIcon icon={faSignInAlt} />
          Shop-Login/Register
        </Link>
        <Link to="/registration" className="top-bar-button">
          <FontAwesomeIcon icon={faUserAlt} />
          Customer-Login/Register
        </Link>
        {/* <button className="top-bar-button">
          <FontAwesomeIcon icon={faUserAlt} />
          Customer-Login/Register
        </button> */}
      </div>

      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
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
                    <Link
                      key={item.value}
                      to={`/category/${item.value}`}
                      onMouseEnter={() => setSelectedItem(item)}
                      onClick={() => handleItemClick(item)}
                      className="category-link"
                    >
                      {item.label}
                      <hr />
                    </Link>
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
          <Link to="/">Home</Link>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />

          <Link to="/searchResultPage">
            <button>
              <FontAwesomeIcon icon={faSearch} /> {/* //need attention */}
            </button>
          </Link>
        </div>
        {cartIcon}
      </header>
    </div>
  );
};

export default Header;
