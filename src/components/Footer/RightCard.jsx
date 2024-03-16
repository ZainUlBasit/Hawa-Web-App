import React from "react";
import RightCardItems from "./RightCardItems";
import { FaBlenderPhone } from "react-icons/fa";
import { PiMapPinLineFill } from "react-icons/pi";
import { MdOutlineAttachEmail } from "react-icons/md";

const RightCard = () => {
  return (
    <div className="flex flex-col text-white font-[Ubuntu] bg-[#182029] gap-y-3 px-[50px] py-10 rounded-[20px] max-w-[380px]">
      <h1 className="font-bold text-[1.6rem]">Quick Contact!</h1>
      {[
        {
          Icon: FaBlenderPhone,
          HeaderText: "Call Us On",
          DetailText: "091-5253127",
        },
        {
          Icon: PiMapPinLineFill,
          HeaderText: "Address",
          DetailText: `1st Floor, ( FF-322 ) Deans Trade Center Peshawar Saddar.`,
        },
        {
          Icon: MdOutlineAttachEmail,
          HeaderText: "Email",
          DetailText: "Marketing@hawaoverseas.com",
        },
      ].map((data, i) => {
        return (
          <RightCardItems
            Icon={data.Icon}
            HeaderText={data.HeaderText}
            DetailText={data.DetailText}
            Last={i === 2}
          />
        );
      })}
    </div>
  );
};

export default RightCard;
