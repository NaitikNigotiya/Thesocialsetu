import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Mail, Phone, Search } from 'lucide-react';
import logoImg from '../../assets/logo.png';
import Button from '../ui/Button';
import { servicesData, categoriesList } from '../../data/servicesData';
import { caseStudiesData } from '../../data/caseStudiesData';
import './Nav.css';

const AGENCY_EMAIL = import.meta.env.VITE_AGENCY_EMAIL || 'hello.thesocialsetu@gmail.com';
const AGENCY_PHONE = '6267137892';
const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/thesocialsetu_?igsh=MTRoYWwyYTQ1N3VlNw==';
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/company/the-social-setu/';

const InstagramIcon = ({ size = 14, color = 'var(--color-primary-orange)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 14, color = 'var(--color-primary-orange)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileSearchOpen) setMobileSearchOpen(false);
  };
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const toggleMobileSearch = () => {
    setMobileSearchOpen(!mobileSearchOpen);
    if (mobileMenuOpen) setMobileMenuOpen(false);
    setIsSearchOpen(true);
  };

  // Filter search results from services and case studies
  const filteredServices = searchQuery.trim()
    ? servicesData.filter(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const filteredCaseStudies = searchQuery.trim()
    ? caseStudiesData.filter(c => 
        c.client.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.summary.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Close search dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchRef.current && !searchRef.current.contains(e.target) &&
        mobileSearchRef.current && !mobileSearchRef.current.contains(e.target)
      ) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (scrollY > 50) {
            setScrolled(true);
          } else if (scrollY < 15) {
            setScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectResult = (path) => {
    setSearchQuery('');
    setIsSearchOpen(false);
    setMobileSearchOpen(false);
    closeMobileMenu();
    navigate(path);
  };

  return (
    <header className="header-wrapper">
      {/* Top Info Bar */}
      <div className="top-infobar-wrapper">
        <div className="top-infobar-inner">
          <div className="top-infobar">
            <div className="container infobar-container">
              <div className="infobar-details">
                <a href={`mailto:${AGENCY_EMAIL}`} className="infobar-item">
                  <Mail size={14} color="var(--color-primary-orange)" />
                  <span>{AGENCY_EMAIL}</span>
                </a>
                <a href={`https://wa.me/91${AGENCY_PHONE}`} target="_blank" rel="noopener noreferrer" className="infobar-item">
                  <Phone size={14} color="var(--color-primary-orange)" />
                  <span>+91 62671 37892</span>
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="infobar-item">
                  <InstagramIcon size={14} color="var(--color-primary-orange)" />
                  <span>@thesocialsetu_</span>
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="infobar-item">
                  <LinkedinIcon size={14} color="var(--color-primary-orange)" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="infobar-action">
                <Button to="/inquiry" variant="primary" size="sm" icon={ArrowRight} className="infobar-btn">
                  Get Free Audit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Logo */}
          <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
            <img src={logoImg} alt="The Social Setu Logo" className="logo-img" />
          </Link>

          {/* Navigation Links (Desktop + Mobile Overlay) */}
          <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>

            {/* Company + Dropdown */}
            <li className="nav-item-has-dropdown">
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Company <span className="plus-icon">+</span>
              </NavLink>
              <ul className="nav-dropdown">
                <li><Link to="/about" onClick={closeMobileMenu}>About Page</Link></li>
                <li><Link to="/gallery" onClick={closeMobileMenu}>Gallery Page</Link></li>
              </ul>
            </li>

            {/* Services + Dropdown */}
            <li className="nav-item-has-dropdown">
              <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Services <span className="plus-icon">+</span>
              </NavLink>
              <ul className="nav-dropdown nav-dropdown-nested">
                {categoriesList.map((cat) => (
                  <li key={cat.id} className="nav-dropdown-item-has-sub">
                    <Link to="/services" onClick={closeMobileMenu} className="dropdown-category-title">
                      <span><span className="dash-accent">-</span> {cat.shortTitle}</span>
                      <span className="plus-icon-sub">+</span>
                    </Link>
                    <ul className="nav-sub-dropdown">
                      {cat.services.map((service) => (
                        <li key={service.slug}>
                          <Link to={`/services/${service.slug}`} onClick={closeMobileMenu}>
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>

            {/* Packages + Dropdown */}
            <li className="nav-item-has-dropdown">
              <NavLink to="/pricing" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Packages <span className="plus-icon">+</span>
              </NavLink>
              <ul className="nav-dropdown">
                <li><Link to="/pricing#sme-packages" onClick={closeMobileMenu}>SME Growth Packages</Link></li>
                <li><Link to="/pricing#ala-carte" onClick={closeMobileMenu}>A La Carte Offerings</Link></li>
              </ul>
            </li>

            {/* Career */}
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMobileMenu}>
                Career
              </NavLink>
            </li>

            {/* Blog */}
            <li>
              <NavLink to="/work" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMobileMenu}>
                Blog
              </NavLink>
            </li>

            {/* Contact Us */}
            <li>
              <NavLink to="/inquiry" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMobileMenu}>
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Header Right Actions */}
          <div className="nav-actions">
            {/* Desktop Search Bar */}
            <div className="nav-search-container desktop-only-search" ref={searchRef}>
              <div className="search-input-wrapper">
                <Search size={16} className="search-icon" />
                <input
                  type="text"
                  className="nav-search-input"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() => setIsSearchOpen(true)}
                />
                {searchQuery && (
                  <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Desktop Search Results Dropdown */}
              {isSearchOpen && searchQuery.trim() !== '' && (
                <div className="search-results-dropdown">
                  {filteredServices.length === 0 && filteredCaseStudies.length === 0 ? (
                    <div className="search-no-results">No services found for "{searchQuery}"</div>
                  ) : (
                    <>
                      {filteredServices.length > 0 && (
                        <div className="search-section">
                          <div className="search-section-label">Services</div>
                          {filteredServices.map(service => (
                            <div
                              key={service.slug}
                              className="search-result-item"
                              onClick={() => handleSelectResult(`/services/${service.slug}`)}
                            >
                              <div className="search-result-title">{service.name}</div>
                              <div className="search-result-desc">{service.shortDesc}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {filteredCaseStudies.length > 0 && (
                        <div className="search-section">
                          <div className="search-section-label">Case Studies</div>
                          {filteredCaseStudies.map(study => (
                            <div
                              key={study.slug}
                              className="search-result-item"
                              onClick={() => handleSelectResult(`/work/${study.slug}`)}
                            >
                              <div className="search-result-title">{study.client} ({study.industry})</div>
                              <div className="search-result-desc">{study.summary}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile-Only Search Icon Button */}
            <button className="mobile-search-trigger-btn" onClick={toggleMobileSearch} aria-label="Open Search">
              <Search size={22} />
            </button>

            {/* Mobile Hamburger Menu 3 Lines */}
            <button className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle Navigation Menu">
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Dropdown Bar (Toggled by Mobile Search Icon) */}
        {mobileSearchOpen && (
          <div className="mobile-search-bar-overlay" ref={mobileSearchRef}>
            <div className="container mobile-search-bar-inner">
              <div className="mobile-search-input-box">
                <Search size={18} className="search-icon" />
                <input
                  type="text"
                  className="mobile-search-input"
                  placeholder="Search services, packages, case studies..."
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                />
                <button className="mobile-search-close-btn" onClick={() => setMobileSearchOpen(false)}>
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Search Results */}
              {isSearchOpen && searchQuery.trim() !== '' && (
                <div className="mobile-search-results-list">
                  {filteredServices.length === 0 && filteredCaseStudies.length === 0 ? (
                    <div className="search-no-results">No services found for "{searchQuery}"</div>
                  ) : (
                    <>
                      {filteredServices.length > 0 && (
                        <div className="search-section">
                          <div className="search-section-label">Services</div>
                          {filteredServices.map(service => (
                            <div
                              key={service.slug}
                              className="search-result-item"
                              onClick={() => handleSelectResult(`/services/${service.slug}`)}
                            >
                              <div className="search-result-title">{service.name}</div>
                              <div className="search-result-desc">{service.shortDesc}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {filteredCaseStudies.length > 0 && (
                        <div className="search-section">
                          <div className="search-section-label">Case Studies</div>
                          {filteredCaseStudies.map(study => (
                            <div
                              key={study.slug}
                              className="search-result-item"
                              onClick={() => handleSelectResult(`/work/${study.slug}`)}
                            >
                              <div className="search-result-title">{study.client} ({study.industry})</div>
                              <div className="search-result-desc">{study.summary}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
