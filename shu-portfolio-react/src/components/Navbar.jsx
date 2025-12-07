import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">Shu Wang🐾</div>
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/bobo">Bobo</Link>
      </nav>
    </header>
  );
}

export default Navbar;