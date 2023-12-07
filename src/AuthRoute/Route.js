// import { Router, Application } from "express";
import { Router } from "express";
import AuthController from "../AuthController/AuthController.js";

export let AuthRouters = Router();

AuthRouters.route("/api/registerShop").post(AuthController.createShop);
AuthRouters.route("/api/loginShop").post(AuthController.loginShop);
AuthRouters.route("/api/getShopProfile").get(AuthController.getShopProfile);
AuthRouters.route("/api/getFullShopDB").get(AuthController.getFullShopDB);
AuthRouters.route("/api/getFullCustomerDB").get(
  AuthController.getFullCustomerDB
);
AuthRouters.route("/api/addCustomer").get(AuthController.addCustomer);
