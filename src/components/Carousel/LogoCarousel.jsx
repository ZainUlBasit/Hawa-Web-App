import React, { useEffect, useState } from "react";
import {
  CarouselWrapper,
  LogoCarouselWrapper,
} from "../Wrapper/CarouselWrapper";
import Button from "../Buttons/Button";
import Slider from "react-slick";
import { FaBuildingColumns } from "react-icons/fa6";
import CarouselCard from "../Card/CarouselCard";
import { TargetMarketsData } from "../../assets/Data/TargetMarketsData";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const LogoCarousel = () => {
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
    <LogoCarouselWrapper>
      <div className="w-[85%] carousel-wrapper">
        <Slider
          dots={false}
          infinite={true}
          speed={1000}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={1005}
          draggable={true}
          centerMode={true}
          //   centerPadding={windowWidth < 400 ? "20%" : "0"}
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
              <div key={i} className="carousel-item">
                <img className="logo-image" src={dt} alt={`Logo ${i + 1}`} />
              </div>
            );
          })}
        </Slider>
      </div>
    </LogoCarouselWrapper>
  );
};

export default LogoCarousel;
