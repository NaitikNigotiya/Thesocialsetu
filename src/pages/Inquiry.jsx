import React, { useState } from 'react';
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
  ShieldCheck
} from 'lucide-react';
import SEO from '../components/sections/SEO';
import Button from '../components/ui/Button';
import './Inquiry.css';

const AGENCY_EMAIL = import.meta.env.VITE_AGENCY_EMAIL || 'hello.thesocialsetu@gmail.com';
const AGENCY_PHONE = '6267137892';
const WHATSAPP_LINK = `https://wa.me/91${AGENCY_PHONE}?text=${encodeURIComponent('Hi, I want to discuss digital marketing services for my business.')}`;

const SERVICES_OPTIONS = [
  'Social Media Marketing',
  'Meta Ads',
  'Google Ads',
  'SEO',
  'Website Development',
  'Content Creation',
  'Google Business Profile',
  'Email Marketing'
];

const BUSINESS_TYPES = [
  'Retail',
  'Restaurant/Café',
  'Salon',
  'Gym',
  'Clinic',
  'Real Estate',
  'Education',
  'Automobile',
  'Fashion',
  'D2C',
  'Manufacturing',
  'Service Business',
  'Other'
];

const BUDGET_RANGES = [
  'Under ₹10k',
  '₹10k-25k',
  '₹25k-50k',
  '₹50k-1L',
  '₹1L+'
];

export const Inquiry = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    businessType: 'Retail',
    website: '',
    instagramHandle: '',
    marketingBudget: '₹25k-50k',
    servicesRequired: ['Meta Ads', 'Social Media Marketing'],
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      const exists = prev.servicesRequired.includes(service);
      if (exists) {
        return {
          ...prev,
          servicesRequired: prev.servicesRequired.filter((s) => s !== service)
        };
      } else {
        return {
          ...prev,
          servicesRequired: [...prev.servicesRequired, service]
        };
      }
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API / Webhook submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'inquiry_submitted',
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
        title="Get Free Consultation & Marketing Strategy"
        description="Request a free digital marketing consultation and audit for your business from The Social Setu growth leads."
      />

      <div className="inquiry-page">
        <div className="container">
          {/* 1. Header Section */}
          <div className="inquiry-header">
            <div className="badge badge-orange" style={{ marginBottom: '1rem' }}>
              <Sparkles size={14} color="var(--color-primary-orange)" />
              <span>Get Free Consultation</span>
            </div>
            <h1 className="inquiry-title">
              Let's Talk About Growing Your Business.
            </h1>
            <p className="inquiry-subheading">
              Tell us a bit about your business — we'll get back within 24 hours with a free strategy call.
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
                  <h3 className="success-title">Inquiry Received!</h3>
                  <p className="success-desc">
                    Thanks! We've received your inquiry and will contact you within 24 hours.
                  </p>
                  <p className="success-subtext">
                    Our Senior Growth Strategist is reviewing your details to prepare your custom marketing audit.
                  </p>
                  <button 
                    className="btn btn-outline" 
                    onClick={() => setFormSubmitted(false)}
                    style={{ marginTop: '1.5rem' }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitForm} className="inquiry-form">
                  <h2 className="form-heading">Fill Out Your Details</h2>

                  {/* Name & Business Name */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">
                        Name <span className="asterisk">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        placeholder="e.g. Rahul Verma"
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
                        placeholder="e.g. Apex Fitness Club"
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

                  {/* Business Type & Monthly Marketing Budget */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="businessType">
                        Business Type <span className="asterisk">*</span>
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
                        Website URL
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        className="form-input"
                        placeholder="if you have one"
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

                  {/* Services Required Checkboxes */}
                  <div className="form-group">
                    <label className="form-label">
                      Services Required <span className="asterisk">*</span>
                    </label>
                    <div className="services-checkbox-grid">
                      {SERVICES_OPTIONS.map((service) => {
                        const isChecked = formData.servicesRequired.includes(service);
                        return (
                          <label key={service} className={`checkbox-item ${isChecked ? 'checked' : ''}`}>
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
                      Tell us about your goals
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="Share your current marketing bottlenecks, target leads, or revenue goals..."
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
                    {isSubmitting ? 'Sending Inquiry...' : 'Send My Inquiry'}
                  </Button>
                </form>
              )}

              {/* 3. Trust Strip Below Form */}
              <div className="trust-strip">
                <span>50+ Businesses</span>
                <span className="dot-separator">•</span>
                <span>100+ Campaigns</span>
                <span className="dot-separator">•</span>
                <span>10+ Industries</span>
              </div>
            </div>

            {/* RIGHT COLUMN: Sidebar (Supporting Content) */}
            <div className="inquiry-sidebar">
              {/* Direct Talk / WhatsApp Card */}
              <div className="card-dark whatsapp-cta-card">
                <h3 className="sidebar-title text-white">Prefer to talk directly?</h3>
                <p className="sidebar-desc text-muted">
                  Connect with our lead strategists instantly on WhatsApp for immediate campaign consultation.
                </p>

                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="whatsapp-direct-btn"
                >
                  <MessageSquare size={18} />
                  <span>Chat with us on WhatsApp</span>
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
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="card next-steps-card">
                <h4 className="next-steps-title">What happens next?</h4>
                <div className="steps-list">
                  <div className="step-item">
                    <div className="step-number">1</div>
                    <div className="step-text">
                      <strong>We review your inquiry</strong>
                      <p>Our squad analyzes your website & ad presence.</p>
                    </div>
                  </div>

                  <div className="step-item">
                    <div className="step-number">2</div>
                    <div className="step-text">
                      <strong>We schedule a free call</strong>
                      <p>30-minute deep dive on your growth bottlenecks.</p>
                    </div>
                  </div>

                  <div className="step-item">
                    <div className="step-number">3</div>
                    <div className="step-text">
                      <strong>You get a custom proposal</strong>
                      <p>Data-backed campaign roadmap & ROI plan.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Optional Slot Booking Widget */}
              <div className="card booking-widget-card">
                <div className="booking-header">
                  <Calendar size={18} color="var(--color-primary-orange)" />
                  <h4 className="booking-title">Select Preferred Date & Time</h4>
                </div>

                {bookingConfirmed ? (
                  <div className="booking-success">
                    <CheckCircle2 size={32} color="#047857" style={{ marginBottom: '0.5rem' }} />
                    <p className="booking-success-text">Your consultation slot has been booked successfully!</p>
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
