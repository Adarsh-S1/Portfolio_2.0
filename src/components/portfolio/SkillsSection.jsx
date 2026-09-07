import React from 'react';

export const SkillsSection = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">SKILLS</h2>

      <div className="skills-grid-modern">
        <div className="skill-box">
          <div className="skill-box-header">
            <i className="fas fa-code skill-icon-large"></i>
            <h3 className="skill-box-title">Programming Languages</h3>
          </div>
          <div className="tech-tags">
            <span className="tag"><i className="fab fa-python"></i> Python</span>
            <span className="tag"><i className="fas fa-brain"></i> PyTorch</span>
            <span className="tag"><i className="fas fa-brain"></i> TensorFlow</span>
            <span className="tag"><i className="fas fa-link"></i> LangChain</span>
            <span className="tag"><i className="fas fa-code"></i> C</span>
            <span className="tag"><i className="fab fa-java"></i> Java</span>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-box-header">
            <i className="fas fa-mobile-alt skill-icon-large"></i>
            <h3 className="skill-box-title">Frontend</h3>
          </div>
          <div className="tech-tags">
            <span className="tag"><i className="fas fa-mobile-alt"></i> Flutter</span>
            <span className="tag"><i className="fas fa-flask"></i> Flask</span>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-box-header">
            <i className="fas fa-database skill-icon-large"></i>
            <h3 className="skill-box-title">Backend & Databases</h3>
          </div>
          <div className="tech-tags">
            <span className="tag"><i className="fas fa-leaf"></i> MongoDB</span>
            <span className="tag"><i className="fas fa-search"></i> Vector Search</span>
            <span className="tag"><i className="fas fa-fire"></i> Firebase</span>
            <span className="tag"><i className="fas fa-database"></i> MySQL</span>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-box-header">
            <i className="fas fa-tools skill-icon-large"></i>
            <h3 className="skill-box-title">Tools & Version Control</h3>
          </div>
          <div className="tech-tags">
            <span className="tag"><i className="fas fa-project-diagram"></i> N8N</span>
            <span className="tag"><i className="fab fa-git-alt"></i> Git</span>
            <span className="tag"><i className="fab fa-github"></i> GitHub</span>
            <span className="tag"><i className="fab fa-docker"></i> Docker</span>
            <span className="tag"><i className="fas fa-plug"></i> MCP</span>
          </div>
        </div>

        <div className="skill-box highlight-box">
          <div className="skill-box-header">
            <i className="fas fa-cogs skill-icon-large"></i>
            <h3 className="skill-box-title">Engineering & Fabrication</h3>
          </div>
          <div className="tech-tags">
            <span className="tag"><i className="fas fa-fire-alt"></i> Welding</span>
            <span className="tag"><i className="fas fa-cog"></i> Lathe Operation</span>
            <span className="tag"><i className="fas fa-cut"></i> Metal Pipe Cutting</span>
            <span className="tag"><i className="fas fa-microchip"></i> Raspberry Pi 5</span>
            <span className="tag"><i className="fas fa-microchip"></i> ESP32</span>
          </div>
        </div>
      </div>
    </section>
  );
};
