import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Heart, Share2, ShoppingCart } from "lucide-react";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productDetails, setProductDetails] = useState(null);
  const [images, setImages] = useState([]);
  const [currentImg, setCurrentImg] = useState("");
  const [Size, SetSize] = useState("");
  const [viewDesc, SetViewDesc] = useState(true);

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductDetails(product);
      setImages(product.image || []);
      setCurrentImg(product.image ? product.image[0] : "");
    }
  }, [productId, products]);

  if (!productDetails) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left: Image Section */}
        <div className="lg:w-2/3">
          {/* Main Image */}
          <div className="mb-8">
            <div className="relative bg-gray-50">
              <img
                src={currentImg}
                alt="Selected Product View"
                className="w-full h-auto max-h-[600px] object-contain mix-blend-multiply"
              />
              <button className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Heart className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 overflow-x-auto">
            {images.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentImg(item)}
                className={`flex-shrink-0 bg-gray-50 ${
                  currentImg === item
                    ? "ring-1 ring-black"
                    : "hover:ring-1 hover:ring-gray-200"
                }`}
              >
                <img
                  src={item}
                  alt={`View ${index + 1}`}
                  className="w-16 h-16 object-cover mix-blend-multiply"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="lg:w-1/3 space-y-4">
          {/* Product Name */}
          <h1 className="text-3xl font-sans text-gray-900">
            {productDetails.name}
          </h1>

          <div className="flex flex-row items-center gap-1">
            <img src={assets.star_icon} className="w-3 5" alt="" />
            <img src={assets.star_icon} className="w-3 5" alt="" />
            <img src={assets.star_icon} className="w-3 5" alt="" />
            <img src={assets.star_icon} className="w-3 5" alt="" />
            <img src={assets.star_icon} className="w-3 5" alt="" />
          </div>

          {/* Price */}
          <div className="text-xl font-sans text-gray-900">
            ${productDetails.price}
          </div>

          {/* Description */}
          <p className="text-gray-600 font-sans text-sm leading-relaxed">
            {productDetails.description}
          </p>

          <p className="font-sans text-gray-600">Select Size</p>

          <div className="flex flex-row gap-4">
            {productDetails.sizes.map((item, index) => (
              <button
                type="button"
                key={index}
                onClick={(e) => {
                  SetSize(item);
                }}
                className={` rounded-md border border-gray-300 font-sans w-14 h-14 bg-gray-100 outline-none hover:border-orange-400 hover:border-2 ${
                  Size === item ? "border-orange-500" : null
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Buttons */}
          <div className="space-y-4 pt-3">
            <button className="w-[60%] font-sans rounded-md bg-black hover:bg-gray-900 text-white px-8 py-4 flex items-center justify-center gap-2 transition-colors">
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </button>

            {/* 
            <button className="w-full text-gray-600 hover:text-gray-900 flex items-center justify-center gap-2 transition-colors">
              <Share2 className="h-4 w-4" />
              Share
            </button> */}
          </div>
          <hr className="w-full mt-4" />
          <div className="flex flex-col  text-gray-400 text-sm">
            <p className="font-sans ">100% Original product.</p>
            <p className="font-sans">
              Cash on delivery is available on this product.
            </p>
            <p className="font-sans">
              Easy return and exchange policy within 7 days.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-9">
        <div
          className={`border border-gray-300 w-max p-2 cursor-pointer ${
            viewDesc ? "font-bold" : null
          }`}
          onClick={(e) => {
            SetViewDesc(true);
          }}
        >
          <p className="font-sans">Description</p>
        </div>
        <div
          className={`border border-gray-300 w-max p-2 cursor-pointer ${
            !viewDesc ? "font-bold" : null
          }`}
          onClick={(e) => {
            SetViewDesc(false);
          }}
        >
          <p className="font-sans">Reviews</p>
        </div>
      </div>
      <div className="border border-gray-300 p-6">
        {viewDesc ? (
          <p className="font-sans text-gray-500 text-sm">
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. <br />
            E-commerce websites have gained immense popularity due to their
            convenience, accessibility, and the global reach they offer.
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        ) : null}
      </div>

      <RelatedProducts
        categories={productDetails.category}
        Subcategories={productDetails.subCategory}
      ></RelatedProducts>
    </div>
  );
};

export default Product;
