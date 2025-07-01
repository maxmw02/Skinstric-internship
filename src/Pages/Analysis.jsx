import React, { useState } from "react";
import "./Analysis.css";
import Nav from "../Components/Nav";
import Big_Square from "../Assets/Rectangle 2780.png";
import Medium_Square from "../Assets/Rectangle 2779.png";
import Small_Square from "../Assets/Rectangle 2778.png";
import camera_icon from "../Assets/camera-icon.png";
import gallery_icon from "../Assets/gallery-icon.png";
import line from "../Assets/Group 39690.png";

function Analysis() {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("")
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
                <div className="analysis__loading--title">PREPARING YOUR ANALYSIS...</div>
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
                  <div className="scan__btn">
                    <img src={camera_icon} />
                  </div>
                  <div className="scan__btn--description">
                    <p>
                      ALLOW A.I. <br />
                      TO SCAN YOUR FACE
                    </p>
                    <img src={line} alt="" />
                  </div>
                </div>
              </div>
              <div className="gallery">
                <img src={Big_Square} className="big__square--analysis" />
                <img src={Medium_Square} className="medium__square--analysis" />
                <img src={Small_Square} className="small__square--analysis" />
                <div className="gallery__btn--wrapper">
                  <div className="gallery__btn">
                    <img src={gallery_icon} alt="" />
                  </div>
                  <div className="gallery__btn--description">
                    <p>
                      ALLOW A.I <br />
                      TO ACCESS GALLERY
                    </p>
                    <img src={line} alt="" />
                  </div>
                </div>
              </div>
              <div className="preview">
                <div className="preview__title">Preview</div>
                <div className="preview__picture--box">
                    <img src={preview} alt="" />
                </div>
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
