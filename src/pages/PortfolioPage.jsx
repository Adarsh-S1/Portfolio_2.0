import React from 'react';
import { ProgressBar } from '../components/common/ProgressBar';
import { Navbar } from '../components/common/Navbar';
import { LoadingScreen } from '../components/common/LoadingScreen';
import { HeroSection } from '../components/portfolio/HeroSection';
import { PaperTear } from '../components/common/PaperTear';
import { AboutSection } from '../components/portfolio/AboutSection';
import { ProjectsTimeline } from '../components/portfolio/ProjectsTimeline';
import { SkillsSection } from '../components/portfolio/SkillsSection';
import { FeaturedProject } from '../components/portfolio/FeaturedProject';
import { EducationCertifications } from '../components/portfolio/EducationCertifications';
import { ContactSection } from '../components/portfolio/ContactSection';
import { Footer } from '../components/common/Footer';

export const PortfolioPage = () => {
  return (
    <>
      <LoadingScreen />
      <div className="page-wrapper">
        <ProgressBar />
        <Navbar />

        <HeroSection />

        <PaperTear />

        <div className="container">
          <AboutSection />
          <ProjectsTimeline />
          <SkillsSection />
          <FeaturedProject />
          <EducationCertifications />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
