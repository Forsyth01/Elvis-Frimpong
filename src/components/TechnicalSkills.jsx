import React, { useEffect, useRef } from "react";
import {
  FaFileExcel,
  FaDatabase,
  FaPython,
  FaRProject,
  FaChartBar,
  FaTable,
  FaCloud,
  FaRobot,
  FaSpider,
  FaBroom,
  FaChartLine,
  FaFileAlt,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechnicalSkills = () => {
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
        { opacity: 0, y: 30 },
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

  const technicalSkills = [
    { name: "Microsoft Excel", icon: <FaFileExcel className="text-green-600" /> },
    { name: "R / RStudio", icon: <FaRProject className="text-blue-400" /> },
    { name: "Power BI", icon: <FaChartBar className="text-yellow-500" /> },
    { name: "Tableau", icon: <FaTable className="text-blue-700" /> },
    { name: "AI & Prompt Engineering", icon: <FaRobot className="text-purple-600" /> },
    { name: "Web Scraping", icon: <FaSpider className="text-black" /> },
    { name: "Data Cleaning & Preprocessing", icon: <FaBroom className="text-teal-600" /> },
    { name: "Data Visualization", icon: <FaChartLine className="text-indigo-600" /> },
    { name: "AWS Cloud Fundamentals", icon: <FaCloud className="text-orange-500" /> },
    { name: "Reporting & Documentation", icon: <FaFileAlt className="text-gray-600" /> },
    { name: "SQL & Database Management", icon: <FaDatabase className="text-blue-600" /> },
    { name: "Python (Pandas, NumPy, Jupyter Notebook)", icon: <FaPython className="text-blue-500" /> },
  ];

  return (
    <div
      ref={sectionRef}
      className="text-gray-700  p-4 rounded-2xl w-full sm:w-[50%]"
    >
      <h1 className="text-2xl font-medium mb-4 tracking-tighter">
        Technical Skills
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {technicalSkills.map((skill, index) => (
          <li
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="flex items-center"
          >
            <span className="mr-2">{skill.icon}</span>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechnicalSkills;
