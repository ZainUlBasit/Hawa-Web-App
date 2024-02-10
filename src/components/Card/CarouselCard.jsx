import React, { useState } from "react";

const CarouselCard = ({ Icon, title, img, desc, i }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="relative h-[300px] w-[250px] rounded-[20px] overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-transform ease-in-out duration-1000 hover:transform hover:scale-110 cursor-pointer"
      style={{
        backgroundImage: `url(${img})`, // Replace with the actual path to your image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {isActive ? (
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.5)] z-1 fade-in"></div>
      ) : (
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.2)] z-1"></div>
      )}

      {/* Your other content goes here */}
      <div
        className={`absolute bottom-0 left-0 flex flex-col justify-center items-center w-full transition-all ease-in-out duration-700 px-3 ${
          isActive ? "py-10" : "py-4"
        }`}
      >
        <Icon className="text-white text-2xl drop-shadow-lg" />
        <span className="text-white text-3xl font-bold font-[Ubuntu] shadow-lg">
          {title}
        </span>
        {desc && (
          <span
            className={`transition-all ease-in-out duration-[3s] text-center transform text-white ${
              !isActive
                ? "max-h-0 opacity-0 overflow-hidden"
                : "max-h-[500px] opacity-100"
            }`}
          >
            {desc &&
              desc.split(",").map((item, index) => (
                <React.Fragment key={index}>
                  {item},
                  <br />
                </React.Fragment>
              ))}
          </span>
        )}
      </div>
    </div>
  );
};

export default CarouselCard;
