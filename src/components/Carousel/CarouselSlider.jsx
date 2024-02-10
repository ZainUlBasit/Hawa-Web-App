// CarouselSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeBGG from "../../assets/HomeBGG.jpg";
import NavLogo from "../../assets/NavLogo.jpg";
import Team from "../../assets/team.jpg";

const CarouselSlider = () => {
  const settings = {};

  return (
    <div className="carousel-container w-[100%]">
      <Slider
        dots={true}
        infinite={true}
        speed={600}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
      >
        <div>
          <img src={HomeBGG} alt="Slide 1" className="carousel-image w-[100%] h-[100vh] object-cover" />
        </div>
        <div>
          <img src={NavLogo} alt="Slide 2" className="carousel-image w-[100%] h-[100vh] object-cover" />
        </div>
        <div>
          <img src={Team} alt="Slide 3" className="carousel-image w-[100%] h-[100vh] object-cover" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default CarouselSlider;
