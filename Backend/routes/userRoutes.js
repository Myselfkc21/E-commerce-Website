import express from "express";
import {
  registerUser,
  loginUser,
  adminLogin,
} from "../controllers/user_controller.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/adminLogin", adminLogin);

export default userRouter;
