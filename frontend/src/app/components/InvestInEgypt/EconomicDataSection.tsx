import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCoins, faUsers, faIndustry } from '@fortawesome/free-solid-svg-icons';

export interface EconomicDataSectionProps {}

export const EconomicDataSection: React.StatelessComponent<EconomicDataSectionProps> = () => {
  const keyMetrics = [
    {
      icon: faChartLine,
      title: "GDP Growth",
      value: "7.1%",
      description: "Annual GDP growth rate (2023)",
      trend: "+2.3% vs previous year"
    },
    {
      icon: faCoins,
      title: "GDP",
      value: "$469B",
      description: "Nominal GDP (2023)",
      trend: "3rd largest in Africa"
    },
    {
      icon: faUsers,
      title: "Population",
      value: "104M+",
      description: "Total population",
      trend: "Largest in Middle East"
    },
    {
      icon: faIndustry,
      title: "FDI",
      value: "$9.8B",
      description: "Foreign Direct Investment (2023)",
      trend: "+15% vs previous year"
    }
  ];

  const economicIndicators = [
    { label: "Inflation Rate", value: "7.5%", status: "stable" },
    { label: "Unemployment Rate", value: "7.2%", status: "improving" },
    { label: "Current Account Balance", value: "-2.9% of GDP", status: "stable" },
    { label: "Foreign Reserves", value: "$34.8B", status: "strong" },
    { label: "Credit Rating", value: "B+ (Stable)", status: "positive" },
    { label: "Ease of Doing Business", value: "114th globally", status: "improving" }
  ];

  const tradeData = [
    { metric: "Total Trade Volume", value: "$89.2B" },
    { metric: "Main Export Partners", value: "UAE, Italy, Turkey, USA" },
    { metric: "Main Import Partners", value: "China, Germany, USA, Italy" },
    { metric: "Trade Balance", value: "-$28.4B" }
  ];

  return (
    <section className="economic-data-section">
      <div className="container">
        <div className="section-header">
          <h2>Economic Overview</h2>
          <p>Key economic indicators showcasing Egypt's investment potential</p>
        </div>

        <div className="key-metrics-grid">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="metric-icon">
                <FontAwesomeIcon icon={metric.icon} />
              </div>
              <div className="metric-content">
                <h3 className="metric-value">{metric.value}</h3>
                <h4 className="metric-title">{metric.title}</h4>
                <p className="metric-description">{metric.description}</p>
                <span className="metric-trend">{metric.trend}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="indicators-section">
          <h3>Economic Indicators</h3>
          <div className="indicators-grid">
            {economicIndicators.map((indicator, index) => (
              <div key={index} className="indicator-item">
                <div className="indicator-content">
                  <span className="indicator-label">{indicator.label}</span>
                  <span className="indicator-value">{indicator.value}</span>
                </div>
                <span className={`indicator-status ${indicator.status}`}>
                  {indicator.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="trade-section">
          <h3>Trade & Commerce</h3>
          <div className="trade-grid">
            {tradeData.map((trade, index) => (
              <div key={index} className="trade-item">
                <h4>{trade.metric}</h4>
                <p>{trade.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="growth-projections">
          <h3>Growth Projections</h3>
          <div className="projections-content">
            <div className="projection-item">
              <h4>2024-2026 GDP Growth</h4>
              <p>Expected annual growth of 5.5-6.5% driven by economic reforms and infrastructure investments</p>
            </div>
            <div className="projection-item">
              <h4>Infrastructure Investment</h4>
              <p>$100B+ planned investment in infrastructure projects over the next 5 years</p>
            </div>
            <div className="projection-item">
              <h4>Digital Economy</h4>
              <p>Target to increase digital economy contribution to 15% of GDP by 2030</p>
            </div>
          </div>
        </div>

        <div className="rankings-section">
          <h3>International Rankings</h3>
          <div className="rankings-grid">
            <div className="ranking-item">
              <h4>Global Competitiveness</h4>
              <p>93rd out of 141 countries (WEF 2023)</p>
            </div>
            <div className="ranking-item">
              <h4>Economic Freedom</h4>
              <p>130th globally (Heritage Foundation 2023)</p>
            </div>
            <div className="ranking-item">
              <h4>Innovation Index</h4>
              <p>92nd globally (WIPO 2023)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};