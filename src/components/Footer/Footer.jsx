import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaBlenderPhone, FaFacebookF, FaTwitter } from "react-icons/fa";
import Button from "../Buttons/Button";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import CardWrapper from "./CardWrapper";
import FooterLine from "./FooterLine";

const Footer = () => {
  return (
    <>
      <div className="h-auto py-10 w-full bg-[#000] flex flex-col justify-center items-center overflow-hidden">
        <CardWrapper>
          <LeftCard />
          <RightCard />
        </CardWrapper>
        <FooterLine />
        <div className="text-white select-none pt-6 text-center font-[Ubuntu] font-[300]">
          Copyright © 2024 HAWA All rights reserved. <br /> Privacy &
          PolicyTerms & Conditions
        </div>
      </div>
    </>
  );
};

export default Footer;
