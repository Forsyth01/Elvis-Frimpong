import React, { useState, useEffect } from "react";

const MobileNavbar = () => {
  const [activeLink, setActiveLink] = useState(window.location.hash || "#");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#");
      setIsOpen(false); // Close menu on hash change
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full md:shadow z-10 top-0 py-4 sm:py-0 backdrop-blur-sm">
      <div className="py-4 relative">
        {/* Toggle Button for Mobile */}
        <button
          className="md:hidden absolute top-1 right-6 text-gray-900 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "translate-x-0 " : "translate-x-full"
          } fixed top-0 right-0 h-full w-64 bg-[#F5F8E9] shadow-lg md:hidden transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col items-start p-6 bg-[#daddcf] rounded-bl-4xl">
            <button
              className="self-end mb-4 text-gray-900"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <ul className="flex flex-col gap-4 w-full">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block px-4 py-2 text-base font-medium tracking-tight transition-colors duration-200 ${
                      activeLink === link.href
                        ? "text-white bg-black/20 rounded-full"
                        : "text-gray-900 hover:text-white hover:bg-black/10 rounded-full"
                    }`}
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
                  className={`block px-4 py-2 text-base font-medium tracking-tight transition-colors duration-200 ${
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

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <div className="container w-[90%] xs:w-[85%] sm:w-[70%] lg:w-[50%] mx-auto grid place-items-center">
            <div className="bg-[#C2DE3A] rounded-full px-4 py-2">
              <ul className="flex items-center gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`block px-3 py-1 text-base font-medium tracking-tight transition-colors duration-200 ${
                        activeLink === link.href
                          ? "text-white bg-black/20 rounded-full"
                          : "text-gray-900 hover:text-white"
                      }`}
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
                    className={`block px-6 py-2 text-base font-medium tracking-tight transition-colors duration-200 ${
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
      </div>
    </nav>
  );
};

export default MobileNavbar;