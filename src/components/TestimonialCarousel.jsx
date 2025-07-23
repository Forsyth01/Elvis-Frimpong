import React from "react";
import TestimonialCard from "./TestimonialCard";
import Marquee from "react-fast-marquee";

const TestimonialCarousel = () => {
  return (
    <div className="hidden sm:flex">
      <Marquee loop={0} autoFill={true} gradient={true} gradientColor="#C2DE3A"  >
        <TestimonialCard />
      </Marquee>
    </div>
  );
};

export default TestimonialCarousel;
