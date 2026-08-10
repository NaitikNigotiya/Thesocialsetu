import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

export const HeroSection = ({
  badgeText = 'MODERN DIGITAL MARKETING AGENCY',
  title = 'Bridge the Gap Between Ad Spend & Measurable Revenue',
  subtitle = 'We engineer high-ROI performance ads, SEO organic engines, and lead generation funnels that help ambitious brands scale effortlessly.',
  primaryCtaText = 'Get Free Growth Audit',
  primaryCtaLink = '/inquiry',
  secondaryCtaText = 'Explore Case Studies',
  secondaryCtaLink = '/work'
}) => {
  return (
    <section className="section" style={{ 
      background: 'linear-gradient(180deg, #F8F8F8 0%, #EFF4FA 100%)',
      paddingTop: '4rem',
      paddingBottom: '5rem',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Hero Left Content */}
          <div>
            <Badge icon={Sparkles} className="mb-3" style={{ marginBottom: '1.25rem' }}>
              {badgeText}
            </Badge>

            <h1 style={{ marginBottom: '1.25rem' }}>
              {title}
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--color-muted)', marginBottom: '2rem' }}>
              {subtitle}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <Button to={primaryCtaLink} variant="primary" icon={ArrowRight}>
                {primaryCtaText}
              </Button>
              <Button to={secondaryCtaLink} variant="outline">
                {secondaryCtaText}
              </Button>
            </div>

            {/* Quick Proof Pills */}
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.925rem', fontWeight: 600, color: 'var(--color-primary-navy)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={18} color="var(--color-primary-orange)" />
                <span>No Long-Term Contracts</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={18} color="var(--color-primary-orange)" />
                <span>Transparent ROAS Dashboards</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={18} color="var(--color-primary-orange)" />
                <span>Data-Driven Execution</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Graphic / Metrics Card */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--color-card-border)',
              position: 'relative',
              zIndex: 2
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span style={{ fontWeight: 700, color: 'var(--color-primary-navy)', fontSize: '1.1rem' }}>Client Growth Trajectory</span>
                <span className="badge" style={{ background: '#ecfdf5', color: '#059669' }}>+340% ROAS</span>
              </div>

              <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--color-muted)', fontWeight: 600 }}>Monthly Revenue Generated</div>
                <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-primary-navy)', fontFamily: 'var(--font-primary)' }}>₹65,40,000</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.4rem', color: '#059669', fontSize: '0.9rem', fontWeight: 600 }}>
                  <TrendingUp size={16} /> <span>Scaled from ₹12L in 7 Months</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>Avg Cost / Lead</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary-orange)' }}>₹140 (-42%)</div>
                </div>
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>Lead Conversion</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>18.4% CVR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
