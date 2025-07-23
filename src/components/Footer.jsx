import React from "react";
import SocialLinks from "./SocialLinks";


const Footer = () => {
  

  return (
    <footer id="contact" className="bg-[#1A1A19] text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
         <p className="text-sm text-gray-300 mb-2">
          &copy; 2025 Frimpong Elvis. All rights reserved.
        </p>
        <SocialLinks/>
      </div>
    </footer>
  );
};

export default Footer;