import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faIndustry, 
  faWind, 
  faLaptopCode, 
  faPlane, 
  faHome, 
  faFlask,
  faTractor,
  faHardHat
} from '@fortawesome/free-solid-svg-icons';

export interface InvestmentSectorsSectionProps {}

export const InvestmentSectorsSection: React.StatelessComponent<InvestmentSectorsSectionProps> = () => {
  const sectors = [
    {
      icon: faIndustry,
      title: "Manufacturing",
      description: "Automotive, textiles, food processing, and petrochemicals with competitive production costs.",
      opportunities: ["Automotive assembly", "Textile exports", "Food processing", "Chemical production"],
      investment: "$45B+"
    },
    {
      icon: faWind,
      title: "Renewable Energy",
      description: "Solar and wind energy projects with government support and abundant natural resources.",
      opportunities: ["Solar farms", "Wind power", "Green hydrogen", "Energy storage"],
      investment: "$20B+"
    },
    {
      icon: faLaptopCode,
      title: "Technology & Digital",
      description: "Growing IT sector, fintech, e-commerce, and digital transformation initiatives.",
      opportunities: ["Software development", "Fintech solutions", "E-commerce platforms", "Digital services"],
      investment: "$8B+"
    },
    {
      icon: faPlane,
      title: "Tourism & Hospitality",
      description: "Rich cultural heritage, Red Sea resorts, and growing medical tourism sector.",
      opportunities: ["Hotel development", "Eco-tourism", "Medical tourism", "Cultural sites"],
      investment: "$15B+"
    },
    {
      icon: faHome,
      title: "Real Estate",
      description: "Urban development, new cities, and housing projects for growing population.",
      opportunities: ["Residential projects", "Commercial real estate", "New cities", "Smart buildings"],
      investment: "$30B+"
    },
    {
      icon: faFlask,
      title: "Pharmaceuticals",
      description: "Regional pharmaceutical hub with strong local demand and export potential.",
      opportunities: ["Drug manufacturing", "Medical devices", "Healthcare services", "R&D centers"],
      investment: "$5B+"
    },
    {
      icon: faTractor,
      title: "Agriculture",
      description: "Modern farming techniques, food security initiatives, and export opportunities.",
      opportunities: ["Smart farming", "Food processing", "Agricultural exports", "Irrigation systems"],
      investment: "$12B+"
    },
    {
      icon: faHardHat,
      title: "Infrastructure",
      description: "Mega projects including new capital, transportation, and utilities development.",
      opportunities: ["Transportation", "Utilities", "Smart cities", "Port development"],
      investment: "$50B+"
    }
  ];

  return (
    <section className="investment-sectors-section">
      <div className="container">
        <div className="section-header">
          <h2>Key Investment Sectors</h2>
          <p>Explore diverse investment opportunities across Egypt's thriving sectors</p>
        </div>

        <div className="sectors-grid">
          {sectors.map((sector, index) => (
            <div key={index} className="sector-card">
              <div className="sector-header">
                <div className="sector-icon">
                  <FontAwesomeIcon icon={sector.icon} />
                </div>
                <div className="sector-info">
                  <h3>{sector.title}</h3>
                  <span className="investment-amount">{sector.investment} Investment</span>
                </div>
              </div>
              <p className="sector-description">{sector.description}</p>
              <div className="opportunities">
                <h4>Key Opportunities:</h4>
                <ul>
                  {sector.opportunities.map((opportunity, idx) => (
                    <li key={idx}>{opportunity}</li>
                  ))}
                </ul>
              </div>
              <button className="btn btn-outline">Learn More</button>
            </div>
          ))}
        </div>

        <div className="sector-highlights">
          <div className="highlight-box">
            <h3>Special Economic Zones</h3>
            <p>Egypt offers numerous free zones and special economic zones with tax incentives, customs exemptions, and streamlined procedures for investors.</p>
          </div>
          <div className="highlight-box">
            <h3>Government Support</h3>
            <p>Active government support through investment promotion agencies, one-stop-shop services, and investor protection mechanisms.</p>
          </div>
        </div>
      </div>
    </section>
  );
};