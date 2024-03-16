import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import HomeBg from "../../assets/HomeBGG.jpg";
import cardPic from "../../assets/cardPic.jpg";
import cardAPic from "../../assets/about.jpg";
// import "./Home.css";
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
import { TargetMarketsData } from "../../assets/Data/TargetMarketsData";
import TypicalJobsCarousel from "../Carousel/TypicalJobsCarousel";
import TargetMarketCarousel from "../Carousel/TargetMarketCarousel";
import HomeHeader from "../Header/HomeHeader";
import MultipleItems from "../Carousel/LogoCarousel";
import LogoCarousel from "../Carousel/LogoCarousel";
import Carousel from "nuka-carousel";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <HomeHeader
        Src={
          "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/HomeBg22.mp4?alt=media&token=1072d27e-3795-466c-b640-7a3228d04b45"
        }
      >
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
            <div className="flex gap-x-10 z-10 mt-5 HeaderMiddleBlockButtons">
              <button className="px-5 py-3 bg-[#F17020] text-[1rem] font-[Ubuntu] capitalize hover:bg-[#ca4e00] transition-all duration-700 ease-in-out rounded-lg" onClick={()=>navigate("/jobs")}>
                I'm Looking for a job
              </button>
              <button className="px-5 py-3 bg-transparent border-white border-2 text-[1rem] font-[Ubuntu] capitalize hover:bg-[#fff] hover:text-[#F17020] transition-all duration-700 ease-in-out rounded-lg">
                I'm Looking to hire
              </button>
              {/* <button>I'm Looking to hire</button> */}
            </div>
          </span>
        </HeaderMiddleBlock>
      </HomeHeader>
      <Banner />
      {/* carousel 1 */}
      <TypicalJobsCarousel />
      {/* Text between carousel */}
      <div
        className="w-full text-center font-bold text-[2.3rem] py-10 text-white my-10"
        style={{
          fontFamily: "Open Sans",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        Recruitment Expertise in Various Sectors.
      </div>
      {/* carousel 2 */}
      <TargetMarketCarousel />
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
      <div className="border-t-4 border-black pb-20">
        <div
          className="w-full text-center font-bold text-[3rem] py-10 text-[#F17020] mt-5 mb-10"
          style={{ fontFamily: "Open Sans" }}
        >
          <h1>Our Partners</h1>
          <div className="font-[500] text-[1.2rem] text-black">
            We are proud to collaborate with exceptional partners who contribute
            to our shared success.
          </div>
        </div>
        <Carousel
          autoplay={true}
          autoplayInterval={900}
          wrapAround={true}
          withoutControls={true}
          slidesToShow={4}
          speed={600}
          cellSpacing={20}
          cellAlign="center"
        >
          {[
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo1.jpg?alt=media&token=2d8c9fc5-7a87-4389-9eff-9c76cda70263",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo10.png?alt=media&token=2a782ddc-1274-4e30-a7fc-3e1725f15c8a",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo11.png?alt=media&token=cd6a9656-ced6-4e1a-9139-646e61d1a4f6",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo12.jpg?alt=media&token=b36fb3d9-e214-416c-9c2b-a7ef3ad63315",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo13.png?alt=media&token=2cf6fb62-b344-4fc0-ae44-d02cbbef1579",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo17.jpg?alt=media&token=419b67ef-7388-4ac8-bb08-e0db4428e9ce",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo18.jpg?alt=media&token=42479852-4b72-4b45-a20c-982577cec18e",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo2.png?alt=media&token=e7d73ebb-8c10-4344-9c27-588cfca02555",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo3.jpg?alt=media&token=209f9c2a-7b48-4d75-ba43-d79614938695",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo4.jpg?alt=media&token=d11c8d29-c617-4ceb-95c1-2937496153c2",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo5.png?alt=media&token=b10a5f86-9f5c-4b18-873e-a05f318c9246",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo6.png?alt=media&token=235284d9-a4cf-48e1-8086-b8f94a93915b",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo7.png?alt=media&token=5e8fd0e7-e68c-4ce0-b127-cb4856b17971",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo8.png?alt=media&token=95e8cb90-c7fb-4ecc-9ab3-c65d4015c01b",
          ].map((dt, i) => {
            return (
              <div className="h-full flex justify-center items-center">
                <img src={dt} alt={`Logo ${i + 1}`} />
              </div>
            );
          })}
        </Carousel>
      </div>

      <Footer />
    </>
  );
};

export default Home;
