import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();
//ROUTING

router.post("/register", registerController);

//LOGIN
router.post("/login", loginController);
//TEST
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
