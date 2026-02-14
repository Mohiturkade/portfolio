import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import Moon from "../../assets/moon.png";
import RightUp from "../../assets/right-up.png";
import "./Navbar.css";
import Download from "../../assets/downlaod.png";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <nav className={`navbar ${isScroll ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={Logo} alt="mohit-logo" />
      </div>

      <div className="nav-middle">
        <ul className="nav-links">
          <li>HOME</li>
          <li>ABOUT ME</li>
          <li>SKILLS</li>
          <li>PROJECTS</li>
          <li>CONTACT ME</li>
        </ul>
      </div>

      <div className="nav-right">
        <button>
          <img src={Moon} alt="" />
        </button>

        <a href="\Mohit-Urkade-Resume.pdf" download>
          RESUME
          <img src={Download} alt="" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
