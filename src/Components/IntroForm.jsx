import React, { useEffect, useState } from "react";
import "./IntroForm.css";
import Big_Square from "../Assets/Rectangle 2780.png";
import Medium_Square from "../Assets/Rectangle 2779.png";
import Small_Square from "../Assets/Rectangle 2778.png";

function IntroForm() {
  const [userName, setUserName] = useState("");
  const [location, setLocation] = useState("");
  const [formState, setFormState] = useState("name");

    useEffect(() => {
        console.log(userName)
    }, [userName])

  return (
    <div className="intro__main">
      <div className="intro__heading">
        <p>TO START ANALYSIS</p>
      </div>
      <div className="intro__forms">
        <p>CLICK TO TYPE</p>
        <form>
          {formState === "location" && (
            <input
              type="text"
              autoComplete="off"
              placeholder="your city name"
              onKeyUp={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  setLocation(event.target.value);
                  setFormState("loading");
                }
              }}
            />
          )}
          {formState === "name" && (
            <input
              type="text"
              autoComplete="off"
              placeholder="Introduce Yourself"
              onKeyUp={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  setUserName(event.target.value);
                  setFormState("location");
                }
              }}
            />
          )}

          <button type="submit">Submit</button>
        </form>
        <img src={Big_Square} alt="" className="big__square" />
        <img src={Medium_Square} alt="" className="medium__square" />
        <img src={Small_Square} alt="" className="small__square" />
      </div>
      <div className="intro__btns">
        <a href="/">
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
          <div className="proceed__btn--title">PROCEED</div>
          <div className="proceed__btn--border"></div>
          <div className="proceed__btn--triangle">▶</div>
        </a>
      </div>
    </div>
  );
}

export default IntroForm;
