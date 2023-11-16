// CheckoutPage.js

import React, { useState } from "react";
import "./CheckoutPage.css";

function CheckoutPage() {
  const [showShippingForm, setShowShippingForm] = useState(false);

  const toggleShippingForm = () => {
    setShowShippingForm(!showShippingForm);
  };

  return (
    <div className="checkout-page">
      <div className="upper-data">
        <div className="billing-details">
          <form action="" className="inner-data-form">
            <h3>Billing details</h3>
            <div className="form-field ls">
              <label htmlFor="">FIRST NAME</label>
              <input type="text" />
            </div>
            <div className="form-field rs">
              <label htmlFor="">LAST NAME</label>
              <input type="text" />
            </div>
            <div className="form-field ls">
              <label htmlFor="">PHONE</label>
              <input type="text" />
            </div>
            <div className="form-field rs">
              <label htmlFor="">EMAIL</label>
              <input type="text" />
            </div>
            <div className="form-field ls">
              <label htmlFor="">CITY</label>
              <input type="text" />
            </div>
            <div className="form-field rs">
              <label htmlFor="">COUNTRY</label>
              <input type="text" />
            </div>
            <div className="form-field ls">
              <label htmlFor="">POST CODE</label>
              <input type="text" />
            </div>
            <div className="form-field rs">
              <label htmlFor="">STREET ADDRESS</label>
              <input type="text" />
            </div>
          </form>
        </div>
        <div className="order-summary">
          <div className="inner-data">
            <p>Your order</p>
            <span>Product Quantity</span>
            <span>Sub total</span>
            <h3>Total</h3>
            <label htmlFor="">
              Cash on delivery <input type="radio" />
            </label>
            <button className="place-order-btn">Place order</button>
          </div>
        </div>
      </div>
      <div className="between-details">
        <p>Shipping address will be the same as the billing address</p>
        <input
          type="checkbox"
          className="same-address-checkbox"
          onChange={toggleShippingForm}
        />
      </div>
      {showShippingForm && (
        <div className="shipping-details">
          <div className="billing-details">
            <form action="" className="inner-data-form">
              <h3>Shipping details</h3>
              <div className="form-field ls">
                <label htmlFor="">FIRST NAME</label>
                <input type="text" />
              </div>
              <div className="form-field rs">
                <label htmlFor="">LAST NAME</label>
                <input type="text" />
              </div>
              <div className="form-field ls">
                <label htmlFor="">PHONE</label>
                <input type="text" />
              </div>
              <div className="form-field rs">
                <label htmlFor="">EMAIL</label>
                <input type="text" />
              </div>
              <div className="form-field ls">
                <label htmlFor="">CITY</label>
                <input type="text" />
              </div>
              <div className="form-field rs">
                <label htmlFor="">COUNTRY</label>
                <input type="text" />
              </div>
              <div className="form-field ls">
                <label htmlFor="">POST CODE</label>
                <input type="text" />
              </div>
              <div className="form-field rs">
                <label htmlFor="">STREET ADDRESS</label>
                <input type="text" />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
