import React from "react";
import { Link } from "react-router-dom";

const Shop = ({ name, image, description }) => {
  return (
    <div className="shop-card">
      <Link to="/shopDetails">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default Shop;
