import React from "react";

const Shop = ({ name, image, description }) => {
  return (
    <div className="shop-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Shop;
