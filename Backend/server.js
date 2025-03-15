import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";

//app confings
const app = express();
const port = process.env.PORT || 2000;

//connections
connectDb();
connectCloudinary();

//middleware
app.use(express.json());

app.use(cors());

//api end points

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
