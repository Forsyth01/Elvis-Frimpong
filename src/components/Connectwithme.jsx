import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Connectwithme = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "/Image/socialicons/linkedin1.png",
      url: "http://linkedin.com/in/elvisfrimpong",
    },
    {
      name: "Github",
      icon: "/Image/socialicons/git.png",
      url: "https://github.com/elvisfrimpong-da",
    },
    {
      name: "Medium",
      icon: "/Image/socialicons/medium.png",
      url: "https://medium.com/@elvisfrimpong.da/",
    },
    {
      name: "Whatsapp",
      icon: "/Image/socialicons/whatsapp.png",
      url: "https://wa.me/message/THBQSEUKWX7LI1",
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

    itemsRef.current.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: i * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef}>
      <div>
        <h2 className="text-3xl tracking-tighter font-semibold text-gray-800 mb-4 my-4">
          <span className="tracking-tighter font-normal">Connect</span> <br />{" "}
          With Me
        </h2>
        <div className="space-y-4 pt-4 text-xl">
          {socialLinks.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="flex items-center space-y-1.5"
            >
              <img src={item.icon} alt={item.name} className="w-8 h-7 mr-2" />
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 font-medium tracking-tighter"
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-[#F6F6F3] p-4 rounded-lg">
          <p className="text-gray-600">Let's talk about your Project</p>
          <p className="text-gray-800">
            Drop me a mail -{" "}
            <span className="font-medium tracking-tighter cursor-pointer">
              <a href="mailto:elvisfrimpong.da@gmail.com" className="">
                elvisfrimpong.da@gmail.com
              </a>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Connectwithme;
