import React from "react";
import { FaBlenderPhone } from "react-icons/fa";

const RightCardItems = ({ Icon, HeaderText, DetailText, Last }) => {
  return (
    <div
      className={`flex justify-start items-center gap-x-5 ${
        !Last ? "border-b-2 border-b-[#262D36] pb-5" : ""
      } pt-3`}
    >
      <div className="icon text-[#FF8D00]">
        <Icon className="text-[2.5rem]" />
      </div>
      <div className="flex flex-col font-[Ubuntu]">
        <span className="font-bold">{`${HeaderText}:`}</span>
        <span>{`${DetailText}`}</span>
        {HeaderText === "Address" ? <span>{`Branch Office: Islamabad Pakistan`}</span> : ""}
      </div>
    </div>
  );
};

export default RightCardItems;
