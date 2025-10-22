import React from 'react';
import './CultureSection.css';

const CultureSection = () => {
  return (
    <section className="culture-section">
      <div className="container">
        <div className="decorative-divider">
          <svg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10 Q 25 20, 50 10 T 100 10" stroke="#4a3a74" strokeWidth="2" fill="none" />
            <circle cx="50" cy="10" r="4" fill="#4a3a74" />
          </svg>
        </div>
        <h2>A Tapestry of Cultures</h2>
        <p>
          India is a vibrant mosaic of cultures, a land where ancient traditions and diverse customs weave together a breathtaking narrative. From the snow-capped Himalayas to the sun-drenched coasts, every region offers a unique experience. Explore timeless monuments that whisper tales of bygone eras, immerse yourself in the energy of countless festivals, and savor a culinary journey that changes with every border you cross. This is an invitation to experience a thousand different worlds in one incredible nation.
        </p>
      </div>
    </section>
  );
};

export default CultureSection;