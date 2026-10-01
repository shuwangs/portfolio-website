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
      <div className="content-wrapper about-details">
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
        <div className="about-main">
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
        </div>
      </div>
    </div>
  );
}

export default About;
