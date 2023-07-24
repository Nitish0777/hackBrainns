import express from "express";
import {
  forgetVerifyController,
  loginController,
  registerController,
  updateController,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerController); // register route
router.post("/login", loginController); // login route
router.post("/update", updateController); // update route

router.post("/forget", forgetVerifyController); // forgot password route

export default router;
