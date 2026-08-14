import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { AlertCircle, Lightbulb, ExternalLink, ArrowLeft, CheckCircle2 } from 'lucide-react';
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
        title={`${study.title} — Industry Case Study`}
        description={study.summary}
      />

      <section className="cs-hero">
        <div className="container">
          <div style={{ maxWidth: '880px' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <Link to="/work" style={{ color: '#94a3b8', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: 600 }}>
                <ArrowLeft size={16} /> Back to Case Studies
              </Link>
            </div>
            <Badge variant="dark" style={{ marginBottom: '1rem' }}>
              {study.industry}
            </Badge>
            <h1 style={{ color: '#fff', marginBottom: '1.25rem', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: 1.25 }}>
              {study.title}
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#94a3b8', marginBottom: '2rem', lineHeight: 1.6 }}>
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

            {/* Hero Main Case Study Image */}
            {study.heroImage && (
              <div style={{ marginTop: '2.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)', boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
                <img src={study.heroImage} alt={study.title} style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '520px', objectFit: 'cover' }} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Metrics Scorecard */}
      <section style={{ backgroundColor: 'var(--color-off-white)', padding: '3rem 0', borderBottom: '1px solid rgba(25, 33, 47, 0.08)' }}>
        <div className="container">
          <div className="grid-4">
            {study.results.map((res, idx) => (
              <div key={idx} className="cs-metric-card">
                <div style={{ fontSize: '2.3rem', fontWeight: 800, color: 'var(--color-primary-orange)', fontFamily: 'var(--font-primary)' }}>
                  {res.metric}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-primary-navy)', fontWeight: 600, marginTop: '0.3rem' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginBottom: '2.5rem' }}>
            <Card style={{ borderLeft: '4px solid #ef4444' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#ef4444', fontWeight: 700, marginBottom: '0.75rem' }}>
                <AlertCircle size={22} />
                <span>THE CHALLENGE</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>Growth Bottleneck</h3>
              <p style={{ fontSize: '0.975rem', color: 'var(--color-body)', lineHeight: 1.65 }}>
                {study.problem}
              </p>
            </Card>

            <Card style={{ borderLeft: '4px solid var(--color-primary-orange)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-primary-orange)', fontWeight: 700, marginBottom: '0.75rem' }}>
                <CheckCircle2 size={22} />
                <span>THE STRATEGY & EXECUTION</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>Tactical Execution</h3>
              <p style={{ fontSize: '0.975rem', color: 'var(--color-body)', lineHeight: 1.65 }}>
                {study.strategy}
              </p>
            </Card>
          </div>

          {/* Secondary Visual Asset / Proof Graphic */}
          {study.secondaryImage && (
            <div style={{ marginBottom: '2.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(25, 33, 47, 0.08)', boxShadow: '0 8px 30px rgba(15,23,38,0.06)' }}>
              <img src={study.secondaryImage} alt={`${study.title} Strategy Blueprint`} style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '480px', objectFit: 'cover' }} />
            </div>
          )}

          {/* Key Takeaway Box */}
          {study.keyTakeaway && (
            <div style={{
              background: 'linear-gradient(135deg, var(--color-dark-navy) 0%, #1e293b 100%)',
              color: '#fff',
              padding: '2.5rem',
              borderRadius: 'var(--radius-md)',
              marginBottom: '2.5rem',
              borderLeft: '5px solid var(--color-primary-orange)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-primary-orange)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
                <Lightbulb size={20} />
                <span>KEY TAKEAWAY</span>
              </div>
              <p style={{ fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.6, color: '#f8fafc', margin: 0 }}>
                "{study.keyTakeaway}"
              </p>
            </div>
          )}

          {/* Source Attribution Note */}
          {study.source && (
            <div style={{
              background: 'var(--color-off-white)',
              padding: '1rem 1.5rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(25, 33, 47, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '0.85rem',
              color: 'var(--color-muted)'
            }}>
              <ExternalLink size={15} style={{ flexShrink: 0 }} />
              <span><strong>Source Credit:</strong> {study.source}</span>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        title="Ready to Achieve Similar Campaign Results?"
        subtitle="Schedule a free strategy consultation with The Social Setu team today."
      />
    </>
  );
};

export default CaseStudyDetail;
