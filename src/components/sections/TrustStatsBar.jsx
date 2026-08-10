import React from 'react';

export const TrustStatsBar = () => {
  const stats = [
    { number: '₹10Cr+', label: 'Client Revenue Generated' },
    { number: '4.8x', label: 'Average ROAS Achieved' },
    { number: '150K+', label: 'Qualified Leads Delivered' },
    { number: '98%', label: 'Client Retention Rate' }
  ];

  return (
    <section style={{
      backgroundColor: 'var(--color-primary-navy)',
      color: 'var(--color-white)',
      padding: '3rem 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                fontFamily: 'var(--font-primary)',
                color: 'var(--color-primary-orange)',
                lineHeight: 1
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '0.95rem',
                color: 'rgba(255, 255, 255, 0.8)',
                marginTop: '0.5rem',
                fontWeight: 500
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStatsBar;
