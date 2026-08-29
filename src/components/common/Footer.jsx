import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-compact">
        <div className="footer-main">
          <div className="footer-brand-compact">
            <strong>ADARSH S</strong>
            <span>B.Tech AI & Data Science</span>
          </div>
          <div className="footer-nav-compact">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a>
            <a href="#experience" onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}>Projects</a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('skills'); }}>Skills</a>
          </div>
          <div className="footer-social-compact">
            <a href="https://github.com/Adarsh-S1" target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/adarsh-s-326a97311/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:adarshs112004@gmail.com" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom-compact">
          <span>&copy; {new Date().getFullYear()} Adarsh S</span>
          <Link to="/terminal" className="footer-terminal-link-compact">
            <i className="fas fa-terminal"></i> Terminal
          </Link>
        </div>
      </div>
    </footer>
  );
};
