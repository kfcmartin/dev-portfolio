import React, { useEffect, useRef } from "react";
import "./App.css";
import background from "./assets/background.png";
import largeKeys from "./assets/large-keys.png";
import smallKeys from "./assets/small-keys.png";
import scrollDown from "./assets/scroll-down.png";
import Header from "./Header";
import Parallax from "parallax-js";

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

  return (
    <div className="relative bg-customGray min-h-screen">
      {" "}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          opacity: 0.38,
          zIndex: 0,
        }}
      />
      <Header />
      <div
        ref={sceneEl}
        className="flex items-center justify-center relative h-screen px-3 -mt-20 overflow-hidden"
      >
        <img
          src={largeKeys}
          alt=""
          data-depth="0.80"
          className="absolute inset-0 w-full h-full object-contain top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <img
          src={smallKeys}
          alt=""
          data-depth="0.40"
          className="absolute inset-0 w-full h-full object-contain top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[65px] font-rubik font-bold text-customTeal">
            👋 Hi, I'm Keith 👋
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-rubik text-customTealLight mt-1">
            &lt;Junior Developer/&gt;
          </h2>
        </div>
        <img
          src={scrollDown}
          alt=""
          className="w-[5vw] absolute bottom-10 sm:relative sm:top-[3vw]"
        />
      </div>
    </div>
  );
}

export default App;
