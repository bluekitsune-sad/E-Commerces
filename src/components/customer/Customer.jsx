import React, { useState } from "react";
import "./Customer.css";
import {
  businessCategories,
  cityOptions,
  countryOptions,
} from "../Constants/Constant";
import noImage from "../images/noImage/noimage.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CustomerForm() {
  const [formData, setFormData] = useState({
    customer_fullname: "",
    customer_phone: "",
    customer_email: "",
    password: "",
    password_confirmation: "",
    customer_ntn_no: "",
    customer_gstno: "",
    customer_code: "",
    customer_address: "",
    customer_country: "",
    customer_city: "",
    customer_profileImage: null,
    customer_location_url: "",
    // otp: "",
    otp: Math.floor(Math.random() * 1000) + 100,
  });

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById("password-input");
    const passwordInputConfirm = document.getElementById(
      "password-input-confirm"
    );
    const toggleButton = document.getElementById("toggle-password");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordInputConfirm.type = "text";
      toggleButton.textContent = "Hide";
    } else {
      passwordInput.type = "password";
      passwordInputConfirm.type = "password";
      toggleButton.textContent = "Show";
    }
  };

  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleImageChange = (e) => {
  //   const { name, files } = e.target;
  //   setFormData({ ...formData, [name]: files[0] });
  // };

  const handleOwnerImageChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleShopImageChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      // Send the form data to the server
      const response = await fetch("http://localhost:3001/api/addCustomer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send formData directly
      });
      // console.log("helllo");
      if (response.ok) {
        // Handle success scenario
        console.log("Registration successful");
        // Redirect or perform other actions after successful registration
      } else {
        // Handle error scenarios
        console.error("Failed to register");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  return (
    <div className="container">
      <Link to="/" className="back">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>

      <form
        id="addPharmacy"
        action="http://localhost:3001/api/addCustomer" //need attention
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="row justify-content-center">
          <div className="col-md-6 p-4">
            <h3>Customer Information</h3>
            <hr />
            <div className="row m-2">
              <div className="form-group">
                <div className="col-lg-12">
                  <input
                    type="text"
                    name="customer_fullname"
                    placeholder="Enter customer name"
                    value={formData.customer_fullname}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group row">
                  <div className="col-lg-12">
                    <input
                      type="number"
                      name="customer_phone"
                      placeholder="Enter customer phone number"
                      value={formData.customer_phone}
                      onChange={handleChange}
                      className="form-control"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group row">
                  <div className="col-lg-12">
                    <input
                      type="email"
                      name="customer_email"
                      placeholder="Enter customer email"
                      value={formData.customer_email}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group row">
                  <div className="col-lg-12">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      className="form-control"
                      id="password-input"
                    />
                    <button
                      id="toggle-password"
                      type="button"
                      onClick={togglePasswordVisibility}
                    >
                      Show
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group row">
                  <div className="col-lg-12">
                    <input
                      type="password"
                      name="password_confirmation"
                      placeholder="Confirm Password"
                      value={formData.password_confirmation}
                      onChange={handleChange}
                      className="form-control"
                      id="password-input-confirm"
                    />
                    {/* <button
                      id="toggle-confirm-password"
                      type="button"
                      onClick={togglePasswordVisibility}
                    >
                      Show
                    </button> */}
                    {formData.password_confirmation !== formData.password ? (
                      <span className="error-message">
                        Passwords do not match.
                      </span>
                    ) : (
                      <span className="success-message">Passwords match.</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="form-group row">
                  <div className="col-lg-12">
                    <input
                      type="number"
                      name="customer_ntn_no"
                      placeholder="NTN No"
                      value={formData.customer_ntn_no}
                      onChange={handleChange}
                      className="form-control"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group row">
                  <div className="col-lg-12">
                    <input
                      type="number"
                      name="customer_gstno"
                      placeholder="GST No"
                      value={formData.customer_gstno}
                      onChange={handleChange}
                      className="form-control"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group row">
                  <div className="col-lg-12">
                    <input
                      type="text"
                      name="customer_code"
                      placeholder="Postal Code"
                      value={formData.customer_code}
                      onChange={handleChange}
                      className="form-control"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group row">
                  <div className="col-lg-12">
                    <input
                      type="text"
                      name="customer_address"
                      placeholder="Full Address"
                      value={formData.customer_address}
                      onChange={handleChange}
                      className="form-control"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group row">
                  <div className="col-lg-12">
                    <select
                      name="customer_country"
                      id="customer_country"
                      value={formData.customer_country}
                      onChange={handleChange}
                      className="pharmacy_country form-control chosen-select"
                    >
                      <option value="">Select Country</option>
                      {countryOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group row">
                  <div className="col-lg-12">
                    <select
                      name="customer_city"
                      id="city"
                      value={formData.customer_city}
                      onChange={handleChange}
                      className="city form-control"
                    >
                      <option value="">Select City</option>
                      {cityOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="imgSection">
                <div className="form-group row">
                  <label className="form-label">Customer's Image</label>
                  <div className="image-handleDiv">
                    <input
                      type="file"
                      name="customer_profileImage"
                      id="customer_profileImage"
                      accept="image/*"
                      onChange={handleOwnerImageChange}
                    />
                  </div>
                  <div className="img-section">
                    <img
                      id="output_owner_image"
                      src={
                        formData.owner_image
                          ? URL.createObjectURL(formData.owner_image)
                          : noImage
                      }
                      // alt={noImage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="submit-btn">
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CustomerForm;
