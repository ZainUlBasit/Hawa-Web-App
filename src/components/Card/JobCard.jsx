import React from "react";
import { MdBusinessCenter } from "react-icons/md";
import { FaList } from "react-icons/fa6";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { FaMapLocationDot } from "react-icons/fa6";
import Button from "../Buttons/Button";

const JobCard = ({ data }) => {
  return (
    <>
      <div className="flex flex-col w-[300px] font-[Ubuntu] items-start px-5 py-5 gap-y-4 bg-white rounded-[10px] border-[.5px]">
        <h1
          className="font-bold text-2xl capitalize max-w-[270px]"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
          }}
        >
          {data.title ? data.title : "Business Development"}
        </h1>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2 font-[Ubuntu] font-[500]">
            <MdBusinessCenter className="text-[1.3rem]" />
            <span>Full Time</span>
          </div>
          <div className="flex items-center gap-x-2 font-[Ubuntu] font-[500]">
            <FaList className="text-[1.3rem]" />
            <span>Oil & Gas</span>
          </div>
          <div className="flex items-center gap-x-2 font-[Ubuntu] font-[500]">
            <LiaMoneyBillSolid className="text-[1.3rem]" />
            <span>
              {data.SalaryRange
                ? data.SalaryRange
                : "$ 40000 - 50000 per Annum"}
            </span>
          </div>
          <div className="flex items-center gap-x-2 font-[Ubuntu] font-[500]">
            <FaMapLocationDot className="text-[1.3rem]" />
            <span>Dammam, Saudi Arabia</span>
          </div>
          {/* desc */}
          <div className="flex items-center gap-x-2">
            <span
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
              }}
            >
              {data.desc
                ? data.desc
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit magnam illum quas blanditiis dolor corrupti a commodi praesentium"}
            </span>
          </div>
        </div>
        <Button title={"Apply For Job"} Width={"w-[180px]"} />
      </div>
    </>
  );
};

export default JobCard;
