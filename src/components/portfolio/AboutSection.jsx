import React from 'react';

export const AboutSection = () => {
  return (
    <section className="section" id="about">
      <h2 className="section-title">ABOUT</h2>
      <div className="card">
        <p className="text">
          A passionate <span className="highlight highlight-yellow">B.Tech student</span> in Artificial
          Intelligence & Data Science at{' '}
          <span className="highlight highlight-pink">Jyothi Engineering College, Kerala</span>. I love building
          innovative projects that blend{' '}
          <span className="highlight highlight-cyan">AI/ML with real-world hardware</span>, from{' '}
          <span className="highlight highlight-green">RAG pipelines and LLMs</span> to{' '}
          <span className="highlight highlight-yellow">robots and IoT devices</span>.
        </p>
        <p className="text">
          My passion for{' '}
          <span className="highlight highlight-cyan">hands-on engineering and innovation</span> drives me to work
          across the full spectrum — from{' '}
          <span className="highlight highlight-pink">welding metal frames for robots</span> to writing{' '}
          <span className="highlight highlight-green">computer vision pipelines</span> and deploying AI models.
        </p>
        <p className="text">
          I bring a unique blend of{' '}
          <span className="highlight highlight-yellow">software and hardware expertise</span>,{' '}
          <span className="highlight highlight-green">creative problem-solving</span>, and a genuine enthusiasm for{' '}
          <span className="highlight highlight-cyan">turning ideas into working prototypes</span>.
        </p>
      </div>
    </section>
  );
};
