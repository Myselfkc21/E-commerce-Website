//route for user login
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwtTokenGnerator from "../services/jwtToken.js";
import jwt from "jsonwebtoken";
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    const token = jwtTokenGnerator(user._id);
    res.status(200).json({ success: true, message: "Login successful", token });
  } catch (error) {}
};

//route for user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({ name, email, password: hashedPassword });
    console.log(newUser);
    const user = await newUser.save();
    const token = jwtTokenGnerator(user._id);
    res.status(200).json({ success: true, message: "User registered", token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res
        .status(200)
        .json({ success: true, message: "Login successful", token });
    }
  } catch (error) {}
};

export { loginUser, registerUser, adminLogin };
