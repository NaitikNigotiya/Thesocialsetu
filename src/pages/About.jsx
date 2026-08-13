import React, { useState, useEffect, useRef } from 'react';
import { Target, Eye, Shield, Users, TrendingUp, ArrowRight } from 'lucide-react';
import SEO from '../components/sections/SEO';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import CTABanner from '../components/sections/CTABanner';
import TrustStatsBar from '../components/sections/TrustStatsBar';
import './About.css';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Raghav Gupta',
    role: 'Founder',
    bio: 'Raghav Gupta is the Founder of The Social Setu. With a BBA and an ongoing MBA, he leads strategy, client relationships, and the agency’s growth with a hands-on, results-driven approach.',
    badge: 'Founder & Strategy',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'Ashutosh Patidar',
    role: 'Video Editor & Videographer',
    bio: 'Ashutosh leads video production, handling shoots, filming, and editing to create engaging, trend-driven content that reflects each brand’s identity.',
    badge: 'Video Production',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'Karishma Jain',
    role: 'Social Media Manager',
    bio: 'Karishma manages social media strategy, content calendars, captions, and performance tracking to drive consistent engagement and growth.',
    badge: 'Social Strategy',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    name: 'Freelance Network',
    role: 'Designers, Writers & Specialists',
    bio: 'The Social Setu also works with freelance designers, writers, and specialists to support larger campaigns and projects.',
    badge: 'Specialist Pool',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80'
  }
];

export const About = () => {
  // Coverflow Carousel State & Auto-Rotation Logic
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
      }, 3600);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const getCardStyle = (index) => {
    const total = TEAM_MEMBERS.length;
    let offset = (index - activeIndex) % total;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    if (offset === 0) {
      return {
        transform: 'translateX(0%) scale(1)',
        opacity: 1,
        zIndex: 10,
        boxShadow: '0 20px 45px rgba(15, 23, 38, 0.22)'
      };
    } else if (offset === 1) {
      return {
        transform: 'translateX(62%) scale(0.82)',
        opacity: 0.65,
        zIndex: 5,
        cursor: 'pointer'
      };
    } else if (offset === -1) {
      return {
        transform: 'translateX(-62%) scale(0.82)',
        opacity: 0.65,
        zIndex: 5,
        cursor: 'pointer'
      };
    } else {
      const translateX = offset > 0 ? '110%' : '-110%';
      return {
        transform: `translateX(${translateX}) scale(0.65)`,
        opacity: 0.3,
        zIndex: 1,
        cursor: 'pointer'
      };
    }
  };

  return (
    <>
      <SEO
        title="About The Social Setu | Bridging Brands to Customers"
        description="Learn about The Social Setu — a young, energetic digital marketing agency led by founder Raghav Gupta. Meet our core team in performance ads, video production, and social media."
      />

      {/* Hero / Header Animation Section */}
      <section className="about-hero-animated">
        <div className="container">
          <div className="hero-animated-container">
            {/* Left Content / Text Column */}
            <div className="hero-content">
              <div className="badge-tag animated-item">
                <span className="badge-dot"></span>
                <span>BRIDGING BRANDS TO CUSTOMERS</span>
              </div>

              <h1 className="hero-title">
                <span className="title-line">Crafting Digital</span>
                <span className="title-line highlight">Experiences That Matter</span>
              </h1>

              <p className="hero-description animated-item">
                The Social Setu is a full-service digital marketing agency helping small and growing brands build visibility, generate leads, and scale online through social media, paid ads, SEO, and website development.
              </p>

              <div className="hero-cta animated-item">
                <a href="#our-team" className="primary-btn">Meet the Team</a>
                <Button to="/inquiry" variant="outline" icon={ArrowRight} className="secondary-btn-custom">
                  Schedule Audit
                </Button>
              </div>
            </div>

            {/* Right Visual Grid / Dynamic Cards */}
            <div className="hero-visual">
              <div className="card-grid">
                <div className="feature-card main-card animated-card">
                  <div className="card-image">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                      alt="The Social Setu Growth Squad" 
                    />
                  </div>
                  <div className="main-card-badge">The Social Setu Squad</div>
                </div>

                <div className="feature-card stat-card-1 animated-card">
                  <h3>Startup-First</h3>
                  <p>Approach & Pricing</p>
                </div>

                <div className="feature-card stat-card-2 animated-card">
                  <h3>100%</h3>
                  <p>Transparent Reporting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStatsBar />

      {/* Mission & Vision */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <Card>
              <Target size={36} color="var(--color-primary-orange)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Our Core Mission</h3>
              <p style={{ color: 'var(--color-body)', fontSize: '1rem', lineHeight: 1.6 }}>
                We build scalable, predictable digital growth while minimizing ad waste through experimentation and technical precision.
              </p>
            </Card>

            <Card>
              <Eye size={36} color="var(--color-primary-orange)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Our Vision</h3>
              <p style={{ color: 'var(--color-body)', fontSize: '1rem', lineHeight: 1.6 }}>
                To become Asia's most trusted performance growth partner for scaling D2C, B2B SaaS, and high-ticket service enterprises.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* AUTOMATIC COVERFLOW TEAM MEMBERS CAROUSEL */}
      <section id="our-team" className="section team-section">
        <div className="container">
          <SectionHeader
            badgeText="MEET OUR TEAM"
            title="The Minds Behind Your Brand Growth"
            subtitle="A passionate squad of digital strategists, video creators, and social managers dedicated to your business results."
          />

          <div 
            className="coverflow-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Coverflow Stage */}
            <div className="coverflow-stage">
              {TEAM_MEMBERS.map((member, index) => {
                const style = getCardStyle(index);
                return (
                  <div
                    key={member.id}
                    className={`coverflow-card ${index === activeIndex ? 'active' : ''}`}
                    style={style}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="team-img-wrapper">
                      <img src={member.image} alt={member.name} className="team-img" />
                      <span className="team-badge">{member.badge}</span>
                    </div>
                    <div className="team-content">
                      <h3 className="team-name">{member.name}</h3>
                      <span className="team-role">{member.role}</span>
                      <p className="team-bio">{member.bio}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Agency Values */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)' }}>
        <div className="container">
          <SectionHeader
            badgeText="AGENCY VALUES"
            title="Principles That Guide Every Campaign"
            subtitle="How we maintain 98% client retention and deliver high performance consistently."
          />

          <div className="grid-3">
            <div className="card">
              <Shield size={32} color="var(--color-primary-orange)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Radical Transparency</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)' }}>
                You own all ad accounts, tracking tags, and data. Zero hidden fees or marked-up media costs.
              </p>
            </div>

            <div className="card">
              <TrendingUp size={32} color="var(--color-primary-orange)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Hands-On & Results-First</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)' }}>
                Fewer templated solutions, more strategies built around what each brand actually needs to grow.
              </p>
            </div>

            <div className="card">
              <Users size={32} color="var(--color-primary-orange)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Dedicated Growth Squad</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)' }}>
                Direct communication with Raghav and our core specialists — ensuring rapid responses and campaign updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default About;
