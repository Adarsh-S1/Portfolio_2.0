import React, { useEffect, useRef } from 'react';
import { JourneyMap } from './JourneyMap';

const projects = [
  {
    id: 'exp-1',
    title: 'Academic RAG Pipeline (LLM Tool)',
    date: '2024 - 2025',
    description:
      'Developed a RAG pipeline using MongoDB Vector Search to create a searchable database of college notes, textbooks, and PDFs for improved LLM accuracy. Engineered an automated preprocessing workflow with n8n.',
    location: 'Jyothi Engineering College, Kerala',
  },
  {
    id: 'exp-2',
    title: 'Interactive AI Santa (Robotics & AR)',
    date: '2024',
    description:
      'Fabricated a human-sized robot for the Buon Natale festival using welding, lathe machining, and metal cutting. Developed real-time CV for facial detection and automated Santa overlays with servo-controlled movements.',
    location: 'Jyothi Engineering College, Kerala',
  },
  {
    id: 'exp-3',
    title: 'Hearing Aid (IoT Device)',
    date: '2024',
    description:
      'Created a Bluetooth-based assistive device that displays spoken text on an OLED screen for people with hearing disabilities. Used ESP32 with leaky bucket algorithm for text flow management.',
    location: 'Thrissur, Kerala',
  },
  {
    id: 'exp-4',
    title: 'Smart Buddy (IoT Device)',
    date: '2024 - 2025',
    description:
      'Built an interactive toy car that follows humans, avoids obstacles using computer vision, and engages in voice conversations using the Gemini API. Powered by Raspberry Pi 5 with L298N motor driver.',
    location: 'Thrissur, Kerala',
  },
];

