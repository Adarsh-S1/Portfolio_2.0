import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

export const HeroSection = () => {
  const [greeting, setGreeting] = useState('');
  const targetText = 'Hi there! 👋';

  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setGreeting(
        targetText
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return targetText[index];
            }
            if (char === ' ' || char === '👋') {
              return char;
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iterations >= targetText.length) {
        clearInterval(interval);
      }
      iterations += 1 / 3;
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-left">
          <p className="hero-greeting" id="hero-greeting">
            {greeting || 'Hi there! 👋'}
          </p>
          <h1 className="hero-name">I'm Adarsh S.</h1>
          <p className="hero-description">
            Based in Thrissur, Kerala, I'm a B.Tech AI & Data Science student at Jyothi Engineering College.
            I love building innovative solutions with AI/ML, Robotics, and IoT. Passionate about turning
            ideas into reality through code and hardware.
          </p>
          <div className="hero-social">
            <a
              href="https://github.com/Adarsh-S1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/adarsh-s-326a97311/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:adarshs112004@gmail.com"
              className="social-btn"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <div className="hero-cta-container">
            <a href="#contact" onClick={scrollToContact} className="btn-cta">
              Get in Touch!
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrapper">
            <div className="tape-sticker"></div>
            <img
              src="assets/images/profile.JPG"
              alt="Adarsh S"
              className="hero-photo"
              width="400"
              height="400"
              fetchpriority="high"
            />
            <div className="deco-code">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="88" height="88" rx="8" fill="#66d9ef" stroke="#000" strokeWidth="4" />
                <rect x="3" y="3" width="88" height="88" rx="8" fill="#66d9ef" stroke="#000" strokeWidth="4" />
                <path d="M35 40 L20 50 L35 60" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M65 40 L80 50 L65 60" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="55" y1="35" x2="45" y2="65" stroke="#000" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="deco-terminal">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="88" height="88" rx="8" fill="#ffd93d" stroke="#000" strokeWidth="4" />
                <rect x="3" y="3" width="88" height="88" rx="8" fill="#ffd93d" stroke="#000" strokeWidth="4" />
                <path d="M25 35 L40 50 L25 65" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="50" y1="65" x2="75" y2="65" stroke="#000" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="deco-floppy">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="88" height="88" rx="8" fill="#a8e6cf" stroke="#000" strokeWidth="4" />
                <rect x="3" y="3" width="88" height="88" rx="8" fill="#a8e6cf" stroke="#000" strokeWidth="4" />
                <rect x="20" y="20" width="60" height="60" rx="3" fill="#ffd93d" stroke="#000" strokeWidth="4" />
                <rect x="30" y="20" width="40" height="20" fill="#66d9ef" stroke="#000" strokeWidth="3" />
                <rect x="35" y="55" width="30" height="15" rx="2" fill="#000" />
                <circle cx="50" cy="35" r="3" fill="#000" />
              </svg>
            </div>
            <div className="deco-label">AI & Robotics Ninja</div>
          </div>
        </div>
      </div>

      <div className="tech-badges">
        <span className="tech-badge"><i className="fab fa-python"></i> Python</span>
        <span className="tech-badge"><i className="fas fa-code"></i> C</span>
        <span className="tech-badge"><i className="fab fa-java"></i> Java</span>
        <span className="tech-badge"><i className="fas fa-mobile-alt"></i> Flutter</span>
        <span className="tech-badge"><i className="fas fa-flask"></i> Flask</span>
        <span className="tech-badge"><i className="fas fa-leaf"></i> MongoDB</span>
        <span className="tech-badge"><i className="fas fa-fire"></i> Firebase</span>
        <span className="tech-badge"><i className="fab fa-docker"></i> Docker</span>
      </div>
    </section>
  );
};
