import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import HeroImg from "../assets/images/hero_header_image.png";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-image">
        <img id="hero-header-image" src={HeroImg} alt="Hero header Image" />
      </div>

      <div className="hero-content">
        <h1>Hi, I'm  <span className="author-name">Shu Wang</span></h1>

        <h2>Full Stack Engineer & OMSCS Student @ Georgia Tech</h2>

        <p className="hero-description">
          Early-career software engineer passionate about building scalable backend systems and intuitive full-stack applications.
          <br />
          I write clean, maintainable code to solve real-world problems.
          <br />
          <span className="cat-note">Currently coding with my cat, Bobo. 🐈</span>
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn checkwork-btn">
            Check my Work
          </Link>
          
          <a href="/Resume_Shu_Wang.pdf" 
            className="btn download-cv-btn" 
            target="_blank" 
            rel="noopener noreferrer"
            download="Shu_Wang_Resume.pdf">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;