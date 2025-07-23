import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Certs = () => {
  const certs = [
    {
      title: "Google Data Analytics Certificate",
      id: 1,
      description: "Professional Certificate in Google Data Analytics",
      date: "March, 2025",
      image:
        "/Image/certs/Google_Data_Analytics_Certificate_Elvis_Frimpong_2024.png",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/68RD4F5WT7WC",
    },
    {
      title: "IBM Data Engineering Certificate",
      id: 2,
      description: "Certificate in Introduction to Data Engineering",
      date: "July, 2024",
      image:
        "/Image/certs/IBM_Data_Engineering_Certificate_Elvis_Frimpong_2023.png",
      link: "https://www.coursera.org/account/accomplishments/certificate/6A6D7HADZYZS",
    },
    {
      title: "Google Cybersecurity Certificate",
      id: 3,
      description: "Professional Certificate in Google Cybersecurity",
      date: "May, 2025",
      image:
        "/Image/certs/Google_Cybersecurity_Certificate_Elvis_Frimpong_2023.png",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/LZJWPQZX8R2F",
    },
    {
      id: 4,
      title: "Google Project Management Certificate",
      description: "Certificate in Foundations of Project Management",
      date: "March, 2025",
      image:
        "/Image/certs/Google_Project_Management_Certificate_Elvis_Frimpong_2023.png",
      link: "https://www.coursera.org/account/accomplishments/verify/QKKLZ2UENMU5",
    },
    {
      id: 5,
      title: "Alx Data Analytics Certificate",
      description:
        "Certificate of Completion in Data Analytics with Professional Development Skills for the Digital Age",
      date: "March, 2025",
      image:
        "/Image/certs/Alx_Data_Analytics_Certificate_Elvis_Frimpong_2025.png",
      link: "https://savanna.alxafrica.com/certificates/feHBy2YSPr",
    },
    {
      id: 6,
      title: "Tata Data Visualization Certificate",
      description:
        "Certificate in Data Visualization: Empowering Business with Effective Insights",
      date: "March, 2025",
      image:
        "/Image/certs/Tata_Data_Visualization_Certificate_Elvis_Frimpong_2025.png",
      // link: "https://medium.com/your-medium-post-6",
    },
  ];

  const [modalImage, setModalImage] = useState(null);
  const cardsRef = useRef([]);

  const closeModal = () => setModalImage(null);

  useEffect(() => {
    if (modalImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalImage]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-[#F5F8E9]">
      <div className="w-[80%] m-auto sm:p-10 pb-10 my-10 bg-[#F5F8E9] rounded-2xl">
        <div className="grid place-content-center">
          <h1 className="sm:text-3xl text-[28px] tracking-tighter font-semibold  text-center sm:mb-10 py-8 sm:py-0 underline underline-offset-2">
            Certifications
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 space-y-4 sm:space-y-0">
            {certs.map((cert, index) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover cursor-zoom-in"
                    onClick={() => setModalImage(cert.image)}
                  />
                </div>
                <div className="p-4 tracking-tighter">
                  <p className="text-gray-600 mt-2 text-sm cursor-pointer">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <p className="font-semibold text-[16px]">{cert.title}</p>
                      <p className="underline underline-offset-2 text-gray-500">
                        {cert.description}
                      </p>
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {modalImage && (
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xs flex items-center justify-center z-50 cursor-pointer"
          >
            <img
              src={modalImage}
              alt="Certificate"
              className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg cursor-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Certs;
