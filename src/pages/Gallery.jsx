import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import SEO from '../components/sections/SEO';
import { galleryImages } from '../data/galleryImages';
import './Gallery.css';

export const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const isLightboxOpen = lightboxIndex !== null;
  const currentImage = isLightboxOpen ? galleryImages[lightboxIndex] : null;

  // Keyboard navigation listeners
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
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

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <SEO
        title="Visual Gallery | The Social Setu"
        description="A pure visual showcase of brand design, ad creatives, and photography for The Social Setu."
      />

      {/* Pure Visual Masonry Container — No Heading, No Badges, No Text */}
      <div className="pure-gallery-page">
        <div className="pure-gallery-container">
          <div className="pure-masonry-grid">
            {galleryImages.map((imgItem, idx) => (
              <div
                key={imgItem.id}
                className="pure-masonry-item"
                onClick={() => setLightboxIndex(idx)}
              >
                <img
                  src={imgItem.src}
                  alt={`Gallery Image ${imgItem.id}`}
                  className="pure-masonry-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pure Photo Lightbox Modal — No Text, No Captions, No Links */}
      {isLightboxOpen && currentImage && (
        <div className="pure-lightbox-backdrop" onClick={() => setLightboxIndex(null)}>
          <button
            className="pure-lightbox-close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close Lightbox"
          >
            <X size={26} color="#ffffff" />
          </button>

          <button
            className="pure-lightbox-arrow pure-prev-arrow"
            onClick={prevImage}
            aria-label="Previous Image"
          >
            <ChevronLeft size={34} color="#ffffff" />
          </button>

          <button
            className="pure-lightbox-arrow pure-next-arrow"
            onClick={nextImage}
            aria-label="Next Image"
          >
            <ChevronRight size={34} color="#ffffff" />
          </button>

          <div className="pure-lightbox-wrapper" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentImage.src}
              alt={`Gallery Image ${currentImage.id}`}
              className="pure-lightbox-img"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
