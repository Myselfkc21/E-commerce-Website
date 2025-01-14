import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  return (
    <Link className="cursor-pointer" to={`/product/${id}`}>
      <div className="flex flex-col items-start justify-center gap-2">
        <div className="overflow-hidden">
          <img
            className="hover:scale-110 transition ease-in-out"
            src={image[0]}
            alt=""
          />
        </div>
        <p className="text-xs font-sans text-nowrap">{name}</p>
        <p className="font-medium ">${price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
