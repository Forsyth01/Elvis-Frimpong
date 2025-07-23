import React, { useEffect, useRef } from "react";
import { IoMdDownload } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // when the top of the section hits 80% of the viewport
          toggleActions: "play none none none", // only play once
        },
      }
    );
  }, []);

  return (
    <div className="my-10 px-2 xs:flex md:block flex-col items-center  " ref={containerRef}>
      <div className=" rounded-2xl">
        <div className="sm:grid place-content-center rounded-2xl space-y-2 sm:space-y-0">
          <div className="md:ml-6">
            <h1 className="sm:text-[34px] text-[28px]  font-semibold tracking-tighter">
              About Me
            </h1>
          </div>
          <div className="lg:flex gap-10 sm:w-3/3 ">
            <img
              src="/Image/profilepic/1.jpg"
              className="sm:h-50 sm:w-50 h-40 w-40 md:m-0 rounded-full object-cover border-3 border-[#F5F8E9] hidden md:flex"
              alt="Profile"
            />
            <div>
              <p className="sm:text-justify  sm:tracking-tight sm:text-[14px] text-[16px] leading-loose ">
                <span className="font-semibold text-gray-700 tracking-tighter">
                  Hi I'm Elvis👋, a dedicated Data Analyst
                </span>
                , with a background in Agricultural Engineering. I turn complex
                data into clear, actionable insights that help businesses grow.
                <br className="hidden md:flex"/>
                I have hands-on experience in data cleaning, visualization,
                database management, and building interactive dashboards. I work
                confidently with Excel, SQL, Python, R, Power BI, Tableau, AWS,
                GitHub, Slack, and modern AI tools to deliver results that
                matter.
               <br className="hidden md:flex"/>
                I enjoy solving problems, sharing practical insights, and making
                data easy to understand and use.
              </p>
              <div>
                <a
                  href="/Elvis_Frimpong_CV.pdf"
                  download="Elvis_Frimpong_CV.pdf"
                >
                  <button className="mt-2 bg-[#C2DE3A] hover:bg-[#cbda84] cursor-pointer font-medium px-6 py-2 rounded-full tracking-tighter flex items-center  md:m-0">
                    <span className="mr-2">
                      <IoMdDownload />
                    </span>
                    Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
