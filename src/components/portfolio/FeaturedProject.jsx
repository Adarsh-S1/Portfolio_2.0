import React from 'react';

export const FeaturedProject = () => {
  return (
    <section className="section section-compact" id="projects">
      <div className="creator-showcase">
        <p className="creator-label">Featured Project</p>
        <a href="https://github.com/Adarsh-S1" target="_blank" rel="noopener noreferrer" className="creator-project">
          <i className="fas fa-brain" style={{ fontSize: '60px', color: '#ffd93d' }}></i>
          <span className="creator-name">Academic RAG Pipeline</span>
        </a>
        <p className="creator-tagline">
          An AI-powered RAG pipeline using MongoDB Vector Search & n8n. Built with Python.
        </p>
        <a href="https://github.com/Adarsh-S1" target="_blank" rel="noopener noreferrer" className="creator-github">
          <i className="fab fa-github"></i> Check it out
        </a>
      </div>
    </section>
  );
};
