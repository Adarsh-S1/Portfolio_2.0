import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

export const JourneyMap = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const initialView = { center: [10.5276, 76.2144], zoom: 7 };

    const map = L.map(mapRef.current, {
      center: initialView.center,
      zoom: initialView.zoom,
      scrollWheelZoom: false,
      zoomControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 16,
    }).addTo(map);

    const markerIcon = L.divIcon({
      className: 'neo-marker neo-marker-current',
      html: `
        <div class="neo-marker-label neo-marker-label-current">India</div>
        <div class="neo-marker-pin neo-marker-pin-current"></div>
      `,
      iconSize: [35, 35],
      iconAnchor: [17.5, 50],
      popupAnchor: [0, -50],
    });

    const popupContent = `
      <div class="map-popup">
        <div class="map-popup-country">India</div>
        <div class="map-popup-company">
          <strong>Jyothi Engineering College</strong>
          <span>B.Tech AI & Data Science</span>
          <small>Thrissur, Kerala</small>
          <small>2022 - 2026</small>
        </div>
      </div>
    `;

    const marker = L.marker(initialView.center, { icon: markerIcon }).addTo(map);
    marker.bindPopup(popupContent);

    mapInstance.current = map;

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="journey-map-container">
      <div id="journey-map" ref={mapRef}></div>
      <svg className="map-overlay-lines" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#000" strokeWidth="2" opacity="0.8" />
          </pattern>
          <pattern id="scratches" width="200" height="200" patternUnits="userSpaceOnUse">
            <line x1="10" y1="20" x2="60" y2="25" stroke="#000" strokeWidth="2" opacity="0.7" />
            <line x1="100" y1="50" x2="180" y2="48" stroke="#000" strokeWidth="1.5" opacity="0.6" />
            <line x1="30" y1="120" x2="90" y2="115" stroke="#000" strokeWidth="2" opacity="0.7" />
            <line x1="140" y1="160" x2="195" y2="165" stroke="#000" strokeWidth="1.5" opacity="0.6" />
            <line x1="5" y1="180" x2="45" y2="175" stroke="#000" strokeWidth="1.5" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#scratches)" />
      </svg>
      <img
        src="assets/images/pirate.png"
        alt="Pirate"
        className="map-pirate-overlay"
        width="200"
        height="200"
        loading="lazy"
      />
    </div>
  );
};

