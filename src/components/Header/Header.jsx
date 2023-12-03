import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../images/logo-head.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyNavbar from "../navbar/navbar";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
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
          style={{width:'2000%'}}
        >
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src='https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg' style={{width:'10%', hight:'10%'}}/> {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item)} style={{width:'20%', height:"10%", marginLeft:'10px'}}>Remove</button>
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
    <>
            {/* <MyNavbar></MyNavbar> */}

    <div className="header-container">
      <div className="top-bar">
        <Link to="/registration" className="top-bar-button">
          {/* <FontAwesomeIcon icon={faSignInAlt} /> */}
          Shop - Login / Register
        </Link>

        


        <Link to="/customer" className="top-bar-button">
          {/* <FontAwesomeIcon icon={faUserAlt} /> */}
          Customer - Login / Register
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
                {/* <input
                  type="text"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                /> */}
                <ul className="scrollable-list">
                  {filteredItems.map((item) => (
                    <Link
                      key={item.value}
                      to='shopDetails'
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
                  <div style={{marginRight:'20px'}}
                    className={`description ${selectedItem ? "active" : ""}`}
                  >
                    <div>
                      <img src='https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg' style={{width:'10%', hight:'10%'}}/>
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
        

        {/* <div className="textiya">
          <div class="mb-3 navbar-filter">
            <select class="form-select select" name="" id="">
              <option selected>Select one</option>
              <option value="">New Delhi</option>
              <option value="">Istanbul</option>
              <option value="">Jakarta</option>
            </select>
            <select class="form-select select" name="" id="">
              <option selected>Select one</option>
              <option value="">New Delhi</option>
              <option value="">Istanbul</option>
              <option value="">Jakarta</option>
            </select>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="Location"/>
          </div>
        </div> */}
        
        {cartIcon}


      </header>
    </div>

     
   </>
  );
};

export default Header;
