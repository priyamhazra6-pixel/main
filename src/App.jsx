import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PopularStates from './components/PopularStates';
import CultureSection from './components/CultureSection';
import FeaturesSection from './components/FeaturesSection'; // 1. Import the new component
import UpcomingEvents from './components/UpcomingEvents';
import BookingSection from './components/BookingSection';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';
import LoginSignupModal from './components/LoginSignupModal';
import './App.css';

function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  return (
    <div className={`App ${isLoginVisible ? 'modal-open' : ''}`}>
      <Header onProfileClick={toggleLoginModal} />
      <main>
        <Hero />
        <CultureSection /> 
        <PopularStates />
        <FeaturesSection /> {/* 2. Add it here */}
        <UpcomingEvents />
        <BookingSection />
        <DownloadApp />
      </main>
      <Footer />
      {isLoginVisible && <LoginSignupModal onClose={toggleLoginModal} />}
    </div>
  );
}

export default App;