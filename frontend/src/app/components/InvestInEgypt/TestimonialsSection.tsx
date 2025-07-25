import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

export interface TestimonialsSectionProps {}

export const TestimonialsSection: React.StatelessComponent<TestimonialsSectionProps> = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Global Manufacturing Corp",
      position: "CEO",
      country: "USA",
      quote: "Egypt has provided us with an excellent investment environment. The strategic location, skilled workforce, and government support have made our manufacturing operations highly successful.",
      rating: 5,
      investment: "$50M Manufacturing Facility"
    },
    {
      name: "Ahmed Al-Rashid",
      company: "Middle East Energy Solutions",
      position: "Investment Director",
      country: "UAE",
      quote: "The renewable energy sector in Egypt offers tremendous opportunities. We've been impressed by the infrastructure quality and the streamlined investment procedures.",
      rating: 5,
      investment: "$120M Solar Farm Project"
    },
    {
      name: "Maria Rodriguez",
      company: "TechInnovate Solutions",
      position: "Founder",
      country: "Spain",
      quote: "Egypt's growing tech ecosystem and talented developers have exceeded our expectations. The business environment is becoming increasingly conducive to innovation.",
      rating: 4,
      investment: "$25M Tech Hub Development"
    },
    {
      name: "Chen Wei",
      company: "Asia Pacific Industries",
      position: "Regional Manager",
      country: "China",
      quote: "The logistics advantages of Egypt, especially access to the Suez Canal, have significantly reduced our operational costs and improved supply chain efficiency.",
      rating: 5,
      investment: "$80M Logistics Center"
    },
    {
      name: "James Mitchell",
      company: "European Pharmaceuticals Ltd",
      position: "VP International Operations",
      country: "Germany",
      quote: "Egypt's pharmaceutical sector offers great potential. The regulatory environment is improving, and the local talent pool is exceptional for our R&D operations.",
      rating: 4,
      investment: "$60M Research Facility"
    },
    {
      name: "Fatima Al-Zahra",
      company: "Gulf Tourism Group",
      position: "Development Director",
      country: "Qatar",
      quote: "The tourism sector in Egypt continues to thrive. Our resort investments have generated excellent returns, and the government support has been outstanding.",
      rating: 5,
      investment: "$200M Resort Development"
    }
  ];

  const successStories = [
    {
      company: "Vodafone Egypt",
      sector: "Telecommunications",
      achievement: "Leading mobile operator serving 40M+ subscribers",
      impact: "Created 15,000+ jobs"
    },
    {
      company: "Samsung Electronics",
      sector: "Technology",
      achievement: "Established major manufacturing hub for MENA region",
      impact: "Annual production capacity of 2M units"
    },
    {
      company: "BMW Group",
      sector: "Automotive",
      achievement: "Local assembly plant producing for domestic and export markets",
      impact: "Supporting 5,000+ local jobs"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={index < rating ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>Success Stories</h2>
          <p>Hear from investors who have found success in Egypt</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                  <p className="company">{testimonial.company}</p>
                  <span className="country">{testimonial.country}</span>
                </div>
                <div className="investment-info">
                  <span className="investment-amount">{testimonial.investment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="success-stories-section">
          <h3>Major Success Stories</h3>
          <div className="success-stories-grid">
            {successStories.map((story, index) => (
              <div key={index} className="success-story-card">
                <h4>{story.company}</h4>
                <span className="sector-badge">{story.sector}</span>
                <p className="achievement">{story.achievement}</p>
                <p className="impact">{story.impact}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="investor-statistics">
          <h3>Investor Satisfaction</h3>
          <div className="statistics-grid">
            <div className="stat-item">
              <h4>92%</h4>
              <p>Investor Satisfaction Rate</p>
            </div>
            <div className="stat-item">
              <h4>1,200+</h4>
              <p>International Companies</p>
            </div>
            <div className="stat-item">
              <h4>89%</h4>
              <p>Would Recommend Egypt</p>
            </div>
            <div className="stat-item">
              <h4>78%</h4>
              <p>Plan to Expand Operations</p>
            </div>
          </div>
        </div>

        <div className="testimonials-cta">
          <h3>Join Successful Investors in Egypt</h3>
          <p>Become part of Egypt's growing investment community</p>
          <button className="btn btn-primary">Schedule Consultation</button>
        </div>
      </div>
    </section>
  );
};