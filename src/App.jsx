import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Intro from "./Pages/Intro";
import Analysis from "./Pages/Analysis";
import Results from "./Pages/Results";
import Demographics from "./Pages/Demographics";
import { useState } from "react";
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
    const base64 = preview.split(",")[1];

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const base64String = await convertFileToBase64(file);
        setPreview(base64String);
        uploadImage()
      } catch (error) {
        console.error("Error converting file to Base64");
      }
    }
  };

  const uploadImage = async () => {
    try {
      const response = await axios.post(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo", {
          ImageData: base64
        }, {
          headers: {
            'Content-Type' : 'multipart/form-data'
          }
        }
      );
      console.log('Image upload success', response.data)
    } catch (error) {
      console.error('Error uploading image', error)
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/intro" element={<Intro/>} />
          <Route path="/analysis" element={<Analysis handleFileSelect={handleFileSelect} preview={preview} loading={loading} uploadImage={uploadImage}/>} />
          <Route path="/results" element={<Results />} />
          <Route path="/demographics" element={<Demographics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
