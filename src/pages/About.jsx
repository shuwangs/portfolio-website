import React from "react";
import { Link } from "react-router-dom";
import Hero from '../components/Hero';
import shuImage from '../assets/images/shu-photo.jpg';
import "./About.css";


function About() {
  return (
    <div className="about-container">
      {/* 1) Hero */}
      <Hero />

      {/* 2) About Me */}
      <section className="about-section" id="about">
        <div className="about-left">
        
          <img
            className="about-photo"
            src={shuImage}
            alt="Photo: Shu Wang"
          />

          <div className="about-details">
            <h4>Here&apos;s how I came here...</h4>
            <p>
              I am a bioinformatician turned software developer who fell in love
              with coding while analyzing complex data in my research.
            </p>
            <p>
              I’m now pursuing my M.S. in Computer Science at Georgia Tech,
              learning full-stack development through Techtonica, and building
              meaningful projects that bridge logic and creativity.
            </p>
          </div>

          <div className="about-actions">
            <a
              className="btn btn-primary"
              href="/assets/documents/Resume_Shu_Wang_202511.pdf"
              download
            >
              Download CV
            </a>

            <a className="btn btn-secondary" href="mailto:your-email@example.com">
              Email Me
            </a>
          </div>
        </div>

        <div className="about-right">
          {/* Education */}
          <div className="about-block">
            <h2>Education</h2>
            <ul className="edu-list">
              <li className="edu-item">
                <div className="row">
                  <strong>Georgia Institute of Technology</strong>
                  <span className="date">2024 – 2027 (expected)</span>
                </div>
                <p>Master in Computer Science, GPA: 3.66</p>
              </li>

              <li className="edu-item">
                <strong>Zhejiang University, CN</strong>
                <p>Ph.D. in Plant Pathology</p>
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="about-block">
            <h2>Work Experience</h2>
            <ul className="exp-list">
              <li className="exp-item">
                <div className="row">
                  <strong>Data Analyst, Georgetown University</strong>
                  <span className="date">Jul 2023 – Present</span>
                </div>
                <ul className="bullet">
                  <li>Automated workflows and improved data processing efficiency.</li>
                  <li>Implemented reproducible and maintainable analytical pipelines.</li>
                  <li>Collaborated on ML-based biomarker discovery projects.</li>
                </ul>
              </li>

              <li className="exp-item">
                <div className="row">
                  <strong>Software Engineer in Training, Techtonica</strong>
                  <span className="date">Sep 2025 – Present</span>
                </div>
                <ul className="bullet">
                  <li>Intensive training in JavaScript and React.</li>
                  <li>Practice in collaborative development and code reviews.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3) Skills */}
      <section className="skills-section">
        <h2>Tech Stack</h2>
        <div className="skills-list">
          <span>React</span>
          <span>JavaScript</span>
          <span>Java</span>
          <span>Python</span>
          <span>Git</span>
        </div>
      </section>

      {/* 4) Bobo teaser */}
      <section className="bobo-teaser">
        <h2>Coding is better with a companion.</h2>
        <p>Meet Bobo, the Chief Morale Officer.</p>
        <Link to="/bobo" className="btn btn-secondary">
          Meet Bobo 🐾
        </Link>
      </section>
    </div>
  );
}

export default About;