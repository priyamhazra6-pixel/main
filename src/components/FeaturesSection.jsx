import React from 'react';
import './FeaturesSection.css';

// Data for the feature cards, including inline SVG icons
const featuresData = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    title: 'AI Trip Planner',
    description: 'Instantly generate personalized itineraries tailored to your interests and budget.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: 'Smart Recommendations',
    description: 'Discover hidden gems and top-rated spots with suggestions that learn from your preferences.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    title: 'Collaborative Planning',
    description: 'Plan with friends and family in real-time. Share ideas, edit routes, and create the perfect group trip.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: 'Real-time Guide',
    description: 'Navigate with confidence using our live map and guide, offering you tips and alerts as you explore.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m4 0h6M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8c.343 0 .684.017 1.02.05M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Language Guide',
    description: 'Break down barriers with a built-in phrasebook and translation tool for smooth communication.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 4h5m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    title: 'Expense Tracker',
    description: 'Stay on budget effortlessly. Track your spending, split bills, and manage your finances on the go.'
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-header">
          <h2>
            <span className="main-title-line">Your Adventure,</span>
            <br />
            <span className="subtitle-line">Intelligently Planned</span>
          </h2>
          <p className="section-caption">
            We leverage cutting-edge technology to make your travel planning seamless, intuitive, and unforgettable.
          </p>
          <div className="title-divider"></div>
        </div>
        <div className="features-grid">
          {featuresData.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;