import React from 'react';
import SectionHeader from '../ui/SectionHeader';

export const ProcessSteps = ({ title = 'Our Proven 4-Step Growth Blueprint', subtitle = 'A transparent, data-driven framework engineered to remove guesswork and maximize ROI.' }) => {
  const steps = [
    {
      number: '01',
      title: 'Growth Audit & Strategy',
      desc: 'We analyze your market positioning, competitor bottlenecks, tech stack, and ad performance to map out a clear lead acquisition roadmap.'
    },
    {
      number: '02',
      title: 'Funnel & Creative Setup',
      desc: 'Our team crafts high-converting landing pages, persuasive ad creatives, automated lead sequences, and analytics tracking.'
    },
    {
      number: '03',
      title: 'Omnichannel Launch & Scaling',
      desc: 'We launch targeted campaigns across Google, Meta, and WhatsApp, continuously optimizing bids, keywords, and audience segments.'
    },
    {
      number: '04',
      title: 'ROAS Optimization & Scale',
      desc: 'Weekly data analysis, CRO split-testing, and rapid creative iterations guarantee sustained lowering of cost-per-lead as budget scales.'
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <SectionHeader
          badgeText="HOW WE WORK"
          title={title}
          subtitle={subtitle}
        />

        <div className="grid-4" style={{ gap: '1.5rem', marginTop: '3rem' }}>
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--color-off-white)',
                padding: '2rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(25, 33, 47, 0.08)',
                position: 'relative',
                transition: 'transform 0.3s ease'
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                fontFamily: 'var(--font-primary)',
                color: 'var(--color-primary-orange)',
                marginBottom: '1rem',
                opacity: 0.9
              }}>
                {step.number}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{step.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', margin: 0 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
