import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ name, image, price }) => {
  return (
    <div className="product-card">
      <Link to="/productDetails">
      <img src='https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg' alt={name} width='150'/>
      <h3>{name}</h3>
      <p>${price}</p>
      </Link>
    </div>
  );
};

export default Product;
