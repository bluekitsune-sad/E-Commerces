import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Shop = ({ name, image, description }) => {
  return (
    <div className="shop-card">
       <Link to="/shopDetails">
        <img src='https://content.jdmagicbox.com/comp/gaya/j3/9999px631.x631.170927005819.d8j3/catalogue/big-shope-wazirganj-gaya-gents-readymade-garment-retailers-x783o.jpg' alt={name} width='150' />
        <h3>{name}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default Shop;
