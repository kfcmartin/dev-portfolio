import React, { useEffect, useRef } from "react";
import "./App.css";
import background from "./assets/background.png";
import largeKeys from "./assets/large-keys.png";
import smallKeys from "./assets/small-keys.png";
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
      ></div>
      <Header />
      <div
        id="scene"
        ref={sceneEl}
        className="parent h-screen"
        style={{ maxWidth: "100vw" }}
      >
        <img
          data-depth="0.80"
          src={largeKeys}
          alt="Large Keys"
          className="item1 w-auto h-auto"
          style={{
            maxWidth: "85%",
            maxHeight: "100%",
            position: "absolute",
          }}
        />

        <img
          data-depth="0.40"
          src={smallKeys}
          alt="Small Keys"
          className="w-auto h-auto"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[65px] font-rubik font-bold text-customTeal">
            👋 Hi, I'm Keith 👋
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-rubik text-customTealLight mt-1">
            &lt;Junior Developer/&gt;
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
