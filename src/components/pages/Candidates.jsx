import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import CandidatesHeader from "../Header/CandidatesHeader";
import Banner from "../Banner/Banner";
import { CarouselWrapperHorizontal } from "../Wrapper/CarouselWrapper";
import Slider from "react-slick";
import { FaBuildingColumns } from "react-icons/fa6";
import JobCard from "../Card/JobCard";
import ReactLogo from "../../assets/candidates.svg";
import ReactLogo1 from "../../assets/candidates1.svg";
import TargetMarketCarousel from "../Carousel/TargetMarketCarousel";
import Footer from "../Footer/Footer";
import { JobsData } from "../../assets/Data/JobsData";

const Candidates = () => {
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
    <>
      <Navbar />
      <CandidatesHeader />
      {/* <Banner /> */}
      <CarouselWrapperHorizontal className="gap-y-20 py-10 bg-[aliceblue] fade-in">
        <h1 className="font-bold font-[Ubuntu] text-5xl text-center text-wrapper">
          Latest jobs <span className="text-[#F17020]">Search all jobs</span>
        </h1>
        <div className="w-[75%] carousel-wrapper">
          <Slider
            // dots={false}
            infinite={true}
            speed={500}
            slidesToShow={3} // Number of slides to show at once
            slidesToScroll={1}
            autoplay={true}
            draggable={true}
            centerMode={true}
            centerPadding={windowWidth < 400 ? "20%" : "0"}
            // centerPadding={} // Adjust centerPadding for centering
            // arrows={false}
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
            {JobsData.map((data) => {
              return <JobCard data={data} />;
            })}
          </Slider>
        </div>
      </CarouselWrapperHorizontal>
      <img src={ReactLogo} alt="React Logo" />
      <img src={ReactLogo1} alt="React Logo" />
      <TargetMarketCarousel />
      <Footer />
    </>
  );
};

export default Candidates;
