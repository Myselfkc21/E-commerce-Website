import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [BestSeller, SetBestSeller] = useState([]);
  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller === true);
    SetBestSeller(bestProduct.slice(0, 4));
    console.log(BestSeller);
  }, []);

  return (
    <div className="my-16">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLERS"}></Title>
        <p className="text-sm m-auto p-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque illo
          animi reiciendis nemo ea, delectus alias officiis voluptatum accusamus
          minima. Molestiae, nostrum. Sapiente suscipit fugit qui, expedita
          quaerat eveniet accusamus?
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 place-items-center">
        {BestSeller.map((product, key) => (
          <ProductItem
            key={key}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          ></ProductItem>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
