import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="glass-morphism-footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p>&copy; 2024 PET SIMULATOR </p>
      </div>
    </footer>
  );
}