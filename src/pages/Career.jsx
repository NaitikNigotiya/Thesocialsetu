import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Zap, 
  TrendingUp, 
  Cpu, 
  Award,
  Send,
  PhoneCall
} from 'lucide-react';
import SEO from '../components/sections/SEO';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import CTABanner from '../components/sections/CTABanner';
import { careerOpenings, agencyPerks } from '../data/careersData';
import './Career.css';

const AGENCY_HR_PHONE = '6267137892';
const AGENCY_HR_EMAIL = import.meta.env.VITE_AGENCY_EMAIL || 'hello.thesocialsetu@gmail.com';

const iconMap = {
  Zap,
  TrendingUp,
  Cpu,
  Award
};

export const Career = () => {
  const [filterType, setFilterType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: 'Fresher / Portfolio',
    portfolioUrl: '',
    coverNote: ''
  });

  const handleOpenModal = (job) => {
    setSelectedJob(job);
    setIsSubmitted(false);
    setFormData(prev => ({
      ...prev,
      experience: job.type === 'Internship' ? 'Fresher / Portfolio' : '1 - 3 Years'
    }));
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setIsSubmitted(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  // Filter job positions
  const filteredJobs = careerOpenings.filter(job => {
    const matchesType = filterType === 'All' || job.type === filterType;
    const matchesQuery = searchQuery.trim() === '' || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesQuery;
  });

  const generateWhatsAppLink = () => {
    if (!selectedJob) return '#';
    const text = `Hi The Social Setu HR Team,\n\nI want to apply for the position: *${selectedJob.title}* (${selectedJob.type}).\n\n*Candidate Details:*\n- Name: ${formData.fullName}\n- Email: ${formData.email}\n- Phone: ${formData.phone}\n- Experience: ${formData.experience}\n- Portfolio / Resume: ${formData.portfolioUrl || 'Attached'}\n\n*Note:* ${formData.coverNote || 'Looking forward to interviewing with the team.'}`;
    return `https://wa.me/91${AGENCY_HR_PHONE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <SEO
        title="Careers & Internships | Join The Social Setu Growth Team"
        description="Explore open full-time positions and agency internships at The Social Setu in Indore & Remote. Apply for Performance Marketing, Social Media, Video Editing, and Web Dev roles."
      />

      {/* Hero Header */}
      <section className="career-hero">
        <div className="container">
          <SectionHeader
            badgeText="CAREERS & INTERNSHIPS"
            title="Build Your Growth Career With The Social Setu"
            subtitle="Join a high-energy agency team shaping digital marketing for India's fastest-growing brands. Internship & full-time positions available."
            dark={true}
          />

          <div className="perks-strip">
            {agencyPerks.map((perk, idx) => {
              const PerkIcon = iconMap[perk.icon] || Zap;
              return (
                <div key={idx} className="perk-pill">
                  <PerkIcon size={16} className="perk-pill-icon" />
                  <span>{perk.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filter Controls Bar */}
      <section className="career-filter-section">
        <div className="container filter-bar-inner">
          <div className="filter-tabs">
            {['All', 'Full-Time', 'Internship'].map((type) => (
              <button
                key={type}
                className={`filter-tab-btn ${filterType === type ? 'active' : ''}`}
                onClick={() => setFilterType(type)}
              >
                {type === 'All' ? 'All Roles' : type}
              </button>
            ))}
          </div>

          <div className="career-search-box">
            <Search size={16} color="var(--color-muted)" />
            <input
              type="text"
              className="career-search-input"
              placeholder="Search roles (e.g. Meta Ads, Video Editor)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Job Openings Grid */}
      <section className="openings-section">
        <div className="container">
          {filteredJobs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
              <h3>No positions found matching "{searchQuery}"</h3>
              <p style={{ color: 'var(--color-muted)', marginTop: '0.5rem' }}>
                Try adjusting your search query or switching tabs.
              </p>
            </div>
          ) : (
            <div className="grid-2">
              {filteredJobs.map((job) => (
                <div key={job.id} className="job-card">
                  <div>
                    <div className="job-badges-row">
                      <span className={`job-type-pill ${job.type === 'Internship' ? 'internship' : 'full-time'}`}>
                        {job.type}
                      </span>
                      <span className="job-badge-tag">{job.badge}</span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-muted)' }}>
                        {job.category}
                      </span>
                    </div>

                    <h3 className="job-title">{job.title}</h3>

                    <div className="job-meta-details">
                      <div className="job-meta-item">
                        <MapPin size={14} color="var(--color-primary-orange)" />
                        <span>{job.location}</span>
                      </div>
                      <div className="job-meta-item">
                        <Clock size={14} color="var(--color-primary-orange)" />
                        <span>{job.experience}</span>
                      </div>
                    </div>

                    <p className="job-desc">{job.shortDesc}</p>

                    <div className="job-responsibilities-title">Key Responsibilities & Scope:</div>
                    <ul className="job-responsibilities-list">
                      {job.responsibilities.slice(0, 3).map((resp, rIdx) => (
                        <li key={rIdx} className="job-responsibility-item">
                          <CheckCircle2 size={14} />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="job-salary-tag">
                      <span>Remuneration / Stipend:</span>
                      <span style={{ color: 'var(--color-primary-orange)' }}>{job.salary}</span>
                    </div>

                    <Button
                      onClick={() => handleOpenModal(job)}
                      variant="primary"
                      size="sm"
                      icon={ArrowRight}
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      Apply For Position
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Application Popup Modal */}
      {selectedJob && (
        <div className="job-modal-backdrop" onClick={handleCloseModal}>
          <div className="job-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="job-modal-header">
              <div>
                <h3 className="job-modal-title">Apply: {selectedJob.title}</h3>
                <span className="job-modal-role-badge">{selectedJob.type} • {selectedJob.category}</span>
              </div>
              <button className="job-modal-close-btn" onClick={handleCloseModal} aria-label="Close Modal">
                <X size={20} />
              </button>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="job-modal-body">
                <div className="form-group-grid">
                  <div className="form-field">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="form-input"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-field">
                    <label>WhatsApp Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@gmail.com"
                    className="form-input"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group-grid">
                  <div className="form-field">
                    <label>Experience Level *</label>
                    <select
                      name="experience"
                      className="form-select"
                      value={formData.experience}
                      onChange={handleInputChange}
                    >
                      <option value="Fresher / Student">Fresher / Student</option>
                      <option value="0 - 1 Years">0 - 1 Years</option>
                      <option value="1 - 3 Years">1 - 3 Years</option>
                      <option value="3+ Years">3+ Years</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>Resume / Portfolio Link *</label>
                    <input
                      type="url"
                      name="portfolioUrl"
                      required
                      placeholder="Drive / LinkedIn / Behance URL"
                      className="form-input"
                      value={formData.portfolioUrl}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label>Why are you a good fit for this role?</label>
                  <textarea
                    name="coverNote"
                    placeholder="Briefly tell us about your skills, past projects, or career aspirations..."
                    className="form-textarea"
                    value={formData.coverNote}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={Send}
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing Application...' : 'Submit Application'}
                </Button>
              </form>
            ) : (
              <div className="modal-success-box">
                <div className="success-icon-circle">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="success-title">Application Logged!</h3>
                <p className="success-desc">
                  Thank you, <strong>{formData.fullName}</strong>. Your application details for <strong>{selectedJob.title}</strong> have been recorded.
                </p>

                <div className="modal-actions-row">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ gap: '0.5rem' }}
                  >
                    <PhoneCall size={16} />
                    <span>Instant HR Dispatch via WhatsApp</span>
                  </a>
                  <button className="btn btn-outline" onClick={handleCloseModal}>
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CTA Banner */}
      <CTABanner
        title="Don't See Your Exact Role Listed?"
        subtitle="We are always looking for ambitious performance marketers, videographers, and growth thinkers. Drop your CV directly."
        primaryBtnText="Email Resume to HR"
        primaryBtnTo={`mailto:${AGENCY_HR_EMAIL}?subject=Spontaneous Application - The Social Setu`}
      />
    </>
  );
};

export default Career;
