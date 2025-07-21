import React from "react";
import TestimonialCarousel from "../components/TestimonialCarousel";

const Testimonial = () => {
  return (
    <div id="testimonial" className="my-10">
      <h2 className="text-4xl text-gray-900 mb-8 text-center flex items-center justify-center pb-4">
        <span className="hidden sm:block mr-2 font-normal tracking-tighter">
          Read Feedbacks, <br />
          <span className="mr-2 font-semibold tracking-tighter">
            Hire with confidence
          </span>
        </span>
        <br />
      </h2>

      <div className="">
        <TestimonialCarousel/>
      </div>
    </div>
  );
};

export default Testimonial;
