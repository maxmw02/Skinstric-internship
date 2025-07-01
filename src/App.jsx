import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Intro from "./Pages/Intro";
import Analysis from "./Pages/Analysis";
import Results from "./Pages/Results";
AOS.init();

AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 120,
  delay: 0,
  duration: 400,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/intro" element={<Intro/>} />
          <Route path="/analysis" element={<Analysis/>} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
