import React, { useEffect, useState } from 'react';

const checkpoints = [
  { section: 'hero', label: 'Home' },
  { section: 'about', label: 'About' },
  { section: 'experience', label: 'Journey' },
  { section: 'skills', label: 'Skills' },
  { section: 'contact', label: 'Contact' },
];

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight - windowHeight;
      const currentScroll = window.scrollY;
      const p = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
      setProgress(p);

      for (let i = checkpoints.length - 1; i >= 0; i--) {
        const el = document.getElementById(checkpoints[i].section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight / 2) {
            setActiveSection(checkpoints[i].section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
      <div className="progress-checkpoints">
        {checkpoints.map((cp) => (
          <div
            key={cp.section}
            className={`checkpoint ${activeSection === cp.section ? 'active' : ''}`}
            data-section={cp.section}
            onClick={() => scrollToSection(cp.section)}
          >
            <div className="checkpoint-dot"></div>
            <span className="checkpoint-label"></span>
          </div>
        ))}
      </div>
    </div>
  );
};
