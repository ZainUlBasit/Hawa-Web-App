import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const Slider = ({ children, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
    loop: true, // Enable infinite looping
    speed: 500, // Set a speed for the loop (adjust as needed)
    ...options,
  });
  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-x-3">{children}</div>
    </div>
  );
};

export default Slider;
