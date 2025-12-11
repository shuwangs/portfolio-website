import React from "react";
import './ProjectCard.css';
import { projects } from "../data/projects";
import 'bootstrap-icons/font/bootstrap-icons.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.imageAlt} className="project-image" />

      <h2 className="project-title">{project.title}</h2>

      <p className="project-description">{project.description}</p>
      <div className="project-tags">

        <span key={project.id} className="project-tag"> {project.tags.join(' · ')} </span>
  
      </div>

      <div className="project-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <i class="bi bi-github"></i>
            </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <img src = '/image/liveDemo.svg' alt="demo icon" className="demo-icon"/>
          </a>
        )}
      </div>
  
    </div>
  );
}

export default ProjectCard;