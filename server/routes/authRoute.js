import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerController); // register route
router.post("/login", loginController); // login route

export default router;
