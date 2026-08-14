import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { X, CheckCircle2, ShieldCheck } from 'lucide-react';
import './InquiryPopupModal.css';

const SERVICES_OPTIONS = [
  'Social Media Management',
  'Meta Ads',
  'Google Ads',
  'SEO & Local SEO',
  'Website Development',
  'Content Creation & Design',
  'Google Business Profile',
  'Digital Marketing Consultation'
];

const BUDGET_OPTIONS = [
  'Under ₹10,000 / month (Setu Starter)',
  '₹10,000 - ₹20,000 / month (Setu Grow)',
  '₹20,000 - ₹50,000 / month (Setu Pro)',
  '₹50,000 - ₹1,00,000+ / month (Enterprise)'
];

export const InquiryPopupModal = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Meta Ads',
    budget: '₹10,000 - ₹20,000 / month (Setu Grow)'
  });

  useEffect(() => {
    // Only open automatically when visitor is on the Homepage ('/')
    if (location.pathname !== '/') return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2500); // 2.5 seconds entrance delay on homepage load/reload

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Listen for custom trigger events from anywhere on the site
  useEffect(() => {
    const handleCustomOpen = () => setIsOpen(true);
    window.addEventListener('open-inquiry-modal', handleCustomOpen);
    return () => window.removeEventListener('open-inquiry-modal', handleCustomOpen);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('setu_popup_dismissed', 'true');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waText = `Hi The Social Setu Team,\n\nI have an inquiry from your popup form:\n- *Name*: ${formData.name}\n- *Phone*: ${formData.phone}\n- *Email*: ${formData.email}\n- *Service*: ${formData.service}\n- *Budget*: ${formData.budget}`;
    const waUrl = `https://wa.me/916267137892?text=${encodeURIComponent(waText)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      sessionStorage.setItem('setu_popup_dismissed', 'true');
      window.open(waUrl, '_blank');

      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'popup_inquiry_submitted',
          service: formData.service,
          budget: formData.budget
        });
      }

      // Auto close after 3 seconds
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-modal-overlay" onClick={handleClose}>
      <div className="popup-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Icon Button */}
        <button className="popup-close-btn" onClick={handleClose} aria-label="Close Inquiry Modal">
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div className="popup-success-box">
            <div className="popup-success-icon">
              <CheckCircle2 size={54} color="#047857" />
            </div>
            <h3 className="popup-success-title">Inquiry Submitted!</h3>
            <p className="popup-success-desc">
              Thank you, <strong>{formData.name}</strong>! We've received your request for <strong>{formData.service}</strong>.
            </p>
            <p className="popup-success-subtext">
              Our Senior Growth Strategist will contact you within 24 hours with your free marketing proposal.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="popup-form">
            <div className="popup-header">
              <h2 className="popup-title">
                Let’s Get to <span className="highlight-orange">Talkin’</span>
              </h2>
              <p className="popup-subtitle">
                Request your free digital marketing strategy & ROAS audit for your business.
              </p>
            </div>

            {/* Your Name */}
            <div className="popup-form-group">
              <label className="popup-label" htmlFor="popup-name">
                Your Name <span className="asterisk">*</span>
              </label>
              <input
                type="text"
                id="popup-name"
                name="name"
                className="popup-input"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            {/* Email & Phone Row */}
            <div className="popup-form-row">
              <div className="popup-form-group">
                <label className="popup-label" htmlFor="popup-email">
                  Email Address <span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  id="popup-email"
                  name="email"
                  className="popup-input"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="popup-form-group">
                <label className="popup-label" htmlFor="popup-phone">
                  Phone Number <span className="asterisk">*</span>
                </label>
                <div className="popup-phone-input-wrapper">
                  <span className="phone-prefix">🇮🇳 +91</span>
                  <input
                    type="tel"
                    id="popup-phone"
                    name="phone"
                    className="popup-input phone-field"
                    placeholder="Your Number"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Select Service & Your Budget Row */}
            <div className="popup-form-row">
              <div className="popup-form-group">
                <label className="popup-label" htmlFor="popup-service">
                  Select Services <span className="asterisk">*</span>
                </label>
                <select
                  id="popup-service"
                  name="service"
                  className="popup-select"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  {SERVICES_OPTIONS.map((svc) => (
                    <option key={svc} value={svc}>{svc}</option>
                  ))}
                </select>
              </div>

              <div className="popup-form-group">
                <label className="popup-label" htmlFor="popup-budget">
                  Your Budget <span className="asterisk">*</span>
                </label>
                <select
                  id="popup-budget"
                  name="budget"
                  className="popup-select"
                  value={formData.budget}
                  onChange={handleInputChange}
                >
                  {BUDGET_OPTIONS.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Security Guarantee Pill */}
            <div className="popup-security-pill">
              <ShieldCheck size={16} color="var(--color-primary-orange)" />
              <span>100% Data Ownership & Zero Spam Guarantee</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="popup-submit-btn"
            >
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default InquiryPopupModal;
