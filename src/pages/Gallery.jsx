import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Eye, Filter } from 'lucide-react';
import SEO from '../components/sections/SEO';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import './Gallery.css';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Aura Skincare Ad Creatives',
    category: 'Meta Ads Creatives',
    client: 'Aura Skincare',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    stats: '+320% ROAS Achieved'
  },
  {
    id: 2,
    title: 'Urban Brew Studio Shoot',
    category: 'Brand Shoots',
    client: 'Urban Brew Café',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    stats: '4.8x Walk-in Leads'
  },
  {
    id: 3,
    title: 'Apex Fitness High-Energy Reels',
    category: 'Video & Reels',
    client: 'Apex Gym & Fitness',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    stats: '1.2M Reel Views'
  },
  {
    id: 4,
    title: 'Prestige Real Estate Funnel UI',
    category: 'Landing Page UI',
    client: 'Prestige Homes',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    stats: '140+ Site Enquiries/mo'
  },
  {
    id: 5,
    title: 'Glamour Salon Social Campaign',
    category: 'Social Content',
    client: 'Glamour Beauty Lounge',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    stats: '+180% Follower Growth'
  },
  {
    id: 6,
    title: 'Ethnic Threads D2C Catalogue',
    category: 'Brand Shoots',
    client: 'Ethnic Threads India',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    stats: '₹4.5L Direct Sales'
  }
];

const CATEGORIES = ['All Work', 'Meta Ads Creatives', 'Brand Shoots', 'Video & Reels', 'Landing Page UI', 'Social Content'];

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All Work');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'All Work'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      <SEO
        title="Client Campaign & Creative Gallery"
        description="Explore The Social Setu client work gallery showcasing high-converting ad creatives, brand photo shoots, and video content."
      />

      <div className="gallery-page">
        <div className="container">
          <SectionHeader
            badgeText="CREATIVE SHOWCASE"
            title="Campaign & Design Gallery"
            subtitle="A visual showcase of our ad creative designs, brand photography shoots, video production, and landing page UI deliverables for Indian SMEs."
          />

          {/* Filter Bar */}
          <div className="gallery-filter-bar">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="gallery-card" onClick={() => setSelectedImage(item)}>
                <div className="gallery-img-wrapper">
                  <img src={item.image} alt={item.title} className="gallery-img" />
                  <div className="gallery-overlay">
                    <span className="gallery-category-badge">{item.category}</span>
                    <h3 className="gallery-card-title">{item.title}</h3>
                    <span className="gallery-stats-pill">{item.stats}</span>
                    <div className="gallery-view-icon">
                      <Eye size={20} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal Preview */}
          {selectedImage && (
            <div className="gallery-modal-backdrop" onClick={() => setSelectedImage(null)}>
              <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={() => setSelectedImage(null)}>✕</button>
                <img src={selectedImage.image} alt={selectedImage.title} className="modal-img" />
                <div className="modal-details">
                  <span className="badge badge-orange" style={{ marginBottom: '0.5rem' }}>{selectedImage.category}</span>
                  <h2>{selectedImage.title}</h2>
                  <p><strong>Client:</strong> {selectedImage.client}</p>
                  <p><strong>Impact:</strong> {selectedImage.stats}</p>
                  <Button to="/inquiry" variant="primary" size="sm" icon={ArrowRight} style={{ marginTop: '1rem' }}>
                    Request Similar Campaign
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Bottom CTA Card */}
          <div className="card-dark gallery-bottom-cta">
            <h3>Want high-converting campaign creatives like these?</h3>
            <p>We craft custom ad graphics, brand photoshoots, and video ads tailored for your Indian business.</p>
            <Button to="/inquiry" variant="primary" icon={ArrowRight} style={{ marginTop: '1.25rem' }}>
              Get Free Creative Consultation
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
