import React, { useEffect, useState } from "react";
import { CarouselWrapper } from "../Wrapper/CarouselWrapper";
import Button from "../Buttons/Button";
import Slider from "react-slick";
import { FaBuildingColumns } from "react-icons/fa6";
import CarouselCard from "../Card/CarouselCard";
import { TargetMarketsData } from "../../assets/Data/TargetMarketsData";

const TargetMarketCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <CarouselWrapper>
      <div className="w-[20%] min-w-[300px] text-wrapper">
        <div className="flex flex-col items-end justify-center gap-y-3 w-[300px] sm:flex-wrap overflow-hidden h-[60vh]">
          <div className="flex flex-col gap-y-3 w-[250px]">
            <h1 className="text-[2.5rem] font-bold font-[Ubuntu]">
              Our target markets
            </h1>
            <p className="pr-3">
              Leading UK Recruiters for the Plant, Access, Accommodation,
              Transport, Tool Hire and all rental related sectors
            </p>
          </div>
        </div>
      </div>
      <div className="w-[70%] carousel-wrapper">
        <Slider
          dots={false}
          infinite={true}
          speed={500}
          slidesToShow={3} // Number of slides to show at once
          slidesToScroll={1}
          autoplay={true}
          draggable={true}
          centerMode={windowWidth < 500 ? true : true}
          centerPadding={windowWidth < 400 ? "20%" : "0"} // Adjust centerPadding for centering
          arrows={false}
          responsive={[
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
                centerMode: false,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
        >
          {TargetMarketsData.map((dt, i) => {
            return (
              <CarouselCard
                Icon={dt.icon}
                title={dt.title}
                i={i}
                img={dt.img}
              />
            );
          })}
        </Slider>
      </div>
    </CarouselWrapper>
  );
};

export default TargetMarketCarousel;
