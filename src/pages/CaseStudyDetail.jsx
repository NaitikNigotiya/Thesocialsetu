import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { AlertCircle, Lightbulb, Quote } from 'lucide-react';
import SEO from '../components/sections/SEO';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import CTABanner from '../components/sections/CTABanner';
import { caseStudiesData } from '../data/caseStudiesData';
import './CaseStudyDetail.css';

export const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = caseStudiesData.find((item) => item.slug === slug);

  if (!study) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEO
        title={`${study.client} - Case Study`}
        description={study.summary}
      />

      <section className="cs-hero">
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <Badge variant="dark" style={{ marginBottom: '1rem' }}>
              {study.industry} CASE STUDY
            </Badge>
            <h1 style={{ color: '#fff', marginBottom: '1.25rem' }}>{study.client}</h1>
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '2rem', lineHeight: 1.6 }}>
              {study.summary}
            </p>

            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {study.servicesUsed?.map((service, idx) => (
                <span key={idx} style={{
                  background: 'rgba(255,255,255,0.1)',
                  color: 'var(--color-light-orange)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}>
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Scorecard */}
      <section style={{ backgroundColor: 'var(--color-off-white)', padding: '3rem 0', borderBottom: '1px solid rgba(25, 33, 47, 0.08)' }}>
        <div className="container">
          <div className="grid-4">
            {study.results.map((res, idx) => (
              <div key={idx} className="cs-metric-card">
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-primary-orange)', fontFamily: 'var(--font-primary)' }}>
                  {res.metric}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-primary-navy)', fontWeight: 600, marginTop: '0.3rem' }}>
                  {res.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem vs Strategy Breakdown */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
            <Card style={{ borderLeft: '4px solid #ef4444' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#ef4444', fontWeight: 700, marginBottom: '0.75rem' }}>
                <AlertCircle size={22} />
                <span>THE CHALLENGE</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Initial Growth Bottleneck</h3>
              <p style={{ fontSize: '1rem', color: 'var(--color-body)', lineHeight: 1.6 }}>
                {study.problem}
              </p>
            </Card>

            <Card style={{ borderLeft: '4px solid var(--color-primary-orange)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-primary-orange)', fontWeight: 700, marginBottom: '0.75rem' }}>
                <Lightbulb size={22} />
                <span>THE STRATEGY</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Our Tactical Blueprint</h3>
              <p style={{ fontSize: '1rem', color: 'var(--color-body)', lineHeight: 1.6 }}>
                {study.strategy}
              </p>
            </Card>
          </div>

          {/* Testimonial Quote Block */}
          {study.testimonial && (
            <div style={{
              background: 'var(--color-dark-navy)',
              color: '#fff',
              padding: '3rem',
              borderRadius: 'var(--radius-lg)',
              position: 'relative'
            }}>
              <Quote size={48} color="var(--color-primary-orange)" style={{ opacity: 0.3, marginBottom: '1rem' }} />
              <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '1.75rem', lineHeight: 1.6, color: '#f8fafc' }}>
                "{study.testimonial.quote}"
              </p>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', fontFamily: 'var(--font-primary)', color: 'var(--color-primary-orange)' }}>
                  {study.testimonial.author}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  {study.testimonial.designation} • {study.client}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        title="Ready for Similar Campaign Results?"
        subtitle="Schedule a free strategy audit with our growth team to discuss your goals."
      />
    </>
  );
};

export default CaseStudyDetail;
