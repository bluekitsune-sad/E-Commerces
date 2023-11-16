import React from "react";
import { Link } from "react-router-dom";

const Product = ({ name, image, price }) => {
  return (
    <div className="product-card">
      <Link to="/productDetails">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>${price}</p>
      </Link>
    </div>
  );
};

export default Product;
