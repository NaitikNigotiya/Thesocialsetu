import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  TrendingUp, 
  Share2, 
  Filter, 
  Layout, 
  Compass, 
  MessageSquare, 
  Video, 
  ShieldCheck, 
  Target, 
  Palette, 
  MapPin, 
  Award, 
  HelpCircle,
  CheckCircle2
} from 'lucide-react';
import Card from '../ui/Card';

const iconMap = {
  Search,
  TrendingUp,
  Share2,
  Filter,
  Layout,
  Compass,
  MessageSquare,
  Video,
  Target,
  Palette,
  MapPin,
  Award,
  HelpCircle
};

export const ServiceCard = ({ service, featured = false }) => {
  const IconComponent = iconMap[service.icon] || ShieldCheck;

  return (
    <Card 
      className={`service-card ${service.isHero ? 'hero-service-card' : ''}`}
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        position: 'relative',
        border: service.isHero ? '1px solid rgba(250, 119, 16, 0.25)' : '1px solid rgba(25, 33, 47, 0.08)'
      }}
    >
      {/* Badge Pill */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: service.isHero ? 'rgba(250, 119, 16, 0.12)' : 'rgba(15, 23, 38, 0.06)',
          color: service.isHero ? 'var(--color-primary-orange)' : 'var(--color-primary-navy)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <IconComponent size={26} />
        </div>
        <span className={service.isHero ? 'badge badge-orange' : 'badge badge-dark'} style={{ fontSize: '0.725rem' }}>
          {service.badgeText || 'SERVICE'}
        </span>
      </div>

      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--color-primary-navy)' }}>
        {service.name}
      </h3>

      <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
        {service.shortDesc}
      </p>

      {/* Deliverables snippet */}
      {service.deliverables && service.deliverables.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', flex: 1 }}>
          {service.deliverables.slice(0, 3).map((item, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--color-body)', marginBottom: '0.4rem' }}>
              <CheckCircle2 size={14} color="var(--color-primary-orange)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {service.statHighlights && service.statHighlights[0] && (
        <div style={{
          background: '#f8fafc',
          padding: '0.65rem 0.85rem',
          borderRadius: 'var(--radius-sm)',
          marginBottom: '1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.825rem'
        }}>
          <span style={{ color: 'var(--color-muted)', fontWeight: 500 }}>{service.statHighlights[0].label}</span>
          <span style={{ color: 'var(--color-primary-orange)', fontWeight: 700 }}>{service.statHighlights[0].value}</span>
        </div>
      )}

      <Link
        to={`/services/${service.slug}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontFamily: 'var(--font-primary)',
          fontSize: '0.9rem',
          fontWeight: 700,
          color: 'var(--color-primary-navy)',
          textDecoration: 'none',
          marginTop: 'auto'
        }}
      >
        <span>View Inclusions & Plans</span>
        <ArrowRight size={15} color="var(--color-primary-orange)" />
      </Link>
    </Card>
  );
};

export default ServiceCard;
