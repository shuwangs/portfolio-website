import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-container" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="hero-eyebrow">Software development · Payments · Full-stack applications</p>
        <h1 id="hero-title"><span className="hero-greeting">Hi, I’m</span> <span className="author-name">Shu Wang</span></h1>
        <p className="hero-affiliations"><strong>PlayStation Payments</strong> <span aria-hidden="true">·</span> Georgia Tech MSCS</p>
        <p className="hero-description">
          Software Developer Apprentice on PlayStation’s payments team and an M.S. Computer Science student at Georgia Tech. I bring a research background to backend engineering, automated testing, and full-stack development.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="hero-btn hero-btn-primary">Projects <span aria-hidden="true">↗</span></Link>
          <a href="#experience" className="hero-btn hero-btn-secondary">Experience <span aria-hidden="true">↓</span></a>
          <a href="/Resume_Shu_Wang.pdf" className="hero-btn hero-btn-secondary" target="_blank" rel="noopener noreferrer">Resume <span aria-hidden="true">↗</span></a>
        </div>
        <p className="cat-note">Currently coding with my cat, Bobo 🐈</p>
      </div>
    </section>
  );
}

export default Hero;
