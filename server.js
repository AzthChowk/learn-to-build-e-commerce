import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";

//CONFIG
dotenv.config();
//DATABASE
connectDB();

//REST OBJECT
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(morgan("dev"));

//Routes
app.use("/api/v1/auth", authRoute);

//REST API
app.get("/", (req, res) => {
  res.send("<h1>Welcome to E-Commerce App.</h1>");
});
//PORT
const PORT = process.env.PORT || 8080;

//LISTEN
app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON ${process.env.DEV_MODE} ON PORT ${PORT}.`);
});
