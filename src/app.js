import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { connectDB } from "./DB/index.js";
import { AuthRouters } from "./AuthRoute/Route.js";
import { config } from "dotenv";
config();

const app = express();
const PORT = process.env.DEV_PORT || 3000;

connectDB();

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(AuthRouters);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
