import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { PortfolioPage } from './pages/PortfolioPage';
import { TerminalPage } from './pages/TerminalPage';
import { CertificateViewerPage } from './pages/CertificateViewerPage';

export const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/terminal" element={<TerminalPage />} />
          <Route path="/certificate-viewer" element={<CertificateViewerPage />} />
          <Route path="*" element={<PortfolioPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
