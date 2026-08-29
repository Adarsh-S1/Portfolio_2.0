import React, { useEffect, useRef } from 'react';

export const PaperTear = () => {
  const pageGapRef = useRef(null);
  const paperTearBottomRef = useRef(null);
  const tapeStickerRef = useRef(null);

  useEffect(() => {
    const pageGap = pageGapRef.current;
    const paperTearBottom = paperTearBottomRef.current;
    const tearTapeSticker = tapeStickerRef.current;
    const minGapHeight = -30;

    const updateTapePosition = () => {
      if (paperTearBottom && tearTapeSticker) {
        const rect = paperTearBottom.getBoundingClientRect();
        tearTapeSticker.style.setProperty('--tape-position', `${rect.top}px`);
      }
    };

    const updateGapParallax = () => {
      if (!pageGap || !paperTearBottom) return;

      const isMobile = window.innerWidth <= 768;
      if (isMobile) return;

      const scrollY = window.scrollY;
      const initialGapHeight = 300;
      const scrollStart = 100;
      const scrollRange = 200;
      const stickerDelay = 30;
      const stickerStart = scrollStart + scrollRange + stickerDelay;
      const stickerRange = 60;

      updateTapePosition();

      const bgGray = paperTearBottom.querySelector('svg path[fill="#d0d0d0"]');

      if (scrollY <= scrollStart) {
        pageGap.style.setProperty('height', initialGapHeight + 'px', 'important');
        paperTearBottom.style.setProperty('margin-top', '0px', 'important');
        if (bgGray) bgGray.style.opacity = '1';
        if (tearTapeSticker) {
          tearTapeSticker.style.transform = 'rotate(-8deg) translateY(-40px) translateZ(30px) rotateX(35deg)';
          tearTapeSticker.style.opacity = '0';
        }
      } else if (scrollY >= scrollStart && scrollY <= scrollStart + scrollRange) {
        const progress = (scrollY - scrollStart) / scrollRange;
        const currentHeight = initialGapHeight - (initialGapHeight - minGapHeight) * progress;

        if (currentHeight >= 0) {
          pageGap.style.setProperty('height', currentHeight + 'px', 'important');
          paperTearBottom.style.setProperty('margin-top', '0px', 'important');
          if (bgGray) bgGray.style.opacity = '1';
          if (tearTapeSticker) {
            tearTapeSticker.style.transform = 'rotate(-8deg) translateY(-100px) translateZ(50px) rotateX(45deg)';
            tearTapeSticker.style.opacity = '0';
          }
        } else {
          pageGap.style.setProperty('height', '0px', 'important');
          paperTearBottom.style.setProperty('margin-top', currentHeight + 'px', 'important');
          const negativePart = Math.abs(minGapHeight);
          const negativeProgress = Math.abs(currentHeight) / negativePart;
          const opacity = 1 - negativeProgress;

          if (bgGray) bgGray.style.opacity = opacity;
          if (tearTapeSticker) {
            tearTapeSticker.style.transform = 'rotate(-8deg) translateY(-100px) translateZ(50px) rotateX(45deg)';
            tearTapeSticker.style.opacity = '0';
          }
        }
      } else if (scrollY > stickerStart && scrollY < stickerStart + stickerRange) {
        pageGap.style.setProperty('height', '0px', 'important');
        paperTearBottom.style.setProperty('margin-top', minGapHeight + 'px', 'important');
        if (bgGray) bgGray.style.opacity = '0';

        if (tearTapeSticker) {
          const stickerProgress = (scrollY - stickerStart) / stickerRange;
          const translateY = -40 + 40 * stickerProgress;
          const translateZ = 30 - 30 * stickerProgress;
          const rotateX = 35 - 35 * stickerProgress;
          const opacityVal = Math.min(1, Math.max(0, (stickerProgress - 0.35) * 1.54));

          tearTapeSticker.style.transform = `rotate(-8deg) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg)`;
          tearTapeSticker.style.opacity = opacityVal;
        }
      } else if (scrollY >= stickerStart + stickerRange) {
        pageGap.style.setProperty('height', '0px', 'important');
        paperTearBottom.style.setProperty('margin-top', minGapHeight + 'px', 'important');
        if (bgGray) bgGray.style.opacity = '0';
        if (tearTapeSticker) {
          tearTapeSticker.style.transform = 'rotate(-8deg) translateY(0px) translateZ(0px) rotateX(0deg)';
          tearTapeSticker.style.opacity = '1';
        }
      } else {
        pageGap.style.setProperty('height', '0px', 'important');
        paperTearBottom.style.setProperty('margin-top', minGapHeight + 'px', 'important');
        if (bgGray) bgGray.style.opacity = '0';
        if (tearTapeSticker) {
          tearTapeSticker.style.transform = 'rotate(-8deg) translateY(-40px) translateZ(30px) rotateX(35deg)';
          tearTapeSticker.style.opacity = '0';
        }
      }
    };

    window.addEventListener('scroll', updateGapParallax);
    window.addEventListener('resize', updateGapParallax);
    updateGapParallax();

    return () => {
      window.removeEventListener('scroll', updateGapParallax);
      window.removeEventListener('resize', updateGapParallax);
    };
  }, []);

  return (
    <>
      <div className="paper-tear paper-tear-top">
        <svg width="100%" height="30" viewBox="0 0 1440 30" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L0,15 Q10,5 20,15 T40,15 Q50,5 60,15 T80,15 Q90,20 100,15 T120,15 Q130,10 140,15 T160,15 Q170,5 180,15 T200,15 Q210,20 220,15 T240,15 Q250,8 260,15 T280,15 Q290,18 300,15 T320,15 Q330,5 340,15 T360,15 Q370,12 380,15 T400,15 Q410,20 420,15 T440,15 Q450,6 460,15 T480,15 Q490,16 500,15 T520,15 Q530,8 540,15 T560,15 Q570,20 580,15 T600,15 Q610,10 620,15 T640,15 Q650,5 660,15 T680,15 Q690,18 700,15 T720,15 Q730,12 740,15 T760,15 Q770,7 780,15 T800,15 Q810,20 820,15 T840,15 Q850,9 860,15 T880,15 Q890,14 900,15 T920,15 Q930,6 940,15 T960,15 Q970,19 980,15 T1000,15 Q1010,11 1020,15 T1040,15 Q1050,5 1060,15 T1080,15 Q1090,17 1100,15 T1120,15 Q1130,8 1140,15 T1160,15 Q1170,13 1180,15 T1200,15 Q1210,20 1220,15 T1240,15 Q1250,7 1260,15 T1280,15 Q1290,16 1300,15 T1320,15 Q1330,10 1340,15 T1360,15 Q1370,5 1380,15 T1400,15 Q1410,18 1420,15 T1440,15 L1440,0 Z" fill="#ffffff" stroke="none" />
          <path d="M0,30 L0,15 Q10,5 20,15 T40,15 Q50,5 60,15 T80,15 Q90,20 100,15 T120,15 Q130,10 140,15 T160,15 Q170,5 180,15 T200,15 Q210,20 220,15 T240,15 Q250,8 260,15 T280,15 Q290,18 300,15 T320,15 Q330,5 340,15 T360,15 Q370,12 380,15 T400,15 Q410,20 420,15 T440,15 Q450,6 460,15 T480,15 Q490,16 500,15 T520,15 Q530,8 540,15 T560,15 Q570,20 580,15 T600,15 Q610,10 620,15 T640,15 Q650,5 660,15 T680,15 Q690,18 700,15 T720,15 Q730,12 740,15 T760,15 Q770,7 780,15 T800,15 Q810,20 820,15 T840,15 Q850,9 860,15 T880,15 Q890,14 900,15 T920,15 Q930,6 940,15 T960,15 Q970,19 980,15 T1000,15 Q1010,11 1020,15 T1040,15 Q1050,5 1060,15 T1080,15 Q1090,17 1100,15 T1120,15 Q1130,8 1140,15 T1160,15 Q1170,13 1180,15 T1200,15 Q1210,20 1220,15 T1240,15 Q1250,7 1260,15 T1280,15 Q1290,16 1300,15 T1320,15 Q1330,10 1340,15 T1360,15 Q1370,5 1380,15 T1400,15 Q1410,18 1420,15 T1440,15 L1440,30 Z" fill="#d0d0d0" stroke="none" />
          <path d="M0,15 Q10,5 20,15 T40,15 Q50,5 60,15 T80,15 Q90,20 100,15 T120,15 Q130,10 140,15 T160,15 Q170,5 180,15 T200,15 Q210,20 220,15 T240,15 Q250,8 260,15 T280,15 Q290,18 300,15 T320,15 Q330,5 340,15 T360,15 Q370,12 380,15 T400,15 Q410,20 420,15 T440,15 Q450,6 460,15 T480,15 Q490,16 500,15 T520,15 Q530,8 540,15 T560,15 Q570,20 580,15 T600,15 Q610,10 620,15 T640,15 Q650,5 660,15 T680,15 Q690,18 700,15 T720,15 Q730,12 740,15 T760,15 Q770,7 780,15 T800,15 Q810,20 820,15 T840,15 Q850,9 860,15 T880,15 Q890,14 900,15 T920,15 Q930,6 940,15 T960,15 Q970,19 980,15 T1000,15 Q1010,11 1020,15 T1040,15 Q1050,5 1060,15 T1080,15 Q1090,17 1100,15 T1120,15 Q1130,8 1140,15 T1160,15 Q1170,13 1180,15 T1200,15 Q1210,20 1220,15 T1240,15 Q1250,7 1260,15 T1280,15 Q1290,16 1300,15 T1320,15 Q1330,10 1340,15 T1360,15 Q1370,5 1380,15 T1400,15 Q1410,18 1420,15 T1440,15" fill="none" stroke="var(--border)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="page-gap" ref={pageGapRef}></div>

      <div className="paper-tear paper-tear-bottom" ref={paperTearBottomRef}>
        <svg width="100%" height="30" viewBox="0 0 1440 30" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L0,15 Q10,5 20,15 T40,15 Q50,5 60,15 T80,15 Q90,20 100,15 T120,15 Q130,10 140,15 T160,15 Q170,5 180,15 T200,15 Q210,20 220,15 T240,15 Q250,8 260,15 T280,15 Q290,18 300,15 T320,15 Q330,5 340,15 T360,15 Q370,12 380,15 T400,15 Q410,20 420,15 T440,15 Q450,6 460,15 T480,15 Q490,16 500,15 T520,15 Q530,8 540,15 T560,15 Q570,20 580,15 T600,15 Q610,10 620,15 T640,15 Q650,5 660,15 T680,15 Q690,18 700,15 T720,15 Q730,12 740,15 T760,15 Q770,7 780,15 T800,15 Q810,20 820,15 T840,15 Q850,9 860,15 T880,15 Q890,14 900,15 T920,15 Q930,6 940,15 T960,15 Q970,19 980,15 T1000,15 Q1010,11 1020,15 T1040,15 Q1050,5 1060,15 T1080,15 Q1090,17 1100,15 T1120,15 Q1130,8 1140,15 T1160,15 Q1170,13 1180,15 T1200,15 Q1210,20 1220,15 T1240,15 Q1250,7 1260,15 T1280,15 Q1290,16 1300,15 T1320,15 Q1330,10 1340,15 T1360,15 Q1370,5 1380,15 T1400,15 Q1410,18 1420,15 T1440,15 L1440,0 Z" fill="#d0d0d0" stroke="none" />
          <path d="M0,30 L0,15 Q10,5 20,15 T40,15 Q50,5 60,15 T80,15 Q90,20 100,15 T120,15 Q130,10 140,15 T160,15 Q170,5 180,15 T200,15 Q210,20 220,15 T240,15 Q250,8 260,15 T280,15 Q290,18 300,15 T320,15 Q330,5 340,15 T360,15 Q370,12 380,15 T400,15 Q410,20 420,15 T440,15 Q450,6 460,15 T480,15 Q490,16 500,15 T520,15 Q530,8 540,15 T560,15 Q570,20 580,15 T600,15 Q610,10 620,15 T640,15 Q650,5 660,15 T680,15 Q690,18 700,15 T720,15 Q730,12 740,15 T760,15 Q770,7 780,15 T800,15 Q810,20 820,15 T840,15 Q850,9 860,15 T880,15 Q890,14 900,15 T920,15 Q930,6 940,15 T960,15 Q970,19 980,15 T1000,15 Q1010,11 1020,15 T1040,15 Q1050,5 1060,15 T1080,15 Q1090,17 1100,15 T1120,15 Q1130,8 1140,15 T1160,15 Q1170,13 1180,15 T1200,15 Q1210,20 1220,15 T1240,15 Q1250,7 1260,15 T1280,15 Q1290,16 1300,15 T1320,15 Q1330,10 1340,15 T1360,15 Q1370,5 1380,15 T1400,15 Q1410,18 1420,15 T1440,15 L1440,30 Z" fill="#ffffff" stroke="none" />
          <path d="M0,15 Q10,5 20,15 T40,15 Q50,5 60,15 T80,15 Q90,20 100,15 T120,15 Q130,10 140,15 T160,15 Q170,5 180,15 T200,15 Q210,20 220,15 T240,15 Q250,8 260,15 T280,15 Q290,18 300,15 T320,15 Q330,5 340,15 T360,15 Q370,12 380,15 T400,15 Q410,20 420,15 T440,15 Q450,6 460,15 T480,15 Q490,16 500,15 T520,15 Q530,8 540,15 T560,15 Q570,20 580,15 T600,15 Q610,10 620,15 T640,15 Q650,5 660,15 T680,15 Q690,18 700,15 T720,15 Q730,12 740,15 T760,15 Q770,7 780,15 T800,15 Q810,20 820,15 T840,15 Q850,9 860,15 T880,15 Q890,14 900,15 T920,15 Q930,6 940,15 T960,15 Q970,19 980,15 T1000,15 Q1010,11 1020,15 T1040,15 Q1050,5 1060,15 T1080,15 Q1090,17 1100,15 T1120,15 Q1130,8 1140,15 T1160,15 Q1170,13 1180,15 T1200,15 Q1210,20 1220,15 T1240,15 Q1250,7 1260,15 T1280,15 Q1290,16 1300,15 T1320,15 Q1330,10 1340,15 T1360,15 Q1370,5 1380,15 T1400,15 Q1410,18 1420,15 T1440,15" fill="none" stroke="var(--border)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="tear-tape-sticker" ref={tapeStickerRef}></div>
    </>
  );
};

