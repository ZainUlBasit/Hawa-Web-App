import React from "react";
import Navbar from "../Navbar/Navbar";
import AboutBG from "../../assets/about.jpg";
import Sales from "../../assets/aboutus/sales.png";
import Engineering from "../../assets/aboutus/engineering.png";
import Commercial from "../../assets/aboutus/commercial.png";
import "./About.css";
import SimpleSlider from "../Carousel/CarouselSlider";
import CompleteC from "../Card/CompleteCarousel";
import HomeHeader from "../Header/HomeHeader";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <HomeHeader
        Src={
          "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/aboutusT.mp4?alt=media&token=c14e5363-2a21-4032-ae55-6628c293d1ec"
        }
      />
      <Banner />
      <div className="flex justify-center items-center gap-x-10 px-10 py-[60px]">
        <div className="card w-[280px] flex flex-col justify-center items-center gap-y-7">
          <img src={Sales} alt="changes" className="w-[150px]" />
          <div className="desc text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus tempora perferendis voluptas iusto nemo iste explicabo
            maiores natus nobis itaque ea dolorem, corporis, praesentium
            possimus consectetur consequuntur vel quis magni.
          </div>
        </div>
        <div className="card w-[280px] flex flex-col justify-center items-center gap-y-7">
          <img src={Engineering} alt="changes" className="w-[150px]" />
          <div className="desc text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus tempora perferendis voluptas iusto nemo iste explicabo
            maiores natus nobis itaque ea dolorem, corporis, praesentium
            possimus consectetur consequuntur vel quis magni.
          </div>
        </div>
        <div className="card w-[280px] flex flex-col justify-center items-center gap-y-7">
          <img src={Commercial} alt="changes" className="w-[150px]" />
          <div className="desc text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus tempora perferendis voluptas iusto nemo iste explicabo
            maiores natus nobis itaque ea dolorem, corporis, praesentium
            possimus consectetur consequuntur vel quis magni.
          </div>
        </div>
      </div>
      <Banner />
      <Footer />
    </>
  );
};

export default About;
