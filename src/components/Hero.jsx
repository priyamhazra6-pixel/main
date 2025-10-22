import React, { useState, useEffect, useCallback } from 'react';
import './Hero.css';

// 1. Import all six background images
import bg1 from '../assets/hero-background.jpg';
import bg2 from '../assets/hero-2.jpg';
import bg3 from '../assets/hero-3.jpg';
import bg4 from '../assets/hero-4.jpg';
import bg5 from '../assets/hero-5.jpg';
import bg6 from '../assets/hero-6.jpg';

// Add the new images to the array
const images = [bg1, bg2, bg3, bg4, bg5, bg6];
// 2. Change the slide interval to 4 seconds (4000ms)
const SLIDE_INTERVAL = 4000; 

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <section className="hero">
      {/* 3. Render all images and use a class to control visibility */}
      <div className="hero-background-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-background ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <div className="hero-overlay"></div>

      <button onClick={goToPrevious} className="slide-arrow left" aria-label="Previous Slide">
        &#10094;
      </button>
      <button onClick={goToNext} className="slide-arrow right" aria-label="Next Slide">
        &#10095;
      </button>

      <div className="hero-content">
        <h1>
          Discover the <span className="highlight">Soul of India</span>
        </h1>
        <div className="divider"></div>
        <p>Where ancient traditions meet modern adventure. Plan your unforgettable story in the heart of India.</p>
        <button className="cta-button">Explore Now</button>
      </div>
    </section>
  );
};

export default Hero;