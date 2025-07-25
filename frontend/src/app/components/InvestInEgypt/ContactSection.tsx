import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt, 
  faGlobe,
  faCalendar,
  faDownload
} from '@fortawesome/free-solid-svg-icons';

export interface ContactSectionProps {}

export const ContactSection: React.StatelessComponent<ContactSectionProps> = () => {
  const contactMethods = [
    {
      icon: faPhone,
      title: "Call Us",
      info: "+20 2 2684 8600",
      description: "Speak directly with our investment advisors"
    },
    {
      icon: faEnvelope,
      title: "Email Us",
      info: "invest@gafi.gov.eg",
      description: "Send us your investment inquiries"
    },
    {
      icon: faMapMarkerAlt,
      title: "Visit Us",
      info: "3 Salah Salem Road, Nasr City, Cairo",
      description: "Meet our team at GAFI headquarters"
    },
    {
      icon: faGlobe,
      title: "Website",
      info: "www.gafi.gov.eg",
      description: "Access online services and resources"
    }
  ];

  const services = [
    {
      icon: faCalendar,
      title: "Schedule Consultation",
      description: "Book a free consultation with our investment experts to discuss your project"
    },
    {
      icon: faDownload,
      title: "Download Investment Guide",
      description: "Get comprehensive guides covering sectors, procedures, and incentives"
    }
  ];

  const offices = [
    {
      location: "Cairo Office",
      address: "3 Salah Salem Road, Nasr City, Cairo",
      phone: "+20 2 2684 8600",
      email: "cairo@gafi.gov.eg"
    },
    {
      location: "Alexandria Office",
      address: "14 El Horreya Road, Alexandria",
      phone: "+20 3 484 0820",
      email: "alexandria@gafi.gov.eg"
    },
    {
      location: "Suez Canal Office",
      address: "Ismailia Free Zone, Ismailia",
      phone: "+20 64 391 8040",
      email: "suez@gafi.gov.eg"
    }
  ];

  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Start Your Investment Journey</h2>
          <p>Get in touch with our investment experts to begin your Egypt investment journey</p>
        </div>

        <div className="contact-methods-grid">
          {contactMethods.map((method, index) => (
            <div key={index} className="contact-method-card">
              <div className="contact-icon">
                <FontAwesomeIcon icon={method.icon} />
              </div>
              <h3>{method.title}</h3>
              <p className="contact-info">{method.info}</p>
              <p className="contact-description">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="services-section">
          <h3>Our Services</h3>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <FontAwesomeIcon icon={service.icon} className="service-icon" />
                <div className="service-content">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <button className="btn btn-outline">Get Started</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form-section">
          <h3>Send us a Message</h3>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="sector">Investment Sector</label>
              <select id="sector" name="sector" required>
                <option value="">Select a sector</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="energy">Renewable Energy</option>
                <option value="technology">Technology & Digital</option>
                <option value="tourism">Tourism & Hospitality</option>
                <option value="real-estate">Real Estate</option>
                <option value="pharmaceuticals">Pharmaceuticals</option>
                <option value="agriculture">Agriculture</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="investment-size">Investment Size</label>
              <select id="investment-size" name="investment-size">
                <option value="">Select investment range</option>
                <option value="under-1m">Under $1M</option>
                <option value="1m-5m">$1M - $5M</option>
                <option value="5m-10m">$5M - $10M</option>
                <option value="10m-50m">$10M - $50M</option>
                <option value="over-50m">Over $50M</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Tell us about your investment plans..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>

        <div className="offices-section">
          <h3>Our Offices</h3>
          <div className="offices-grid">
            {offices.map((office, index) => (
              <div key={index} className="office-card">
                <h4>{office.location}</h4>
                <div className="office-details">
                  <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {office.address}</p>
                  <p><FontAwesomeIcon icon={faPhone} /> {office.phone}</p>
                  <p><FontAwesomeIcon icon={faEnvelope} /> {office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="emergency-contact">
          <h3>24/7 Investor Support</h3>
          <p>For urgent investment matters, our dedicated support team is available around the clock</p>
          <div className="emergency-info">
            <p><strong>Hotline:</strong> +20 16767</p>
            <p><strong>Email:</strong> support@gafi.gov.eg</p>
          </div>
        </div>
      </div>
    </section>
  );
};