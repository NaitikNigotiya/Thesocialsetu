import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

export const PricingCard = ({ tier }) => {
  return (
    <Card
      variant={tier.popular ? 'dark' : 'light'}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        border: tier.popular ? '2px solid var(--color-primary-orange)' : undefined
      }}
    >
      {tier.popular && (
        <div style={{
          position: 'absolute',
          top: '-14px',
          right: '24px',
          background: 'var(--color-primary-orange)',
          color: '#fff',
          fontSize: '0.75rem',
          fontWeight: 800,
          textTransform: 'uppercase',
          padding: '0.25rem 0.85rem',
          borderRadius: 'var(--radius-full)',
          letterSpacing: '0.05em'
        }}>
          Most Popular
        </div>
      )}

      <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: tier.popular ? '#fff' : undefined }}>
        {tier.name}
      </h3>

      <p style={{ fontSize: '0.925rem', color: tier.popular ? '#94a3b8' : 'var(--color-muted)', marginBottom: '1.5rem', minHeight: '44px' }}>
        {tier.description}
      </p>

      <div style={{ marginBottom: '2rem' }}>
        <span style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-primary)', color: tier.popular ? '#fff' : 'var(--color-primary-navy)' }}>
          {tier.price}
        </span>
        <span style={{ fontSize: '0.9rem', color: tier.popular ? '#94a3b8' : 'var(--color-muted)', marginLeft: '0.4rem' }}>
          /{tier.period}
        </span>
      </div>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem', flex: 1 }}>
        {tier.features.map((feature, idx) => (
          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.95rem' }}>
            <Check size={18} color="var(--color-primary-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span style={{ color: tier.popular ? '#e2e8f0' : 'var(--color-body)' }}>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        to={tier.ctaLink}
        variant={tier.popular ? 'primary' : 'outline'}
        icon={ArrowRight}
        style={{ width: '100%' }}
      >
        {tier.ctaText}
      </Button>
    </Card>
  );
};

export default PricingCard;
