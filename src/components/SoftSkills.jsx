import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SoftSkills = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

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
          start: "top 80%",
        },
      }
    );

    itemsRef.current.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  const softSkills = [
    "Critical Thinking",
    "Problem-Solving",
    "Attention to Detail",
    "Communication",
    "Teamwork",
    "Time Management",
    "Presentation Skills",
    "Adaptability",
    "Analytical Mindset",
    "Curiosity & Continuous Learning",
  ];

  return (
    <section ref={sectionRef} className="">
      <div className="mx-auto text-gray-700 bg-white p-4 xs:p-6 rounded-xl w-full ">
        <h1 className="text-2xl font-medium mb-4 text-center tracking-tighter">
          Soft Skills
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 items-center">
          {softSkills.map((skill, index) => (
            <li
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="relative pl-6 xs:pl-8 text-gray-800 text-sm xs:text-base tracking-tight group hover:text-[#C2DE3A] transition-colors duration-200"
            >
              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 xs:w-4 xs:h-4 bg-[#C2DE3A] rounded-full group-hover:scale-125 transition-transform duration-200"
                aria-hidden="true"
              ></span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SoftSkills;
