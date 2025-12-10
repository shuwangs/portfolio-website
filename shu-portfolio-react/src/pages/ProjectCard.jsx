import React from "react";
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.imageAlt} className="project-image" />

      <h2 className="project-title">{project.title}</h2>

      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="project-tag">{tag}</span>
        ))}
      </div>

      <div className="project-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
        )}
      </div>
  
    </div>
  );
}

export default ProjectCard;