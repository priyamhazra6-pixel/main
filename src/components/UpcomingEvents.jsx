import React, { useState, useRef, useEffect } from 'react';
import './UpcomingEvents.css';

// Import images
import dussehraImg from '../assets/event-dussehra.png';
import diwaliImg from '../assets/event-diwali.jpg';
import pushkarImg from '../assets/event-pushkar.png';
import hornbillImg from '../assets/event-hornbill.png';
import rannImg from '../assets/event-rann.png';
import kitesImg from '../assets/event-kites.png';

const eventsData = [
  { id: 1, name: 'Dussehra', date: 'October 2, 2025', image: dussehraImg, description: 'Witness fiery effigies burn, symbolizing the triumph of good over evil.' },
  { id: 2, name: 'Diwali', date: 'October 21, 2025', image: diwaliImg, description: 'Join millions in lighting diyas in this dazzling five-day festival of lights.' },
  { id: 3, name: 'Pushkar Camel Fair', date: 'Mid-November 2025', image: pushkarImg, description: 'A spectacular whirlwind of color, culture, and competitions in the desert.' },
  { id: 4, name: 'Hornbill Festival', date: 'December 1-10, 2025', image: hornbillImg, description: 'Discover the rich tribal heritage of Nagaland in this 10-day extravaganza.' },
  { id: 5, name: 'Rann Utsav', date: 'Nov 2025 - Feb 2026', image: rannImg, description: 'Experience a magical carnival on the stunning white salt desert under the full moon.' },
  { id: 6, name: 'Kite Festival', date: 'January 14, 2026', image: kitesImg, description: 'Watch the skies fill with colorful kites during this joyous harvest celebration.' },
];

const UpcomingEvents = () => {
  const listRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Updated scroll amount for the new 320px card size + 24px gap
  const scrollAmount = 344; 

  const handleScroll = () => {
    if (listRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
      setIsAtStart(scrollLeft < 10);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
    }
  };
  
  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const currentListRef = listRef.current;
    if (currentListRef) {
      handleScroll();
      currentListRef.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);
      return () => {
        currentListRef.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    }
  }, []);

  return (
    <section className="events-section">
      <div className="container">
        <h2>Upcoming Events</h2>
        <p className="section-caption">
          Plan your journey around India's most vibrant cultural celebrations.
        </p>
        <div className="slider-container">
          <div className="events-list" ref={listRef}>
            {eventsData.map((event) => (
              <div key={event.id} className="event-item">
                <img src={event.image} alt={event.name} className="event-image" />
                <div className="event-overlay">
                  <div className="event-date">{event.date}</div>
                  <h3>{event.name}</h3>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-navigation">
            <button onClick={scrollLeft} className="slider-arrow" aria-label="Scroll Left" disabled={isAtStart}>&#10094;</button>
            <button onClick={scrollRight} className="slider-arrow" aria-label="Scroll Right" disabled={isAtEnd}>&#10095;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;