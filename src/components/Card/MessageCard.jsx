import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const MessageCard = ({ img, title, desc, children }) => {
  return (
    <>
      <div className="bg-black pb-10 flex justify-center items-center flex-col border-b-[10px] border-b-white py-[5rem]">
        <div
          className="mb-7 title px-5 py-3 text-[#F17020] text-3xl border-white border-2 shadow-[5px_5px_0px_0px_rgba(255,255,255)] font-bold"
          style={{ fontFamily: "Open Sans" }}
        >
          {title}
        </div>
        <div className="flex gap-x-5 justify-start items-center w-[90%]">
          <div
            style={{
              fontFamily: "Open Sans",
              backgroundImage: `url(${img})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              //   backgroundAttachment:,
            }}
            className="border-[#F17020] border-[5px] min-w-[250px] h-[250px] rounded-full"
          ></div>
          {children}
        </div>
        <div className="Desc w-[90%] text-justify text-[#fff] my-10">
          {desc}
        </div>
      </div>
    </>
  );
};

export default MessageCard;
