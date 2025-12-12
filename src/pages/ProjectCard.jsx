import React from "react";
import './ProjectCard.css';
import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="project-card">

      <div className="card-image-wrapper">
        <img 
          src={project.image} 
          alt={project.imageAlt} 
          className="project-image" 
          onError={(e) => {e.target.style.display='none'; e.target.parentNode.style.backgroundColor='#ddd'}}
        />
      </div>
      
      <div className="card-content">
        <h2 className="project-title">
          <FaFolderOpen className="title-icon"/> {project.title}
        </h2>
      </div>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tech-tag">
            {tag}
          </span>
        ))}
      </div>     

      {/* Description */}
      <p className="project-description">{project.description}</p>

      <div className="project-footer">

        <div className="project-links">
          {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-live"
              >
                Live Demo <FaExternalLinkAlt className="icon-small" />
              </a>
            ) : (
              // Placeholder
              <span className="btn-disabled">Coming Soon</span>
            )}

            {/* GitHub button */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-github"
                aria-label="View Source Code"
              >
                <FaGithub size={22} />
              </a>
            )}

        </div>

      </div>
 
    </div>
  );
}

export default ProjectCard;