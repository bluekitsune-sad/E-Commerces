import { React, useState } from "react";
import "./CheckoutPage.css";

function CheckoutPage() {
  const [billingFirstName, setBillingFirstName] = useState("");
  const [billingLastName, setBillingLastName] = useState("");
  const [billingPhone, setBillingPhone] = useState("");
  const [billingMail, setBillingMail] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [billingPostCode, setBillingPostCode] = useState("");
  const [billingCountry, setBillingCountry] = useState("");
  const [billingStreetAddress, setBillingStreetAddress] = useState("");

  const [shippingFirstName, setShippingFirstName] = useState("");
  const [shippingLastName, setShippingLastName] = useState("");
  const [shippingPhone, setShippingPhone] = useState("");
  const [shippingMail, setShippingMail] = useState("");
  const [shippingCity, setShippingCity] = useState("");
  const [shippingPostCode, setShippingPostCode] = useState("");
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingStreetAddress, setShippingStreetAddress] = useState("");

  const [isShippingSameAsBilling, setIsShippingSameAsBilling] = useState(false);

  const handleBillingFirstNameChange = (e) => {
    setBillingFirstName(e.target.value);
  };

  const handleBillingLastNameChange = (e) => {
    setBillingLastName(e.target.value);
  };

  const handleBillingPhoneChange = (e) => {
    setBillingPhone(e.target.value);
  };

  const handleBillingEmailChange = (e) => {
    setBillingMail(e.target.value);
  };

  const handleBillingCityChange = (e) => {
    setBillingCity(e.target.value);
  };

  const handleBillingPostCodeChange = (e) => {
    setBillingPostCode(e.target.value);
  };

  const handleBillingCountryChange = (e) => {
    setBillingCountry(e.target.value);
  };

  const handleBillingStreetAddressChange = (e) => {
    setBillingStreetAddress(e.target.value);
  };

  const handleShippingFirstNameChange = (e) => {
    setShippingFirstName(e.target.value);
  };

  const handleShippingLastNameChange = (e) => {
    setShippingLastName(e.target.value);
  };

  const handleShippingPhoneChange = (e) => {
    setShippingPhone(e.target.value);
  };

  const handleShippingMailChange = (e) => {
    setShippingMail(e.target.value);
  };

  const handleShippingCityChange = (e) => {
    setShippingCity(e.target.value);
  };

  const handleShippingPostCodeChange = (e) => {
    setShippingPostCode(e.target.value);
  };

  const handleShippingCountryChange = (e) => {
    setShippingCountry(e.target.value);
  };

  const handleShippingStreetAddressChange = (e) => {
    setShippingStreetAddress(e.target.value);
  };

  const handleShippingSameAsBillingChange = () => {
    setIsShippingSameAsBilling(!isShippingSameAsBilling);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Billing Details:", {
      firstName: billingFirstName,
      lastName: billingLastName,
      phone: billingPhone,
      mail: billingMail,
      city: billingCity,
      postCode: billingPostCode,
      country: billingCountry,
      streetAddress: billingStreetAddress,
    });

    console.log("Shipping Details:", {
      firstName: shippingFirstName,
      lastName: shippingLastName,
      phone: shippingPhone,
      city: shippingCity,
      postCode: shippingPostCode,
      country: shippingCountry,
      streetAddress: shippingStreetAddress,
    });
  };

  return (
    <div className="billing-details-container">
      <h2>Billing details</h2>
      <div className="form-group-row">
        <div className="form-group-colume">
          <div className="form-group">
            <label htmlFor="billing-first-name">FIRST NAME</label>
            <input
              type="text"
              id="billing-first-name"
              value={billingFirstName}
              onChange={handleBillingFirstNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="billing-last-name">LAST NAME</label>
            <input
              type="text"
              id="billing-last-name"
              value={billingLastName}
              onChange={handleBillingLastNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="billing-phone">PHONE</label>
            <input
              type="tel"
              id="billing-phone"
              value={billingPhone}
              onChange={handleBillingPhoneChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="billing-email">EMAIL</label>
            <input
              type="tel"
              id="billing-mail"
              value={billingMail}
              onChange={handleBillingEmailChange}
            />
          </div>
        </div>
        <div className="form-group-colume">
          <div className="form-group">
            <label htmlFor="billing-city">CITY</label>
            <input
              type="text"
              id="billing-city"
              value={billingCity}
              onChange={handleBillingCityChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="billing-post-code">POST CODE</label>
            <input
              type="text"
              id="billing-post-code"
              value={billingPostCode}
              onChange={handleBillingPostCodeChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="billing-country">COUNTRY</label>
            <input
              type="text"
              id="billing-country"
              value={billingCountry}
              onChange={handleBillingCountryChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="billing-street-address">STREET ADRESS</label>
            <input
              type="text"
              id="billing-street-address"
              value={billingStreetAddress}
              onChange={handleBillingStreetAddressChange}
            />
          </div>
        </div>
      </div>

      <h2>Shipping details</h2>
      <div className="form-group-row">
        <div className="form-group-colume">
          <div className="form-group">
            <label htmlFor="shipping-first-name">FIRST NAME</label>
            <input
              type="text"
              id="shipping-first-name"
              value={shippingFirstName}
              onChange={handleShippingFirstNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="shipping-last-name">LAST NAME</label>
            <input
              type="text"
              id="shipping-last-name"
              value={shippingLastName}
              onChange={handleShippingLastNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="shipping-phone">PHONE</label>
            <input
              type="tel"
              id="shipping-phone"
              value={shippingPhone}
              onChange={handleShippingPhoneChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="shipping-email">EMAIL</label>
            <input
              type="tel"
              id="shipping-mail"
              value={shippingMail}
              onChange={handleShippingMailChange}
            />
          </div>
        </div>
        <div className="form-group-colume">
          <div className="form-group">
            <label htmlFor="shipping-city">CITY</label>
            <input
              type="text"
              id="shipping-city"
              value={shippingCity}
              onChange={handleShippingCityChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="shipping-post-code">POST CODE</label>
            <input
              type="text"
              id="shipping-post-code"
              value={shippingPostCode}
              onChange={handleShippingPostCodeChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="shipping-country">COUNTRY</label>
            <input
              type="text"
              id="shipping-country"
              value={shippingCountry}
              onChange={handleShippingCountryChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="shipping-street-address">STREET ADRESS</label>
            <input
              type="text"
              id="shipping-street-address"
              value={shippingStreetAddress}
              onChange={handleShippingStreetAddressChange}
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <input
          type="checkbox"
          id="shipping-same-as-billing"
          checked={isShippingSameAsBilling}
          onChange={handleShippingSameAsBillingChange}
        />
        <label htmlFor="shipping-same-as-billing">
          Shipping adress will same as billing adress
        </label>
      </div>

      <button onClick={handleSubmit}>Place order</button>
    </div>
  );
}
export default CheckoutPage;
