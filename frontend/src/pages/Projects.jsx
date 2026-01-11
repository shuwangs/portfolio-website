import React from 'react';  
import Navbar from '../components/Navbar';
import ProjectCard from './ProjectCard';
import { projects } from "../data/projects";
import './Projects.css';

function Projects() {
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
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </section>


      </div>


    </>
  )
  
}

export default Projects;