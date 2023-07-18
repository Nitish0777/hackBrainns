import express from "express";
import {
  loginController,
  registerController,
  updateController,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerController); // register route
router.post("/login", loginController); // login route
router.post("/update", updateController); // update route

export default router;
