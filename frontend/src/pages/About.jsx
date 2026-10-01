import { Link } from "react-router-dom";
import Hero from '../components/Hero';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import "./About.css";

import { FaBriefcase, FaCode } from "react-icons/fa";

function About() {
  const featuredProjects = projects.filter(project => project.featured)
    .sort((a, b) => b.priority - a.priority).slice(0, 3);
  return (
    <div className="about-container">
      {/* 1) Hero */}
      <Hero />

      <section className="experience-section" id="experience" aria-labelledby="experience-title">
        <header className="experience-intro">
          <p className="experience-eyebrow">Experience</p>
          <h2 id="experience-title">Where I build.</h2>
          <p>Payments engineering, full-stack development, and a foundation in research.</p>
        </header>
        <div className="experience-layout">
          <div className="experience-history">
            <h3 className="experience-column-title"><FaBriefcase aria-hidden="true" /> Work Experience</h3>
            <div className="work-timeline">
              <article className="work-card work-card-current">
                <div className="work-meta"><span>Apprenticeship</span><span>August 2026 – Present</span></div>
                <h4>Sony Interactive Entertainment · PlayStation</h4>
                <p className="work-role">Software Developer Apprentice — Payments</p>
                <p className="work-location">Austin, TX</p>
                <ul className="work-bullets">
                  <li>Authored <strong>74 automated payment test scenarios</strong> for South Korea as part of a multi-country testing initiative, covering card, wallet, and local payment methods across purchase, refund, and entitlement flows.</li>
                  <li>Investigate failing payment scenarios through API responses and transaction records, identifying issues with wallet funding, subscription eligibility, and payment-provider routing.</li>
                  <li>Develop a feature-flagged proof of concept integrating the Payment Method Service with a data access library, implementing service branching, response mapping, and unit tests.</li>
                  <li>Contribute to Java/Spring backend maintenance through dependency remediation and Jenkins integration-test troubleshooting.</li>
                </ul>
              </article>
              <article className="work-card">
                <div className="work-meta"><span>Training</span><span>2026</span></div>
                <h4>Techtonica</h4>
                <p className="work-role">Software Engineering Trainee</p>
                <ul className="work-bullets">
                  <li>Build full-stack applications using JavaScript, React, and backend APIs through a structured software engineering training program.</li>
                  <li>Practice collaborative development through team projects, code reviews, debugging, and automated testing.</li>
                  <li>Apply software engineering fundamentals through hands-on projects and a sponsored apprenticeship on PlayStation’s payments team.</li>
                </ul>
              </article>
              <article className="work-card">
                <div className="work-meta"><span>Research &amp; Data</span><span>Jul 2023 – Present</span></div>
                <h4>Georgetown University</h4>
                <p className="work-role">Data Analyst</p>
                <ul className="work-bullets">
                  <li>Automated workflows and improved data processing efficiency.</li>
                  <li>Implemented reproducible and maintainable analytical pipelines.</li>
                  <li>Collaborated on ML-based biomarker discovery projects.</li>
                </ul>
              </article>
            </div>
          </div>
          <aside className="toolkit-panel" aria-labelledby="toolkit-title">
            <p className="experience-eyebrow">Technical toolkit</p>
            <h3 id="toolkit-title"><FaCode aria-hidden="true" /> Tech Stack</h3>
            <p className="toolkit-description">Tools I use across payments engineering, training, and personal projects.</p>
            {[
              ['Languages', ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL']],
              ['Backend & APIs', ['Spring Boot', 'Node.js', 'Express', 'REST APIs']],
              ['Frontend', ['React', 'HTML', 'CSS']],
              ['Data & Cloud', ['Oracle', 'PostgreSQL', 'Redis', 'AWS']],
              ['Testing & Delivery', ['Automated testing', 'Unit testing', 'Jenkins', 'Git']],
            ].map(([category, skills]) => (
              <div className="toolkit-group" key={category}>
                <h4>{category}</h4>
                <div className="toolkit-tags">{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
              </div>
            ))}
            <a className="toolkit-resume" href="/Resume_Shu_Wang.pdf" target="_blank" rel="noopener noreferrer">View Resume ↗</a>
          </aside>
        </div>
      </section>
      <section className="home-projects" aria-labelledby="home-projects-title">
        <header className="home-section-header">
          <div>
            <p className="experience-eyebrow">Selected work</p>
            <h2 id="home-projects-title">Featured Projects</h2>
          </div>
          <Link className="home-projects-link" to="/projects">View all projects →</Link>
        </header>
        <div className="home-projects-grid">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} headingLevel="h3" />
          ))}
        </div>
      </section>

      <section className="education-section" aria-labelledby="education-title">
        <h2 id="education-title">Education</h2>
        <ul className="education-list">
          <li>
            <div>
              <h3>Georgia Institute of Technology</h3>
              <p>M.S. Computer Science</p>
            </div>
            <p className="education-date">2024 – 2027 (Expected)</p>
          </li>
          <li>
            <div>
              <h3>Zhejiang University, CN</h3>
              <p>Ph.D. Plant Pathology</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
