import * as React from 'react';
import { HeaderNavigation } from './HeaderNavigation';
import { HeroSection } from './HeroSection';
import { WhyEgyptSection } from './WhyEgyptSection';
import { InvestmentSectorsSection } from './InvestmentSectorsSection';
import { IncentivesSection } from './IncentivesSection';
import { EconomicDataSection } from './EconomicDataSection';
import { TestimonialsSection } from './TestimonialsSection';
import { ContactSection } from './ContactSection';
import { FooterSection } from './FooterSection';

export interface InvestInEgyptPageProps {}

export const InvestInEgyptPage: React.StatelessComponent<InvestInEgyptPageProps> = () => {
  return (
    <div className="invest-in-egypt-page">
      <HeaderNavigation />
      
      <main className="main-content">
        <HeroSection />
        
        <section id="why-egypt">
          <WhyEgyptSection />
        </section>
        
        <section id="sectors">
          <InvestmentSectorsSection />
        </section>
        
        <section id="incentives">
          <IncentivesSection />
        </section>
        
        <section id="economic-data">
          <EconomicDataSection />
        </section>
        
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <FooterSection />
    </div>
  );
};