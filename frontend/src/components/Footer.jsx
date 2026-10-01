import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <Link to="/" className="site-footer-logo">Shu.S</Link>
          <p>Learning, building, and sharing along the way.</p>
        </div>
        <nav className="site-footer-links" aria-label="Social and contact links">
          <a href="https://github.com/shuwangs" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/shuuwang/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:shuw425@gmail.com">Email</a>
        </nav>
        <p className="site-footer-copyright">© {new Date().getFullYear()} Shu Wang</p>
      </div>
    </footer>
  );
}

export default Footer;
