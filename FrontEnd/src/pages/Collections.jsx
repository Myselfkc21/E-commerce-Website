import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { assets } from "../assets/frontend_assets/assets";
const Collections = () => {
  const { products } = useContext(ShopContext);
  const [Collection, SetCollection] = useState([]);
  const [ShowFilter, SetShowFilter] = useState(true);
  const [category, SetCategory] = useState([]);
  const [SubCategory, SetSubCategory] = useState([]);

  const toggleCategory = (e) => {
    //console.log(e.target.id);
    //now i need to basically add the category value into the category array, for that whn i click on the option
    //i get "men" "women" or "kids" as a event
    //so if the value i get a value for the second time then i need to remove that category from the array
    //else i need to add it to the array

    // if (category.includes(e.target.id)) {
    //   category.pop(e.target.id);
    //   SetCategory(category);
    // } else {
    //   category.push(e.target.id);
    //   SetCategory(category);
    //this wont work since we r just manipulating the array, for useEffect to get triggered,  we need to create a new array meaning the reference has toi be changed

    if (category.includes(e.target.id)) {
      SetCategory((prev) => prev.filter((item) => item != e.target.id));
    } else {
      SetCategory((prev) => [...prev, e.target.id]);
    }
  };
  console.log(products);
  useEffect(() => {
    SetCollection(products);
  }, []);

  useEffect(() => {
    console.log(category);
    //noow i need to map through the category array and make the collection array with the suitable filters
    //SetCategory(Collection.filter((item) => item.category == category));
    console.log(Collection);
  }, [category]);

  return (
    <div className="flex flex-col sm:flex-row items-start justify-between w-full gap-16 ">
      <div className="flex flex-col w-[100%] sm:w-[40%] gap-9">
        <div
          className={`flex flex-row items-center justify-between w-full py-7`}
          onClick={() => {
            SetShowFilter(!ShowFilter);
          }}
        >
          <p className="text-xl">FILTER</p>
          <img
            src={assets.dropdown_icon}
            className={`w-2.5 ${ShowFilter ? "rotate-90" : null}`}
            alt=""
          />
        </div>
        <div className={`flex flex-col gap-10 ${ShowFilter ? "" : "hidden"}`}>
          <div className={`border border-gray-400 flex flex-col p-5 text-sm  `}>
            <p className="font-sans text-xl font-bold">CATEGORIES</p>
            <div className="flex flex-row items-center justify-start gap-3">
              <input
                type="checkbox"
                name="Men"
                id="Men"
                onChange={(e) => toggleCategory(e)}
              />
              <label htmlFor="Men">Men</label>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <input
                type="checkbox"
                name="Women"
                id="Women"
                onChange={(e) => toggleCategory(e)}
              />
              <label htmlFor="Women">Women</label>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <input
                type="checkbox"
                name="Kids"
                id="Kids"
                onChange={(e) => toggleCategory(e)}
              />
              <label htmlFor="Kids">Kids</label>
            </div>
          </div>
          <div className="border border-gray-400 flex flex-col p-5 text-sm">
            <p className="font-sans text-xl font-bold">TYPE</p>
            <div className="flex flex-row items-center justify-start gap-3">
              <input
                type="checkbox"
                name="Topwear"
                id="Topwear"
                onChange={(e) => toggleCategory(e)}
              />
              <label htmlFor="Topwear">Topwear</label>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <input
                type="checkbox"
                name="Bottomwear"
                id="Bottomwear"
                onChange={(e) => toggleCategory(e)}
              />
              <label htmlFor="Bottomwear">Bottomwear</label>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <input
                type="checkbox"
                name="Winterwear"
                id="Winterwear"
                onChange={(e) => toggleCategory(e)}
              />
              <label htmlFor="Winterwear">Winterwear</label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex flex-col">
        <div className="flex flex-row items-center justify-between my-7">
          <Title text1={"ALL"} text2={"COLLECTIONS"}></Title>
          <select className="border border-gray-400 p-3 font-sans text-sm">
            <option value="relavent">Sort by:relavent</option>
            <option value="low-high">Sort by:Low to High</option>
            <option value="high-low">Sort by:High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 ">
          {Collection.map((product, key) => (
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
    </div>
  );
};

export default Collections;
