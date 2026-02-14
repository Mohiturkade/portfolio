import React from "react";
import "./Skills.css";
import { useState } from "react";
import { skills } from "../../assets/assets";

const Skills = () => {
  const [filter, setFilter] = useState("all");

  const filteredSkills =
    filter === "all"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  return (
    <div className="skills">
      <h1>My Tech Stack</h1>
      <p>
        A curated collection of technologies I use to bring ideas to life — from
        modern frontend frameworks to powerful backend tools.
      </p>

      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("frontend")}>Frontend</button>
        <button onClick={() => setFilter("backend")}>Backend</button>
        <button onClick={() => setFilter("database")}>Database</button>
      </div>

      {/* skills grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.name} width="60" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
