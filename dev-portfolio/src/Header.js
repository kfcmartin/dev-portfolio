import React from "react";

function Header() {
  return (
    <header className="flex sticky top-0 justify-between items-center pt-9 px-14 z-20 relative">
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-satisfy text-customTeal">
        <a href="/">K</a>
      </div>

      <nav className="space-x-16 font-rubik font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-customTeal">
        <a href="#about" className="hover:text-customTealDark">
          About
        </a>
        <a href="#projects" className="hover:text-customTealDark">
          Projects
        </a>
        <a href="#skills" className="hover:text-customTealDark">
          Skills
        </a>
        <a href="#contact" className="hover:text-customTealDark">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
