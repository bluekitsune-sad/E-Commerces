import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ name, image, price }) => {
  return (
    <div className="product-card">
      <Link to="/productDetails">
      <img src='https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg' alt={name} width='100%'/>
      <h5 className="title">{name}</h5>
      <p className="product-category">${price}</p>
      </Link>
    </div>
  );
};

export default Product;
