import React, { useState } from "react";
import "./Demographics.css";
import Nav from "../Components/Nav";
import radio_button from "../Assets/radio-button.png";
import radio_button_black from "../Assets/radio-button (1).png";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Demographics({ demoData }) {
  const [percent, setPercent] = useState("33");
  console.log(demoData)
  return (
    <>
      <Nav />
      <div className="demo">
        <div className="demo__wrapper">
          <div className="demo__title">
            <div className="demo__title--heading">A.I. ANALYSIS</div>
            <div className="demo__title--title">DEMOGRAPHICS</div>
            <div className="demo__title--description">PREDICTED RACE & AGE</div>
          </div>
          <div className="demo__results">
            <div className="demo__correct--details">
              <div className="demo__correct--detail">
                <div className="demo__set--detail">Southeast asian</div>
                <div className="demo__detail--title">RACE</div>
              </div>
              <div className="demo__correct--detail">
                <div className="demo__set--detail">50-59</div>
                <div className="demo__detail--title">AGE</div>
              </div>
              <div className="demo__correct--detail">
                <div className="demo__set--detail">FEMALE</div>
                <div className="demo__detail--title">SEX</div>
              </div>
            </div>
            <div className="demo__displayed">
              <div className="demo__displayed--title">Southeast asian</div>
              <div className="demo__displayed--percent-wrapper">
                <div className="demo__displayed--percent">
                  <CircularProgressbar
                    value={percent}
                    text={`${percent}%`}
                    strokeWidth={1}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      textSize: "10px",
                      pathTransitionDuration: 0.5,
                      pathColor: "#1a1b1c",
                      textColor: "#1a1b1c",
                    })}
                  />
                </div>
              </div>
              <div className="demo__estimate--wrong">If A.I. estimate is wrong, select the correct one.</div>
            </div>
            <div className="demo__confidence">
              <div className="demo__confidence--title">
                <div className="demo__confidence--title-demo">RACE</div>
                <div className="demo__confidence--title-confidence">
                  A.I. CONFIDENCE
                </div>
              </div>
              
              <div className="demo__confidence--options">
                <div className="demo__confidence--option">
                  <div className="demo__confidence--option-left">
                    <img src={radio_button_black} alt="" />
                    <div className="demo__confidence--option-title">
                      Southeast Asian
                    </div>
                  </div>
                  <div className="demo__confidence--option-right">33%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="demo__btns">
            <a href="/results">
              <div className="back__btn--small">
                <p>BACK</p>
              </div>
              <div className="back__btn">
                <div className="back__btn--border"></div>
                <div className="back__btn--triangle">▶</div>
                <div className="back__btn--title">BACK</div>
              </div>
            </a>
            <a href="/" className="home__btn">
              <div className="proceed__btn--title">HOME</div>
              <div className="proceed__btn--border"></div>
              <div className="proceed__btn--triangle">▶</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Demographics;
