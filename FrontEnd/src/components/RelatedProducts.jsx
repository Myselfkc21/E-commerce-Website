import React, { useEffect, useState } from "react";
import Title from "./Title";
import { assets, products } from "../assets/frontend_assets/assets";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ categories, Subcategories }) => {
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const filtered = products.filter((item) =>
      categories.includes(item.category)
    );
    setFilteredProducts(filtered);

    // Set initial number of items based on screen width
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();
    setVisibleProducts(filtered.slice(0, itemsPerView));

    // Add resize listener
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [categories]);

  // Update visible products when itemsPerView changes
  useEffect(() => {
    setVisibleProducts(filteredProducts.slice(0, itemsPerView));
    setCurrentIndex(0);
  }, [itemsPerView, filteredProducts]);

  const handleNavigation = (direction) => {
    if (isAnimating || filteredProducts.length <= itemsPerView) return;

    setIsAnimating(true);
    let nextIndex;

    if (direction === "next") {
      nextIndex =
        currentIndex + itemsPerView >= filteredProducts.length
          ? 0
          : currentIndex + itemsPerView;
    } else {
      nextIndex =
        currentIndex - itemsPerView < 0
          ? Math.max(filteredProducts.length - itemsPerView, 0)
          : currentIndex - itemsPerView;
    }

    const nextProducts = [
      ...filteredProducts.slice(nextIndex, nextIndex + itemsPerView),
    ];

    // Fill remaining slots if needed
    if (nextProducts.length < itemsPerView) {
      nextProducts.push(
        ...filteredProducts.slice(0, itemsPerView - nextProducts.length)
      );
    }

    setCurrentIndex(nextIndex);

    setTimeout(() => {
      setVisibleProducts(nextProducts);
      setIsAnimating(false);
    }, 400);
  };

  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center my-4 px-4">
        <Title text1="RELATED" text2="PRODUCTS" />
        <p className="text-gray-500 text-base">No related products found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center my-4 px-4">
      {/* Title */}
      <div className="mb-6 w-full text-center">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>

      {/* Products Container */}
      <div className="flex items-center justify-center w-full max-w-[1200px] gap-2 sm:gap-4">
        {/* Previous button */}
        <button
          className={`transition-all duration-300 p-2 ${
            isAnimating ? "opacity-50" : "hover:scale-110"
          }`}
          onClick={() => handleNavigation("prev")}
          disabled={isAnimating || filteredProducts.length <= itemsPerView}
        >
          <img
            className="cursor-pointer w-4 h-4 sm:w-6 sm:h-6 rotate-180"
            src={assets.dropdown_icon}
            alt="Previous"
          />
        </button>

        {/* Products grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 flex-1`}
        >
          {visibleProducts.map((product, index) => (
            <div
              key={product._id}
              className={`transition-all duration-300 transform
                ${
                  isAnimating
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }
                min-w-0 /* Prevent grid item overflow */
              `}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
              
            >
              <ProductItem
                id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            </div>
          ))}
        </div>

        {/* Next button */}
        <button
          className={`transition-all duration-300 p-2 ${
            isAnimating ? "opacity-50" : "hover:scale-110"
          }`}
          onClick={() => handleNavigation("next")}
          disabled={isAnimating || filteredProducts.length <= itemsPerView}
        >
          <img
            className="cursor-pointer w-4 h-4 sm:w-6 sm:h-6 -rotate-0"
            src={assets.dropdown_icon}
            alt="Next"
          />
        </button>
      </div>

      {/* Optional: Add pagination dots for mobile */}
      <div className="flex gap-2 mt-4 lg:hidden">
        {Array.from({
          length: Math.ceil(filteredProducts.length / itemsPerView),
        }).map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full transition-all ${
              Math.floor(currentIndex / itemsPerView) === idx
                ? "bg-black w-4"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
