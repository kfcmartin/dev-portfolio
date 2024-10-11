import "./App.css";
import background from "./assets/background.png";
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

      <Header />

      <h1 className="relative z-10 text-center text-white">My Portfolio</h1>
    </div>
  );
}

export default App;
