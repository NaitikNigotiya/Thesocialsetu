import React from 'react';
import { CheckCircle2, ArrowRight, Info } from 'lucide-react';
import SEO from '../components/sections/SEO';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import CTABanner from '../components/sections/CTABanner';
import AccordionItem from '../components/ui/AccordionItem';
import { 
  startupPackages, 
  serviceCategoriesData, 
  supportingServicesData, 
  pricingNotice 
} from '../data/pricingData';
import './Pricing.css';

export const Pricing = () => {
  const pricingFaqs = [
    {
      question: 'Is client advertising budget / ad spend included in the management fee?',
      answer: 'No. Client ad spend is paid directly to advertising platforms (Meta, Google) via your own payment method. For example, if your Meta Ads management fee is ₹5,000/mo, your ad spend budget goes directly to Meta. This ensures 100% transparency and ad account ownership.'
    },
    {
      question: 'Are there any hidden setup charges or long-term contract lock-ins?',
      answer: 'Zero hidden fees. All our retainers operate on a transparent month-to-month basis. We believe our campaign performance and monthly lead ROI should earn your business every month.'
    },
    {
      question: 'Can I combine individual starter services into a custom package?',
      answer: 'Yes! While our SETU STARTER, SETU GROW, and SETU PRO packages offer the highest bundled value, you can pick any standalone starter service (e.g. Meta Ads Management + Website Development) or request a custom proposal.'
    },
    {
      question: 'How do monthly strategy calls work?',
      answer: 'For Growth and Pro tier clients, we conduct a monthly strategy call to review lead performance metrics, ad ROAS, content reach, and align on next month’s growth goals.'
    }
  ];

  return (
    <>
      <SEO
        title="Pricing & Packages | Transparent SME Marketing Retainers"
        description="Explore affordable startup-phase pricing for Indian SMEs. Social Media from ₹6,000/mo, Meta Ads from ₹5,000/mo, Google Ads from ₹5,000/mo, and Web Dev from ₹8,000."
      />

      {/* Hero Header & Compact Disclaimer */}
      <section className="pricing-hero">
        <div className="container">
          <SectionHeader
            badgeText="ACCESSIBLE STARTUP PRICING"
            title="Transparent SME Marketing Packages & Pricing"
            subtitle="Straightforward month-to-month starter pricing designed for small businesses and growing brands with zero hidden fees."
            dark={true}
          />

          {/* Compact Ad Spend & Rate Disclaimer Note */}
          <div className="disclaimer-alert-card">
            <Info size={18} color="var(--color-primary-orange)" style={{ flexShrink: 0 }} />
            <div className="disclaimer-text">
              <strong>Ad Spend Note:</strong> Client ad spend is paid directly to advertising platforms and is separate from management fees. {pricingNotice}
            </div>
          </div>
        </div>
      </section>

      {/* BUNDLED RETAINER PACKAGES CARDS */}
      <section id="sme-packages" className="section packages-section">
        <div className="container">
          <div className="section-title-wrapper" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge badge-orange">FEATURED RETAINERS</span>
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

      {/* CATEGORIZED SERVICES PRICING TABLES */}
      <section id="ala-carte" className="section ala-carte-section" style={{ backgroundColor: 'var(--color-off-white)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge badge-navy">STARTER PRICING BY SERVICE</span>
            <h2 style={{ fontSize: '2rem', marginTop: '0.5rem', color: 'var(--color-primary-navy)', fontWeight: 800 }}>
              Service-by-Service Pricing Breakdown
            </h2>
            <p style={{ color: 'var(--color-muted)', maxWidth: '640px', margin: '0.5rem auto 0 auto' }}>
              Pick individual services or tiers tailored to your specific digital marketing requirements.
            </p>
          </div>

          <div className="category-pricing-stack">
            {serviceCategoriesData.map((cat) => (
              <div key={cat.id} className="category-pricing-card">
                <div className="cat-pricing-header">
                  <div>
                    <h3 className="cat-pricing-title">{cat.category}</h3>
                    <p className="cat-pricing-note">{cat.note}</p>
                  </div>
                  <span className="cat-billing-badge">{cat.billingType}</span>
                </div>

                <div className="cat-tiers-grid">
                  {cat.packages.map((tierItem, tIdx) => (
                    <div key={tIdx} className={`tier-card ${tierItem.popular ? 'tier-popular' : ''}`}>
                      {tierItem.popular && <span className="tier-popular-tag">RECOMMENDED</span>}
                      <div className="tier-name-row">
                        <span className="tier-name">{tierItem.tier}</span>
                        <span className="tier-price">{tierItem.price}</span>
                      </div>
                      <p className="tier-includes">{tierItem.includes}</p>
                      <Button 
                        to={`/inquiry?service=${encodeURIComponent(cat.category)}&tier=${encodeURIComponent(tierItem.tier)}`}
                        variant={tierItem.popular ? 'primary' : 'outline'}
                        size="sm"
                        style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* OTHER SUPPORTING SERVICES GRID */}
          <div style={{ marginTop: '4rem' }}>
            <div className="section-title-wrapper" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="badge badge-orange">ADD-ONS & SUPPORTING SERVICES</span>
              <h3 style={{ fontSize: '1.6rem', marginTop: '0.5rem', color: 'var(--color-primary-navy)', fontWeight: 800 }}>
                Other Supporting Services
              </h3>
            </div>

            <div className="supporting-services-grid">
              {supportingServicesData.map((item, idx) => (
                <div key={idx} className="supporting-card">
                  <div>
                    <span className="supporting-type">{item.type}</span>
                    <h4 className="supporting-title">{item.service}</h4>
                    <p className="supporting-includes">{item.includes}</p>
                  </div>
                  <div className="supporting-price-row">
                    <span className="supporting-price">{item.price}</span>
                    <Button 
                      to={`/inquiry?service=${encodeURIComponent(item.service)}`}
                      variant="outline"
                      size="sm"
                    >
                      Enquire
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Starter Pricing Footnote */}
          <p style={{ textAlign: 'center', color: 'var(--color-muted)', fontSize: '0.875rem', marginTop: '3rem', fontStyle: 'italic' }}>
            {pricingNotice}
          </p>
        </div>
      </section>

      {/* PRICING FAQS */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <SectionHeader
            badgeText="PRICING FAQ"
            title="Frequently Asked Questions About Billing & Scope"
            subtitle="Everything you need to know about ad budgets, monthly retainers, and client onboarding."
          />

          <div style={{ backgroundColor: 'var(--color-off-white)', borderRadius: 'var(--radius-md)', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            {pricingFaqs.map((faq, idx) => (
              <AccordionItem key={idx} question={faq.question} answer={faq.answer} defaultOpen={idx === 0} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Grow Your Brand with Accessible Pricing?"
        subtitle="Schedule a free strategy consultation today. We'll help you select the exact package for your business."
      />
    </>
  );
};

export default Pricing;
