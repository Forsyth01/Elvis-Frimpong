import React, { useEffect, useRef } from "react";
import { FaMedium, FaGithub } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const projects = [
    {
      id: 1,
      title: "Biliv-Augmenta employee attrition analysis",
      date: "March, 2025",
      description:
        "Exploring employee attrition trends at Biliv-Augmenta with Power BI to deliver actionable workforce insights.",
      image: "/Image/projects/project1.jpg",
      mediumLink:
        "https://medium.com/@elvisfrimpong.da/uncovering-the-hidden-drivers-of-employee-turnover-a-data-analysts-guide-to-retention-strategy-9929d1dcd931",
      githubLink:
        "https://github.com/elvisfrimpong-da/employee-attrition-analysis",
    },
    {
      id: 2,
      title: "Vertex mobile net churn analysis",
      date: "July, 2024",
      description:
        "Harnessing the power of data analytics with Power BI, I dig deep to understand why customers leave Vertex Mobile Net and how to keep them happy",
      image: "/Image/projects/project2.jpg",
      mediumLink:
        "https://medium.com/@elvisfrimpong.da/how-data-analytics-can-reduce-customer-churn-a-case-study-of-vertex-mobile-net-b1069af2923a",
      githubLink:
        "https://github.com/elvisfrimpong-da/vertex-mobile-churn-analysis",
    },
    {
      id: 3,
      title: "Expressmart sales performance dashboard",
      date: "May, 2025",
      description:
        "How I Used Excel to Turn Raw Sales Data into Actionable Business Insights",
      image: "/Image/projects/project3.jpg",
      mediumLink:
        "https://medium.com/@elvisfrimpong.da/how-i-used-excel-to-uncover-sales-insights-at-expressmart-992dda6e867c",
      githubLink: "https://github.com/elvisfrimpong-da/ExpressMart-Sales",
    },
    {
      id: 4,
      title: "Uncovering Trends: A Comprehensive Social Media Data Analysis",
      date: "March, 2025",
      description:
        "Unlocking insights behind the posts — analyzing how social media content performs across top platforms to drive smarter strategy.",
      image: "/Image/projects/project4.jpg",
      mediumLink:
        "https://medium.com/@elvisfrimpong.da/uncovering-what-works-a-deep-dive-into-social-media-performance-with-power-bi-0675e4fbf0b7",
      githubLink:
        "https://github.com/elvisfrimpong-da/social-media-analytics-powerbi",
    },
  ];

  return (
    <section className="bg-[#F5F8E9] py-10">
      <div className="w-[90%] xs:w-[85%] mx-auto rounded-2xl">
        <div className="grid place-content-center">
          <h1 className="text-[22px] xs:text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-center xs:mb-8">
            Projects
          </h1>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xs:gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out group"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-40 xs:h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="py-4 xs:py-5 px-2">
                  <h3 className="text-base xs:text-lg font-semibold text-gray-900 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm xs:text-base line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex mt-4 gap-3">
                    <a
                      href={project.mediumLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 xs:px-4 py-1.5 xs:py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:outline-none transition-colors"
                    >
                      Medium
                      <FaMedium className="text-lg xs:text-xl" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 xs:px-4 py-1.5 xs:py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:outline-none transition-colors"
                    >
                      GitHub
                      <FaGithub className="text-lg xs:text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
