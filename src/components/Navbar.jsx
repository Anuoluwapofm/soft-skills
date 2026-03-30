import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // CHANGE: hrefs now use '#' to target IDs on the same page
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-6 md:px-10 py-4 flex justify-between items-center ${
          isScrolled || isMenuOpen
            ? "bg-white shadow-md border-b border-slate-100"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-11 md:h-11">
            <div className="absolute inset-0 rounded-full border-2 border-blue-600 z-10"></div>
            <div className="absolute inset-[2px] rounded-full overflow-hidden bg-slate-200 z-20">
              <img
                src="images/hero_image.png"
                alt="Mercy Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter">
            Mercy<span className="text-blue-600 ml-0.5">.</span>
          </div>
        </div>

        {/* Desktop Links - No Reloading */}
        <div className="hidden md:flex gap-10 text-slate-700 font-bold text-base">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 transition-all border-b-2 border-transparent hover:border-blue-600 pb-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-slate-900 p-2 rounded-lg bg-slate-100/50 backdrop-blur-sm z-[110]"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      <div
        className={`fixed inset-0 z-[90] bg-white transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
