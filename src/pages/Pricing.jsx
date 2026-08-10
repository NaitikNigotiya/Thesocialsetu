import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, AlertCircle, Info, Sparkles, Check, Minus } from 'lucide-react';
import SEO from '../components/sections/SEO';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import CTABanner from '../components/sections/CTABanner';
import AccordionItem from '../components/ui/AccordionItem';
import { startupPackages, starterPriceList, comparisonRows } from '../data/pricingData';
import './Pricing.css';

export const Pricing = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Handle smooth scroll when navigating to #sme-packages or #ala-carte
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const categories = ['All', 'Social Media', 'Performance Ads', 'Search Engine', 'Web Development', 'Design & Content', 'Consultation & Audits'];

  const filteredPriceList = selectedCategory === 'All'
    ? starterPriceList
    : starterPriceList.filter(item => item.category === selectedCategory);

  const pricingFaqs = [
    {
      question: 'Is client advertising budget / ad spend included in the management fee?',
      answer: 'No. Client ad spend is paid directly to advertising platforms (Meta, Google) via your own payment method. For example, if you spend ₹10,000 on Meta Ads, you pay the ₹10,000 ad spend directly to Meta plus our management fee separately. This ensures you maintain 100% ownership of your ad account and data.'
    },
    {
      question: 'Are there any hidden setup charges or long-term contract lock-ins?',
      answer: 'Zero hidden fees. All our retainers operate on a transparent month-to-month basis. We believe our performance and monthly ROI should earn your business every month.'
    },
    {
      question: 'Can I combine individual starter services into a custom package?',
      answer: 'Yes! While our SETU STARTER, SETU GROW, and SETU PRO packages offer the highest bundled value, you can pick any standalone starter services (e.g. Meta Ads Management + Landing Page) or request a custom proposal.'
    },
    {
      question: 'How do monthly strategy calls work?',
      answer: 'For SETU GROW and SETU PRO clients, we conduct a monthly video/phone strategy call to review lead performance metrics, ad ROAS, content reach, and align on next month’s growth goals.'
    }
  ];

  return (
    <>
      <SEO
        title="Startup Marketing Packages & Starter Price List"
        description="Transparent SME digital marketing packages starting at ₹6,999/mo. Explore SETU STARTER, SETU GROW, SETU PRO, and standalone service price list."
      />

      {/* Hero Header */}
      <section className="pricing-hero">
        <div className="container">
          <SectionHeader
            badgeText="TRANSPARENT SME INVESTMENT"
            title="Predictable Retainer Packages & A La Carte Pricing"
            subtitle="Straightforward month-to-month marketing packages tailored for Indian SMEs with zero long-term contract lock-ins."
            dark={true}
          />

          {/* Interactive Navigation Switcher */}
          <div className="pricing-nav-switcher">
            <button 
              className="switcher-btn active"
              onClick={() => scrollToSection('sme-packages')}
            >
              SME Growth Packages
            </button>
            <button 
              className="switcher-btn"
              onClick={() => scrollToSection('ala-carte')}
            >
              A La Carte Offerings
            </button>
          </div>
        </div>
      </section>

      {/* CRITICAL AD SPEND DISCLAIMER BANNER */}
      <div className="disclaimer-banner-wrapper">
        <div className="container">
          <div className="disclaimer-alert-card">
            <div className="disclaimer-icon">
              <Info size={24} color="var(--color-primary-orange)" />
            </div>
            <div className="disclaimer-content">
              <h4 className="disclaimer-title">Important Note Regarding Advertising Budget</h4>
              <p className="disclaimer-text">
                Client ad spend / advertising budget is <strong>not included</strong> in our management fee. For example, if your business spends ₹10,000 on Meta Ads, you pay the ₹10,000 ad spend directly to Meta plus the package management fee separately. You maintain 100% account and data ownership.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* STARTUP PACKAGES RETAINER CARDS */}
      <section id="sme-packages" className="section packages-section">
        <div className="container">
          <div className="section-title-wrapper" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge badge-orange">SME GROWTH PACKAGES</span>
            <h2 style={{ fontSize: '2.2rem', marginTop: '0.5rem', color: 'var(--color-primary-navy)', fontWeight: 800 }}>
              Startup & SME Retainer Packages
            </h2>
            <p style={{ color: 'var(--color-muted)', maxWidth: '640px', margin: '0.5rem auto 0 auto' }}>
              Select a predictable monthly marketing retainer designed to scale your brand presence, leads, and sales online.
            </p>
          </div>

          <div className="packages-grid">
            {startupPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`package-card ${pkg.popular ? 'popular-card' : ''}`}
              >
                {pkg.popular && <div className="popular-badge-ribbon">MOST POPULAR</div>}

                <div className="package-card-header">
                  <span className="package-badge">{pkg.badgeText}</span>
                  <h3 className="package-name">{pkg.name}</h3>
                  <div className="package-price-box">
                    <span className="package-price">{pkg.price}</span>
                    <span className="package-period">/ month</span>
                  </div>
                  <p className="package-desc">{pkg.description}</p>
                </div>

                <div className="package-features-list">
                  <h5 className="features-title">Package Inclusions:</h5>
                  <ul>
                    {pkg.features.map((feat, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} color="var(--color-primary-orange)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="package-card-footer">
                  <Button 
                    to={pkg.ctaLink} 
                    variant={pkg.popular ? 'primary' : 'outline'} 
                    icon={ArrowRight}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {pkg.ctaText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGE INCLUSIONS COMPARISON TABLE */}
      <section className="section comparison-section" style={{ backgroundColor: 'var(--color-off-white)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge badge-navy">DETAILED BREAKDOWN</span>
            <h2 style={{ fontSize: '2rem', marginTop: '0.5rem', color: 'var(--color-primary-navy)', fontWeight: 800 }}>
              Package Feature Comparison
            </h2>
            <p style={{ color: 'var(--color-muted)', maxWidth: '600px', margin: '0.5rem auto 0 auto' }}>
              Side-by-side comparison of deliverables included across our SETU STARTER, SETU GROW, and SETU PRO plans.
            </p>
          </div>

          <div className="table-responsive-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="feature-col">Includes</th>
                  <th className="tier-col">SETU STARTER <br/><span className="table-price">₹6,999/mo</span></th>
                  <th className="tier-col highlight-col">SETU GROW <br/><span className="table-price">₹11,999/mo</span></th>
                  <th className="tier-col">SETU PRO <br/><span className="table-price">₹19,999/mo</span></th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="feature-name">{row.feature}</td>
                    <td className="cell-value">{row.starter === 'Yes' ? <Check size={18} color="#16a34a" /> : row.starter === '—' ? <Minus size={18} color="#94a3b8" /> : row.starter}</td>
                    <td className="cell-value highlight-col">{row.grow === 'Yes' ? <Check size={18} color="#fa7710" /> : row.grow === '—' ? <Minus size={18} color="#94a3b8" /> : row.grow}</td>
                    <td className="cell-value">{row.pro === 'Yes' || row.pro.startsWith('Yes') ? <span style={{ color: 'var(--color-primary-navy)', fontWeight: 700 }}>{row.pro}</span> : row.pro === '—' ? <Minus size={18} color="#94a3b8" /> : row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* STARTER PRICE LIST (A LA CARTE INDIVIDUAL SERVICES) */}
      <section id="ala-carte" className="section ala-carte-section">
        <div className="container">
          <div className="section-title-wrapper" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge badge-orange">A LA CARTE OFFERINGS</span>
            <h2 style={{ fontSize: '2rem', marginTop: '0.5rem', color: 'var(--color-primary-navy)', fontWeight: 800 }}>
              Starter Price List (Individual Services)
            </h2>
            <p style={{ color: 'var(--color-muted)', maxWidth: '600px', margin: '0.5rem auto 0 auto' }}>
              Need a specific standalone service? Pick from our transparent starter price list below.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="pricing-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Price List Grid */}
          <div className="starter-price-grid">
            {filteredPriceList.map((item, index) => (
              <div key={index} className="price-item-card">
                <div className="price-item-left">
                  <span className="item-category-tag">{item.category}</span>
                  <h4 className="item-service-name">{item.service}</h4>
                </div>
                <div className="price-item-right">
                  <span className="item-starter-price">{item.price}</span>
                  <Button to={`/inquiry?service=${encodeURIComponent(item.service)}`} variant="outline" size="sm" icon={ArrowRight}>
                    Enquire
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING FAQS */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <SectionHeader
            badgeText="PRICING FAQ"
            title="Frequently Asked Questions About Retainers & Billing"
            subtitle="Everything you need to know about ad budgets, monthly retainers, and client onboarding."
          />

          <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-md)', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            {pricingFaqs.map((faq, idx) => (
              <AccordionItem key={idx} question={faq.question} answer={faq.answer} defaultOpen={idx === 0} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Scale Your Business with Predictable Marketing?"
        subtitle="Schedule a free strategy call today. We'll help you select the exact package or custom scope for your growth goals."
      />
    </>
  );
};

export default Pricing;
