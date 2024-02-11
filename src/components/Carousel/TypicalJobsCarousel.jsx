import React, { useEffect, useState } from "react";
import cardAPic from "../../assets/about.jpg";
import { CarouselWrapper } from "../Wrapper/CarouselWrapper";
import Button from "../Buttons/Button";
import Slider from "react-slick";
import { FaBuildingColumns } from "react-icons/fa6";
import CarouselCard from "../Card/CarouselCard";
import { TypicalJobsData } from "../../assets/Data/TypicalJobsData";

const TypicalJobsCarousel = () => {
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
        <div className="flex flex-col items-end justify-center gap-y-3 w-[300px] flex-wrap overflow-hidden h-[60vh]">
          <div className="flex flex-col gap-y-3 w-[250px]">
            <h1 className="text-[2.5rem] font-bold font-[Ubuntu]">
              Typical job roles
            </h1>
            <Button title={"Search all jobs"} Width={"w-[200px]"} />
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
          {TypicalJobsData.map((dt, i) => {
            return (
              <CarouselCard
                Icon={dt.icon}
                title={dt.title}
                i={i}
                img={dt.img}
                desc={dt.desc}
              />
            );
          })}
        </Slider>
      </div>
    </CarouselWrapper>
  );
};

export default TypicalJobsCarousel;
