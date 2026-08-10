import React from 'react';
import SEO from '../components/sections/SEO';
import SectionHeader from '../components/ui/SectionHeader';
import ServiceCard from '../components/sections/ServiceCard';
import CTABanner from '../components/sections/CTABanner';
import ProcessSteps from '../components/sections/ProcessSteps';
import { categoriesList } from '../data/servicesData';
import './Services.css';

export const Services = () => {
  return (
    <>
      <SEO
        title="Full Digital Marketing & Growth Services"
        description="Explore The Social Setu full range of digital marketing services: Social Media Management, Meta Ads, Google Ads, SEO, Web Development, Branding, and Growth Consultation."
      />

      <section className="services-hero">
        <div className="container">
          <SectionHeader
            badgeText="OUR SERVICES"
            title="Complete Digital Marketing Infrastructure for Indian Businesses"
            subtitle="Data-backed, ROI-focused solutions organized by domain expertise to scale your leads, brand presence, and online sales."
            dark={true}
          />
        </div>
      </section>

      {/* ALL SERVICES GROUPED BY DOMAIN CATEGORIES */}
      <div className="services-categories-container" style={{ padding: '4rem 0' }}>
        <div className="container">
          {categoriesList.map((cat, catIdx) => (
            <div 
              key={cat.id} 
              className="category-section" 
              style={{ 
                marginBottom: catIdx === categoriesList.length - 1 ? 0 : '4.5rem',
                paddingBottom: catIdx === categoriesList.length - 1 ? 0 : '3.5rem',
                borderBottom: catIdx === categoriesList.length - 1 ? 'none' : '1px solid rgba(25, 33, 47, 0.08)'
              }}
            >
              <div className="category-header" style={{ marginBottom: '2rem' }}>
                <span className="badge badge-orange" style={{ fontSize: '0.75rem' }}>DOMAIN CATEGORY</span>
                <h2 style={{ fontSize: '1.85rem', fontWeight: 800, marginTop: '0.4rem', color: 'var(--color-primary-navy)' }}>
                  {cat.title}
                </h2>
              </div>

              <div className="grid-3">
                {cat.services.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProcessSteps />

      <CTABanner
        title="Unsure Which Service Fits Your Business Goals?"
        subtitle="Schedule a free consultation. Our team will audit your current digital channels and recommend a high-ROI roadmap."
      />
    </>
  );
};

export default Services;
