import React from 'react';  
import Navbar from '../components/Navbar';
import ProjectCard from './ProjectCard';
import { projects } from "../data/projects";

import './Projects.css';

function Projects() {
  const featuredProjects = projects
  .filter(p => p.featured)
  .sort((a, b) => (b.priority || 0) - (a.priority || 0));

  return(
    <>
      <Navbar />
      <div className="projects-page-container">
        <section className="project-section">
          <div className="section-header">
            <h1>Featured Projects</h1>
            <p>A selection of things I've built with code and caffeine.</p>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </section>


      </div>


    </>
  )
  
}

export default Projects;