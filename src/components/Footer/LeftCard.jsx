import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Button from "../Buttons/Button";
import Logo from "../../assets/logowhite.png";

const LeftCard = () => {
  return (
    <div className="flex flex-col w-[300px] min-w-[300px] gap-y-5">
      <img src={Logo} alt="not" className="w-[300px]" />
      <span
        className="text-white text-wrap text-justify"
        style={{ fontFamily: "Open Sans" }}
      >
        Hawa Overseas are pleased to introduce as one of the trustworthy
        institutions in the GCC Region which is providing skilled,Trained and
        Experienced manpower in various industrial, commercial and service
        sectors as per the client Requirements. We are well established in the
        all the industrial and commercial sectors having more then 15 years of
        experience by supplying more then 10 companies here in Kingdom of Saudi
        Arabia , we have the capabilities and strategy that allow us to provide
        qualified and trained manpower according to client satisfaction.
      </span>

      <span
        className="flex items-center text-xl font-bold text-[#FF8D00]"
        style={{ fontFamily: "Open Sans" }}
      >
        Social Share:
        <div className="flex gap-x-3 px-2">
          <FaFacebookF className="text-white hover:text-[#FF8D00] cursor-pointer transition-all duration-500 ease-in-out text-xl" />
          <FaTwitter className="text-white hover:text-[#FF8D00] cursor-pointer transition-all duration-500 ease-in-out text-xl" />
          <AiFillInstagram className="text-white hover:text-[#FF8D00] cursor-pointer transition-all duration-500 ease-in-out text-xl" />
        </div>
      </span>
      {/* <Button title={"Request A Free Quotes"} /> */}
    </div>
  );
};

export default LeftCard;
