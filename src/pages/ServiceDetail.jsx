import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, HelpCircle, ShieldCheck } from 'lucide-react';
import SEO from '../components/sections/SEO';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionHeader from '../components/ui/SectionHeader';
import AccordionItem from '../components/ui/AccordionItem';
import CTABanner from '../components/sections/CTABanner';
import { servicesData } from '../data/servicesData';
import './ServiceDetail.css';

export const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      {/* Unique SEO title and meta description per service slug */}
      <SEO
        title={`${service.name} Services & Deliverables`}
        description={service.shortDesc}
      />

      {/* Service Detail Hero */}
      <section className="service-detail-hero">
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <Badge variant="dark" style={{ marginBottom: '1rem' }}>
              SPECIALIZED SERVICE
            </Badge>
            <h1 style={{ color: '#fff', marginBottom: '1.25rem' }}>{service.name}</h1>
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '2rem', lineHeight: 1.6 }}>
              {service.shortDesc}
            </p>
            <Button to="/inquiry" variant="primary" icon={ArrowRight}>
              Request {service.name} Proposal
            </Button>
          </div>
        </div>
      </section>

      {/* Metrics / Key Stats Banner */}
      {service.statHighlights && service.statHighlights.length > 0 && (
        <section style={{ backgroundColor: 'var(--color-primary-navy)', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '2rem 0' }}>
          <div className="container">
            <div className="grid-3" style={{ textAlign: 'center' }}>
              {service.statHighlights.map((stat, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-primary-orange)', fontFamily: 'var(--font-primary)' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Deliverables Breakdown */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <SectionHeader
                badgeText="WHAT IS INCLUDED"
                title={`Scope of Deliverables for ${service.name}`}
                subtitle="We leave nothing to chance. Here is the exact tangible work output you receive every single month."
                centered={false}
              />

              <div style={{ marginTop: '1.5rem' }}>
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="deliverable-item">
                    <CheckCircle2 size={22} color="var(--color-primary-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--color-primary-navy)', fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Inquiry Card */}
            <Card style={{ backgroundColor: 'var(--color-off-white)', padding: '2.5rem' }}>
              <ShieldCheck size={40} color="var(--color-primary-orange)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Ready to Launch {service.name}?</h3>
              <p style={{ fontSize: '0.975rem', color: 'var(--color-muted)', marginBottom: '1.75rem' }}>
                Speak with our domain lead today. We will share a tailored audit and strategy blueprint within 24 hours.
              </p>
              <Button to="/inquiry" variant="primary" icon={ArrowRight} style={{ width: '100%' }}>
                Get Custom Quote
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section" style={{ backgroundColor: 'var(--color-off-white)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <SectionHeader
              badgeText="FREQUENTLY ASKED QUESTIONS"
              title={`Got Questions About ${service.name}?`}
              subtitle="Everything you need to know about our campaign timelines, pricing model, and deliverables."
            />

            <div style={{ backgroundColor: '#fff', borderRadius: 'var(--radius-md)', padding: '1.5rem 2rem', boxShadow: 'var(--shadow-sm)' }}>
              {service.faqs.map((faq, idx) => (
                <AccordionItem key={idx} question={faq.question} answer={faq.answer} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTABanner */}
      <CTABanner
        title={`Accelerate Revenue with ${service.name}`}
        subtitle="Book a 30-minute discovery call to evaluate your campaign requirements with senior strategists."
      />
    </>
  );
};

export default ServiceDetail;
