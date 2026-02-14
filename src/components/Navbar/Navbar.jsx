import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import Moon from "../../assets/moon.png";
import RightUp from "../../assets/right-up.png";
import "./Navbar.css";
import Download from "../../assets/downlaod.png";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

   const handleClick = (section) => {
    setActive(section);
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className={`navbar ${isScroll ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={Logo} alt="mohit-logo" />
      </div>

      <div className="nav-middle">
        <ul className="nav-links">
         <li
          className={active === "home" ? "active" : ""}
          onClick={() => handleClick("home")}
        >
          HOME
        </li>
        <li
          className={active === "about" ? "active" : ""}
          onClick={() => handleClick("about")}
        >
          ABOUT
        </li>
        <li
          className={active === "skills" ? "active" : ""}
          onClick={() => handleClick("skills")}
        >
          SKILLS
        </li>
        <li
          className={active === "projects" ? "active" : ""}
          onClick={() => handleClick("projects")}
        >
          PROJECTS
        </li>
        <li
          className={active === "contact" ? "active" : ""}
          onClick={() => handleClick("contact")}
        >
          CONTACT
        </li>
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
