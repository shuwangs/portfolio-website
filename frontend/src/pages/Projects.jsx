import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import './Projects.css';

function Projects() {
  const sortedProjects = [...projects].sort((a, b) => b.priority - a.priority);
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
      <section className="project-section more-projects" aria-labelledby="more-heading">
        <div className="section-header">
          <h2 id="more-heading">More Projects</h2>
          <p>Backend systems, coursework, and creative experiments.</p>
        </div>
        <div className="projects-grid">
          {sortedProjects.filter(project => !project.featured).map(project => (
            <ProjectCard key={project.id} project={project} headingLevel="h3" />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
