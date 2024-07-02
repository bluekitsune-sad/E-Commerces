import React from "react";
import "./shopDetails.css";
import second from "../images/b20.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function shopDetails() {
  return (
    <>
      <div className="container">
        <div className="dukan">
          <div className="row">
            <div className="col-3">
              <img
                src={second}
                alt=""
                srcset=""
                className="image w-100 h-100"
              />
            </div>
            <div className="col-8 details">
              <div className="row">
                <h1 className="text-center mb-3 mt-3">Demo Pharmacy</h1>
                <h5 className="fw-semibold m-0">Details:</h5>
                <div className="col-6">
                  example.account@gmail.com example.account@gmail.com
                </div>
                <div className="col-6">
                  example.account@gmail.com example.account@gmail.com
                </div>
              </div>
            </div>
            <div className="col-1 fs-3 d-block text-center">
              <FontAwesomeIcon icon={faFacebookF} className="d-block my-2" />
              <FontAwesomeIcon icon={faInstagram} className="d-block my-2" />
              <FontAwesomeIcon icon={faTwitter} className="d-block my-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-4 products">
        <div className="col-2">
          <div className="related-shops">
            <h5>Related Shops</h5>
            <label>
              <input type="checkbox" />
              Check this switch
            </label>
          </div>
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-3">
              <div className="product">
                <img
                  src={second}
                  alt=""
                  srcset=""
                  className="image w-100 h-100"
                />
                <h5>Baby Care</h5>
                <p>J&J Baby Lotion New 100ml</p>
                <p>Rs.175</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div className="col-3">
              <div className="product">
                <img
                  src={second}
                  alt=""
                  srcset=""
                  className="image w-100 h-100"
                />
                <h5>Baby Care</h5>
                <p>J&J Baby Lotion New 100ml</p>
                <p>Rs.175</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div className="col-3">
              <div className="product">
                <img
                  src={second}
                  alt=""
                  srcset=""
                  className="image w-100 h-100"
                />
                <h5>Baby Care</h5>
                <p>J&J Baby Lotion New 100ml</p>
                <p>Rs.175</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div className="col-3">
              <div className="product">
                <img
                  src={second}
                  alt=""
                  srcset=""
                  className="image w-100 h-100"
                />
                <h5>Baby Care</h5>
                <p>J&J Baby Lotion New 100ml</p>
                <p>Rs.175</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default shopDetails;
