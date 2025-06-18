import React, { useState } from "react";
import "./Landing.css";

function Landing() {
  const [discoverHover, setDiscoverHover] = useState(false);
  const [testHover, setTestHover] = useState(false);
  const [upperHoverDirection, setUpperHoverDirection] = useState("");
  const [lowerHoverDirection, setLowerHoverDirection] = useState("");

  return (
    <div className="landing__main">
      <div className="landing__heading">
        <h1
          data-aos="fade-in"
          data-aos-duration="3000"
          data-aos-delay="300"
          style={{
            transform: upperHoverDirection,
          }}
        >
          Sophisticated
        </h1>
        <h1
          data-aos="fade-in"
          data-aos-duration="3000"
          data-aos-delay="300"
          style={{
            transform: lowerHoverDirection,
          }}
        >
          skincare
        </h1>
        <div className="ai__description">
          SKINSTRIC DEVELOPED AN A.I. THAT CREATES A
          <br />
          HIGHLY-PERSONALIZED ROUTINE TAILORED TO
          <br />
          WHAT YOUR SKIN NEEDS.
        </div>
        <div
          className="left__section"
          style={{ opacity: testHover ? "0" : "1" }}
        >
          <div className="section__wrapper">
            <div className="section__border"></div>
            <button
              id="discover__btn"
              onMouseEnter={() => {
                setDiscoverHover(true);
                setUpperHoverDirection("translateX(320px)");
                setLowerHoverDirection("translateX(420px)");
              }}
              onMouseLeave={() => {
                setDiscoverHover(false);
                setUpperHoverDirection("");
                setLowerHoverDirection("");
              }}
            >
              <div className="left__btn--border"></div>
              <span className="left__triangle">▶</span>
              <span className="left__btn--name">DISCOVER A.I.</span>
            </button>
          </div>
        </div>
        <div
          className="right__section"
          style={{ opacity: discoverHover ? "0" : "1" }}
        >
          <div className="section__wrapper">
            <div className="section__border"></div>
            <button
              id="test__btn"
              onMouseEnter={() => {
                setTestHover(true);
                setUpperHoverDirection("translateX(-320px)");
                setLowerHoverDirection("translateX(-420px)");
              }}
              onMouseLeave={() => {
                setTestHover(false);
                setUpperHoverDirection("");
                setLowerHoverDirection("");
              }}
            >
              <span className="right__btn--name">TAKE TEST</span>
              <div className="right__btn--border"></div>
              <span className="right__triangle">▶</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
