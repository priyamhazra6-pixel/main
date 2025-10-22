import React, { useState } from 'react';
import './LoginSignupModal.css';

const LoginSignupModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  const handleToggleForm = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={handleModalContentClick}>
        <button className="close-btn" onClick={onClose} aria-label="Close modal">&times;</button>
        
        <div className="auth-header">
          <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
          <p className="modal-subtitle">
            {isLogin ? 'Log in to plan your next adventure.' : 'Create an account to unlock exclusive features.'}
          </p>
        </div>

        <form>
          {!isLogin && (
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="email">{isLogin ? 'Email Address' : 'Email'}</label>
            <input type="email" id="email" placeholder="you@example.com" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          
          {isLogin && (
            <a href="#" className="forgot-password">Forgot Password?</a>
          )}
          
          <button type="submit" className="primary-auth-btn">
            {isLogin ? 'Log In' : 'Create Account'}
          </button>
        </form>
        
        <div className="separator">
          <span>OR</span>
        </div>
        
        <button className="google-auth-btn">
          <svg className="google-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.19,4.73C14.03,4.73 15.69,5.36 16.95,6.45L19.05,4.36C17.22,2.79 15,2 12.19,2C6.92,2 2.73,6.22 2.73,12C2.73,17.78 6.92,22 12.19,22C17.6,22 21.54,18.33 21.54,12.25C21.54,11.76 21.48,11.43 21.35,11.1Z"></path></svg>
          Continue with Google
        </button>
        
        <p className="toggle-link">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <a href="#" onClick={handleToggleForm}>
            {isLogin ? 'Sign Up' : 'Log In'}
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginSignupModal;