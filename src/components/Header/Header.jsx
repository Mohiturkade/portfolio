import React from "react";
import ProfilePic from "../../assets/profilepic.JPG";
import "./Header.css";
import RightArrow from "../../assets/right-up.png";

const Header = () => {
  return (
    <div className="header" id="home">
      <img src={ProfilePic} alt="profile-pic" />
      <h2>Hi! I'm Mohit Urkade</h2>
      <h1>Frontend web developer</h1>
      {/* <h1>based in india</h1> */}
      <p>
        A creative Frontend Developer who loves building sleek, high-performance web applications. Fueled by curiosity and innovation, I turn ideas into seamless digital experiences using modern web technologies.
      </p>
      <p></p>

      <div className="buttons">
        <button> View My Work </button>
        <button>
          Let's Connect <img src={RightArrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;

