import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(window.location.hash || "#");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    // { href: '#testimonial', label: 'Testimonial' },
    // { href: '#resume', label: 'Resume' },
  ];

  return (
    <nav className="fixed w-full z-10 top-0 bg-[#F5F8E9 backdrop-blur-sm">
      <div className="pt-4">
        <div className="container w-[90%] xs:w-[85%] sm:w-[70%] lg:w-[50%] mx-auto grid place-items-center">
          <div className="bg-[#C2DE3A] rounded-full px-4 xs:py-3 md:py-2 xl:py-3">
            <ul className="flex items-center gap-2 ">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block px-2 xs:px-3 py-1 text-sm xs:text-base font-medium tracking-tight transition-colors duration-200 ${
                      activeLink === link.href
                        ? "text-white bg-black/20 rounded-full"
                        : "text-gray-900 hover:text-white "
                    } `}
                    onClick={() => setActiveLink(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/Elvis_Frimpong_CV.pdf"
                  download="Elvis_Frimpong_CV.pdf"
                  className={`block px-4 xs:px-6 py-1.5 xs:py-2 text-sm xs:text-base font-medium tracking-tight transition-colors duration-200 ${
                    activeLink === "#resume"
                      ? "text-white bg-black/20 rounded-full"
                      : "bg-white text-gray-900 rounded-full hover:bg-gray-100"
                  } focus:ring-2 focus:ring-[#C2DE3A] focus:outline-none`}
                  onClick={() => setActiveLink("#resume")}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
