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

const ShopModel = mongoose.model("Shop", shopSchema);

export default ShopModel;
