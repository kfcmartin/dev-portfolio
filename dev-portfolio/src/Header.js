import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const NavTile = ({ href, label, index, onClick }) => (
  <motion.div
    className="w-full text-end"
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 100, opacity: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <a
      href={href}
      className="block w-full px-4 hover:bg-customTealLight hover:text-white transition-colors duration-300"
      onClick={onClick}
    >
      {label}
    </a>
  </motion.div>
);

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const containerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
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
    <header className="flex sticky top-0 justify-between items-center pt-4 px-10 z-20 relative">
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-srisakdi font-bold text-customTeal">
        <a href="/">K</a>
      </div>

      <div ref={containerRef} className="relative">
        <motion.button
          className="sm:hidden relative h-6 w-5"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          animate={isOpen ? "open" : "closed"}
        >
          <motion.span
            style={{
              left: "50%",
              top: "25%",
              x: "-50%",
              y: "-50%",
            }}
            className="absolute h-0.5 w-4 bg-customTeal"
            initial={{ rotate: 0 }}
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            style={{
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
            }}
            className="absolute h-0.5 w-4 bg-customTeal"
            initial={{ opacity: 1 }}
            animate={isOpen ? { opacity: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            style={{
              left: "50%",
              bottom: "15%",
              x: "-50%",
              y: "-50%",
            }}
            className="absolute h-0.5 w-4 bg-customTeal"
            initial={{ rotate: 0 }}
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              ref={dropdownRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden font-rubik font-semibold text-xl text-customTeal rounded
          absolute top-full right-0 w-[calc(100vw-2.5rem)] max-w-[120px] bg-white flex flex-col items-end mt-4 z-10"
              style={{ overflow: "hidden" }}
              onAnimationComplete={(definition) => {
                if (definition === "exit") {
                  setIsOpen(false);
                }
              }}
            >
              {navLinks.map((link, index) => (
                <NavTile
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  index={index}
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

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
