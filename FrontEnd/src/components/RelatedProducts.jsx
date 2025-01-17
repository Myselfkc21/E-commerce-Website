import React, { useEffect, useState } from "react";
import Title from "./Title";
import { products } from "../assets/frontend_assets/assets";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ categories, Subcategories }) => {
  const [RelatedProducts, SetRelatedProducts] = useState([]);

  useEffect(() => {
    const productCopy = products;
    const getData = async (e) => {
      await SetRelatedProducts(
        productCopy.filter((item) => item.category.includes(categories))
      );
    };
    if (RelatedProducts) {
      console.log(RelatedProducts);
    }

    getData();
  }, []);

  return (
    <div className="flex items-center justify-center text-2xl">
      <Title text1={"RELATED"} text2={"PRODUCTS"}></Title>

      <div>
        {RelatedProducts.map((product, index) => {
          //   console.log(product);
          <ProductItem
            key={index}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          ></ProductItem>;
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
