import React from 'react';

export const ContactSection = () => {
  return (
    <section className="section" id="contact">
      <h2 className="section-title">GET IN TOUCH</h2>
      <div className="contact-container-compact">
        <p className="contact-intro">Let's build something amazing together</p>
        <div className="contact-grid">
          <a
            href="https://www.linkedin.com/in/adarsh-s-326a97311/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Adarsh-S1"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
          <a href="mailto:adarshs112004@gmail.com" className="contact-card">
            <i className="fas fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};
