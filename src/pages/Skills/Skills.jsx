import React, { useState } from "react";
import "./Skills.css";
import { skills } from "../../assets/assets";

const Skills = () => {
  const [filter, setFilter] = useState("all");

  const filteredSkills =
    filter === "all"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  return (
    <div className="skills" id="skills">
      <h1>My Tech Stack</h1>
      <p>
        A curated collection of technologies I use to bring ideas to life —
        from modern frontend frameworks to powerful backend tools.
      </p>

      <div className="filter-buttons">
        {["all", "frontend", "backend", "database"].map((category) => (
          <button
            key={category}
            className={filter === category ? "active" : ""}
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

