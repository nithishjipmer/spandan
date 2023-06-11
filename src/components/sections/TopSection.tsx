import React from "react";
import { Carousel } from "antd";
import "../css/TopSection.css";
import "../css/bganimation.scss";

class TopSection extends React.Component {
  render() {
    return (
      <Carousel autoplay>
        <div className="hero">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="header" />
          <div className="Image">
            <img
              className="infin8-logo"
              src={"../assets/infin8logofrowebsite.png"}
              alt=""
            />
          </div>
          <div className="wrapper">
            <div className="letters">
              <span className="letter">c</span>
              <span className="letter">u</span>
              <span className="letter">l</span>
              <span className="letter">t</span>
              <span className="letter">u</span>
              <span className="letter">r</span>
              <span className="letter">a</span>
              <span className="letter">l</span>
              <span className="letter"> </span>
              <span className="letter">f</span>
              <span className="letter">e</span>
              <span className="letter">s</span>
              <span className="letter">t</span>
              <span className="letter"> </span>
              <span className="letter">o</span>
              <span className="letter">f</span>
              <span className="letter"> </span>
              <span className="letter">i</span>
              <span className="letter">i</span>
              <span className="letter">i</span>
              <span className="letter">t</span>
              <span className="letter"> </span>
              <span className="letter">b</span>
              <span className="letter">a</span>
              <span className="letter">n</span>
              <span className="letter">g</span>
              <span className="letter">a</span>
              <span className="letter">l</span>
              <span className="letter">o</span>
              <span className="letter">r</span>
              <span className="letter">e</span>
            </div>
          </div>
          <div className="space"></div>
          <div className="wrapper2">
            <div className="numbers"> </div>
            <span className="letter">8</span>
            <span className="letter">F</span>
            <span className="letter">E</span>
            <span className="letter">B</span>
            <span className="letter">-</span>
            <span className="letter">2</span>
            <span className="letter">0</span>
            <span className="letter">2</span>
            <span className="letter">0</span>
            <br />
          </div>
          <div className="wrapper3">
            <div className="numbers"></div>
            <span className="letter">9</span>
            <span className="letter">F</span>
            <span className="letter">E</span>
            <span className="letter">B</span>
            <span className="letter">-</span>
            <span className="letter">2</span>
            <span className="letter">0</span>
            <span className="letter">2</span>
            <span className="letter">0</span>
            <br />
          </div>
        </div>
      </Carousel>
    );
  }
}

export default TopSection;
