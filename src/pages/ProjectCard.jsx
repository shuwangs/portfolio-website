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
        {project.tags.map((tag) => (
          <span key={tag} className="project-tag">
            {tag}
          </span>
        ))}

      </div>
      <br />
      <div className="project-actions">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="live-btn"
          >
            Live Link <span className="arrow">↗</span>
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
            aria-label="GitHub repository"
          >
            <i className="bi bi-github"></i>
          </a>
        )}
      </div>
  
    </div>
  );
}

export default ProjectCard;