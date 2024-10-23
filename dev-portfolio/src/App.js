import React, { useEffect, useRef } from "react";
import "./App.css";
import keys from "./assets/keys.png";
import Header from "./Header";
import About from "./pages/About";
import Parallax from "parallax-js";
import { motion } from "framer-motion";

function App() {
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      hoverOnly: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  const floatingAnimation = {
    y: ["0%", "1%", "0%"],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  return (
    <div className="parent relative min-h-screen">
      <Header />
      <div
        ref={sceneEl}
        className="flex items-center justify-center relative h-screen px-3 overflow-hidden -mt-8"
      >
        <div data-depth="0.30" className="absolute inset-0 w-full h-full">
          <motion.img
            src={keys}
            alt="Background Keys"
            className="w-full h-full object-contain top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={floatingAnimation}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-screen absolute inset-0 z-10 sm:-mt-2">
        <div className="text-center">
          <h1 className="text-[5vw] sm:text-[4vw] font-rubik font-semibold leading-none text-customTeal">
            Hi, I'm Keith 👋
          </h1>
          <div className="bg-customTeal rounded-full sm:mt-2">
            <h2 className="mt-2 text-[3vw] sm:text-[2vw] font-rubik text-white">
              &lt; Junior Developer &gt;
            </h2>
          </div>
        </div>
        <div className="mouse absolute bottom-12 w-[30px] h-[54px] border-4 border-customTeal rounded-full">
          <div className="mouse-wheel"></div>
        </div>
      </div>

      <div className="flex justify-center relative w-full pt-20">
        <div className="w-[70%] max-w-5xl">
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
