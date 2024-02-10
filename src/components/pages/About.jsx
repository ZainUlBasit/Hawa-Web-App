import React from "react";
import Navbar from "../Navbar/Navbar";
import AboutBG from "../../assets/about.jpg";
import "./About.css";
import SimpleSlider from "../Carousel/CarouselSlider";
import CompleteC from "../Card/CompleteCarousel";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen m-0 p-0">
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.3)]"></div>
        <span className="absolute top-0 left-0 w-full h-full flex justify-center items-center font-[Ubuntu] capitalize bg-[rgba(0,0,0,.3)] text-white text-[2.8rem] font-bold drop-shadow-lg shadow-black z-9 bg-image">
          The leading specialist construction <br /> & technical recruitment
          agency for
        </span>
        {/* buttons */}

        {/* <img
          src={AboutBG}
          alt="not found"
          className="w-full h-[50%] object-fill"
        /> */}
        {/* <video
          className="w-full h-screen object-fill"
          src={AboutBG}
          loop
          autoPlay
          muted
        ></video> */}
      </div>
      {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum eos dolore
      aperiam ea obcaecati iste, quos perspiciatis ipsa beatae voluptas, rem aut
      exercitationem libero fugiat sed ratione. Aliquid dolore officiis
      praesentium, voluptatibus dolorem dignissimos quam ipsa. Iusto, molestias
      inventore. Alias officia rem pariatur harum similique expedita numquam
      animi? Ipsam aut praesentium laudantium accusantium recusandae quibusdam
      vero! Laudantium maxime, repellat aspernatur dolore autem aut accusantium
      placeat repellendus itaque sed ipsam magnam, accusamus sit. Quam quasi
      animi nihil distinctio deleniti ratione ex fuga esse consectetur
      blanditiis autem delectus, magni eum consequatur enim, explicabo, illum id
      sequi a. Labore dolorum eveniet error eius? */}
    </>
  );
};

export default About;
