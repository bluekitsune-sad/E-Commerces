import ShopModel from "../DB/Model/AuthModel.js";
import jwt from "jsonwebtoken";

const createShop = async (req, res) => {
  try {
    const {
      shop_fullname,
      shop_phone,
      shop_email,
      password,
      password_confirmation,
      shop_ntn_no,
      shop_gstno,
      shop_code,
      shop_address,
      shop_country,
      shop_city,
      shop_category,
      shop_profileImage,
      shop_location_url,
      shop_access,
      owner_fullname,
      owner_email,
      owner_phone,
      owner_cnic,
      owner_image,
      otp,
    } = req.body;

    const existingShop = await ShopModel.findOne({ shop_email });

    if (existingShop) {
      return res.status(400).send("Shop Already Exists");
    }

    const newShop = new ShopModel({
      shop_fullname,
      shop_phone,
      shop_email,
      password,
      password_confirmation,
      shop_ntn_no,
      shop_gstno,
      shop_code,
      shop_address,
      shop_country,
      shop_city,
      shop_category,
      shop_profileImage,
      shop_location_url,
      shop_access,
      owner_fullname,
      owner_email,
      owner_phone,
      owner_cnic,
      owner_image,
      otp,
    });

    const savedShop = await newShop.save();

    // You might want to avoid sending sensitive data like passwords
    // Even though it's hashed, it's a good practice to exclude it from the response
    savedShop.password = undefined;
    savedShop.password_confirmation = undefined;

    return res.status(201).json(savedShop);
  } catch (err) {
    console.error(err);
    return res.status(500).send(err.message);
  }
};

const loginShop = async (req, res) => {
  try {
    const { shop_email, password } = req.body;
    const existingShop = await ShopModel.findOne({ shop_email });

    if (!existingShop) {
      return res.status(404).send("Shop doesn't exist");
    }

    if (existingShop.password !== password) {
      return res.status(401).send("Wrong password");
    }

    const token = jwt.sign(
      { shopId: existingShop._id },
      process.env.JWT_SECRET
    );

    return res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    return res.status(500).send(err.message);
  }
};

const getShopProfile = async (req, res) => {
  const { token } = req.body;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const shop = await ShopModel.findById(decodedToken.shopId).select(
      "-password -password_confirmation"
    );

    // Log the retrieved shop data
    console.log("Retrieved Shop Data:", shop);

    return res.status(200).json(shop);
  } catch (err) {
    console.error(err);
    return res.status(401).send("Invalid token");
  }
};

const getFullDB = async (req, res) => {
  try {
    const shops = await ShopModel.find();

    // Log the retrieved shop data
    console.log("Retrieved Shop Data:", shops);

    return res.status(200).json(shops);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

const authenticateShop = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.shopId = decodedToken.shopId;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).send("Invalid token");
  }
};

const AuthController = {
  createShop,
  loginShop,
  getShopProfile,
  authenticateShop,
  getFullDB,
};

export default AuthController;
