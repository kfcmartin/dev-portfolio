import React, { useEffect, useRef, useState } from "react";
import hamburger from "./assets/hamburger.png";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const NavTile = ({ href, label, onClick }) => (
  <div className="w-full text-center">
    <a
      href={href}
      className="block w-full px-4 py-2 hover:bg-customTealLight hover:text-white transition-colors duration-300"
      onClick={onClick}
    >
      {label}
    </a>
  </div>
);

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        (event.type === "mousedown" ? event.button === 0 : true)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex sticky top-0 justify-between items-center py-3 px-10 z-20 relative">
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-satisfy text-customTeal">
        <a href="/">K</a>
      </div>

      <button
        className="sm:hidden"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <img src={hamburger} alt="Menu" className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={dropdownRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden space-y-4 font-rubik font-semibold text-sm text-customTeal rounded
              absolute top-full left-1/2 transform -translate-x-1/2 w-[75%] bg-white flex flex-col items-center mt-4 z-10"
            style={{ overflow: "hidden" }}
          >
            {navLinks.map((link) => (
              <NavTile
                key={link.href}
                href={link.href}
                label={link.label}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <nav className="hidden sm:flex sm:space-x-16 font-rubik font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-customTeal">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-customTealDark"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
