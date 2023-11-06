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
    pharmacy_fullname: "",
    pharmacy_phone: "",
    email: "",
    password: "",
    password_confirmation: "",
    pharmacy_ntn_no: "",
    pharmacy_gstno: "",
    pharmacy_code: "",
    pharmacy_address: "",
    pharmacy_country: "",
    pharmacy_city: "",
    pharmacy_category: "",
    pharmacy_profileImage: null,
    pharmacy_location_url: "",
    pharmacy_access: "",
    owner_fullname: "",
    owner_email: "",
    owner_phone: "",
    owner_cnic: "",
    owner_image: null,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="container">
      <Link to="/" className="back">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>

      <form
        id="addPharmacy"
        action="https://dukan24h.com/pos/pharmacyRegistrationProcess" //need attention
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-md-6 p-4">
            <h3>Shop Information</h3>
            <hr />
            <div className="row m-2">
              <div className="form-group">
                <div className="col-lg-12">
                  <input
                    type="text"
                    name="pharmacy_fullname"
                    placeholder="Enter shop name"
                    value={formData.pharmacy_fullname}
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
                      name="pharmacy_phone"
                      placeholder="Enter shop phone number"
                      value={formData.pharmacy_phone}
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
                      name="email"
                      placeholder="Enter shop email"
                      value={formData.email}
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
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="form-group row">
                  <div className="col-lg-12">
                    <input
                      type="number"
                      name="pharmacy_ntn_no"
                      placeholder="NTN No"
                      value={formData.pharmacy_ntn_no}
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
                      name="pharmacy_gstno"
                      placeholder="GST No"
                      value={formData.pharmacy_gstno}
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
                      name="pharmacy_code"
                      placeholder="Postal Code"
                      value={formData.pharmacy_code}
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
                      name="pharmacy_address"
                      placeholder="Full Address"
                      value={formData.pharmacy_address}
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
                      name="pharmacy_country"
                      id="pharmacy_country"
                      value={formData.pharmacy_country}
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
                      name="pharmacy_city"
                      id="city"
                      value={formData.pharmacy_city}
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
                  <label className="form-label">Owner's Image</label>
                  <div className="image-handleDiv">
                    <input
                      type="file"
                      name="owner_image"
                      id="owner_image"
                      accept="image/*"
                      onChange={handleImageChange}
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
          <hr />
          <hr />
          <div className="col-md-6 p-4">
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
                      onChange={handleImageChange}
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

export default RegistrationForm;
