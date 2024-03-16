import React from "react";
import { TiTick } from "react-icons/ti";
import BannerSidePhoto from "../../assets/team.jpg";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden flex items-center justify-center gap-x-5 py-10 bg-[#000] shadow-[rgba(0,_0,_0,_.7)_0px_-60px_100px_-7px] flex-wrap">
      <img src={BannerSidePhoto} alt="not found" className="w-[450px]" />
      <div className="flex flex-col items-start gap-y-2 px-3 h-full py-6">
        {[
          {
            desc: "Leading international employment promoter specializing in overseas recruitment.",
          },
          {
            desc: "Established in 2004, facilitating opportunities worldwide for skilled professionals.",
          },
          {
            desc: "Expertise in recruitment for Sales, Operations, Commercial, Management & Engineering roles.",
          },
          {
            desc: "Committed consultants providing a service grounded in quality, honesty, and integrity.",
          },
          {
            desc: "In-depth knowledge of the global employment landscape, specializing in overseas placements.",
          },
          {
            desc: "Proudly placing over 5,000 candidates in rewarding international careers.",
          },
        ].map((dt) => {
          return (
            <span
              className="flex items-start gap-x-2 font-[400]"
              style={{ fontFamily: "Hammersmith One" }}
            >
              <TiTick className="text-[2rem] text-[#FF8D00]" />
              <span className="text-white select-none text-[1rem]">
                {dt.desc}
              </span>
            </span>
          );
        })}
        <Button
          onClick={() => navigate("/about-us")}
          Width={"w-[200px] mt-3"}
          title="Learn more about us"
        />
        ;
      </div>
    </div>
  );
};

export default Banner;
