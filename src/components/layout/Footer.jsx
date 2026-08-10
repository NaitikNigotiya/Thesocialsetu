import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import footerLogoImg from '../../assets/footer-logo.png';
import './Footer.css';

const AGENCY_EMAIL = import.meta.env.VITE_AGENCY_EMAIL || 'hello.thesocialsetu@gmail.com';
const AGENCY_PHONE = '6267137892';
const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/thesocialsetu_?igsh=MTRoYWwyYTQ1N3VlNw==';
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/company/the-social-setu/';

const InstagramIcon = ({ size = 16, color = 'var(--color-primary-orange)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 16, color = 'var(--color-primary-orange)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Even 4-Column Grid */}
        <div className="footer-top">
          {/* Column 1: Logo Block (1.5fr) */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={footerLogoImg} alt="The Social Setu Logo" className="footer-logo-img" />
            </Link>
            <p className="footer-brand-text">
              Bridging Brands to Customers with ROI-Focused Digital Marketing.
            </p>
            <div className="footer-cta-wrapper">
              <Link to="/inquiry" className="footer-cta-btn">
                Get Free Consultation
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation (1fr) */}
          <div className="footer-col">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/industries" className="footer-link">Industries</Link></li>
              <li><Link to="/work" className="footer-link">Case Studies</Link></li>
              <li><Link to="/pricing" className="footer-link">Pricing Plans</Link></li>
              <li><Link to="/about" className="footer-link">About Agency</Link></li>
              <li><Link to="/inquiry" className="footer-link">Contact & Inquiry</Link></li>
            </ul>
          </div>

          {/* Column 3: Top Services (1fr) */}
          <div className="footer-col">
            <h4 className="footer-title">Top Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/performance-ads-ppc" className="footer-link">Performance Ads (PPC)</Link></li>
              <li><Link to="/services/seo-content-marketing" className="footer-link">SEO & Organic Growth</Link></li>
              <li><Link to="/services/lead-generation-funnels" className="footer-link">Lead Generation Funnels</Link></li>
              <li><Link to="/services/social-media-management" className="footer-link">Social Media Growth</Link></li>
              <li><Link to="/services/whatsapp-marketing-automation" className="footer-link">WhatsApp Automation</Link></li>
              <li><Link to="/services/web-design-cro" className="footer-link">Web Design & CRO</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Social (1fr) */}
          <div className="footer-col">
            <h4 className="footer-title">Contact & Social</h4>
            <ul className="footer-links">
              <li>
                <a href={`mailto:${AGENCY_EMAIL}`} className="footer-link contact-link">
                  <Mail size={16} style={{ color: 'var(--color-primary-orange)', flexShrink: 0 }} />
                  <span>{AGENCY_EMAIL}</span>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/91${AGENCY_PHONE}`} target="_blank" rel="noopener noreferrer" className="footer-link contact-link">
                  <Phone size={16} style={{ color: 'var(--color-primary-orange)', flexShrink: 0 }} />
                  <span>+91 62671 37892</span>
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer-link contact-link">
                  <InstagramIcon size={16} color="var(--color-primary-orange)" />
                  <span>@thesocialsetu_</span>
                </a>
              </li>
              <li>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="footer-link contact-link">
                  <LinkedinIcon size={16} color="var(--color-primary-orange)" />
                  <span>The Social Setu</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Divider & Flex Row */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} The Social Setu. All rights reserved. Designed by Naitik Nigotiya
          </p>
          <div className="legal-links">
            <span className="footer-link legal-link">Privacy Policy</span>
            <span className="footer-link legal-link">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
