// pages/index.js
// 1. import all the necessary components and data
import React from "react";
import testimonials from "../../assets/Data/data.json";
import Slider from "./Slider";
import TestimonialCard from "./TestimonialCard";
import JobCard from "./JobCard";
import cardAPic from "../../assets/about.jpg";
import { FaBuildingColumns } from "react-icons/fa6";

const CompleteC = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between py-24`}
    >
      {/* 2. make sure our carousel container takes up the full screen width using w-screen */}
      <div className="w-screen items-center justify-center">
        <Slider options={{ align: "center" }}>
          {[
            {
              img: cardAPic,
              title: "Sales",
              icon: FaBuildingColumns,
              desc: "Hire Controller, Adminintrators,Hire Controller, Adminintrators",
            },
            {
              img: cardAPic,
              title: "Sales",
              icon: FaBuildingColumns,
              desc: "Hire Controller, Adminintrators,Hire Controller, Adminintrators",
            },
            {
              img: cardAPic,
              title: "Sales",
              icon: FaBuildingColumns,
              desc: "Hire Controller, Adminintrators,Hire Controller, Adminintrators",
            },
            {
              img: cardAPic,
              title: "Sales",
              icon: FaBuildingColumns,
              desc: "Hire Controller, Adminintrators,Hire Controller, Adminintrators",
            },
            {
              img: cardAPic,
              title: "Sales",
              icon: FaBuildingColumns,
              desc: "Hire Controller, Adminintrators,Hire Controller, Adminintrators",
            },
            {
              img: cardAPic,
              title: "Sales",
              icon: FaBuildingColumns,
              desc: "Hire Controller, Adminintrators,Hire Controller, Adminintrators",
            },
            {
              img: cardAPic,
              title: "Sales",
              icon: FaBuildingColumns,
              desc: "Hire Controller, Adminintrators,Hire Controller, Adminintrators",
            },
          ].map((testimonial, i) => (
            <div key={i} className="flex-[0_0_90%] md:flex-[0_0_30%]">
              <JobCard />
              {/* <TestimonialCard {...testimonial} /> */}
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
};

export default CompleteC;
