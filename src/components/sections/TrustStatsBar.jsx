import React from 'react';
import './TrustStatsBar.css';

export const TrustStatsBar = () => {
  const stats = [
    { number: '₹10Cr+', label: 'Client Revenue Generated' },
    { number: '4.8x', label: 'Average ROAS Achieved' },
    { number: '150K+', label: 'Qualified Leads Delivered' },
    { number: '98%', label: 'Client Retention Rate' }
  ];

  return (
    <section className="trust-stats-section">
      <div className="container">
        <div className="trust-stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="trust-stat-item">
              <div className="trust-stat-number">
                {stat.number}
              </div>
              <div className="trust-stat-label">
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
