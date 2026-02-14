import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="about" id="about">
      <span className="about-subtitle">Introduction</span>
      <h1 className="about-title">About Me</h1>

      <div className="about-content">
        <p>
          I’m <span className="highlight">Mohit Urkade</span>, a passionate
          Frontend Developer based in India. I specialize in building
          responsive, user-friendly web applications using modern technologies
          like React, JavaScript, and Node.js.
        </p>

        {readMore && (
          <p>
            I enjoy transforming ideas into real-world digital experiences.
            Currently, I am strengthening my backend skills and working on
            full-stack projects to become a well-rounded developer.
            I love solving problems, learning new technologies, and building
            scalable applications.
          </p>
        )}

        <button
          className="read-more-btn"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Show Less" : "Read More"}
        </button>
      </div>

      {/* Stats Section */}
      <div className="about-stats">
        <div className="stat">
          <h2>10+</h2>
          <p>Projects Built</p>
        </div>

        <div className="stat">
          <h2>1+</h2>
          <p>Years Learning</p>
        </div>

        <div className="stat">
          <h2>100%</h2>
          <p>Passion</p>
        </div>
      </div>
    </section>
  );
};

export default About;

