import React, { useEffect, useRef } from "react";
import { FaArrowDown, FaGithub } from "react-icons/fa6";
import gsap from "gsap";
import { IoMdDownload } from "react-icons/io";

const Hero = () => {
  const imageRef = useRef(null);
  const introRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonResumeRef = useRef(null);
  const buttonGithubRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Animate image
    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 1 }
    );

    // Intro text
    tl.fromTo(
      introRef.current,
      { opacity: 0, y: 30, skewY: 3 },
      { opacity: 1, y: 0, skewY: 0, duration: 1 },
      "-=0.6"
    );

    // Heading
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 30, skewY: 3 },
      { opacity: 1, y: 0, skewY: 0, duration: 1 },
      "-=0.6"
    );

    // Paragraph
    tl.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 30, skewY: 3 },
      { opacity: 1, y: 0, skewY: 0, duration: 1 },
      "-=0.6"
    );

    // Optional bounce on image
    tl.to(
      imageRef.current,
      {
        scale: 1.02,
        yoyo: true,
        repeat: 1,
        duration: 0.3,
        ease: "power1.inOut",
      },
      "+=0.2"
    );

    // Animate buttons
    tl.fromTo(
      [buttonResumeRef.current, buttonGithubRef.current],
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.3, stagger: 0.1 },
      "-=0.2"
    );
  }, []);

  return (
    <section className="bg-[#F5F8E9] min-h-[95vh] sm:min-h-[80vh] lg:min-h-[100vh] flex items-center justify-center relative">
      <div className="w-[95%] xs:w-[90%] sm:w-[85%] md:w-[80%] max-w-7xl mx-auto flex flex-col justify-center py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid w-[95%] m-auto place-items-center text-center gap-y-4 xs:gap-y-5 sm:gap-y-6 md:gap-y-8 lg:gap-y-10">
          <div ref={imageRef}>
            <img
              src="/Image/profilepic/1.jpg"
              alt="Frimpong Elvis profile"
              className="h-50 w-50 xs:h-60 sm:w-20 md:h-24 md:w-24 max-h-[20vw] max-w-[20vw] min-h-[60px] min-w-[60px] object-cover border-[0.5rem] border-[#C2DE3A] rounded-xl mt-6 xs:mt-8 sm:mt-10"
            />
          </div>
          <div ref={introRef}>
            <p className="font-medium md:font-semibold text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-gray-900 tracking-tight">
              Hi, I'm Frimpong Elvis 👋
            </p>
          </div>
          <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-5">
            <h1
              ref={headingRef}
              className="font-semibold text-[36px] xs:text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl leading-[108%] tracking-tight text-gray-900"
            >
              Transforming <br className="sm:hidden"/> raw data <br className="hidden sm:flex"/> into clear, actionable insights
            </h1>
            <p
              ref={paragraphRef}
              className="font-medium text-[16px] xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-700 max-w-[90%] sm:max-w-3xl mx-auto"
            >
              A{" "}
              <span className="font-semibold text-gray-800">Data Analyst</span>{" "}
              and an{" "}
              <span className="font-semibold text-gray-800">
                Agricultural Engineer
              </span>{" "}
              who turns data into insights using Excel, SQL, R, Power BI,
              Tableau, and Python.
            </p>
          </div>
        </div>

        {/* Animated Buttons */}
        <div className="flex md:hidden justify-center gap-4 pt-10">
          <div ref={buttonResumeRef}>
            <a href="/Elvis_Frimpong_CV.pdf" download="Elvis_Frimpong_CV.pdf">
              <button className="bg-[#C2DE3A] hover:scale-105 hover:bg-[#cbda84] transition-transform duration-300 cursor-pointer font-medium px-6 py-2 rounded-xl tracking-tighter flex items-center">
                <span className="mr-2">
                  <IoMdDownload />
                </span>
                Resume
              </button>
            </a>
          </div>
          <div ref={buttonGithubRef}>
            <a
              href="https://github.com/elvisfrimpong-da"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 bg-[#C2DE3A] hover:scale-105 hover:bg-[#cbda84] transition-transform duration-300 cursor-pointer font-medium px-6 py-2 rounded-xl tracking-tighter items-center"
            >
              GitHub
              <FaGithub className="text-lg xs:text-xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="xl:flex flex-col items-center pt-10 justify-center hidden">
        <FaArrowDown
          className="absolute md:hidden xl:flex bottom-4 xs:bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 text-xl xs:text-2xl sm:text-3xl text-[#C2DE3A] animate-bounce"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Hero;
