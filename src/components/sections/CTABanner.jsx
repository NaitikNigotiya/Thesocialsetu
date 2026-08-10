import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

export const CTABanner = ({
  title = 'Ready to Turn Your Marketing Budget into Predictable Revenue?',
  subtitle = 'Schedule a 30-minute free growth audit with our senior strategists. We will analyze your ad accounts, landing page funnels, and organic presence with zero obligation.',
  buttonText = 'Claim Your Free Growth Audit',
  buttonLink = '/inquiry'
}) => {
  return (
    <section className="section section-dark-navy" style={{ textAlignment: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '840px' }}>
        <Badge variant="dark" icon={Sparkles} style={{ marginBottom: '1.25rem' }}>
          SCALE YOUR AGENCY RESULTS
        </Badge>

        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', marginBottom: '1.25rem' }}>
          {title}
        </h2>

        <p style={{ fontSize: '1.15rem', color: '#94a3b8', marginBottom: '2.25rem', lineHeight: 1.6 }}>
          {subtitle}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Button to={buttonLink} variant="primary" icon={ArrowRight} size="lg">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
