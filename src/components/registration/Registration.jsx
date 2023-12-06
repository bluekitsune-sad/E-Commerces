import React, { useState } from "react";
import "./Registration.css";
import {
  businessCategories,
  cityOptions,
  countryOptions,
} from "../Constants/Constant";
import noImage from "../images/noImage/noimage.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    shop_fullname: "",
    shop_phone: "",
    shop_email: "",
    password: "",
    password_confirmation: "",
    shop_ntn_no: "",
    shop_gstno: "",
    shop_code: "",
    shop_address: "",
    shop_country: "",
    shop_city: "",
    shop_category: "",
    shop_profileImage: null,
    shop_location_url: "",
    shop_access: "",
    owner_fullname: "",
    owner_email: "",
    owner_phone: "",
    owner_cnic: "",
    owner_image: null,
    // otp: "",
    otp: Math.floor(Math.random() * 1000) + 100,
  });

  const defaultshop_category = [
    {
      value: "clothing",
      label: "Clothing",
      description: "Clothing and apparel",
    },
    {
      value: "electronics",
      label: "Electronics",
      description: "Electronic gadgets",
    },
    { value: "books", label: "Books", description: "Books and literature" },
    // Add more categories as needed
  ];

  const [showOtpInput, setShowOtpInput] = useState(false);

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
      const response = await fetch("http://localhost:3001/api/registerShop", {
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
        action="http://localhost:3001/api/registerShop"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="form"
      >
        <div className="row">
          <div className="col-md-6 p-4 SP">
            <h3>Shop Information</h3>
            <hr />
            <div className="row">
              <div className="form-group">
                <div className="col-lg-12">
                  <input
                    type="text"
                    name="shop_fullname"
                    placeholder="Enter shop name"
                    value={formData.shop_fullname}
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
                      name="shop_phone"
                      placeholder="Enter shop phone number"
                      value={formData.shop_phone}
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
                      type="shop_email"
                      name="shop_email"
                      placeholder="Enter shop email"
                      value={formData.shop_email}
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
                      name="shop_ntn_no"
                      placeholder="NTN No"
                      value={formData.shop_ntn_no}
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
                      name="shop_gstno"
                      placeholder="GST No"
                      value={formData.shop_gstno}
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
                      name="shop_code"
                      placeholder="Postal Code"
                      value={formData.shop_code}
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
                      name="shop_address"
                      placeholder="Full Address"
                      value={formData.shop_address}
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
                      name="shop_country"
                      id="shop_country"
                      value={formData.shop_country}
                      onChange={handleChange}
                      className="shop_country form-control chosen-select"
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
                      name="shop_city"
                      id="city"
                      value={formData.shop_city}
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
              <div className="col-6">
                <div className="form-group row">
                  <div className="col-lg-12">
                    <select
                      name="shop_category"
                      id="shop_category"
                      value={formData.shop_category}
                      onChange={handleChange}
                      className="shop_category form-control"
                    >
                      <option value="">Select Shop Category</option>
                      {defaultshop_category.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="imgSection">
                <div className="form-group row">
                  <label className="form-label">Shop's Image</label>
                  <div className="image-handleDiv">
                    <input
                      type="file"
                      name="shop_profileImage"
                      id="shop_profileImage"
                      accept="image/*"
                      onChange={handleShopImageChange}
                    />
                  </div>
                  <div className="img-section">
                    <img
                      id="output_shop_profileImage"
                      src={
                        formData.shop_profileImage
                          ? URL.createObjectURL(formData.shop_profileImage)
                          : noImage
                      }
                      // alt={noImage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="PI col-md-6 p-4">
            <h3>Personal Information</h3>
            <hr />
            <div className="row m-2">
              <div className="form-group">
                <div className="name-section">
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="rUBDtb9zIqsa2xs5XaifXSNFTRKvYqDtJOWmIiWh"
                  />
                  <input
                    type="text"
                    name="owner_fullname"
                    placeholder="Owner’s name"
                    value={formData.owner_fullname}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="email-section">
                  <div className="col-lg-12">
                    <input
                      type="email"
                      name="owner_email"
                      placeholder="Owner’s Email"
                      value={formData.owner_email}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group row">
                  <div className="phone-section">
                    <input
                      type="number"
                      name="owner_phone"
                      placeholder="Owner’s Phone"
                      value={formData.owner_phone}
                      onChange={handleChange}
                      className="form-control"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <div className="cnic-section">
                  <input
                    type="number"
                    name="owner_cnic"
                    placeholder="Owner’s CNIC No"
                    value={formData.owner_cnic}
                    onChange={handleChange}
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="imgSection">
                <div className="form-group row">
                  <label className="form-label">Owner's Image</label>
                  <div className="image-handleDiv">
                    <input
                      type="file"
                      name="owner_image"
                      id="owner_image"
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
        <div className="submit-btn mt-3">
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

export default RegistrationForm;
