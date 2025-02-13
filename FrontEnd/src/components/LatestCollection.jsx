import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, SetLatestProducts] = useState([]);
  useEffect(() => {
    SetLatestProducts(products.slice(0, 8));
    console.log(latestProducts);
    return () => {};
  }, []);

  return (
    <div className="my-16">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"}></Title>
        <p className="text-sm m-auto p-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque illo
          animi reiciendis nemo ea, delectus alias officiis voluptatum accusamus
          minima. Molestiae, nostrum. Sapiente suscipit fugit qui, expedita
          quaerat eveniet accusamus?
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 place-items-center">
        {latestProducts.map((product, key) => (
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

export default LatestCollection;
