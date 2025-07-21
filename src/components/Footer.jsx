import React from "react";
import { FaLinkedin, FaGithub, FaMedium, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5" />,
 url: "http://linkedin.com/in/elvisfrimpong",
    },
    {
      name: "Github",
      icon: <FaGithub className="w-5 h-5" />,
     url: "https://github.com/elvisfrimpong-da",
    },
    {
      name: "Medium",
      icon: <FaMedium className="w-5 h-5" />,
      url: "https://medium.com/@elvisfrimpong.da/",
    },
    {
      name: "Whatsapp",
      icon: <FaWhatsapp className="w-5 h-5" />,
      url: "https://wa.me/message/THBQSEUKWX7LI1",
    },
    {
      name: "Mail",
      icon: <FaEnvelope className="w-5 h-5" />,
      url: "mailto:elvisfrimpong@example.com",
    },
  ];

  return (
    <footer id="contact" className="bg-[#1A1A19] text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
         <p className="text-sm text-gray-300 mb-2">
          &copy; 2025 Frimpong Elvis. All rights reserved.
        </p>
        <div className="flex space-x-4">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium tracking-tighter"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;