import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import HomeBg from "../../assets/HomeBGG.jpg";
import cardPic from "../../assets/cardPic.jpg";
import cardAPic from "../../assets/about.jpg";
import "./Home.css";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import CarouselSlider from "../Carousel/CarouselSlider";
import SimpleSlider from "../Carousel/CarouselSlider";
import Button from "../Buttons/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "../Card/CarouselCard";
import { FaBuildingColumns } from "react-icons/fa6";
import JobCard from "../Card/JobCard";
import {
  CarouselWrapper,
  CarouselWrapperHorizontal,
} from "../Wrapper/CarouselWrapper";
import HomeV from "../../assets/videos/HomeBg22.mp4";
import {
  HeaderMiddleBlock,
  HeaderWrapper,
  Overlay,
} from "../Wrapper/Home/HomeWrapper";
import backgroundImage from "../../assets/team.jpg";
import { TypicalJobsData } from "../../assets/Data/TypicalJobsData";
const Home = () => {
  const textArray = [
    "Oil & Gas Petrolchemicals",
    "Civil Construction",
    "Aviation & Shipping",
    "Hospitality & Healthcare",
    "Heavy Industry",
    "FMCG & Logistics",
    "Marine & Mining",
    "Power & Energy",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [Changing, setChanging] = useState(false);

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setChanging(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        setChanging(true);
      }, 1000); // Delay of 1000ms before changing the index
    }, 2000); // Interval of 2000ms (2 seconds) for the entire process

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
      <Navbar />
      <HeaderWrapper>
        <Overlay />
        <HeaderMiddleBlock>
          <span className="HeaderMiddleBlockText">
            The leading specialist construction <br />
            & technical recruitment agency for
            <br />
            <div
              className={`ChangingText ${Changing ? "fade-in" : "fade-out"}`}
            >
              {textArray[currentIndex]}
            </div>
            <div className="flex gap-x-10 z-10 mt-5">
              <button className="px-5 py-3 bg-[#F17020] text-[1rem] font-[Ubuntu] capitalize hover:bg-[#ca4e00] transition-all duration-700 ease-in-out rounded-lg">
                I'm Looking for a job
              </button>
              <button className="px-5 py-3 bg-transparent border-white border-2 text-[1rem] font-[Ubuntu] capitalize hover:bg-[#fff] hover:text-[#F17020] transition-all duration-700 ease-in-out rounded-lg">
                I'm Looking to hire
              </button>
              {/* <button>I'm Looking to hire</button> */}
            </div>
          </span>
        </HeaderMiddleBlock>

        <div className="BgVideo">
          <video autoPlay muted loop playsInline>
            <source src={HomeV} type="video/mp4" muted={true} />
            Your browser does not support the video tag.
          </video>
          {/* Your other content goes here */}
        </div>
      </HeaderWrapper>
      <Banner />
      {/* carousel 1 */}
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
      {/* Text between carousel */}
      <div
        className="w-full text-center font-bold text-[2.3rem] py-10 text-white my-10"
        style={{
          fontFamily: "Open Sans",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        Recruitment Expertise in Various Sectors.
      </div>
      {/* carousel 2 */}
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
            ].map((dt, i) => {
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
      {/* Latest job search */}
      {/* <CarouselWrapperHorizontal className="gap-y-20 py-10 bg-[aliceblue]">
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
            centerMode={windowWidth < 500 ? true : true}
            centerPadding={windowWidth < 400 ? "20%" : "0"} // Adjust centerPadding for centering
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
            ].map((dt, i) => {
              return <JobCard />;
            })}
          </Slider>
        </div>
      </CarouselWrapperHorizontal> */}

      <Footer />
    </>
  );
};

export default Home;
