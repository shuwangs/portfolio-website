import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';

function ProjectCard({ project, headingLevel = 'h2' }) {
  const Heading = headingLevel;
  const [failedImage, setFailedImage] = useState(null);
  return (
    <article className="project-card">
      <div className="card-image-wrapper">
        {project.image && failedImage !== project.image ? (
          <img src={project.image} alt={project.imageAlt} className="project-image"
            loading="lazy" onError={() => setFailedImage(project.image)} />
        ) : (
          <div className="project-preview">
            <span className="preview-label">{project.previewLabel || 'Project overview'}</span>
            <strong>{project.title}</strong>
            <div className="preview-steps">
              {(project.previewSteps || project.tags.slice(0, 3)).map(step => <span key={step}>{step}</span>)}
            </div>
          </div>
        )}
      </div>
      <div className="card-content">
        {project.status === 'active' && <span className="project-status">In progress</span>}
        <Heading className="project-title">{project.title}</Heading>
        <div className="project-tags">
          {project.tags.map(tag => <span key={tag} className="tech-tag">{tag}</span>)}
        </div>
        <p className="project-description">{project.description}</p>
        {project.featured && project.features?.length > 0 && (
          <ul className="project-highlights">
            {project.features.map(feature => <li key={feature}>{feature}</li>)}
          </ul>
        )}
        {project.note && <p className="project-note">{project.note}</p>}
        {(project.demo || project.github) && (
          <div className="project-footer">
            {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-live"
              aria-label={`${project.demoLabel || 'Live Demo'} — ${project.title}`}>
              {project.demoLabel || 'Live Demo'} <FaExternalLinkAlt aria-hidden="true" />
            </a>}
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github"
              aria-label={`View source code for ${project.title}`}>
              <FaGithub aria-hidden="true" /> Source Code
            </a>}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
