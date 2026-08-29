import React from 'react';
import { Link } from 'react-router-dom';

export const EducationCertifications = () => {
  return (
    <section className="section education-languages-section">
      <div className="education-languages-grid">
        <div className="education-column">
          <h2 className="section-title">EDUCATION</h2>
          <div className="card education-card">
            <div className="education-header">
              <div>
                <h3 className="education-title">B.Tech — AI & Data Science</h3>
                <p className="education-school">Jyothi Engineering College, Kerala</p>
              </div>
              <span className="badge">2022 - 2026</span>
            </div>
            <p className="education-location">
              <i className="fas fa-map-marker-alt"></i> Cheruthuruthy, Thrissur, Kerala
            </p>
            <p className="text" style={{ marginTop: '8px', fontSize: '0.9rem' }}>
              CGPA: 8.11/10
            </p>
          </div>
        </div>

        <div className="certificate-column">
          <h2 className="section-title">CERTIFICATIONS</h2>
          <div className="card certificate-card">
            <Link
              className="certificate-item"
              to="certificate-viewer?pdf=assets/certification/Introduction%20To%20Machine%20Learning%20-%20IITKGP.pdf&name=ML%20%E2%80%94%20NPTEL%20(IIT%20KGP)"
            >
              <span className="certificate-name-inline">ML — NPTEL (IIT KGP)</span>
              <div className="certificate-stars">
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star filled"></span>
              </div>
              <i className="fas fa-external-link-alt cert-view-icon"></i>
            </Link>

            <Link
              className="certificate-item"
              to="certificate-viewer?pdf=assets/certification/flutter_certificate.pdf&name=Flutter%20Development"
            >
              <span className="certificate-name-inline">Flutter Development</span>
              <div className="certificate-stars">
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star filled"></span>
              </div>
              <i className="fas fa-external-link-alt cert-view-icon"></i>
            </Link>

            <Link
              className="certificate-item"
              to="certificate-viewer?pdf=assets/certification/Ethical%20Hacking.pdf&name=Ethical%20Hacking%20%E2%80%94%20NPTEL"
            >
              <span className="certificate-name-inline">Ethical Hacking — NPTEL</span>
              <div className="certificate-stars">
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star"></span>
              </div>
              <i className="fas fa-external-link-alt cert-view-icon"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
