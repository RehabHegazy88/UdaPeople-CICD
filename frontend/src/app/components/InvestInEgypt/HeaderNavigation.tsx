import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export interface HeaderNavigationProps {}

interface HeaderNavigationState {
  isMobileMenuOpen: boolean;
  activeDropdown: string | null;
}

export class HeaderNavigation extends React.Component<HeaderNavigationProps, HeaderNavigationState> {
  constructor(props: HeaderNavigationProps) {
    super(props);
    this.state = {
      isMobileMenuOpen: false,
      activeDropdown: null
    };
  }

  toggleMobileMenu = () => {
    this.setState({ isMobileMenuOpen: !this.state.isMobileMenuOpen });
  };

  toggleDropdown = (dropdown: string) => {
    this.setState({ 
      activeDropdown: this.state.activeDropdown === dropdown ? null : dropdown 
    });
  };

  render() {
    const { isMobileMenuOpen, activeDropdown } = this.state;

    const navigationItems = [
      {
        label: 'Why Egypt',
        href: '#why-egypt',
        hasDropdown: false
      },
      {
        label: 'Investment Sectors',
        href: '#sectors',
        hasDropdown: true,
        dropdownItems: [
          { label: 'Manufacturing', href: '#manufacturing' },
          { label: 'Renewable Energy', href: '#energy' },
          { label: 'Technology & Digital', href: '#technology' },
          { label: 'Tourism & Hospitality', href: '#tourism' },
          { label: 'Real Estate', href: '#real-estate' },
          { label: 'Pharmaceuticals', href: '#pharmaceuticals' },
          { label: 'Agriculture', href: '#agriculture' },
          { label: 'Infrastructure', href: '#infrastructure' }
        ]
      },
      {
        label: 'Incentives',
        href: '#incentives',
        hasDropdown: false
      },
      {
        label: 'Economic Data',
        href: '#economic-data',
        hasDropdown: false
      },
      {
        label: 'Success Stories',
        href: '#testimonials',
        hasDropdown: false
      },
      {
        label: 'Resources',
        href: '#resources',
        hasDropdown: true,
        dropdownItems: [
          { label: 'Investment Guide', href: '#investment-guide' },
          { label: 'Legal Framework', href: '#legal-framework' },
          { label: 'Free Zones', href: '#free-zones' },
          { label: 'Procedures', href: '#procedures' },
          { label: 'FAQs', href: '#faqs' }
        ]
      }
    ];

    return (
      <header className="header-navigation">
        <div className="container">
          <div className="nav-wrapper">
            {/* Logo */}
            <div className="logo">
              <img src="/assets/egypt-flag.png" alt="Egypt Flag" className="flag-icon" />
              <div className="logo-text">
                <h1>Invest in Egypt</h1>
                <span>Gateway to Africa & Middle East</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <ul className="nav-menu">
                {navigationItems.map((item, index) => (
                  <li 
                    key={index} 
                    className={`nav-item ${item.hasDropdown ? 'has-dropdown' : ''}`}
                    onMouseEnter={() => item.hasDropdown && this.toggleDropdown(item.label)}
                    onMouseLeave={() => item.hasDropdown && this.toggleDropdown(item.label)}
                  >
                    <a href={item.href} className="nav-link">
                      {item.label}
                      {item.hasDropdown && (
                        <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                      )}
                    </a>
                    {item.hasDropdown && activeDropdown === item.label && (
                      <div className="dropdown-menu">
                        {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                          <a 
                            key={dropdownIndex} 
                            href={dropdownItem.href} 
                            className="dropdown-link"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Action Buttons */}
            <div className="nav-actions">
              <div className="language-selector">
                <select className="language-select">
                  <option value="en">English</option>
                  <option value="ar">العربية</option>
                  <option value="fr">Français</option>
                </select>
              </div>
              <button className="btn btn-outline">Investment Guide</button>
              <button className="btn btn-primary">Start Investing</button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={this.toggleMobileMenu}
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="mobile-nav-menu">
              {navigationItems.map((item, index) => (
                <li key={index} className="mobile-nav-item">
                  <div className="mobile-nav-link-wrapper">
                    <a href={item.href} className="mobile-nav-link">
                      {item.label}
                    </a>
                    {item.hasDropdown && (
                      <button 
                        className="mobile-dropdown-toggle"
                        onClick={() => this.toggleDropdown(item.label)}
                      >
                        <FontAwesomeIcon 
                          icon={faChevronDown} 
                          className={activeDropdown === item.label ? 'rotated' : ''}
                        />
                      </button>
                    )}
                  </div>
                  {item.hasDropdown && activeDropdown === item.label && (
                    <div className="mobile-dropdown-menu">
                      {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                        <a 
                          key={dropdownIndex} 
                          href={dropdownItem.href} 
                          className="mobile-dropdown-link"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              <li className="mobile-nav-item">
                <div className="mobile-actions">
                  <button className="btn btn-outline mobile-btn">Investment Guide</button>
                  <button className="btn btn-primary mobile-btn">Start Investing</button>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Info Bar */}
        <div className="quick-info-bar">
          <div className="container">
            <div className="quick-info-items">
              <div className="info-item">
                <span className="info-label">Hotline:</span>
                <span className="info-value">+20 16767</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">invest@gafi.gov.eg</span>
              </div>
              <div className="info-item">
                <span className="info-label">Business Hours:</span>
                <span className="info-value">Sunday - Thursday, 9 AM - 5 PM</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}