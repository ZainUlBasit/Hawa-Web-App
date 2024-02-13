import React from "react";
import { BsChevronDown } from "react-icons/bs";

const AuthInputPopOver = ({ label, placeholder, required, Value, onClick }) => {
  return (
    <div
      className="relative mb-[15px] w-[297px] font-[Quicksand]"
      onClick={onClick}
    >
      <p
        className="absolute top-[-11px] left-3 w-fit bg-white font-[Quicksand] text-[15px] font-bold"
        style={{ fontFamily: "Open Sans" }}
      >
        {label}
      </p>
      <div
        className="px-4 py-3 pr-10 border border-gray-300 rounded-[7.94px] w-full outline-none cursor-pointer"
        style={{ fontFamily: "Open Sans" }}
      >
        {Value === "" ? placeholder : Value}
      </div>
      <BsChevronDown className="flex absolute right-3 top-[.85rem]" />
    </div>
  );
};

export default AuthInputPopOver;
