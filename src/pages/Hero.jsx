import React, { useEffect, useRef } from "react";
import { FaArrowDown } from "react-icons/fa6";
import gsap from "gsap";

const Hero = () => {
  const imageRef = useRef(null);
  const introRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const elements = [
      imageRef.current,
      introRef.current,
      headingRef.current,
      paragraphRef.current,
    ];

    gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="bg-[#F5F8E9] min-h-[60vh] sm:min-h-[80vh] lg:min-h-[100vh] flex items-center justify-center relative">
      <div className="w-[95%] xs:w-[90%] sm:w-[85%] md:w-[80%] max-w-7xl mx-auto flex flex-col justify-center py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid place-items-center text-center gap-y-4 xs:gap-y-5 sm:gap-y-6 md:gap-y-8 lg:gap-y-10">
          <div ref={imageRef}>
            <img
              src="/Image/profilepic/1.jpg"
              alt="Frimpong Elvis profile"
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 max-h-[20vw] max-w-[20vw] min-h-[60px] min-w-[60px] object-cover border-[0.5rem] border-[#C2DE3A] rounded-xl mt-6 xs:mt-8 sm:mt-10"
            />
          </div>
          <div ref={introRef}>
            <p className="font-semibold text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-gray-900 tracking-tight">
              Hi, I'm Frimpong Elvis 👋
            </p>
          </div>
          <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-5">
            <h1
              ref={headingRef}
              className="font-semibold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl leading-[108%] tracking-tight text-gray-900"
            >
              Transforming raw data <br /> into clear, actionable insights
            </h1>
            <p
              ref={paragraphRef}
              className="font-medium text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-700 max-w-[90%] sm:max-w-3xl mx-auto"
            >
              A <span className="font-semibold text-gray-800">Data Analyst</span>{" "}
              and an{" "}
              <span className="font-semibold text-gray-800">
                Agricultural Engineer
              </span>{" "}
              who turns data into insights using Excel, SQL, R, Power BI, Tableau,
              and Python.
            </p>
          </div>
        </div>
      </div>

      <FaArrowDown
        className="absolute md:hidden xl:flex bottom-4 xs:bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 text-xl xs:text-2xl sm:text-3xl text-[#C2DE3A] animate-bounce"
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;
