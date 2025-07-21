import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Set initial styles explicitly
    gsap.set([imageRef.current, textRef.current], { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 85%",
        toggleActions: "play none none none", // play once, no reverse
        // markers: true, // uncomment to debug trigger position
      },
    });

    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    ).fromTo(
      textRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
      "-=0.7"
    );
  }, []);

  return (
    <div className="w-[80%] mx-auto p-6 sm:flex justify-center bg-white py-12">
      <img
        ref={imageRef}
        src="/Image/profilepic/1.jpg"
        alt="Profile"
        className="w-74 h-74 object-cover rounded-xl bg-gray-100"
      />
      <div ref={textRef} className="sm:ml-8 pt-4">
        <h1 className="sm:text-4xl text-3xl tracking-tighter font-semibold text-gray-900 mb-4">
          Unleash the power <br className="sm:flex hidden" /> of your next data
          project <br className="sm:flex hidden" /> with precision and insight
        </h1>
        <p className="text-gray-600 mb-6 tracking-tighter">
          Whether you're crafting impactful visualizations, building robust{" "}
          <br />
          analytical models, or driving data-driven decisions,
          <br /> I'm here to help you design solutions with clarity and purpose.
        </p>
        <button className="bg-[#C2DE3A] font-medium cursor-pointer px-6 py-3 rounded-full hover:bg-[#d7e786] transition-colors tracking-tighter">
          <a href="mailto:elvisfrimpong.da@gmail.com">Let's Discuss It</a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
