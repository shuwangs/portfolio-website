import React from 'react';  
import Navbar from '../components/Navbar';
import ProjectCard from './ProjectCard';
import { projects } from "../data/projects";
import './Projects.css';

function Projects() {
  return(
    <>
      <Navbar />

      <section className="project-section">

        <h1>Projects</h1>
    
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </section>

    </>
  )
  
}

export default Projects;