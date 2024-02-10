import React from "react";
import RightCardItems from "./RightCardItems";
import { FaBlenderPhone } from "react-icons/fa";
import { PiMapPinLineFill } from "react-icons/pi";
import { MdOutlineAttachEmail } from "react-icons/md";

const RightCard = () => {
  return (
    <div className="flex flex-col text-white font-[Ubuntu] bg-[#182029] gap-y-3 px-[50px] py-10 rounded-[20px] w-[380px]">
      <h1 className="font-bold text-[1.6rem]">Quick Contact!</h1>
      {[
        {
          Icon: FaBlenderPhone,
          HeaderText: "Call Us On",
          DetailText: "+92 777 555 0000",
        },
        {
          Icon: PiMapPinLineFill,
          HeaderText: "Address",
          DetailText: "Suite 20 Golden Street USA",
        },
        {
          Icon: MdOutlineAttachEmail,
          HeaderText: "Email",
          DetailText: "info@example.com",
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
