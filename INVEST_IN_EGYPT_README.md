# Invest in Egypt Website

A comprehensive website showcasing investment opportunities in Egypt, built with React and TypeScript.

## 🏛️ Overview

The Invest in Egypt website is designed to attract foreign investors by presenting Egypt's economic advantages, investment sectors, incentives, and success stories. The website serves as a digital gateway for potential investors to learn about opportunities and connect with investment authorities.

## 🚀 Features

### 📱 Responsive Design
- Modern, mobile-first design
- Optimized for desktop, tablet, and mobile devices
- Smooth animations and transitions

### 🎨 Design Elements
- Egyptian flag colors (Red, Black, Gold)
- Professional typography and spacing
- High-quality imagery and icons
- Consistent branding throughout

## 📋 Website Sections

### 1. 🏠 Header Navigation
- **Component**: `HeaderNavigation.tsx`
- Sticky navigation with dropdown menus
- Language selector (English, Arabic, French)
- Mobile-responsive hamburger menu
- Quick contact information bar

### 2. 🎯 Hero Section
- **Component**: `HeroSection.tsx`
- Compelling headline and value proposition
- Key economic statistics (Population, GDP, Growth Rate)
- Call-to-action buttons
- Background overlay with Egyptian imagery

### 3. 🌟 Why Egypt Section
- **Component**: `WhyEgyptSection.tsx`
- Six key advantages:
  - Strategic Location
  - Diversified Economy
  - Large Workforce
  - Economic Growth
  - Infrastructure
  - Human Capital
- Economic reforms highlights
- Investment incentives overview

### 4. 🏭 Investment Sectors Section
- **Component**: `InvestmentSectorsSection.tsx`
- Eight major sectors:
  - Manufacturing ($45B+ investment)
  - Renewable Energy ($20B+ investment)
  - Technology & Digital ($8B+ investment)
  - Tourism & Hospitality ($15B+ investment)
  - Real Estate ($30B+ investment)
  - Pharmaceuticals ($5B+ investment)
  - Agriculture ($12B+ investment)
  - Infrastructure ($50B+ investment)
- Key opportunities for each sector
- Special Economic Zones information

### 5. 💰 Incentives Section
- **Component**: `IncentivesSection.tsx`
- Tax incentives and benefits
- Investment protection mechanisms
- Free zones advantages
- Streamlined procedures
- Investment Law No. 72 of 2017 details

### 6. 📊 Economic Data Section
- **Component**: `EconomicDataSection.tsx`
- Key economic metrics with interactive cards
- Economic indicators and rankings
- Trade and commerce data
- Growth projections for 2024-2026
- International rankings and comparisons

### 7. 💬 Testimonials Section
- **Component**: `TestimonialsSection.tsx`
- Success stories from international investors
- Star ratings and investment amounts
- Major company case studies (Vodafone, Samsung, BMW)
- Investor satisfaction statistics
- Call-to-action for new investors

### 8. 📞 Contact Section
- **Component**: `ContactSection.tsx`
- Multiple contact methods (phone, email, address, website)
- Investment consultation booking
- Comprehensive contact form with sector selection
- Office locations (Cairo, Alexandria, Suez Canal)
- 24/7 investor support hotline

### 9. 🔗 Footer Section
- **Component**: `FooterSection.tsx`
- Comprehensive link organization
- Government partner links
- Newsletter subscription
- Social media links
- Emergency contact information
- Back-to-top functionality

## 🎨 Styling

### CSS Architecture
- **File**: `InvestInEgypt.css`
- CSS custom properties for consistent theming
- Modular component-based styling
- Responsive grid layouts
- Smooth animations and transitions

### Color Scheme
```css
--primary-color: #c41e3a;   /* Egyptian Red */
--secondary-color: #000000;  /* Black */
--tertiary-color: #ffd700;   /* Gold */
--text-color: #333333;       /* Dark Gray */
--background-light: #f8f9fa; /* Light Gray */
```

### Typography
- Font Family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Hierarchical heading sizes (3rem to 1rem)
- Consistent line heights (1.6 for body text)

## 🛠️ Technical Implementation

### Component Structure
```
src/app/components/InvestInEgypt/
├── index.ts                      # Export barrel
├── InvestInEgyptPage.tsx         # Main page component
├── HeaderNavigation.tsx          # Navigation header
├── HeroSection.tsx               # Hero banner
├── WhyEgyptSection.tsx           # Advantages section
├── InvestmentSectorsSection.tsx  # Sectors overview
├── IncentivesSection.tsx         # Investment incentives
├── EconomicDataSection.tsx       # Economic statistics
├── TestimonialsSection.tsx       # Success stories
├── ContactSection.tsx            # Contact information
├── FooterSection.tsx             # Footer links
└── InvestInEgypt.css            # Comprehensive styles
```

### Dependencies
- React with TypeScript
- FontAwesome icons (solid and brands)
- React Router for navigation
- CSS Grid and Flexbox for layouts

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1024px
- **Mobile**: 480px to 768px
- **Small Mobile**: Below 480px

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Access the Website**
   - Main page: `http://localhost:3000/`
   - Direct route: `http://localhost:3000/invest-in-egypt`

## 📊 Key Statistics Featured

- **Population**: 104M+
- **GDP**: $469B
- **GDP Growth**: 7.1%
- **FDI**: $9.8B (2023)
- **Investor Satisfaction**: 92%
- **International Companies**: 1,200+

## 🏢 Government Entities

- **GAFI**: General Authority for Investment and Free Zones
- **Ministry of Investment**: Primary government body
- **Central Bank of Egypt**: Financial regulations
- **Ministry of Finance**: Economic policies

## 📞 Contact Information

- **Hotline**: +20 16767 (24/7)
- **Email**: invest@gafi.gov.eg
- **Address**: 3 Salah Salem Road, Nasr City, Cairo
- **Website**: www.gafi.gov.eg

## 🌐 Multi-language Support

The website is designed to support multiple languages:
- English (default)
- Arabic (العربية)
- French (Français)

## 🔧 Customization

### Adding New Sectors
1. Update the `sectors` array in `InvestmentSectorsSection.tsx`
2. Add corresponding icons from FontAwesome
3. Include investment amounts and opportunities

### Modifying Contact Information
1. Update contact details in `ContactSection.tsx`
2. Modify office locations and contact methods
3. Update emergency contact information

### Updating Economic Data
1. Refresh statistics in `EconomicDataSection.tsx`
2. Update key metrics with current data
3. Modify economic indicators and rankings

## 📈 Performance Optimizations

- Optimized images and icons
- Efficient CSS with minimal redundancy
- Component-based architecture for reusability
- Responsive images for different screen sizes

## 🎯 Call-to-Actions

The website includes multiple strategic CTAs:
- "Start Investing" buttons
- "Download Investment Guide" links
- "Schedule Consultation" options
- Newsletter subscription
- Contact form submissions

## 📱 Mobile Experience

- Touch-friendly interface
- Optimized typography for mobile reading
- Collapsible navigation menu
- Swipe-friendly testimonials
- Mobile-optimized forms

This comprehensive website serves as a powerful tool for attracting international investment to Egypt by showcasing the country's economic strengths, investment opportunities, and investor-friendly environment.