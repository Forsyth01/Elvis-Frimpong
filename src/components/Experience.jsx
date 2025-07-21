import React, { useEffect, useRef } from "react";
import { IoMdDownload } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  const experiences = [
    {
      title: "Juaben Municipal Assembly",
      date: "Nov 2023 - Oct 2024",
      role: "Data Analyst & Agricultural Officer",
    },
    {
      title: "Only Quality Data",
      date: "Sept 2024 - Nov 2024",
      role: "Data Analyst Intern",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    itemsRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: i * 0.15,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef}>
      <div>
        <div className="flex justify-between py-4">
          <h2 className="text-4xl font-semibold tracking-tighter text-gray-800 mb-4">
            <span className="font-normal tracking-tighter">Work </span>
            <br /> Experience
          </h2>
          <p className="text-gray-600 mb-6 flex flex-col justify-end">
            4 Years
          </p>
        </div>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <ul
              key={index}
              className="list-none"
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#C2DE3A] rounded-full mr-2"></div>
                  <h3 className="font-semibold tracking-tighter text-[18px]">
                    {exp.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm flex flex-col text-right">
                  {exp.date}
                </p>
              </li>
              <li className="ml-4 text-gray-600">{exp.role}</li>
            </ul>
          ))}
        </div>
        <div className="flex items-center justify-between py-6">
          <div>
            <a href="/Elvis_Frimpong_CV.pdf" download="Elvis_Frimpong_CV.pdf">
              <button className="xl:mt-4 bg-[#C2DE3A] hover:bg-[#cbda84] cursor-pointer font-medium px-6 py-2 rounded-full tracking-tighter flex items-center">
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
  );
};

export default Experience;
