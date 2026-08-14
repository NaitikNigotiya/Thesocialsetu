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
  Mail,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import SEO from '../components/sections/SEO';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import CTABanner from '../components/sections/CTABanner';
import { careerOpenings, agencyPerks } from '../data/careersData';
import './Career.css';

const AGENCY_HR_PHONE = '6267137892';
const AGENCY_HR_EMAIL = 'hello.thesocialsetu@gmail.com';

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
    phone: '',
    portfolioUrl: '',
    message: ''
  });

  const handleOpenModal = (job) => {
    setSelectedJob(job);
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      portfolioUrl: '',
      message: ''
    });
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

    const mailtoUrl = generateMailtoLink(selectedJob);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.location.href = mailtoUrl;
    }, 500);
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

  const generateMailtoLink = (job) => {
    const subject = `Job Application: ${job ? job.title : 'Agency Role'} - The Social Setu`;
    const body = `Hi The Social Setu Team,\n\nI want to apply for the position of ${job ? job.title : 'this role'}.\n\nName: ${formData.fullName}\nPhone: ${formData.phone}\nPortfolio/Resume Link: ${formData.portfolioUrl}\n\nMessage/Note: ${formData.message}\n\nThank you!`;
    return `mailto:${AGENCY_HR_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const generateWhatsAppLink = () => {
    if (!selectedJob) return '#';
    const text = `Hi The Social Setu Team,\n\nI want to apply for the position: *${selectedJob.title}* (${selectedJob.type}).\n\n*Candidate Details:*\n- Name: ${formData.fullName}\n- Phone: ${formData.phone}\n- Portfolio / Resume: ${formData.portfolioUrl || 'N/A'}\n- Message: ${formData.message || 'Excited to join the team.'}`;
    return `https://wa.me/91${AGENCY_HR_PHONE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <SEO
        title="Careers — We're Hiring | Join The Social Setu Team"
        description="We're hiring! Explore job & internship openings at The Social Setu: Video Model & Content Creator (Female) Internship and Lead Generation Executive (WFH)."
      />

      {/* Hero Header */}
      <section className="career-hero">
        <div className="container">
          <SectionHeader
            badgeText="CAREERS — WE'RE HIRING"
            title="Join The Growth Team At The Social Setu"
            subtitle="We are looking for passionate, driven talent to help scale brands. Explore active full-time and internship openings below."
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
            {['All', 'Internship', 'Work From Home'].map((type) => (
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
              placeholder="Search roles (e.g. Video Model, Lead Gen)..."
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

                    <div className="job-responsibilities-title">Responsibilities:</div>
                    <ul className="job-responsibilities-list">
                      {job.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="job-responsibility-item">
                          <CheckCircle2 size={14} />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="job-responsibilities-title" style={{ marginTop: '1rem' }}>Requirements:</div>
                    <ul className="job-responsibilities-list">
                      {job.requirements.map((req, qIdx) => (
                        <li key={qIdx} className="job-responsibility-item">
                          <Sparkles size={14} color="var(--color-primary-orange)" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="job-salary-tag">
                      <span>Remuneration / Stipend:</span>
                      <span style={{ color: 'var(--color-primary-orange)' }}>{job.salary}</span>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <Button
                        onClick={() => handleOpenModal(job)}
                        variant="primary"
                        size="sm"
                        icon={ArrowRight}
                        style={{ flex: 1, justifyContent: 'center' }}
                      >
                        Apply Now
                      </Button>
                      
                      <a
                        href={generateMailtoLink(job)}
                        className="btn btn-outline"
                        style={{ padding: '0.55rem 1rem', fontSize: '0.875rem', gap: '0.4rem' }}
                        title="Email HR directly"
                      >
                        <Mail size={16} />
                        <span>Email Us</span>
                      </a>
                    </div>
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
                <div className="form-field">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Your Full Name"
                    className="form-input"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-field">
                  <label>Phone / WhatsApp Number *</label>
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

                <div className="form-field">
                  <label>Portfolio / Resume Link *</label>
                  <input
                    type="url"
                    name="portfolioUrl"
                    required
                    placeholder="Google Drive / Instagram / LinkedIn / Resume Link"
                    className="form-input"
                    value={formData.portfolioUrl}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-field">
                  <label>Message / Short Intro</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about yourself or relevant experience..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    icon={Send}
                    style={{ width: '100%', justifyContent: 'center' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                  </Button>

                  <a
                    href={generateMailtoLink(selectedJob)}
                    className="btn btn-outline"
                    style={{ width: '100%', justifyContent: 'center', gap: '0.5rem' }}
                  >
                    <Mail size={16} />
                    <span>Apply via Email (hello.thesocialsetu@gmail.com)</span>
                  </a>
                </div>
              </form>
            ) : (
              <div className="modal-success-box">
                <div className="success-icon-circle">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="success-title">Application Submitted!</h3>
                <p className="success-desc">
                  Thank you, <strong>{formData.fullName}</strong>. Your application for <strong>{selectedJob.title}</strong> has been logged.
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
                    <span>Dispatch via WhatsApp</span>
                  </a>
                  <a
                    href={generateMailtoLink(selectedJob)}
                    className="btn btn-outline"
                    style={{ gap: '0.5rem' }}
                  >
                    <Mail size={16} />
                    <span>Send via Email</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CTA Banner */}
      <CTABanner
        title="Have Questions About These Roles?"
        subtitle="Feel free to email your CV or inquiries directly to our agency hiring team."
        primaryBtnText="Email hello.thesocialsetu@gmail.com"
        primaryBtnTo={`mailto:${AGENCY_HR_EMAIL}?subject=Career Inquiry - The Social Setu`}
      />
    </>
  );
};

export default Career;
