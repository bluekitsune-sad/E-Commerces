import React from "react";
import SlidingImages from "./Slider";
import Shop from "./Shop";
import MostSellers from "./mostSeller";
import Product from "./Product";
import "./Body.css";
import FeatureItem from "./FeatureItem";

function Body() {
  // Dummy data for shops, most sellers, and products
  const shops = [
    {
      id: 1,
      name: "Shop 1",
      image: "/path/to/shop1.jpg",
      description: "Description for Shop 1",
    },
    {
      id: 2,
      name: "Shop 2",
      image: "/path/to/shop1.jpg",
      description: "Description for Shop 1",
    },
    {
      id: 3,
      name: "Shop 3",
      image: "/path/to/shop1.jpg",
      description: "Description for Shop 1",
    },
    {
      id: 4,
      name: "Shop 4",
      image: "/path/to/shop1.jpg",
      description: "Description for Shop 1",
    },
    // Add more shop data here
  ];

  const mostSellers = [
    {
      id: 1,
      name: "Seller 1",
      image: "/path/to/seller1.jpg",
    },
    {
      id: 2,
      name: "Seller 2",
      image: "/path/to/seller1.jpg",
    },
    {
      id: 3,
      name: "Seller 3",
      image: "/path/to/seller1.jpg",
    },
    {
      id: 4,
      name: "Seller 4",
      image: "/path/to/seller1.jpg",
    },
    // Add more seller data here
  ];

  const products = [
    {
      id: 1,
      name: "Product 1",
      image: "/path/to/product1.jpg",
      price: 10,
    },
    {
      id: 2,
      name: "Product 2",
      image: "/path/to/product1.jpg",
      price: 10,
    },
    {
      id: 3,
      name: "Product 3",
      image: "/path/to/product1.jpg",
      price: 10,
    },
    {
      id: 4,
      name: "Product 4",
      image: "/path/to/product1.jpg",
      price: 10,
    },
    // Add more product data here
  ];

  return (
    <>
      <div className="body-container">
        <SlidingImages />
        <div className="feature-bar">
          <FeatureItem
            iconName="faIdCard"
            title="Free Membership for shops"
            description=""
          />
          <FeatureItem
            iconName="faCreditCard"
            title="POS Facility for shops"
            description=""
          />
          <FeatureItem
            iconName="faCreditCard"
            title="Connectivity in just one click"
            description=""
          />
          <FeatureItem
            iconName="faMoneyCheckAlt"
            title="24/7 Support"
            description=""
          />
        </div>
        <div className="some-text">
          <h4>VIEW ALL SHOPS</h4>
          <h1>Dukan24h Shop</h1>
        </div>
        <h2>Shops</h2>
        <div className="shops-container">
          {shops.map((shop) => (
            <Shop key={shop.id} {...shop} />
          ))}
        </div>
        {/* <MostSellers sellers={mostSellers} /> */}
        <div className="container-fluid">
          <div className="row newsletter-row">
            <div className="newsletter-text">
              <h4 className="text-white">Subscribe Our Newsletter!</h4>
              <p className="text-white">
                Subscribe to our newsletter for featured promotions and new
                products!
              </p>
            </div>
            <div className="newsletter-input">
              <form>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter Your Email Address"
                    required
                  />
                  <div className="input-group-append">
                    <button className="subscribe-button" type="submit">
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <h2>Latest Products</h2>
        <div className="products-container">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
        <h2>Featured Products</h2>
        <div className="products-container">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Body;
