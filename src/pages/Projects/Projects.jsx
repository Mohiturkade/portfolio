import React, { useState } from "react";
import "./Projects.css";
import { projects } from "../../assets/assets";

const Projects = () => {
  const [filter, setFilter] = useState("all");

 
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="projects" id="projects">
      <h1>Featured Projects</h1>
      <p>
        A showcase of my work spanning full-stack development and modern web
        applications.
      </p>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "frontend" ? "active" : ""}
          onClick={() => setFilter("frontend")}
        >
          Frontend
        </button>
        <button
          className={filter === "backend" ? "active" : ""}
          onClick={() => setFilter("backend")}
        >
          Backend
        </button>
        <button
          className={filter === "fullstack" ? "active" : ""}
          onClick={() => setFilter("fullstack")}
        >
          Fullstack
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {/* Tech badges */}
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              {/* Buttons */}
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

