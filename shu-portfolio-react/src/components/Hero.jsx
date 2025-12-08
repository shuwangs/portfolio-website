import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import HeroImg from "../assets/hero_header_image.png";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-image">
        <img id="hero-header-image" src={HeroImg} alt="Hero header Image" />
      </div>

      <div className="hero-content">
        <h1>Hi, I'm  <span className="author-name">Shu Wang</span></h1>

        <h2>Full Stack Developer & Software Engineer & OMSCS Student@Georgia Tech</h2>
        
        <p className="hero-description">
          Early-career software engineer focused on backend systems, full-stack development, and writing maintainable, well-structured code. 
          <br />Currently coding with my cat, Bobo. 🐈
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">
            Check my Work
          </Link>
          
          <Link to="/" className="btn btn-outline">
            Meet Bobo
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;