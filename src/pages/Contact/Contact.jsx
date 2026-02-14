import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Lets's Connect</h1>
      <p>
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Let's create something amazing
        together!
      </p>

      <button>Send me an email</button>

      <p>OR FIND ME ON</p>
      <div className="social-links">
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
        <a href="#">Twitter</a>
      </div>
    </div>
  );
};

export default Contact;
