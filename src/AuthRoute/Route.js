import { Router, Application } from "express";
import AuthController from "../AuthController/AuthController.js";

export let AuthRouters = Router();

AuthRouters.route("/api/registerShop").post(AuthController.createShop);
AuthRouters.route("/api/loginShop").post(AuthController.loginShop);
AuthRouters.route("/api/getShopProfile").get(AuthController.getShopProfile);
AuthRouters.route("/api/getFullDB").get(AuthController.getFullDB);
