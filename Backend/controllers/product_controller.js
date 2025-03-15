import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

//function to add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (img) => img !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (image) => {
        let result = await cloudinary.uploader.upload(image.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    console.log(imagesUrl);
    const newProduct = await productModel.create({
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true" ? true : false,
      image: imagesUrl,
      date: Date.now(),
      quantity: Number(200),
    });
    const product = await newProduct.save();
    return res.json({ success: true, message: "product added", product });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: "internal error" });
  }
};

//to list all products
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find();
    return res.json({ success: true, products });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: "internal error" });
  }
};

//to remove a product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    return res.json({ success: true, message: "product removed" });
  } catch (error) {
    return res.json({ success: false, message: "internal error" });
  }
};

//to get a single product
const singleProduct = async (req, res) => {
  try {
    console.log("jj");

    const product = await productModel.findById(req.body.id);
    return res.json({ success: true, product });
  } catch (error) {
    return res.json({ success: false, message: "internal error" });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
