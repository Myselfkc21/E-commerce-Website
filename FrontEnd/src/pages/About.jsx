import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-10 gap-10">
      <Title
        className="text-3xl sm:text-2xl"
        text1={"ABOUT"}
        text2={"US"}
      ></Title>
      <div className="flex sm:flex-row flex-col gap-4">
        <img
          src={assets.about_img}
          alt=""
          className="sm:w-1/3 w-full h-fit object-cover"
        />
        <div className="flex flex-col items-center justify-center p-4 sm:p-16">
          <p className="text-sm sm:text-base">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes. <br /> Since our inception, we've worked
            tirelessly to curate a diverse selection of high-quality products
            that cater to every taste and preference. From fashion and beauty to
            electronics and home essentials, we offer an extensive collection
            sourced from trusted brands and suppliers.
            <h2 className="text-xl sm:text-2xl font-bold font-sans py-4">
              Our Mission
            </h2>
            <p>
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
