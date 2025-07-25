import * as React from 'react';
import './InvestInEgypt.css';

export interface HeroSectionProps {}

export const HeroSection: React.StatelessComponent<HeroSectionProps> = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Invest in Egypt
              <span className="hero-subtitle">Gateway to Africa & the Middle East</span>
            </h1>
            <p className="hero-description">
              Discover unparalleled investment opportunities in one of the world's fastest-growing economies. 
              Egypt offers strategic location, rich resources, and a thriving business environment.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <h3>104M+</h3>
                <p>Population</p>
              </div>
              <div className="stat-item">
                <h3>$469B</h3>
                <p>GDP</p>
              </div>
              <div className="stat-item">
                <h3>7.1%</h3>
                <p>GDP Growth</p>
              </div>
            </div>
            <div className="hero-actions">
              <button className="btn btn-primary">Start Investing</button>
              <button className="btn btn-secondary">Download Investment Guide</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};