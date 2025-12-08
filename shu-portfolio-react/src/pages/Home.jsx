import React from "react";
import { Link } from "react-router-dom";
import Hero from '../components/Hero';
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Skills Marquee (简单列举) */}
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

      {/* 3. Bobo Teaser */}
      <section className="bobo-teaser">
        <h2>Coding is better with a companion.</h2>
        <p>Meet Bobo, the Chief Morale Officer.</p>
        <Link to="/bobo" className="btn btn-secondary">Meet Bobo 🐾</Link>
      </section>

    </div>
  );
}

export default Home;