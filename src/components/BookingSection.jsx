import React from 'react';
import './BookingSection.css';

const BookingSection = () => {
  return (
    <section className="booking-section">
      <div className="container">
        <div className="booking-left-col">
          <div className="section-intro-text">
            <h3>Getting Around India</h3>
            {/* Updated title structure for two-tone color */}
            <h2><span>Plan Your</span> Trip</h2>
            <p>
              India, a land of boundless wonders, awaits your discovery. From the majestic snow-capped peaks of the Himalayas to the tranquil backwaters of Kerala, every journey here is a unique story. Use our flight search to find the best routes to ancient cities and breathtaking landscapes. Let's begin crafting your unforgettable adventure.
            </p>
          </div>

          <div className="booking-form-card">
            <h3>Getting to the Destination</h3>
            <h2>Flight Search</h2>
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="from">FROM</label>
                  <input type="text" id="from" /> 
                </div>
                <div className="form-group">
                  <label htmlFor="to">TO</label>
                  <input type="text" id="to" /> 
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="departure">DEPARTURE</label>
                  <input type="text" id="departure" /> 
                </div>
                <div className="form-group">
                  <label htmlFor="return">RETURN</label>
                  <input type="text" id="return" /> 
                </div>
              </div>
              <div className="form-row passengers">
                <div className="form-group">
                  <label htmlFor="adult">Adult</label>
                  <select id="adult">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="children">Children</label>
                  <select id="children">
                    <option>0 Children</option>
                    <option>1 Child</option>
                    <option>2 Children</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="infant">Infant</label>
                  <select id="infant">
                    <option>0 Infant</option>
                    <option>1 Infant</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="search-flights-btn">Search Flights</button>
            </form>
          </div>
        </div>
        <div className="booking-right-col">
          <img src="/india-map.png" alt="Stylized map of India" className="map-image" />
          <button className="view-maps-btn">View Maps</button>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;