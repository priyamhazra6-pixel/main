import React from 'react';
import './DownloadApp.css';

const DownloadApp = () => {
  return (
    <section className="download-section">
      <div className="background-image"></div>
      <div className="gradient-overlay"></div>
      
      <div className="container">
        <div className="text-content">
          <div className="divider-line"></div>
          <h2>DOWNLOAD MOBILE APP</h2>
          <p>Your travel guide, right in your pocket. Free Download, Easy to Use.</p>
          {/* Replaced the two badges with a single button */}
          <div className="download-buttons">
            <button className="download-btn">Download App</button>
          </div>
        </div>
        <div className="image-content">
          <img src="/app-mockup.png" alt="TripVerse App Mockup" className="app-mockup-image" />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;