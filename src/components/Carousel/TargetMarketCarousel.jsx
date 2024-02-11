import React, { useEffect, useState } from "react";
import { CarouselWrapper } from "../Wrapper/CarouselWrapper";
import Button from "../Buttons/Button";
import Slider from "react-slick";
import { FaBuildingColumns } from "react-icons/fa6";
import CarouselCard from "../Card/CarouselCard";
import { TargetMarketsData } from "../../assets/Data/TargetMarketsData";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const TargetMarketCarousel = () => {
  // Define custom arrow components with react-icons
  const PrevArrow = (props) => (
    <div {...props} className="slick-prev">
      <FiChevronLeft size={30} color="black" className="!-m-5 !-mx-2" />
    </div>
  );

  const NextArrow = (props) => (
    <div {...props} className="slick-next">
      <FiChevronRight size={30} color="black" className="!-m-5 !-mx-3 !" />
    </div>
  );
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
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
          draggable={true}
          centerMode={windowWidth < 500 ? true : true}
          centerPadding={windowWidth < 400 ? "20%" : "0"}
          arrows={true}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
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
          {TargetMarketsData.map((dt, i) => (
            <CarouselCard
              key={i}
              Icon={dt.icon}
              title={dt.title}
              img={dt.img}
            />
          ))}
        </Slider>
      </div>
    </CarouselWrapper>
  );
};

export default TargetMarketCarousel;
