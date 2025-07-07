import React, { useRef, useState } from "react";
import "./Analysis.css";
import Nav from "../Components/Nav";
import Big_Square from "../Assets/Rectangle 2780.png";
import Medium_Square from "../Assets/Rectangle 2779.png";
import Small_Square from "../Assets/Rectangle 2778.png";
import camera_icon from "../Assets/camera-icon.png";
import gallery_icon from "../Assets/gallery-icon.png";
import line from "../Assets/Group 39690.png";
import { useNavigate } from "react-router-dom";

function Analysis({ convertFileToBase64, loading, preview, uploadImage, error, setPreview }) {
  const galleryInputRef = useRef(null)
  const scanInputRef = useRef(null)
  const navigate = useNavigate()

  const handleGalleryClick = () => {
    galleryInputRef.current.click();
  }
  const handleScanClick = () => {
    scanInputRef.current.click();
  }

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const base64String = await convertFileToBase64(file);
        setPreview(base64String);
      } catch (error) {
        console.error("Error converting file to Base64");
      }
    }
  };

  return (
    <>
      <Nav />
      <div className="analysis__wrapper">
        <div className="page__direction">
          <p>TO START ANALYSIS</p>
        </div>
        <div className="picture__wrapper">
          {loading ? (
            <div className="analysis__loading">
              <div className="loading__wrapper">
                <div className="analysis__loading--title">
                  PREPARING YOUR ANALYSIS...
                </div>
                <div className="dots">
                  <div className="dot1"></div>
                  <div className="dot2"></div>
                  <div className="dot3"></div>
                </div>
              </div>
              <img src={Big_Square} className="big__square--loading" />
              <img src={Medium_Square} className="medium__square--loading" />
              <img src={Small_Square} className="small__square--loading" />
            </div>
          ) : (
            <>
              <div className="scan">
                <img src={Big_Square} className="big__square--analysis" />
                <img src={Medium_Square} className="medium__square--analysis" />
                <img src={Small_Square} className="small__square--analysis" />
                <div className="scan__btn--wrapper">
                  <button className="scan__btn" onClick={handleScanClick}>
                    <img src={camera_icon} />
                    <input type="file" ref={scanInputRef} />
                    <div className="scan__btn--description">
                      <p>
                        ALLOW A.I. <br />
                        TO SCAN YOUR FACE
                      </p>
                      <img src={line} alt="" />
                    </div>
                  </button>
                </div>
              </div>
              <div className="gallery">
                <img src={Big_Square} className="big__square--analysis" />
                <img src={Medium_Square} className="medium__square--analysis" />
                <img src={Small_Square} className="small__square--analysis" />
                <div className="gallery__btn--wrapper">
                  <button className="gallery__btn" onClick={handleGalleryClick}>
                    <img src={gallery_icon} alt="" />
                    <input type="file" ref={galleryInputRef} onChange={handleFileSelect}/>
                    <div className="gallery__btn--description">
                      <p>
                        ALLOW A.I <br />
                        TO ACCESS GALLERY
                      </p>
                      <img src={line} alt="" />
                    </div>
                  </button>
                </div>
              </div>
              <div className="preview">
                <div className="preview__title">Preview</div>
                <div className="preview__picture--box">
                  <img src={preview || null} alt="" className="preview__picture--box-img"/>
                </div>
                <button onClick={() => {
                  uploadImage()
                  if (error === false) {
                    navigate('/results')
                  }
                }}>Confirm</button>
              </div>
            </>
          )}
        </div>
        <div className="intro__btns">
          <a href="/intro">
            <div className="back__btn--small">
              <p>BACK</p>
            </div>
            <div className="back__btn">
              <div className="back__btn--border"></div>
              <div className="back__btn--triangle">▶</div>
              <div className="back__btn--title">BACK</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Analysis;
