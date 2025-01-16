import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [ProductDetails, SetProductDetails] = useState(false);

  const GetProductDetails = async () => {
    products.map((item) => {
      if (item._id === productId) {
        SetProductDetails(item);
        return 0;
      }
    });
  };
  useEffect(() => {
    GetProductDetails();
    console.log(ProductDetails);
  }, [productId]);

  return <div></div>;
};

export default Product;
