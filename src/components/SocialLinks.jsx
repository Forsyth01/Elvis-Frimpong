import React from 'react';
import { FaLinkedin, FaGithub, FaMedium, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const SocialLinks = () => {
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
      url: "mailto:elvisfrimpong.da@gmail.com"
    },
  ];
  return (
    <div>
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
  );
};

export default SocialLinks;