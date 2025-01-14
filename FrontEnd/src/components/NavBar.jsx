import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  const [MenuVisible, SetMenuVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={"/"} className="w-36">
        <img src={assets.logo} alt="" className="w-full" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-grey-700">
        <NavLink to="/" className="flex flex-col items-center gap-1 ">
          <p>HOME</p>
          <hr className="w-2/4 h-[1.5px] bg-grey-900 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 h-[1.5px] bg-grey-700  hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 h-[1.5px] bg-grey-700  hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p> CONTACT</p>
          <hr className="w-2/4 h-[1.5px] bg-grey-700  hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-6 cursor-pointer" alt="" />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-6 cursor-pointer"
            alt=""
          />
          <div className="group-hover:block  absolute dropdown-menu right-0 pt-4 hidden p-5">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-400">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-6 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] text-center leading-3 bg-black text-white aspect-auto rounded-full text-[11px] p-[1.5px]">
            10
          </p>
        </Link>
        <img
          onClick={() => {
            SetMenuVisible(true);
            console.log("clicked");
          }}
          src={assets.menu_icon}
          className="w-5 sm:hidden block cursor-pointer"
          alt=""
        />
      </div>
      {/* Sidebar menu for small screen */}
      <div
        className={`top-0 right-0 bottom-0 overflow-hidden bg-white  transition-all absolute  ${
          MenuVisible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-grey-600">
          <div
            onClick={() => {
              SetMenuVisible(false);
            }}
            className="flex items-center gap-4 p-3"
          >
            <img src={assets.dropdown_icon} alt="" className="h-6 rotate-180" />
            <p>Back</p>
          </div>
          <hr className="w-full h-[1.5px] bg-grey-900" />

          <NavLink
            onClick={() => {
              SetMenuVisible(false);
            }}
            to="/"
            className="flex flex-col items-center gap-1 p-3"
          >
            <p>HOME</p>
          </NavLink>
          <hr className="w-full h-[1.5px] bg-grey-900" />
          <NavLink
            onClick={() => {
              SetMenuVisible(false);
            }}
            to="/collection"
            className="flex flex-col items-center gap-1 p-3"
          >
            <p>COLLECTIONS</p>
          </NavLink>
          <hr className="w-full h-[1.5px] bg-grey-900 " />
          <NavLink
            onClick={() => {
              SetMenuVisible(false);
            }}
            to="/about"
            className="flex flex-col items-center gap-1 p-3"
          >
            <p>ABOUT</p>
          </NavLink>
          <hr className="w-full h-[1.5px] bg-grey-900" />
          <NavLink
            onClick={() => {
              SetMenuVisible(false);
            }}
            to="/contact"
            className="flex flex-col items-center gap-1 p-3"
          >
            <p>CONTACT</p>
          </NavLink>
          <hr className="w-full h-[1.5px] bg-grey-900" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
