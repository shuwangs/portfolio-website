import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.imageAlt} className="project-image" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
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
      <ul className="project-features">
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;