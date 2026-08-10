import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, X, Grid, List as ListIcon } from 'lucide-react';
import SEO from '../components/sections/SEO';
import { caseStudiesData, workGalleryItems } from '../data/caseStudiesData';
import './Work.css';

export const Work = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [lightboxIndex, setLightboxIndex] = useState(null); // index in workGalleryItems or null

  const isLightboxOpen = lightboxIndex !== null;
  const currentItem = isLightboxOpen ? workGalleryItems[lightboxIndex] : null;

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev === 0 ? workGalleryItems.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev === workGalleryItems.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isLightboxOpen]);

  const nextLightboxItem = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === workGalleryItems.length - 1 ? 0 : prev + 1));
  };

  const prevLightboxItem = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? workGalleryItems.length - 1 : prev - 1));
  };

  return (
    <>
      <SEO
        title="Our Work — Campaign Portfolio"
        description="Explore The Social Setu minimal full-bleed portfolio gallery of performance ad campaigns, brand shoots, and digital marketing results."
      />

      <div className="work-minimal-page">
        <div className="work-container">
          {/* Minimal Header with Heading + Grid/List View Toggle */}
          <div className="work-header-minimal">
            <h1 className="work-heading">Our Work</h1>

            <div className="view-toggle-container">
              <button
                className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid View"
              >
                <Grid size={15} />
                <span>Grid</span>
              </button>
              <button
                className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                aria-label="List View"
              >
                <ListIcon size={15} />
                <span>List</span>
              </button>
            </div>
          </div>

          {/* =========================================================================
              VIEW 1: FULL-BLEED MASONRY GRID VIEW (Natural Aspect Ratios)
             ========================================================================= */}
          {viewMode === 'grid' && (
            <div className="masonry-grid-layout">
              {workGalleryItems.map((item, idx) => (
                <div 
                  key={item.id} 
                  className={`masonry-item item-${item.aspect}`}
                  onClick={() => setLightboxIndex(idx)}
                >
                  <div className="masonry-image-wrapper">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="masonry-img" 
                      loading="lazy"
                    />
                    <div className="masonry-overlay">
                      <div className="overlay-content">
                        <span className="overlay-category">{item.category}</span>
                        <h3 className="overlay-title">{item.title}</h3>
                        <p className="overlay-client">{item.client} • <span className="overlay-stats">{item.stats}</span></p>
                        <span className="overlay-link">
                          View Case Study <ArrowRight size={13} style={{ marginLeft: '4px' }} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* =========================================================================
              VIEW 2: STACKED LIST VIEW (Case Studies with Context)
             ========================================================================= */}
          {viewMode === 'list' && (
            <div className="list-view-layout">
              {caseStudiesData.map((study) => (
                <div key={study.slug} className="list-item-row">
                  <div className="list-item-image-col">
                    <Link to={`/work/${study.slug}`}>
                      <img 
                        src={study.heroImage} 
                        alt={study.client} 
                        className="list-img"
                      />
                    </Link>
                  </div>
                  <div className="list-item-info-col">
                    <span className="list-category-tag">{study.industry}</span>
                    <h2 className="list-title">
                      <Link to={`/work/${study.slug}`}>{study.client}</Link>
                    </h2>
                    <p className="list-summary">{study.summary}</p>
                    
                    {study.results && (
                      <div className="list-metrics-row">
                        {study.results.slice(0, 2).map((res, i) => (
                          <div key={i} className="list-metric-badge">
                            <span className="metric-val">{res.metric}</span>
                            <span className="metric-lbl">{res.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <Link to={`/work/${study.slug}`} className="list-case-study-btn">
                      <span>View Full Case Study</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* =========================================================================
          FULL-SCREEN LIGHTBOX MODAL
         ========================================================================= */}
      {isLightboxOpen && currentItem && (
        <div className="lightbox-backdrop" onClick={() => setLightboxIndex(null)}>
          <button 
            className="lightbox-close-btn" 
            onClick={() => setLightboxIndex(null)}
            aria-label="Close Lightbox"
          >
            <X size={26} color="#ffffff" />
          </button>

          <button 
            className="lightbox-nav-btn prev-btn" 
            onClick={prevLightboxItem}
            aria-label="Previous Image"
          >
            <ChevronLeft size={32} color="#ffffff" />
          </button>

          <button 
            className="lightbox-nav-btn next-btn" 
            onClick={nextLightboxItem}
            aria-label="Next Image"
          >
            <ChevronRight size={32} color="#ffffff" />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-img-wrapper">
              <img 
                src={currentItem.image} 
                alt={currentItem.title} 
                className="lightbox-img" 
              />
            </div>

            <div className="lightbox-caption-bar">
              <div className="caption-text">
                <span className="caption-category">{currentItem.category}</span>
                <h3 className="caption-title">{currentItem.title}</h3>
                <p className="caption-client">{currentItem.client} • <strong>{currentItem.stats}</strong></p>
              </div>

              <Link 
                to={`/work/${currentItem.slug}`} 
                className="lightbox-case-study-link"
                onClick={() => setLightboxIndex(null)}
              >
                <span>View Case Study</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Work;
