import React, { useState } from "react";
import "./Results.css";
import Nav from "../Components/Nav";

import Small_Square from "../Assets/Rectangle 2778.png";

function Results() {
  const [scale, setScale] = useState("");
  const [opacity, setOpacity] = useState("");
  return (
    <>
      <Nav />
      <div className="results">
        <div className="results__title">A.I. ANALYSIS</div>
        <div className="results__description">A.I. HAS ESTIMATED THE FOLLOWING. <br />FIX ESTIMATED INFORMATION IF NEEDED.</div>
      </div>
      <div className="results__options--wrapper">
        <div className="results__options">
          <div className="results__options--rotate">
            <div className="results__upper">
              <div className="results__option upper__option">
                <a href="/">
                  <button
                    className="dark__gray dark__gray--hover scale--hover"
                    onMouseEnter={() => {
                      setScale("1.08");
                    }}
                    onMouseLeave={() => {
                      setScale("0");
                    }}
                  >
                    <span>DEMOGRAPHICS</span>
                  </button>
                </a>
              </div>
              <div className="results__option">
                <a href="/">
                  <button
                    className="light__gray dark__gray--hover no-pointer"
                    onMouseEnter={() => {
                      setScale("1.15");
                      setOpacity("1");
                    }}
                    onMouseLeave={() => {
                      setScale("0");
                      setOpacity("0");
                    }}
                  >
                    <span>
                      COSMETIC <br />
                      CONCERNS
                    </span>
                  </button>
                </a>
              </div>
            </div>
            <div className="results_lower">
              <div className="results__option upper__option">
                <a href="/">
                  <button
                    className="light__gray dark__gray--hover no-pointer"
                    onMouseEnter={() => {
                      setScale("1.15");
                      setOpacity("0");
                    }}
                    onMouseLeave={() => {
                      setScale("0");
                      setOpacity("0");
                    }}
                  >
                    <span>SKIN TYPE DETAILS</span>
                  </button>
                </a>
              </div>
              <div className="results__option">
                <a href="/">
                  <button
                    className="light__gray dark__gray--hover no-pointer"
                    onMouseEnter={() => {
                      setScale("1.2");
                      setOpacity("0");
                    }}
                    onMouseLeave={() => {
                      setScale("0");
                      setOpacity("0");
                    }}
                  >
                    <span>WEATHER</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          src={Small_Square}
          className="small__square--results"
          style={{
            scale: scale,
          }}
        />
      </div>
      <div className="intro__btns">
        <a href="/analysis">
          <div className="back__btn--small">
            <p>BACK</p>
          </div>
          <div className="back__btn">
            <div className="back__btn--border"></div>
            <div className="back__btn--triangle">▶</div>
            <div className="back__btn--title">BACK</div>
          </div>
        </a>
        <a href="/analysis" className="proceed__btn">
          <div className="proceed__btn--title">Get Summary</div>
          <div className="proceed__btn--border"></div>
          <div className="proceed__btn--triangle">▶</div>
        </a>
      </div>
    </>
  );
}

export default Results;
