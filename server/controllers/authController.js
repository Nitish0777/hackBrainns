import User from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helper/authHelper.js";
import jwt from "jsonwebtoken";

// register controller --------------- 1---------------- localhost:8000/api/v1/auth/register
export const registerController = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password, confirm_password } = req.body;
    if (!name)
      return res.status(400).send({
        success: false,
        message: "Name is required",
      });
    if (!email)
      return res.status(400).send({
        success: false,
        message: "Email is required",
      });
    if (password !== confirm_password)
      return res.status(400).send({
        success: false,
        message: "Password do not match",
      });
    if (!password || password.length < 6)
      return res.status(400).send({
        success: false,
        message: "Password is required and should be min 6 characters long",
      });

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser)
      return res.status(400).send({
        success: false,
        message: "Email is taken",
      });

    const hashedPassword = await hashPassword(password);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    return res.status(201).send({
      success: true,
      message: "Register Success",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Something went wrong in registering user",
    });
  }
};

// login controller --------------- 2---------------- localhost:8000/api/v1/auth/login
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).send("Email and password is required");

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).send({
        success: false,
        message: "User not found",
      });

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch)
      return res.status(400).send({
        success: false,
        message: "Incorrect password",
      });

    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return res.status(200).send({
      success: true,
      message: "Login Success",
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Something went wrong in login user",
    });
  }
};

// update controller --------------- 3---------------- localhost:8000/api/v1/auth/update
export const updateController = async (req, res) => {
  try {
    const { phone, gender, domain, University, city, state } = req.body;
    const user = await User.findById(req.user._id);
    if (!user)
      return res.status(400).send({
        success: false,
        message: "User not found",
      });
    const updatedUser = await User.findByIdAndUpdate(req.user._id, {
      phone: phone || user.phone,
      gender: gender || user.gender,
      domain: domain || user.domain,
      University: University || user.University,
      city: city || user.city,
      state: state || user.state,
    });
    return res.status(200).send({
      success: true,
      message: "Update Success",
      user: {
        _id: updatedUser._id,
        email: updatedUser.email,
        name: updatedUser.name,
        phone: updatedUser.phone,
        gender: updatedUser.gender,
        domain: updatedUser.domain,
        University: updatedUser.University,
        city: updatedUser.city,
        state: updatedUser.state,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Something went wrong in updating user",
    });
  }
};
