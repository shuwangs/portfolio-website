import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css"; 

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>Hi, I'm Shu Wang <span className="wave">👋</span></h1>
        
        {/* 这里根据你的实际情况修改 */}
        <h2>Full Stack Developer & OMSCS Student</h2>
        
        <p className="hero-description">
          Building scalable web applications with Paws-itive vibes. 
          <br />Currently coding with my cat, Bobo. 🐈
        </p>

        <div className="hero-buttons">
          {/* 按钮 1：去项目页 */}
          <Link to="/projects" className="btn btn-primary">
            Check my Work
          </Link>
          
          {/* 按钮 2：去关于我或博客 */}
          <Link to="/bobo" className="btn btn-outline">
            Meet Bobo
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;