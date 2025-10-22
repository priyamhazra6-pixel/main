import React from 'react';
import './PopularStates.css';

// Import the images you just added
import rajasthanImg from '../assets/state-rajasthan.jpg';
import keralaImg from '../assets/state-kerala.jpg';
import goaImg from '../assets/state-goa.jpg';
import himachalImg from '../assets/state-himachal.jpg';
import maharashtraImg from '../assets/state-maharashtra.jpg';
import tamilnaduImg from '../assets/state-tamilnadu.jpg';

// Data for our state cards
const statesData = [
  { name: 'Rajasthan', attractions: '180 Destinations', image: rajasthanImg },
  { name: 'Kerala', attractions: '155 Destinations', image: keralaImg },
  { name: 'Goa', attractions: '95 Destinations', image: goaImg },
  { name: 'Himachal', attractions: '120 Destinations', image: himachalImg },
  { name: 'Maharashtra', attractions: '210 Destinations', image: maharashtraImg },
  { name: 'Tamil Nadu', attractions: '165 Destinations', image: tamilnaduImg },
];

const StateCard = ({ state }) => (
  <div className="state-card" style={{ backgroundImage: `url(${state.image})` }}>
    <div className="card-overlay">
      <h3>{state.name}</h3>
      <p>{state.attractions}</p>
    </div>
  </div>
);

const PopularStates = () => {
  return (
    <section className="popular-states-section">
      <div className="container">
        <h2>POPULAR STATES</h2>
        <div className="states-grid">
          {statesData.map((state) => (
            <StateCard key={state.name} state={state} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularStates;