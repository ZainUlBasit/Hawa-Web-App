import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Button from "../Buttons/Button";
import Logo from "../../assets/logowhite.png";

const LeftCard = () => {
  return (
    <div className="flex flex-col w-[300px] min-w-[300px] gap-y-5">
      <img src={Logo} alt="not" className="w-[300px]" />
      <span className="text-white text-wrap text-justify">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ex odio
        modi pariatur eaque? Autem explicabo labore numquam quod blanditiis
        beatae odit illo, delectus eos minus accusamus quis sint at.
      </span>
      <span className="flex items-center text-white">
        Social Share:
        <div className="flex gap-x-3">
          <FaFacebookF className="text-white hover:text-[#FF8D00] cursor-pointer transition-all duration-500 ease-in-out" />
          <FaTwitter className="text-white hover:text-[#FF8D00] cursor-pointer transition-all duration-500 ease-in-out" />
          <AiFillInstagram className="text-white hover:text-[#FF8D00] cursor-pointer transition-all duration-500 ease-in-out" />
        </div>
      </span>
      <Button title={"Request A Free Quotes"} />
    </div>
  );
};

export default LeftCard;
