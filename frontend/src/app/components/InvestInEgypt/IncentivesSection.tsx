import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPercent, 
  faShieldAlt, 
  faHandshake, 
  faFileContract,
  faClock,
  faGavel
} from '@fortawesome/free-solid-svg-icons';

export interface IncentivesSectionProps {}

export const IncentivesSection: React.StatelessComponent<IncentivesSectionProps> = () => {
  const incentives = [
    {
      icon: faPercent,
      title: "Tax Incentives",
      benefits: [
        "Corporate tax rates as low as 22.5%",
        "Tax holidays up to 10 years for new projects",
        "Reduced customs duties on imported machinery",
        "Accelerated depreciation allowances"
      ]
    },
    {
      icon: faShieldAlt,
      title: "Investment Protection",
      benefits: [
        "Protection against nationalization",
        "Bilateral investment treaties with 100+ countries",
        "International arbitration agreements",
        "Guarantee of profit and capital repatriation"
      ]
    },
    {
      icon: faHandshake,
      title: "Free Zones",
      benefits: [
        "100% foreign ownership allowed",
        "No customs duties on imports/exports",
        "Simplified administrative procedures",
        "World-class infrastructure and services"
      ]
    }
  ];

  const procedures = [
    {
      icon: faFileContract,
      title: "Streamlined Procedures",
      description: "One-stop-shop services through GAFI (General Authority for Investment and Free Zones) for company registration and licensing."
    },
    {
      icon: faClock,
      title: "Fast Processing",
      description: "Company registration completed within 3-7 days with online services and digital documentation."
    },
    {
      icon: faGavel,
      title: "Legal Framework",
      description: "Modern investment law providing comprehensive protection and clear procedures for foreign investors."
    }
  ];

  return (
    <section className="incentives-section">
      <div className="container">
        <div className="section-header">
          <h2>Investment Incentives & Benefits</h2>
          <p>Egypt offers attractive incentives and protection for foreign investors</p>
        </div>

        <div className="incentives-grid">
          {incentives.map((incentive, index) => (
            <div key={index} className="incentive-card">
              <div className="incentive-header">
                <FontAwesomeIcon icon={incentive.icon} className="incentive-icon" />
                <h3>{incentive.title}</h3>
              </div>
              <ul className="benefits-list">
                {incentive.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="procedures-section">
          <h3>Investment Procedures</h3>
          <div className="procedures-grid">
            {procedures.map((procedure, index) => (
              <div key={index} className="procedure-item">
                <FontAwesomeIcon icon={procedure.icon} className="procedure-icon" />
                <div className="procedure-content">
                  <h4>{procedure.title}</h4>
                  <p>{procedure.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="investment-law-section">
          <div className="law-content">
            <h3>Investment Law No. 72 of 2017</h3>
            <p>
              Egypt's comprehensive investment law provides a modern framework for investment with:
            </p>
            <div className="law-features">
              <div className="feature">
                <h4>Investment Guarantees</h4>
                <p>Constitutional and legal guarantees protecting private property and investments</p>
              </div>
              <div className="feature">
                <h4>Dispute Resolution</h4>
                <p>Access to local courts and international arbitration for investment disputes</p>
              </div>
              <div className="feature">
                <h4>Equal Treatment</h4>
                <p>National treatment for foreign investors with no discrimination</p>
              </div>
            </div>
          </div>
        </div>

        <div className="call-to-action">
          <h3>Ready to Invest?</h3>
          <p>Contact our investment team to learn more about incentives available for your project</p>
          <button className="btn btn-primary">Get Investment Guide</button>
        </div>
      </div>
    </section>
  );
};