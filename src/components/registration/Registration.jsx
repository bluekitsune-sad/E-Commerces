import React, { useState } from "react";
import "./Registration.css";
import { businessCategories, countryOptions } from "../Constants/Constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
      <a href="https://dukan24h.com" className="back">
        <FontAwesomeIcon icon={faArrowLeft} />
      </a>
      <form
        id="addPharmacy"
        action="https://dukan24h.com/pos/pharmacyRegistrationProcess"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div
            className="col-md-6 p-4"
            style={{
              backgroundColor: "#3399ff82",
              paddingBottom: "0px !important",
            }}
          >
            <h3>Shop Information</h3>
            <hr />
            <div className="row m-2">
              <div className="form-group">
                <div className="col-lg-12">
                  <input
                    type="text"
                    name="pharmacy_fullname"
                    placeholder="Shop name"
                    value={formData.pharmacy_fullname}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              {/* Add other form fields similarly */}
              <div className="col-6">
                <div className="form-group row">
                  <div className="col-lg-12">
                    <input
                      type="number"
                      name="pharmacy_phone"
                      placeholder="Shop Phone no"
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
                      placeholder="Shop Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              {/* Rest of the fields */}
              <div className="col-6">
                <div className="form-group row">
                  <div className="col-lg-12">
                    <select
                      name="pharmacy_category"
                      id="pharmacy_category"
                      value={formData.pharmacy_category}
                      onChange={handleChange}
                      className="tpharmacy_category form-control"
                    >
                      <option value="">Please Select Business Category</option>
                      {businessCategories.map((option) => (
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
                  <div className="col-lg-8">
                    <input
                      type="file"
                      name="pharmacy_profileImage"
                      id="product_image"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="col-lg-4">
                    <img id="Shop_logo" />
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-6">
                  <input
                    type="text"
                    name="pharmacy_location_url"
                    placeholder="Location URL"
                    value={formData.pharmacy_location_url}
                    onChange={handleChange}
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
                <div className="col-lg-6">
                  <select
                    name="pharmacy_access"
                    id="pharmacy_access"
                    className="pharmacy_access form-control"
                  >
                    <option value="">Please Select Business Access</option>
                    <option value={1}>Online Shopping with POS</option>
                    <option value={2}>POS Only</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
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
            {/* Rest of the fields */}
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
                    style={{ border: "1px solid lightgray" }}
                  />
                </div>
                <div className="img-section">
                  <img id="output_owner_image" />
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
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
