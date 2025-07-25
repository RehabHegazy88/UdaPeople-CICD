import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faIndustry, faUsers, faChartLine, faShip, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export interface WhyEgyptSectionProps {}

export const WhyEgyptSection: React.StatelessComponent<WhyEgyptSectionProps> = () => {
  const advantages = [
    {
      icon: faGlobe,
      title: "Strategic Location",
      description: "Connecting Africa, Asia, and Europe with access to 1.7 billion consumers across multiple trade blocs."
    },
    {
      icon: faIndustry,
      title: "Diversified Economy",
      description: "Robust sectors including manufacturing, energy, tourism, agriculture, and emerging tech industries."
    },
    {
      icon: faUsers,
      title: "Large Workforce",
      description: "104+ million population with growing skilled labor force and competitive wage rates."
    },
    {
      icon: faChartLine,
      title: "Economic Growth",
      description: "Consistent GDP growth averaging 5-7% annually with strong government reform initiatives."
    },
    {
      icon: faShip,
      title: "Infrastructure",
      description: "World-class infrastructure including the Suez Canal, ports, airports, and expanding road networks."
    },
    {
      icon: faGraduationCap,
      title: "Human Capital",
      description: "Strong educational system producing qualified professionals in engineering, medicine, and technology."
    }
  ];

  return (
    <section className="why-egypt-section">
      <div className="container">
        <div className="section-header">
          <h2>Why Invest in Egypt?</h2>
          <p>Egypt offers unique advantages that make it an ideal investment destination</p>
        </div>
        
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-card">
              <div className="advantage-icon">
                <FontAwesomeIcon icon={advantage.icon} />
              </div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="egypt-highlights">
          <div className="highlight-item">
            <h4>Economic Reforms</h4>
            <p>Egypt Vision 2030 focuses on sustainable development, digital transformation, and economic diversification.</p>
          </div>
          <div className="highlight-item">
            <h4>Investment Incentives</h4>
            <p>Attractive tax incentives, free zones, and streamlined processes for foreign investors.</p>
          </div>
          <div className="highlight-item">
            <h4>Political Stability</h4>
            <p>Stable political environment with government commitment to economic growth and investor protection.</p>
          </div>
        </div>
      </div>
    </section>
  );
};