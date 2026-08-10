import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Activity, Building2, GraduationCap, Cpu, Briefcase, ArrowRight } from 'lucide-react';
import SEO from '../components/sections/SEO';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import CTABanner from '../components/sections/CTABanner';
import { industriesData } from '../data/industriesData';
import './Industries.css';

const iconMap = {
  ShoppingBag,
  Activity,
  Building2,
  GraduationCap,
  Cpu,
  Briefcase
};

export const Industries = () => {
  return (
    <>
      <SEO
        title="Industry Solutions & Domain Marketing Expertise"
        description="Tailored digital marketing frameworks for E-commerce, Healthcare, Real Estate, EdTech, B2B SaaS, and Finance."
      />

      <section className="industries-hero">
        <div className="container">
          <SectionHeader
            badgeText="SPECIALIZED SECTORS"
            title="Industry-Specific Growth Frameworks"
            subtitle="Generic marketing produces mediocre results. We deploy proven playbook tactics tailored to your sector."
            dark={true}
          />
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-off-white)' }}>
        <div className="container">
          <div className="grid-3">
            {industriesData.map((ind, idx) => {
              const IconComp = iconMap[ind.icon] || Briefcase;
              return (
                <Card key={idx} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(250, 119, 16, 0.1)',
                    color: 'var(--color-primary-orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <IconComp size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>{ind.name}</h3>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.975rem', marginBottom: '1.5rem', flex: 1 }}>
                    {ind.description}
                  </p>
                  <Button to="/inquiry" variant="outline" size="sm" icon={ArrowRight}>
                    Get Sector Strategy
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Dominate Your Industry Vertical?"
        subtitle="Speak to our industry marketing specialists to build a customized customer acquisition strategy."
      />
    </>
  );
};

export default Industries;
