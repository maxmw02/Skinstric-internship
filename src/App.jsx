import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Intro from "./Pages/Intro";
import Analysis from "./Pages/Analysis";
import Results from "./Pages/Results";
import Demographics from "./Pages/Demographics";
import { useRef, useState } from "react";
import axios from "axios";
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
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState("");
    const [demoData, setDemoData] = useState({})

    const base64 = preview.split(",")[1];
    const navigate = useNavigate()
  
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };



  const uploadImage = async () => {
    setLoading(true)
    try {
      const { data } = await axios.post(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",

        { image: base64 }, 

        { headers: { "Content-Type": "application/json" } }
      );

      setDemoData(data.data)
      window.alert('Image analyzed successfully!')
      navigate("/results")
    } catch (error) {
      setDemoData([])
      console.error(error);
    }
    setLoading(false)
  };

  return (
    <div className="App">
   
        <Routes>
          <Route index element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route
            path="/analysis"
            element={
              <Analysis
                convertFileToBase64={convertFileToBase64}
                setPreview={setPreview}
            
                preview={preview}
                loading={loading}
                uploadImage={uploadImage}
              />
            }
          />
          <Route path="/results" element={<Results />} />
          <Route
            path="/demographics"
            element={<Demographics demoData={demoData} />}
          />
        </Routes>

    </div>
  );
}

export default App;
