import React from 'react';
import './Header.css';

// 1. Receive the onProfileClick prop
const Header = ({ onProfileClick }) => {
  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">
          Trip<span className="logo-verse">Verse</span>
        </a>
        <nav>
          <ul>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">AI Trip Planner</a></li>
            <li><a href="#">Smart Tour Guide</a></li>
            <li>
              {/* 2. Change <a> to <button> for better accessibility */}
              {/* 3. Add the onClick event handler */}
              <button onClick={onProfileClick} className="profile-link" aria-label="User Profile">
                <svg
                  className="profile-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;