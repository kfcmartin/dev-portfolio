import "./App.css";
import background from "./assets/background.png";
import largeKeys from "./assets/large-keys.png";
import smallKeys from "./assets/small-keys.png";
import Header from "./Header";

function App() {
  return (
    <div className="relative bg-customGray min-h-screen">
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

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${largeKeys})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "85%",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      ></div>

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${smallKeys})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "85%",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      ></div>

      <Header />

      <div className="flex items-center justify-center flex-col min-h-screen relative z-10">
        <h1 className="-mt-32 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[65px] font-rubik font-bold text-customTeal">
          👋 Hi, I'm Keith 👋
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-rubik text-customTealLight mt-1">
          Junior Developer
        </h2>
      </div>
    </div>
  );
}

export default App;
