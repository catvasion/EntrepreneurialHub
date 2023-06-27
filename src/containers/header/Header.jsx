import React from "react";
import "./header.css";
import lotr from "../../assets/lotr-pixel.png";
import gandalf_computer from "../../assets/gandalf_computer.png";
const Header = () => {
  return (
    <div className="company__header section__padding" id="home">
      <div className="company__header-content">
        <h1 className="gradient__text">
          Welcome to Middle-earth's Entrepreneurial Hub
        </h1>
        <p>Embark on an Entrepreneurial Adventure in Middle-earth</p>
        <div className="company__header-content__input">
          <input type="email" placeholder="Your Email Address"></input>
          <button type="button">Get Started</button>
        </div>
        <div className="company__header-content__people">
          <img src={lotr} alt="people" />
          <p>Join our Thriving Community!</p>
        </div>
      </div>
      <div className="company__header-image">
        <img src={gandalf_computer} alt="gandalf" />
      </div>
    </div>
  );
};
export default Header;
