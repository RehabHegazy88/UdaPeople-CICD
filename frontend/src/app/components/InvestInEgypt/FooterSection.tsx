import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt,
  faArrowUp,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  faTwitter, 
  faLinkedin, 
  faYoutube,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

export interface FooterSectionProps {}

export const FooterSection: React.StatelessComponent<FooterSectionProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    investment: [
      { label: 'Why Invest in Egypt', href: '#why-egypt' },
      { label: 'Investment Sectors', href: '#sectors' },
      { label: 'Investment Incentives', href: '#incentives' },
      { label: 'Free Zones', href: '#free-zones' },
      { label: 'Investment Procedures', href: '#procedures' }
    ],
    resources: [
      { label: 'Investment Guide', href: '#investment-guide' },
      { label: 'Legal Framework', href: '#legal-framework' },
      { label: 'Economic Data', href: '#economic-data' },
      { label: 'Success Stories', href: '#success-stories' },
      { label: 'FAQs', href: '#faqs' }
    ],
    sectors: [
      { label: 'Manufacturing', href: '#manufacturing' },
      { label: 'Renewable Energy', href: '#energy' },
      { label: 'Technology & Digital', href: '#technology' },
      { label: 'Tourism & Hospitality', href: '#tourism' },
      { label: 'Real Estate', href: '#real-estate' }
    ],
    support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'Investment Support', href: '#support' },
      { label: 'One-Stop-Shop Services', href: '#services' },
      { label: 'Investor Protection', href: '#protection' },
      { label: '24/7 Hotline', href: 'tel:+2016767' }
    ]
  };

  const socialLinks = [
    { icon: faFacebook, href: 'https://facebook.com/gafi.gov.eg', label: 'Facebook' },
    { icon: faTwitter, href: 'https://twitter.com/gafi_egypt', label: 'Twitter' },
    { icon: faLinkedin, href: 'https://linkedin.com/company/gafi-egypt', label: 'LinkedIn' },
    { icon: faYoutube, href: 'https://youtube.com/gafi-egypt', label: 'YouTube' },
    { icon: faInstagram, href: 'https://instagram.com/gafi_egypt', label: 'Instagram' }
  ];

  const governmentLinks = [
    { label: 'Ministry of Investment', href: 'https://www.miic.gov.eg', external: true },
    { label: 'Central Bank of Egypt', href: 'https://www.cbe.org.eg', external: true },
    { label: 'Ministry of Finance', href: 'https://www.mof.gov.eg', external: true },
    { label: 'Egypt.gov.eg', href: 'https://www.egypt.gov.eg', external: true }
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-column company-info">
              <div className="footer-logo">
                <img src="/assets/egypt-flag.png" alt="Egypt Flag" className="flag-icon" />
                <div className="logo-text">
                  <h3>Invest in Egypt</h3>
                  <span>Gateway to Africa & Middle East</span>
                </div>
              </div>
              <p className="company-description">
                Egypt offers unparalleled investment opportunities with strategic location, 
                rich resources, skilled workforce, and strong government support for investors.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <FontAwesomeIcon icon={faPhone} />
                  <span>+20 2 2684 8600</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>invest@gafi.gov.eg</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>3 Salah Salem Road, Nasr City, Cairo</span>
                </div>
              </div>
            </div>

            {/* Investment Links */}
            <div className="footer-column">
              <h4>Investment</h4>
              <ul className="footer-links">
                {footerLinks.investment.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="footer-column">
              <h4>Resources</h4>
              <ul className="footer-links">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sectors Links */}
            <div className="footer-column">
              <h4>Key Sectors</h4>
              <ul className="footer-links">
                {footerLinks.sectors.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="footer-column">
              <h4>Support</h4>
              <ul className="footer-links">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Government Links Section */}
        <div className="government-links-section">
          <h4>Government Partners</h4>
          <div className="government-links">
            {governmentLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                target={link.external ? '_blank' : '_self'}
                rel={link.external ? 'noopener noreferrer' : ''}
                className="government-link"
              >
                {link.label}
                {link.external && <FontAwesomeIcon icon={faExternalLinkAlt} />}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <h4>Stay Updated</h4>
            <p>Subscribe to receive the latest investment news and opportunities in Egypt</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
                required 
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
          <div className="social-links">
            <h4>Follow Us</h4>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 General Authority for Investment and Free Zones (GAFI). All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#accessibility">Accessibility</a>
              <a href="#sitemap">Sitemap</a>
            </div>
            <div className="language-disclaimer">
              <p>Available in: English | العربية | Français</p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="emergency-contact-footer">
          <div className="emergency-info">
            <h5>24/7 Investor Hotline</h5>
            <p>
              <FontAwesomeIcon icon={faPhone} />
              <strong>+20 16767</strong>
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <button 
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </footer>
  );
};