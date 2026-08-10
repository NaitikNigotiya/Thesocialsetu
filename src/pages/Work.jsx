import React, { useState } from 'react';
import SEO from '../components/sections/SEO';
import SectionHeader from '../components/ui/SectionHeader';
import CaseStudyCard from '../components/sections/CaseStudyCard';
import CTABanner from '../components/sections/CTABanner';
import { caseStudiesData } from '../data/caseStudiesData';
import './Work.css';

export const Work = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const industries = ['All', ...new Set(caseStudiesData.map((item) => item.industry))];

  const filteredStudies = selectedIndustry === 'All'
    ? caseStudiesData
    : caseStudiesData.filter((item) => item.industry === selectedIndustry);

  return (
    <>
      <SEO
        title="Case Studies & Client ROI Success Stories"
        description="Browse verifiable growth results achieved for our clients: revenue surges, CAC reduction, and multi-channel lead funnels."
      />

      <section className="work-hero">
        <div className="container">
          <SectionHeader
            badgeText="PORTFOLIO & RESULTS"
            title="Real Campaigns. Transparent Growth Proof."
            subtitle="Explore how our data-driven growth strategies unlock record-breaking ROAS across diverse markets."
            dark={true}
          />
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-off-white)' }}>
        <div className="container">
          {/* Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {industries.map((ind, idx) => (
              <button
                key={idx}
                className={`filter-btn ${selectedIndustry === ind ? 'active' : ''}`}
                onClick={() => setSelectedIndustry(ind)}
              >
                {ind}
              </button>
            ))}
          </div>

          <div className="grid-3">
            {filteredStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want Your Business to Be Our Next Case Study?"
        subtitle="Schedule a free strategy call today. We will audit your current funnel and calculate your revenue potential."
      />
    </>
  );
};

export default Work;
