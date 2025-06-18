import React from "react";
import "./Nav.css";
import left_bracket from "../Assets/Rectangle 2710.png";
import right_bracket from "../Assets/Rectangle 2711.png";

function Nav() {
  return (
    <div className="nav__row">
      <div className="nav__logo">
        <a href="/" className="logo__btn">
          SKINSTRIC
        </a>
        <div className="intro__wrapper">
          <img src={left_bracket} alt="" className="bracket" />
          <p>INTRO</p>
          <img src={right_bracket} alt="" className="bracket" />
        </div>
      </div>
      <button className="nav__btn">
        ENTER CODE
      </button>
    </div>
  );
}

export default Nav;
