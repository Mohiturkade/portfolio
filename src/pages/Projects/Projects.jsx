import React from 'react'
import "./Projects.css";
import { useState } from 'react'
import { projects } from "../../assets/assets"

const Projects = () => {
   const [filter, setFilter] = useState("all");

   const filteredProjects = filter==="all"? projects : skills.filter(skill => skill.category === filter);
  
   return (
    <div className='projects'>
        <h1>Featured Projects</h1>
        <p>A showcase of my work spanning AI/ML, full-stack development, and innovative SaaS solutions</p>

        <div className='filter-buttons'>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("frontend")}>Frontend</button>
            <button onClick={() => setFilter("backend")}>Backend</button>
        </div>

        {/* skills grid */}
        <div className='projects-grid'>
            { filteredProjects.map((project, index) => (
                <div key={index} className='project-card'>
                    
                    <img src={project.image} alt={project.name} width={'300'} />
                    <div className='project-detail-card'>
                        <p>{project.title}</p>
                        <p>{project.description}</p>
                    </div>
                    

                </div>
               
            ))

            }

        </div>

    </div>
  )
}

export default Projects