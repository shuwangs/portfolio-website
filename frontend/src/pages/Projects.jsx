import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import './Projects.css';

function Projects() {
  const sortedProjects = [...projects].sort((a, b) => b.priority - a.priority);
  const otherProjects = sortedProjects.filter(project => [9, 7].includes(project.id));
  const earlierProjects = sortedProjects.filter(project => !project.featured && ![9, 7].includes(project.id));
  return (
    <div className="projects-page-container">
      <section className="project-section" aria-labelledby="featured-heading">
        <div className="section-header">
          <p className="section-eyebrow">Selected work</p>
          <h1 id="featured-heading">Featured Projects</h1>
          <p>Full-stack applications, thoughtful AI workflows, and the engineering behind them.</p>
        </div>
        <div className="projects-grid">
          {sortedProjects.filter(project => project.featured).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <section className="project-section tools-section" aria-labelledby="tools-heading">
        <header className="section-header">
          <p className="section-eyebrow">Built for everyday use</p>
          <h2 id="tools-heading">Tools</h2>
        </header>
        <article className="project-card tool-entry">
          <img className="tool-screenshot" src="/image/algocook.png" alt="AlgoCook topic library with algorithm practice sets including sliding window, binary search, and graph algorithms" width="1187" height="692" loading="lazy" />
          <div>
            <h3>AlgoCook</h3>
            <p>A topic-based algorithm practice library. Find problems by title or number, filter by difficulty, and work through structured practice sets.</p>
            <span className="other-project-stack">Python · Static site · JavaScript</span>
            <div className="project-footer tool-links">
              <a href="https://shuwangs.github.io/AlgoCook/" target="_blank" rel="noopener noreferrer" className="btn-live" aria-label="Open AlgoCook website">Open website ↗</a>
              <a href="https://github.com/shuwangs/AlgoCook" target="_blank" rel="noopener noreferrer" className="btn-github" aria-label="View AlgoCook source code">Source ↗</a>
            </div>
          </div>
        </article>
      </section>
      <section className="project-section learning-section" aria-labelledby="learning-heading">
        <p className="section-eyebrow">Learning &amp; experiments</p>
        <h2 id="learning-heading">Along the way</h2>
        <p>More things I’m building, small experiments, and projects I’ve learned from.</p>
        <details className="learning-archive">
          <summary>Explore more projects</summary>
        <ul className="other-projects-list">
          {otherProjects.map(project => (
            <li key={project.id}>
              <div>
                <h3>{project.title}</h3>
                <p>{project.id === 9
                  ? 'AI-assisted pet-care scheduling with rule-based validation and conflict checks.'
                  : 'A Spring Boot application for importing job postings and tracking applications.'}</p>
                <span className="other-project-stack">{project.id === 9 ? 'Python · Streamlit · pytest' : 'Java · Spring Boot · PostgreSQL · React'}</span>
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Source code for ${project.title}`}>Source ↗</a>
            </li>
          ))}
        </ul>
          <ul>
            {earlierProjects.map(project => (
              <li key={project.id}>
                {project.github || project.demo ? (
                  <a href={project.github || project.demo} target="_blank" rel="noopener noreferrer">{project.title} ↗</a>
                ) : <span>{project.title}</span>}
                <span className="learning-stack">{project.tags.slice(0, 2).join(' · ')}</span>
              </li>
            ))}
          </ul>
        </details>
      </section>
    </div>
  );
}

export default Projects;
