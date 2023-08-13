import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignIn = async (req, res, next) => {
  console.log(req.headers);
  const authHeader = req.headers.authorization;
  const tokenData = authHeader.split(" ");
  const token = tokenData[1];
  console.log(token);
  try {
    const decode = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

// IS Admin Check
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UNAUTHORIZED ACCESS.",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.send("ERROR, NOT ADMIN");
  }
};
