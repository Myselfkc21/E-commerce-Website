import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, SetSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, SetVisible] = useState(false);
  const location = useLocation();
  console.log(location.pathname.includes("/collection"));
  console.log(showSearch);

  useEffect(() => {
    if (location.pathname.includes("/collection")) {
      SetVisible(true);
    } else {
      SetVisible(false);
    }
  }, [location.pathname]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex flex-row items-center justify-center px-5 border border-gray-400 py-2 my-5 mx-3 rounded-full w-3/4">
        <input
          value={search}
          onChange={(e) => {
            SetSearch(e.target.value);
          }}
          className="flex-1 outline-none bg-inherit text-sm"
          type=" text"
          placeholder="Search"
        />
        <img className="w-4" src={assets.search_icon} alt="" />
      </div>
      <img
        className="inline w-3 cursor-pointer"
        onClick={(e) => setShowSearch(!showSearch)}
        src={assets.cross_icon}
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
