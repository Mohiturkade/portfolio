import React, { useState } from "react";
import "./../Contact/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    console.log("Form Submitted:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact" id="contact">
      <h1>Let's Connect</h1>
      <p>
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Let's create something amazing
        together!
      </p>

      {/* Email Button */}
      <a href="mailto:yourmail@example.com">
        <button>Send me an email</button>
      </a>

    
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      {submitted && <p className="success">Message sent successfully! 🚀</p>}

      <p className="social-title">OR FIND ME ON</p>

      <div className="social-links">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Contact;

