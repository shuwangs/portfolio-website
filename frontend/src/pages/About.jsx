import React from "react";
import { Link } from "react-router-dom";
import Hero from '../components/Hero';
import shuImage from '../assets/images/shu-photo.jpg';
import "./About.css";

import { FaGithub, FaLinkedin, FaEnvelope, FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";

function About() {
  return (
    <div className="about-container">
      {/* 1) Hero */}
      <Hero />

      {/* 2) About Me */}
      <div className="content-wrapper">
      
        {/* Left Column: Profile & Intro */}
        <aside className="about-sidebar">
          <div className="profile-card">
            <img
              className="about-photo"
              src={shuImage}
              alt="Photo: Shu Wang"
            />
            <div className="intro-text">
              <h3>Hello, I'm Shu! 👋</h3>
              <p className="bio-summary">
                <strong>Bioinformatician</strong> turned <strong>Software Developer</strong>.
              </p>
              <p className="bio-details">
                I fell in love with coding while analyzing complex data. Now bridging logic and creativity at <strong>Georgia Tech</strong>.
              </p>
            </div>

            <div className="social-links">
              <a href="https://github.com/shuwangs" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shuuwang/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:shuw425@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>

              {/* Bobo Teaser */}
            <div className="bobo-card">
              <h4>Coding Companion 🐾</h4>
              <p>Meet Bobo, the Chief Morale Officer.</p>
              <Link to="/bobo" className="btn-small">Meet Bobo →</Link>
            </div>
          </div>
        </aside>
      
        {/* Right Column: Experience & Details */}

        <main className="about-main">
          {/* Work Experience */}
          <section className="info-block">
            <h2 className="section-title"><FaBriefcase /> Work Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-header">
                  <h3>Data Analyst</h3>
                  <span className="timeline-date">Jul 2023 – Present</span>
                </div>
                <h4 className="timeline-place">Georgetown University</h4>
                <ul className="bullet-list">
                  <li>Automated workflows and improved data processing efficiency.</li>
                  <li>Implemented reproducible and maintainable analytical pipelines.</li>
                  <li>Collaborated on ML-based biomarker discovery projects.</li>
                </ul>
              </div>
         

              <div className="timeline-item">
                <div className="timeline-header">
                  <h3>Software Engineer in Training</h3>
                  <span className="timeline-date">Sep 2025 – Present</span>
                </div>
                <h4 className="timeline-place">Techtonica</h4>
                <ul className="bullet-list">
                  <li>Intensive training in JavaScript and React.</li>
                  <li>Practice in collaborative development and code reviews.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="info-block">
            <h2 className="section-title"><FaGraduationCap /> Education</h2>
            <div className="cards-grid">
              <div className="edu-card">
                <h3>Georgia Institute of Technology</h3>
                <span className="highlight">M.S. Computer Science</span>
                <span className="date"> 2024 – 2027 (Expected)</span>
                <p>GPA: 3.8</p>
              </div>

              <div className="edu-card">
                <h3>Zhejiang University, CN</h3>
                <span className="highlight">Ph.D. Plant Pathology</span>
              </div>
            </div>
          </section>
          {/* 3) Skills */}
          <section className="info-block">
            <h2 className="section-title"><FaCode /> Tech Stack</h2>
            <div className="skills-container">
              {['React', 'JavaScript', 'Java', 'Python', 'Git', 'SQL', 'Node.js'].map(skill => (
                <span key={skill} className="skill-chip">{skill}</span>
              ))}
            </div>
          </section>

        </main>

      </div>
    </div>

  );
}

export default About;