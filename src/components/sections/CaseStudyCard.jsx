import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

export const CaseStudyCard = ({ study }) => {
  const primaryResult = study.results && study.results[0];

  return (
    <Card className="case-study-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ marginBottom: '1rem' }}>
        <Badge variant="light">{study.industry}</Badge>
      </div>

      <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{study.client}</h3>
      <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
        {study.summary}
      </p>

      {primaryResult && (
        <div style={{
          backgroundColor: '#FFF7ED',
          border: '1px solid rgba(250, 119, 16, 0.2)',
          padding: '1rem',
          borderRadius: 'var(--radius-sm)',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{
            fontSize: '1.75rem',
            fontWeight: 800,
            color: 'var(--color-primary-orange)',
            fontFamily: 'var(--font-primary)'
          }}>
            {primaryResult.metric}
          </div>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary-navy)' }}>
            {primaryResult.label}
          </div>
        </div>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
        {study.servicesUsed?.map((service, idx) => (
          <span key={idx} style={{
            fontSize: '0.75rem',
            background: '#f1f5f9',
            color: 'var(--color-body)',
            padding: '0.2rem 0.6rem',
            borderRadius: '4px',
            fontWeight: 500
          }}>
            {service}
          </span>
        ))}
      </div>

      <Link
        to={`/work/${study.slug}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'var(--font-primary)',
          fontWeight: 700,
          color: 'var(--color-primary-navy)',
          textDecoration: 'none',
          marginTop: 'auto'
        }}
      >
        <span>Read Full Case Study</span>
        <ArrowRight size={16} color="var(--color-primary-orange)" />
      </Link>
    </Card>
  );
};

export default CaseStudyCard;
