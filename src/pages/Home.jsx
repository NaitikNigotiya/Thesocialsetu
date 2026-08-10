import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Share2, 
  Target, 
  Search, 
  Globe, 
  Video, 
  MapPin, 
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Users,
  Award,
  BarChart3
} from 'lucide-react';
import SEO from '../components/sections/SEO';
import Button from '../components/ui/Button';
import { servicesData, heroServices, categoriesList } from '../data/servicesData';
import { caseStudiesData } from '../data/caseStudiesData';
import logoImg from '../assets/logo.png';
import heroImg from '../assets/hero.png';
import './Home.css';

// Custom icons mapping for the 8 dark service cards
const serviceIcons = {
  'social-media-management': Share2,
  'performance-ads-ppc': Target,
  'seo-content-marketing': Search,
  'web-design-cro': Globe,
  'video-marketing-reels': Video,
  'whatsapp-marketing-automation': MessageSquare,
  'lead-generation-funnels': TrendingUp,
  'brand-strategy-positioning': Sparkles
};

// 8 Dark Services Data
const darkServicesList = [
  {
    name: 'Social Media Marketing',
    slug: 'social-media-management',
    desc: 'Engaging content & community growth across Meta, LinkedIn & Instagram.',
    icon: Share2
  },
  {
    name: 'Meta Ads',
    slug: 'performance-ads-ppc',
    desc: 'High-converting Facebook & Instagram ad campaigns focused on ROAS.',
    icon: Target
  },
  {
    name: 'Google Ads',
    slug: 'performance-ads-ppc',
    desc: 'Capture high-intent search traffic and convert prospects instantly.',
    icon: Search
  },
  {
    name: 'SEO & Organic Growth',
    slug: 'seo-content-marketing',
    desc: 'Rank #1 on Google for profitable long-tail search keywords.',
    icon: Globe
  },
  {
    name: 'Website Development',
    slug: 'web-design-cro',
    desc: 'Blazing fast, mobile-optimized websites built for high lead conversion.',
    icon: Globe
  },
  {
    name: 'Content Creation & Reels',
    slug: 'video-marketing-reels',
    desc: 'Viral short-form videos and brand assets that build trust.',
    icon: Video
  },
  {
    name: 'Google Business Profile',
    slug: 'seo-content-marketing',
    desc: 'Dominate local search maps and drive foot traffic to your store.',
    icon: MapPin
  },
  {
    name: 'WhatsApp Automation',
    slug: 'whatsapp-marketing-automation',
    desc: 'Automated broadcast funnels with 98% open rate for rapid sales.',
    icon: MessageSquare
  }
];

// Testimonials data
const testimonialsList = [
  {
    id: 1,
    quote: "The Social Setu transformed our digital lead acquisition. Within 60 days, our cost per qualified lead dropped by 42% while monthly admissions increased 3.5x.",
    author: "Dr. Rajesh Sharma",
    role: "Founder & Director",
    company: "Apex Academy",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    quote: "Their performance Meta ads and WhatsApp automation increased our online order revenue by 240% in just 3 months. Outstanding ROI and real-time support!",
    author: "Ananya Verma",
    role: "Co-Founder",
    company: "Luxe Couture",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    quote: "Working with Naitik and his team was seamless. They redesigned our website and built a lead funnel that generated over ₹1.2 Cr in real estate property bookings.",
    author: "Vikramaditya Singh",
    role: "Managing Director",
    company: "Urban Spaces",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  }
];

