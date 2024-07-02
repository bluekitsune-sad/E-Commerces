import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../images/logo-head.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faChevronUp,
  faChevronDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { businessCategories } from "../Constants/Constant";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

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

  useEffect(() => {
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
                <img
                  src="https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg"
                  alt={item.name}
                />
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
          Shop - Login / Register
        </Link>
        <Link to="/customer" className="top-bar-button">
          Customer - Login / Register
        </Link>
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
                <ul className="scrollable-list">
                  {filteredItems.map((item) => (
                    <Link
                      key={item.value}
                      to="shopDetails"
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
                  <div className={`description ${selectedItem ? "active" : ""}`}>
                    <div>
                      <img
                        src="https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg"
                        alt={selectedItem.label}
                      />
                      <h3>{selectedItem.description}</h3>
                    </div>
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
          <input type="text" placeholder="Search Shop & Product" />
          <Link to="/searchResultPage">
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </Link>
        </div>

        {cartIcon}
      </header>
    </div>
  );
};

export default Header;
