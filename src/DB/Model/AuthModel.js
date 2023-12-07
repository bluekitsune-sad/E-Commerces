import mongoose from "mongoose";

const shopSchema = new mongoose.Schema({
  shop_fullname: {
    type: String,
    required: true,
    trim: true,
  },
  shop_phone: {
    type: String,
    required: true,
    trim: true,
  },
  shop_email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  password_confirmation: {
    type: String,
    required: true,
    trim: true,
  },
  shop_ntn_no: {
    type: String,
    trim: true,
  },
  shop_gstno: {
    type: String,
    trim: true,
  },
  shop_code: {
    type: String,
    trim: true,
  },
  shop_address: {
    type: String,
    trim: true,
  },
  shop_country: {
    type: String,
    trim: true,
  },
  shop_city: {
    type: String,
    trim: true,
  },
  shop_category: {
    type: String,
    trim: true,
  },
  shop_profileImage: {
    type: String,
    trim: true,
  },
  shop_location_url: {
    type: String,
    trim: true,
  },
  shop_access: {
    type: String,
    trim: true,
  },
  owner_fullname: {
    type: String,
    trim: true,
  },
  owner_email: {
    type: String,
    trim: true,
  },
  owner_phone: {
    type: String,
    trim: true,
  },
  owner_cnic: {
    type: String,
    trim: true,
  },
  owner_image: {
    type: String,
    trim: true,
  },
  otp: {
    type: String,
    trim: true,
  },
});

const customerSchema = new mongoose.Schema({
  customer_fullname: {
    type: String,
    required: true,
  },
  customer_phone: {
    type: String,
    required: true,
  },
  customer_email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  password_confirmation: {
    type: String,
    required: true,
  },
  customer_ntn_no: {
    type: String,
  },
  customer_gstno: {
    type: String,
  },
  customer_code: {
    type: String,
  },
  customer_address: {
    type: String,
  },
  customer_country: {
    type: String,
  },
  customer_city: {
    type: String,
  },
  customer_profileImage: {
    type: String,
  },
  customer_location_url: {
    type: String,
  },
  otp: {
    type: String,
    required: true,
  },
});

const ShopModel = mongoose.model("Shop", shopSchema);
const CustomerModel = mongoose.model("Customer", customerSchema);

export default { ShopModel, CustomerModel };