export const Home = () => {
  // State for Portfolio carousel
  const [activePortfolioIdx, setActivePortfolioIdx] = useState(0);
  // State for Testimonials slider
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const nextPortfolio = () => {
    setActivePortfolioIdx((prev) => (prev + 1) % caseStudiesData.length);
  };

  const prevPortfolio = () => {
    setActivePortfolioIdx((prev) => (prev - 1 + caseStudiesData.length) % caseStudiesData.length);
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
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
                      alt="Digital Marketing Strategy" 
                      className="card-bg-img"
                    />
                  </div>
                </div>
                <div className="card">
                  <div className="content">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
                      alt="Performance Analytics" 
                      className="card-bg-img"
                    />
                  </div>
                </div>
                <div className="card">
                  <div className="content">
                    <img 
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80" 
                      alt="Brand Growth" 
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

          {/* Full-width Dark Banner split in two below */}
          <div className="card-dark about-banner-dark">
            <div className="about-banner-left">
              <div className="stat-big">5x</div>
              <div className="stat-label">Average Lead Growth Achieved for Client Campaigns</div>
            </div>
            
            <div className="about-banner-right">
              <div className="banner-visual-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
                  alt="Marketing Performance Analytics" 
                  className="banner-bg-img"
                />
                {/* Floating Pill Tags */}
                <div className="floating-tags-container">
                  <span className="badge badge-orange">Social Media</span>
                  <span className="badge badge-orange">Meta Ads</span>
                  <span className="badge badge-orange">SEO</span>
                  <span className="badge badge-orange">Website</span>
                  <span className="badge badge-orange">Google Ads</span>
                  <span className="badge badge-orange">Content</span>
                </div>
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
              How we work
            </div>
            <h2 className="section-title">
              Let us show you how we grow your brand online.
            </h2>
          </div>

          <div className="sticky-notes-grid">
            {/* Note 01 */}
            <div className="card sticky-note-card note-1">
              <div className="note-step-number">01</div>
              <h3 className="note-title">Discovery & Audit</h3>
              <p className="note-desc">
                We analyze your business goals, target audience persona, and current digital channels to identify high-ROI opportunities.
              </p>
            </div>

            {/* Note 02 */}
            <div className="card sticky-note-card note-2">
              <div className="note-step-number">02</div>
              <h3 className="note-title">Custom Strategy</h3>
              <p className="note-desc">
                Designing tailored marketing funnels, creative campaign positioning, and ad spend allocation engineered for quick wins.
              </p>
            </div>

            {/* Note 03 */}
            <div className="card sticky-note-card note-3">
              <div className="note-step-number">03</div>
              <h3 className="note-title">Create & Launch</h3>
              <p className="note-desc">
                Building high-converting ad copy, landing pages, social content, and automated WhatsApp nurturing funnels.
              </p>
            </div>

            {/* Note 04 */}
            <div className="card sticky-note-card note-4">
              <div className="note-step-number">04</div>
              <h3 className="note-title">Optimize & Scale</h3>
              <p className="note-desc">
                Continuous A/B testing, data analysis, and scaling winning channels to maximize your return on marketing investment.
              </p>
            </div>

            {/* Handwritten Note */}
            <div className="handwritten-note">
              Ready to grow! 🚀
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

          <div className="dark-services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
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
          SECTION 6: PORTFOLIO TEASER (Case Studies Carousel / Cards)
         ========================================================================= */}
      <section className="section portfolio-section">
        <div className="container">
          <div className="portfolio-header">
            <div>
              <div className="badge badge-orange" style={{ marginBottom: '1rem' }}>
                Portfolio
              </div>
              <h2 className="section-title">
                Explore our most successful projects.
              </h2>
            </div>
            
            <div className="portfolio-nav-buttons">
              <button className="carousel-btn" onClick={prevPortfolio} aria-label="Previous Project">
                <ChevronLeft size={20} />
              </button>
              <button className="carousel-btn" onClick={nextPortfolio} aria-label="Next Project">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="portfolio-grid">
            {caseStudiesData.slice(0, 3).map((study, idx) => (
              <div key={study.slug} className={`card portfolio-card ${idx === activePortfolioIdx ? 'active-slide' : ''}`}>
                <div className="portfolio-card-img-wrapper">
                  <img 
                    src={study.heroImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"} 
                    alt={study.client} 
                    className="portfolio-card-img" 
                  />
                  <div className="badge badge-navy portfolio-industry-badge">
                    {study.industry}
                  </div>
                </div>

                <div className="portfolio-card-body">
                  <h3 className="portfolio-client">{study.client}</h3>
                  <p className="portfolio-title">{study.summary}</p>
                  
                  <div className="portfolio-metrics">
                    {(study.results || []).slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx} className="metric-pill">
                        <strong className="metric-value">{m.metric}</strong>
                        <span className="metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={`/work/${study.slug}`} className="portfolio-link-btn">
                    <span>Read Case Study</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots & View All Link */}
          <div className="portfolio-bottom-bar">
            <div className="pagination-dots">
              {caseStudiesData.slice(0, 3).map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === activePortfolioIdx ? 'active' : ''}`}
                  onClick={() => setActivePortfolioIdx(idx)}
                />
              ))}
            </div>

            <Button to="/work" variant="secondary" icon={ArrowRight}>
              View All Work
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: TESTIMONIALS SECTION
         ========================================================================= */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <div className="badge badge-navy" style={{ marginBottom: '1rem' }}>
              Testimonials
            </div>
            <h2 className="section-title">
              Here's what businesses say about us.
            </h2>
          </div>

          {/* Featured Testimonial Card */}
          <div className="card testimonial-featured-card">
            <div className="testimonial-avatar-wrapper">
              <img 
                src={testimonialsList[activeTestimonialIdx].avatar} 
                alt={testimonialsList[activeTestimonialIdx].author} 
                className="testimonial-avatar-img"
              />
            </div>

            <blockquote className="testimonial-quote">
              "{testimonialsList[activeTestimonialIdx].quote}"
            </blockquote>

            <div className="testimonial-meta">
              <h4 className="testimonial-author">{testimonialsList[activeTestimonialIdx].author}</h4>
              <p className="testimonial-role">{testimonialsList[activeTestimonialIdx].role}, <strong style={{ color: 'var(--color-primary-navy)' }}>{testimonialsList[activeTestimonialIdx].company}</strong></p>
            </div>
          </div>

          {/* Pagination Dots for Testimonials */}
          <div className="pagination-dots" style={{ justifyContent: 'center', marginTop: '2rem' }}>
            {testimonialsList.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === activeTestimonialIdx ? 'active' : ''}`}
                onClick={() => setActiveTestimonialIdx(idx)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
