import React from "react";
import Navbar from "../Navbar/Navbar";
import CandidatesHeader from "../Header/CandidatesHeader";
import Banner from "../Banner/Banner";
import { CarouselWrapperHorizontal } from "../Wrapper/CarouselWrapper";
import Slider from "react-slick";
import { FaBuildingColumns } from "react-icons/fa6";
import JobCard from "../Card/JobCard";

const Candidates = () => {
  return (
    <>
      <Navbar />
      <CandidatesHeader />
      <Banner />
      <CarouselWrapperHorizontal className="gap-y-20 py-10 bg-[aliceblue]">
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
            {[
              {
                img: "abc",
                title: "Sales",
                icon: FaBuildingColumns,
                desc: "Hire Controller, Adminintrators,Hire Controller, Adminintrators",
              },
              {
                img: "abc",
                title: "Sales",
                icon: FaBuildingColumns,
                desc: "Hire Controller, Adminintrators,Hire Controller, Adminintrators",
              },
              {
                img: "abc",
                title: "Sales",
                icon: FaBuildingColumns,
                desc: "Hire Controller, Adminintrators,Hire Controller, Adminintrators",
              },
              {
                img: "abc",
                title: "Sales",
                icon: FaBuildingColumns,
                desc: "Hire Controller, Adminintrators,Hire Controller, Adminintrators",
              },
              {
                img: "abc",
                title: "Sales",
                icon: FaBuildingColumns,
                desc: "Hire Controller, Adminintrators,Hire Controller, Adminintrators",
              },
              {
                img: "abc",
                title: "Sales",
                icon: FaBuildingColumns,
                desc: "Hire Controller, Adminintrators,Hire Controller, Adminintrators",
              },
              {
                img: "abc",
                title: "Sales",
                icon: FaBuildingColumns,
                desc: "Hire Controller, Adminintrators,Hire Controller, Adminintrators",
              },
            ].map((dt, i) => {
              return <JobCard />;
            })}
          </Slider>
        </div>
      </CarouselWrapperHorizontal>
    </>
  );
};

export default Candidates;
