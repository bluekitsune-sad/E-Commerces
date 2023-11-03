import React from "react";
import SlidingImages from "./Slider";
import Shop from "./Shop";
import MostSellers from "./mostSeller";
import Product from "./Product";
import "./Body.css";

function Body() {
  // Dummy data for shops, most sellers, and products
  const shops = [
    {
      id: 1,
      name: "Shop 1",
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
    // Add more seller data here
  ];

  const products = [
    {
      id: 1,
      name: "Product 1",
      image: "/path/to/product1.jpg",
      price: 10,
    },
    // Add more product data here
  ];

  return (
    <div className="body-container">
      <h1>Body</h1>
      <SlidingImages />
      <div className="shops-container">
        {shops.map((shop) => (
          <Shop key={shop.id} {...shop} />
        ))}
      </div>
      <MostSellers sellers={mostSellers} />
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Body;
