import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  CheckCircle2,
  Sparkles,
  Users,
  Send
} from 'lucide-react';
import SEO from '../components/sections/SEO';
import Button from '../components/ui/Button';
import { heroServices } from '../data/servicesData';
import karishmaImg from '../assets/karishma-jain.jpg';
import ashutoshImg from '../assets/ashutosh-patidar.jpg';
import raghavImg from '../assets/raghav-gupta.jpg';
import './Home.css';

export const Home = () => {
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Meta Ads',
    budget: '₹10,000 - ₹20,000 / month'
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquirySubmitting, setInquirySubmitting] = useState(false);

  const handleInquiryChange = (e) => {
    const { name, value } = e.target;
    setInquiryData(prev => ({ ...prev, [name]: value }));
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySubmitting(true);

    const waText = `Hi The Social Setu Team,\n\nI have an inquiry from your website:\n- *Name*: ${inquiryData.name}\n- *Phone*: ${inquiryData.phone}\n- *Email*: ${inquiryData.email || 'N/A'}\n- *Service*: ${inquiryData.service}\n- *Budget*: ${inquiryData.budget}`;
    const waUrl = `https://wa.me/916267137892?text=${encodeURIComponent(waText)}`;

    setTimeout(() => {
      setInquirySubmitting(false);
      setInquirySubmitted(true);
      window.open(waUrl, '_blank');
    }, 500);
  };

  return (
    <>
      <SEO
        title="The Social Setu — Digital Marketing Agency | Bridging Brands to Customers"
        description="We build digital bridges between brands & customers. Performance marketing, SEO, Meta Ads, web design, and WhatsApp funnels for Indian SMEs."
      />

      {/* =========================================================================
          SECTION 1: HERO SECTION
         ========================================================================= */}
      <section className="hero-section">
        <div className="container hero-grid">
          {/* Left Column: Headline & CTAs */}
          <div className="hero-content">
            <div className="badge badge-navy" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={14} color="var(--color-primary-orange)" />
              <span>Welcome to The Social Setu</span>
            </div>

            <h1 className="hero-headline">
              We Build Digital Bridges Between <span className="text-highlight">Brands & Customers.</span>
            </h1>

            <p className="hero-subheading">
              Strategy, creativity and performance marketing that helps businesses build their brand, generate high-intent leads, and scale revenue online.
            </p>

            <div className="hero-ctas">
              <Button to="/inquiry" variant="primary" icon={ArrowRight}>
                Get Free Consultation
              </Button>
              <Button to="/services" variant="outline">
                View Our Services
              </Button>
            </div>
          </div>

          {/* Right Column: Hero Image with Floating Badges (Image Only, No Outer Card) */}
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Digital Marketing Solutions for Brand Growth" 
                className="hero-card-img"
              />
              
              {/* Floating Stat Badge Top-Right */}
              <div className="floating-badge badge-top-right">
                <Users size={15} color="var(--color-primary-navy)" />
                <span><strong>250+</strong> Businesses Trust Us</span>
              </div>

              {/* Floating Pill Label Bottom-Left */}
              <div className="floating-badge badge-bottom-left">
                <TrendingUp size={15} color="#ffffff" />
                <span>Solutions for Brand Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CLIENT / INDUSTRY LOGO STRIP
         ========================================================================= */}
      <section className="logo-strip-section">
        <div className="container">
          <div className="logo-strip-row">
            <span className="logo-strip-item">RETAIL</span>
            <span className="logo-strip-separator">+</span>
            <span className="logo-strip-item">RESTAURANT</span>
            <span className="logo-strip-separator">+</span>
            <span className="logo-strip-item">SALON & WELLNESS</span>
            <span className="logo-strip-separator">+</span>
            <span className="logo-strip-item">GYM & FITNESS</span>
            <span className="logo-strip-separator">+</span>
            <span className="logo-strip-item">REAL ESTATE</span>
            <span className="logo-strip-separator">+</span>
            <span className="logo-strip-item">D2C BRANDS</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ABOUT SECTION
         ========================================================================= */}
      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            {/* Left Column: About Info */}
            <div className="about-content">
              <div className="badge badge-navy" style={{ marginBottom: '1rem' }}>
                About us
              </div>

              <h2 className="section-title">
                Meet The Social Setu: Your Growth Partners
              </h2>

              <p className="about-paragraph">
                We are a data-driven growth marketing agency dedicated to empowering Indian small and medium enterprises (SMEs). From crafting ROI-focused ad campaigns to building high-converting landing pages and automated sales funnels, we act as an extended marketing team that drives predictable revenue.
              </p>

              <div className="about-features">
                <div className="about-feature-item">
                  <CheckCircle2 size={18} color="var(--color-primary-orange)" />
                  <span>No long-term lock-in contracts</span>
                </div>
                <div className="about-feature-item">
                  <CheckCircle2 size={18} color="var(--color-primary-orange)" />
                  <span>Dedicated Senior Performance Marketer</span>
                </div>
                <div className="about-feature-item">
                  <CheckCircle2 size={18} color="var(--color-primary-orange)" />
                  <span>Real-time transparent conversion reporting</span>
                </div>
              </div>
            </div>

            {/* Right Column: Borderless 3D Rotating Image Cards */}
            <div className="about-visual">
              <div className="wrap_card">
                <div className="card">
                  <div className="content">
                    <img 
                      src={raghavImg} 
                      alt="Raghav Gupta - Founder" 
                      className="card-bg-img"
                    />
                  </div>
                </div>
                <div className="card">
                  <div className="content">
                    <img 
                      src={ashutoshImg} 
                      alt="Ashutosh Patidar - Video Production Lead" 
                      className="card-bg-img"
                    />
                  </div>
                </div>
                <div className="card">
                  <div className="content">
                    <img 
                      src={karishmaImg} 
                      alt="Karishma Jain - Social Media Manager" 
                      className="card-bg-img"
                    />
                  </div>
                </div>

                <div className="lines">
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width Split Banner Section */}
          <div className="card-dark about-banner-dark">
            <div className="banner-stat-block">
              <div className="stat-big">₹2.5 Cr+</div>
              <p className="stat-label">Client Ad Revenue Generated in 2025-2026</p>
            </div>
            <div className="banner-visual-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" 
                alt="Social Media Growth Strategy" 
                className="banner-bg-img"
              />
              <div className="floating-tags-container">
                <span className="badge badge-dark">Performance Ads</span>
                <span className="badge badge-dark">SEO & Local Map Ranking</span>
                <span className="badge badge-dark">High-ROAS Meta Funnels</span>
                <span className="badge badge-dark">Web Design & CRO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HOW WE WORK (Diagonally-Scattered Sticky Notes)
         ========================================================================= */}
      <section className="section process-section">
        <div className="container">
          <div className="process-header">
            <div className="badge badge-orange" style={{ marginBottom: '1rem' }}>
              HOW WE WORK
            </div>
            <h2 className="section-title">
              Our 4-Step Growth Blueprint
            </h2>
          </div>

          <div className="sticky-notes-grid">
            <div className="card sticky-note-card note-1">
              <div className="note-step-number">01</div>
              <div>
                <h3 className="note-title">Audit & Strategy</h3>
                <p className="note-desc">Deep-dive analysis of your current funnel, audience data, and market competitors.</p>
              </div>
            </div>

            <div className="card sticky-note-card note-2">
              <div className="note-step-number">02</div>
              <div>
                <h3 className="note-title">Funnel Setup</h3>
                <p className="note-desc">Building high-converting ad creatives, landing pages, and automated response flows.</p>
              </div>
            </div>

            <div className="card sticky-note-card note-3">
              <div className="note-step-number">03</div>
              <div>
                <h3 className="note-title">Campaign Launch</h3>
                <p className="note-desc">Executing targeted Meta and Google PPC campaigns with real-time conversion tracking.</p>
              </div>
            </div>

            <div className="card sticky-note-card note-4">
              <div className="note-step-number">04</div>
              <div>
                <h3 className="note-title">Scale & Optimize</h3>
                <p className="note-desc">Continuous A/B testing, ROAS scaling, and weekly transparent performance reporting.</p>
              </div>
              <div className="handwritten-note">
                Ready to grow! 🚀
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: DARK SERVICES SECTION (Core High-Impact Offerings)
         ========================================================================= */}
      <section className="section-dark dark-services-section">
        <div className="container">
          <div className="dark-services-header">
            <span className="badge badge-orange" style={{ marginBottom: '0.75rem' }}>CORE OFFERINGS</span>
            <h2 className="section-title text-white">
              Data-Driven Marketing Solutions Built to Scale
            </h2>
            <p className="section-subtitle text-muted">
              High-impact digital channels engineered to drive qualified leads, brand growth, and direct revenue for Indian SMEs.
            </p>
          </div>

          <div className="dark-services-grid">
            {heroServices.map((service) => (
              <Link to={`/services/${service.slug}`} key={service.slug} className="card-dark dark-service-card hero-highlight-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div className="dark-service-icon-box">
                    <TrendingUp size={22} color="var(--color-primary-orange)" />
                  </div>
                  <span className="badge badge-orange" style={{ fontSize: '0.7rem' }}>FEATURED</span>
                </div>
                <h3 className="dark-service-name" style={{ fontSize: '1.2rem', fontWeight: 800 }}>{service.name}</h3>
                <p className="dark-service-desc">{service.shortDesc}</p>
                <div className="dark-service-link">
                  <span>Explore Inclusions</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>

          {/* All Services CTA Row */}
          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              We also provide Social Media Strategy, Content Creation & Design, Google Business Profile Optimization, Branding, and Growth Consultation.
            </p>
            <Button to="/services" variant="outline" icon={ArrowRight}>
              View All Marketing Services
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: QUICK INQUIRY FORM & VALUE PROPOSITION
         ========================================================================= */}
      <section className="section home-inquiry-section">
        <div className="container">
          <div className="home-inquiry-grid">
            {/* Left Column: Form Card */}
            <div className="card home-inquiry-card">
              {!inquirySubmitted ? (
                <form onSubmit={handleInquirySubmit} className="home-inquiry-form">
                  <h3 className="inquiry-form-title">Send Us a Message</h3>
                  
                  <div className="inquiry-field-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      value={inquiryData.name}
                      onChange={handleInquiryChange}
                      className="inquiry-input"
                    />
                  </div>

                  <div className="inquiry-fields-row">
                    <div className="inquiry-field-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        value={inquiryData.email}
                        onChange={handleInquiryChange}
                        className="inquiry-input"
                      />
                    </div>

                    <div className="inquiry-field-group">
                      <label>Phone Number *</label>
                      <div className="phone-input-wrapper">
                        <span className="phone-prefix">🇮🇳 +91</span>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="Your Number"
                          value={inquiryData.phone}
                          onChange={handleInquiryChange}
                          className="inquiry-input phone-input"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="inquiry-fields-row">
                    <div className="inquiry-field-group">
                      <label>Select Services *</label>
                      <select
                        name="service"
                        value={inquiryData.service}
                        onChange={handleInquiryChange}
                        className="inquiry-select"
                      >
                        <option value="Meta Ads">Meta Ads</option>
                        <option value="Google Ads">Google Ads</option>
                        <option value="SEO & Organic Growth">SEO & Organic Growth</option>
                        <option value="Social Media Management">Social Media Management</option>
                        <option value="Website Development">Website Development</option>
                        <option value="WhatsApp Automation">WhatsApp Automation</option>
                        <option value="Full Digital Package">Full Digital Package</option>
                      </select>
                    </div>

                    <div className="inquiry-field-group">
                      <label>Your Budget *</label>
                      <select
                        name="budget"
                        value={inquiryData.budget}
                        onChange={handleInquiryChange}
                        className="inquiry-select"
                      >
                        <option value="Under ₹10,000 / month">Under ₹10,000 / month</option>
                        <option value="₹10,000 - ₹20,000 / month">₹10,000 - ₹20,000 / month</option>
                        <option value="₹20,000 - ₹50,000 / month">₹20,000 - ₹50,000 / month</option>
                        <option value="₹50,000+ / month">₹50,000+ / month</option>
                      </select>
                    </div>
                  </div>

                  <Button type="submit" variant="primary" icon={Send} disabled={inquirySubmitting} className="inquiry-submit-btn">
                    {inquirySubmitting ? 'Sending Message...' : 'SEND MESSAGE'}
                  </Button>
                </form>
              ) : (
                <div className="inquiry-success-box">
                  <div className="success-icon-badge">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3>Thank You, {inquiryData.name}!</h3>
                  <p style={{ color: 'var(--color-muted)', margin: '0.5rem 0 1.25rem 0', fontSize: '0.95rem' }}>
                    Your inquiry for <strong>{inquiryData.service}</strong> has been received. Our team will connect with you shortly.
                  </p>
                  <a
                    href={`https://wa.me/916267137892?text=${encodeURIComponent(`Hi The Social Setu,\n\nI just submitted an inquiry on your website.\n- Name: ${inquiryData.name}\n- Service: ${inquiryData.service}\n- Budget: ${inquiryData.budget}\n- Phone: ${inquiryData.phone}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Instant Chat on WhatsApp
                  </a>
                </div>
              )}
            </div>

            {/* Right Column: Value Proposition */}
            <div className="home-inquiry-content">
              <div className="accent-bar-indicator"></div>
              <h2 className="inquiry-headline">
                Be on the Top & Get More Traffic to Your Website
              </h2>
              <p className="inquiry-subtitle">
                We deploy battle-tested digital marketing strategies built to capture high-intent customers and scale your brand revenue:
              </p>

              <ul className="inquiry-value-list">
                <li className="inquiry-value-item">
                  <div className="check-icon-circle">
                    <CheckCircle2 size={18} />
                  </div>
                  <span>High-ROAS ad campaigns across Meta & Google search engineered to convert leads instantly.</span>
                </li>
                <li className="inquiry-value-item">
                  <div className="check-icon-circle">
                    <CheckCircle2 size={18} />
                  </div>
                  <span>Search engine optimization (SEO) designed to rank your business on Page 1 for profitable keywords.</span>
                </li>
                <li className="inquiry-value-item">
                  <div className="check-icon-circle">
                    <CheckCircle2 size={18} />
                  </div>
                  <span>Blazing fast, mobile-optimized landing pages and automated WhatsApp funnels with 98% open rate.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
