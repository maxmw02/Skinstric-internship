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
    localStorage.setItem("name", userName);
    localStorage.setItem("location", location);
  }, [userName, location]);

  return (
    <div className="intro__main">
      <div className="intro__heading">
        <p>TO START ANALYSIS</p>
      </div>
      <div className="intro__forms">
        {formState === "location" && (
          <>
            <p>CLICK TO TYPE</p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
                <div className="error__wrapper">
                    <p>Please enter a valid city without numbers or special characters</p>
                </div>
              <input
                type="text"
                autoComplete="off"
                placeholder="your city name"
                onKeyUp={(event) => {
                  if (event.key === "Enter") {
                    setLocation(event.target.value);
                    setFormState("loading");
                  }
                }}
              />
              <button type="submit">Submit</button>
            </form>
          </>
        )}
        {formState === "name" && (
          <>
            <p>CLICK TO TYPE</p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <input
                type="text"
                autoComplete="off"
                placeholder="Introduce Yourself"
                onKeyUp={(event) => {
                  if (event.key === "Enter") {
                    setUserName(event.target.value);
                    setFormState("location");
                  }
                }}
              />
              <button type="submit">Submit</button>
            </form>
          </>
        )}
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
