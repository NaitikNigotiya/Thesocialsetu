import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  Clock, 
  Calendar,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import SEO from '../components/sections/SEO';
import Button from '../components/ui/Button';
import './Inquiry.css';

const AGENCY_EMAIL = import.meta.env.VITE_AGENCY_EMAIL || 'hello.thesocialsetu@gmail.com';
const AGENCY_PHONE = '6267137892';
const WHATSAPP_LINK = `https://wa.me/91${AGENCY_PHONE}?text=${encodeURIComponent('Hi, I want to discuss digital marketing services for my business.')}`;
const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/thesocialsetu_?igsh=MTRoYWwyYTQ1N3VlNw==';
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/company/the-social-setu/';

const InstagramIcon = ({ size = 16, color = 'var(--color-primary-orange)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 16, color = 'var(--color-primary-orange)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// 10 Core Services Options
const SERVICES_OPTIONS = [
  'Social Media Management',
  'Meta Ads',
  'Google Ads',
  'SEO & Local SEO',
  'Website Development',
  'Social Media Marketing',
  'Content Creation & Design',
  'Google Business Profile',
  'Branding (Basic)',
  'Digital Marketing Consultation'
];

// SME Retainer Packages
const PACKAGE_OPTIONS = [
  'SETU GROW (₹11,999/mo) — Recommended',
  'SETU STARTER (₹6,999/mo)',
  'SETU PRO (₹19,999/mo)',
  'Custom Scope / A La Carte'
];

const BUSINESS_TYPES = [
  'Retail & Local Store',
  'Restaurant / Café',
  'Salon & Beauty',
  'Gym & Fitness',
  'Clinic & Healthcare',
  'Real Estate & Developers',
  'EdTech & Coaching',
  'Automobile Dealer',
  'Fashion & Apparel',
  'D2C Brand',
  'Manufacturing',
  'Service Business',
  'Other'
];

const BUDGET_RANGES = [
  'Under ₹10,000 / month (Setu Starter)',
  '₹10,000 - ₹20,000 / month (Setu Grow)',
  '₹20,000 - ₹50,000 / month (Setu Pro)',
  '₹50,000 - ₹1,00,000+ / month (Enterprise Scaling)'
];

export const Inquiry = () => {
  const [searchParams] = useSearchParams();

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    businessType: 'Retail & Local Store',
    selectedPackage: 'SETU GROW (₹11,999/mo) — Recommended',
    primaryService: 'Meta Ads',
    website: '',
    instagramHandle: '',
    marketingBudget: '₹10,000 - ₹20,000 / month (Setu Grow)',
    additionalServices: ['Social Media Management'],
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-fill form from URL query parameters (e.g. ?service=meta-ads or ?plan=grow)
  useEffect(() => {
    const paramPlan = searchParams.get('plan') || searchParams.get('package');
    const paramService = searchParams.get('service');

    if (paramPlan) {
      if (paramPlan.toLowerCase() === 'starter') {
        setFormData(prev => ({ ...prev, selectedPackage: 'SETU STARTER (₹6,999/mo)' }));
      } else if (paramPlan.toLowerCase() === 'grow') {
        setFormData(prev => ({ ...prev, selectedPackage: 'SETU GROW (₹11,999/mo) — Recommended' }));
      } else if (paramPlan.toLowerCase() === 'pro') {
        setFormData(prev => ({ ...prev, selectedPackage: 'SETU PRO (₹19,999/mo)' }));
      }
    }

    if (paramService) {
      const cleanSvc = paramService.replace(/-/g, ' ').toLowerCase();
      const matchSvc = SERVICES_OPTIONS.find(s => s.toLowerCase().includes(cleanSvc) || cleanSvc.includes(s.toLowerCase()));
      if (matchSvc) {
        setFormData(prev => ({ ...prev, primaryService: matchSvc }));
      }
    }
  }, [searchParams]);

  // Booking Widget State
  const [bookingData, setBookingData] = useState({
    preferredDate: '',
    preferredTime: '11:00 AM',
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxToggle = (service) => {
    setFormData((prev) => {
      const exists = prev.additionalServices.includes(service);
      if (exists) {
        return {
          ...prev,
          additionalServices: prev.additionalServices.filter((s) => s !== service)
        };
      } else {
        return {
          ...prev,
          additionalServices: [...prev.additionalServices, service]
        };
      }
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'inquiry_submitted',
          package: formData.selectedPackage,
          primary_service: formData.primaryService,
          business_type: formData.businessType,
          budget: formData.marketingBudget
        });
      }
    }, 600);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <>
      <SEO
        title="Get Free Strategy & Campaign Consultation"
        description="Request a free digital marketing consultation and strategy proposal from The Social Setu growth leads."
      />

      <div className="inquiry-page">
        <div className="container">
          {/* 1. Header Section */}
          <div className="inquiry-header">
            <div className="badge badge-orange" style={{ marginBottom: '1rem' }}>
              <Sparkles size={14} color="var(--color-primary-orange)" />
              <span>Free Strategy & Campaign Audit</span>
            </div>
            <h1 className="inquiry-title">
              Let's Scale Your Business Online.
            </h1>
            <p className="inquiry-subheading">
              Tell us about your business. Select your required service or retainer package for a free 24-hour response strategy.
            </p>
          </div>

          {/* 2. Two-Column Layout */}
          <div className="inquiry-main-grid">
            {/* LEFT COLUMN: Interactive Inquiry Form */}
            <div className="inquiry-form-card">
              {formSubmitted ? (
                <div className="inquiry-success-state">
                  <div className="success-icon-box">
                    <CheckCircle2 size={54} color="#047857" />
                  </div>
                  <h3 className="success-title">Inquiry Submitted Successfully!</h3>
                  <p className="success-desc">
                    Thank you, <strong>{formData.name}</strong>! We have received your inquiry for <strong>{formData.businessName}</strong> and will reach out within 24 hours.
                  </p>
                  <p className="success-subtext">
                    Our Growth Strategist is reviewing your details to prepare your custom marketing audit and proposal.
                  </p>
                  <button 
                    className="btn btn-outline" 
                    onClick={() => setFormSubmitted(false)}
                    style={{ marginTop: '1.5rem' }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitForm} className="inquiry-form">
                  <h2 className="form-heading">Fill Out Project & Contact Info</h2>

                  {/* Name & Business Name */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">
                        Your Name <span className="asterisk">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        placeholder="e.g. Rahul Sharma"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="businessName">
                        Business Name <span className="asterisk">*</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        className="form-input"
                        placeholder="e.g. Apex Lifestyle Studio"
                        required
                        value={formData.businessName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">
                        Phone Number <span className="asterisk">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        placeholder="+91 98765 43210"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="rahul@business.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Industry Category & Primary Service Needed */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="businessType">
                        Industry Category <span className="asterisk">*</span>
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        className="form-select"
                        required
                        value={formData.businessType}
                        onChange={handleInputChange}
                      >
                        {BUSINESS_TYPES.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="primaryService">
                        Primary Service Required <span className="asterisk">*</span>
                      </label>
                      <select
                        id="primaryService"
                        name="primaryService"
                        className="form-select"
                        required
                        value={formData.primaryService}
                        onChange={handleInputChange}
                      >
                        {SERVICES_OPTIONS.map((svc) => (
                          <option key={svc} value={svc}>{svc}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Package & Monthly Budget */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="selectedPackage">
                        Preferred Retainer Package
                      </label>
                      <select
                        id="selectedPackage"
                        name="selectedPackage"
                        className="form-select"
                        value={formData.selectedPackage}
                        onChange={handleInputChange}
                      >
                        {PACKAGE_OPTIONS.map((pkg) => (
                          <option key={pkg} value={pkg}>{pkg}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="marketingBudget">
                        Monthly Marketing Budget
                      </label>
                      <select
                        id="marketingBudget"
                        name="marketingBudget"
                        className="form-select"
                        value={formData.marketingBudget}
                        onChange={handleInputChange}
                      >
                        {BUDGET_RANGES.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Website & Instagram Handle */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="website">
                        Website Link (if any)
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        className="form-input"
                        placeholder="https://yourbrand.com"
                        value={formData.website}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="instagramHandle">
                        Instagram Handle
                      </label>
                      <input
                        type="text"
                        id="instagramHandle"
                        name="instagramHandle"
                        className="form-input"
                        placeholder="@yourbrand"
                        value={formData.instagramHandle}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Compact Additional Services Checklist */}
                  <div className="form-group">
                    <label className="form-label" style={{ marginBottom: '0.6rem' }}>
                      Additional Services Needed (Optional)
                    </label>
                    <div className="compact-services-grid">
                      {SERVICES_OPTIONS.map((service) => {
                        const isChecked = formData.additionalServices.includes(service);
                        return (
                          <label key={service} className={`compact-checkbox-item ${isChecked ? 'checked' : ''}`}>
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleCheckboxToggle(service)}
                            />
                            <span>{service}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Share your growth targets or campaign notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="Tell us about your current bottlenecks, target leads, or specific campaign needs..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    icon={Send}
                    disabled={isSubmitting}
                    className="submit-inquiry-btn"
                  >
                    {isSubmitting ? 'Sending Request...' : 'Submit Inquiry & Request Proposal'}
                  </Button>
                </form>
              )}

              {/* Trust Strip Below Form */}
              <div className="trust-strip">
                <span>50+ SME Clients</span>
                <span className="dot-separator">•</span>
                <span>₹5Cr+ Managed Spend</span>
                <span className="dot-separator">•</span>
                <span>Transparent Retainers</span>
              </div>
            </div>

            {/* RIGHT COLUMN: Sidebar */}
            <div className="inquiry-sidebar">
              {/* WhatsApp CTA Card */}
              <div className="card-dark whatsapp-cta-card">
                <h3 className="sidebar-title text-white">Prefer instant consultation?</h3>
                <p className="sidebar-desc text-muted">
                  Chat directly with our lead growth strategist on WhatsApp for instant pricing & advice.
                </p>

                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="whatsapp-direct-btn"
                >
                  <MessageSquare size={18} />
                  <span>Chat on WhatsApp</span>
                </a>

                <div className="contact-list">
                  <a href={`tel:+91${AGENCY_PHONE}`} className="contact-item">
                    <Phone size={16} color="var(--color-primary-orange)" />
                    <span>+91 62671 37892</span>
                  </a>
                  <a href={`mailto:${AGENCY_EMAIL}`} className="contact-item">
                    <Mail size={16} color="var(--color-primary-orange)" />
                    <span>{AGENCY_EMAIL}</span>
                  </a>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="contact-item">
                    <InstagramIcon size={16} color="var(--color-primary-orange)" />
                    <span>Instagram (@thesocialsetu_)</span>
                  </a>
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="contact-item">
                    <LinkedinIcon size={16} color="var(--color-primary-orange)" />
                    <span>LinkedIn (The Social Setu)</span>
                  </a>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="card next-steps-card">
                <h4 className="next-steps-title">What happens next?</h4>
                <div className="steps-list">
                  <div className="step-item">
                    <div className="step-number">1</div>
                    <div className="step-text">
                      <strong>Audit & Review</strong>
                      <p>Our team inspects your business pages & website.</p>
                    </div>
                  </div>

                  <div className="step-item">
                    <div className="step-number">2</div>
                    <div className="step-text">
                      <strong>Discovery Call</strong>
                      <p>20-minute strategy call to map your lead goals.</p>
                    </div>
                  </div>

                  <div className="step-item">
                    <div className="step-number">3</div>
                    <div className="step-text">
                      <strong>Custom Proposal</strong>
                      <p>Clear, transparent campaign roadmap & pricing.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slot Booking Widget */}
              <div className="card booking-widget-card">
                <div className="booking-header">
                  <Calendar size={18} color="var(--color-primary-orange)" />
                  <h4 className="booking-title">Book a 1-on-1 Strategy Call</h4>
                </div>

                {bookingConfirmed ? (
                  <div className="booking-success">
                    <CheckCircle2 size={32} color="#047857" style={{ marginBottom: '0.5rem' }} />
                    <p className="booking-success-text">Your call slot has been reserved!</p>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="booking-form">
                    <div className="form-group" style={{ marginBottom: '0.85rem' }}>
                      <input
                        type="date"
                        className="form-input"
                        required
                        value={bookingData.preferredDate}
                        onChange={(e) => setBookingData({ ...bookingData, preferredDate: e.target.value })}
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                      <select
                        className="form-select"
                        value={bookingData.preferredTime}
                        onChange={(e) => setBookingData({ ...bookingData, preferredTime: e.target.value })}
                      >
                        <option value="10:00 AM">10:00 AM Slot</option>
                        <option value="11:30 AM">11:30 AM Slot</option>
                        <option value="03:00 PM">03:00 PM Slot</option>
                        <option value="05:00 PM">05:00 PM Slot</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-outline" style={{ width: '100%', fontSize: '0.85rem' }}>
                      Reserve Call Slot
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inquiry;