export const ProjectsTimeline = () => {
  const timelineRef = useRef(null);
  const timelineBackRef = useRef(null);

  useEffect(() => {
    const journeyTimeline = timelineRef.current;
    const journeyTimelineBack = timelineBackRef.current;
    const journeyTimelineData = {
      hasStarted: false,
      startScroll: 0,
      pageRange: 200,
    };

    const updateJourneyTimeline = () => {
      if (!journeyTimeline || !journeyTimelineBack) return;

      if (window.innerWidth < 769) {
        journeyTimeline.style.transform = '';
        journeyTimeline.style.zIndex = '';
        journeyTimeline.style.overflowY = '';
        journeyTimelineBack.style.transform = '';
        journeyTimelineBack.style.zIndex = '';
        journeyTimelineData.hasStarted = false;
        return;
      }

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const rect = journeyTimeline.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      const triggerPoint = scrollY + windowHeight * 0.5;

      if (!journeyTimelineData.hasStarted && triggerPoint >= elementTop) {
        journeyTimelineData.hasStarted = true;
        journeyTimelineData.startScroll = scrollY;
      }

      if (journeyTimelineData.hasStarted) {
        const progress = Math.min(
          1,
          Math.max(0, (scrollY - journeyTimelineData.startScroll) / journeyTimelineData.pageRange)
        );

        const rotateY = 180 - 180 * progress;

        journeyTimeline.style.transform = `rotateY(${rotateY}deg)`;
        journeyTimelineBack.style.transform = `rotateY(${rotateY}deg)`;

        if (rotateY > 95) {
          journeyTimeline.style.zIndex = '1';
          journeyTimelineBack.style.zIndex = '100';
        } else {
          journeyTimeline.style.zIndex = '100';
          journeyTimelineBack.style.zIndex = '1';
        }

        if (progress >= 1) {
          journeyTimeline.style.overflowY = 'auto';
        } else {
          journeyTimeline.style.overflowY = 'hidden';
        }
      } else {
        journeyTimeline.style.transform = 'rotateY(180deg)';
        journeyTimelineBack.style.transform = 'rotateY(180deg)';
        journeyTimeline.style.zIndex = '1';
        journeyTimelineBack.style.zIndex = '100';
        journeyTimeline.style.overflowY = 'hidden';
      }
    };

    window.addEventListener('scroll', updateJourneyTimeline);
    window.addEventListener('resize', updateJourneyTimeline);
    updateJourneyTimeline();

    return () => {
      window.removeEventListener('scroll', updateJourneyTimeline);
      window.removeEventListener('resize', updateJourneyTimeline);
    };
  }, []);

  return (
    <section className="section journey-section" id="experience">
      <h2 className="section-title-center">My Projects</h2>
      <div className="journey-container">
        <div className="journey-timeline" ref={timelineRef}>
          <h3 className="timeline-header">Projects Timeline</h3>
          <div className="timeline-list">
            {projects.map((proj) => (
              <div className="timeline-item-flat" id={proj.id} key={proj.id} data-country="India">
                <div className="timeline-dot"></div>
                <div className="timeline-content-flat">
                  <h4 className="timeline-title">{proj.title}</h4>
                  <p className="timeline-date">{proj.date}</p>
                  <p className="timeline-description">{proj.description}</p>
                  <p className="timeline-location">
                    <i className="fas fa-map-marker-alt"></i> {proj.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="journey-timeline-back" ref={timelineBackRef}>
          <svg className="treasure-map-svg" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#f4e7d7" />
            <g transform="translate(320, 80)">
              <circle cx="0" cy="0" r="35" fill="none" stroke="#8B4513" strokeWidth="2" />
              <circle cx="0" cy="0" r="30" fill="none" stroke="#8B4513" strokeWidth="1" />
              <polygon points="0,-30 5,-10 -5,-10" fill="#D2691E" />
              <polygon points="0,30 5,10 -5,10" fill="#8B4513" />
              <polygon points="30,0 10,5 10,-5" fill="#8B4513" />
              <polygon points="-30,0 -10,5 -10,-5" fill="#8B4513" />
              <text x="0" y="-40" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#8B4513">
                N
              </text>
            </g>
            <path
              d="M 80,150 Q 120,200 100,250 T 140,350 Q 160,400 200,420"
              stroke="#D2691E"
              strokeWidth="3"
              fill="none"
              strokeDasharray="8,8"
              strokeLinecap="round"
            />
            <circle cx="80" cy="150" r="8" fill="#8B4513" stroke="#654321" strokeWidth="2" />
            <circle cx="100" cy="250" r="8" fill="#8B4513" stroke="#654321" strokeWidth="2" />
            <circle cx="140" cy="350" r="8" fill="#8B4513" stroke="#654321" strokeWidth="2" />
            <g transform="translate(200, 420)">
              <circle cx="0" cy="0" r="25" fill="#FFD700" opacity="0.3" />
              <line x1="-15" y1="-15" x2="15" y2="15" stroke="#DC143C" strokeWidth="4" strokeLinecap="round" />
              <line x1="15" y1="-15" x2="-15" y2="15" stroke="#DC143C" strokeWidth="4" strokeLinecap="round" />
            </g>
            <g opacity="0.4">
              <polygon points="250,200 270,150 290,200" fill="#8B4513" />
              <polygon points="280,200 300,160 320,200" fill="#A0522D" />
              <polygon points="220,220 245,170 270,220" fill="#8B4513" />
            </g>
            <g opacity="0.4">
              <polygon points="100,450 110,420 120,450" fill="#228B22" />
              <rect x="108" y="450" width="4" height="15" fill="#8B4513" />
              <polygon points="150,480 160,450 170,480" fill="#228B22" />
              <rect x="158" y="480" width="4" height="15" fill="#8B4513" />
              <polygon points="70,500 80,470 90,500" fill="#228B22" />
              <rect x="78" y="500" width="4" height="15" fill="#8B4513" />
            </g>
            <g opacity="0.3">
              <path d="M 40,300 Q 50,295 60,300 T 80,300" stroke="#4682B4" strokeWidth="2" fill="none" />
              <path d="M 40,310 Q 50,305 60,310 T 80,310" stroke="#4682B4" strokeWidth="2" fill="none" />
              <path d="M 280,520 Q 290,515 300,520 T 320,520" stroke="#4682B4" strokeWidth="2" fill="none" />
              <path d="M 280,530 Q 290,525 300,530 T 320,530" stroke="#4682B4" strokeWidth="2" fill="none" />
            </g>
            <rect x="10" y="10" width="380" height="580" fill="none" stroke="#8B4513" strokeWidth="3" strokeDasharray="10,5" />
          </svg>
        </div>

        <JourneyMap />
      </div>
    </section>
  );
};
