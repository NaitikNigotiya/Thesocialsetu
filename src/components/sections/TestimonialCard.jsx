import React from 'react';
import { Star, Quote } from 'lucide-react';
import Card from '../ui/Card';

export const TestimonialCard = ({ quote, author, designation, company, rating = 5 }) => {
  return (
    <Card style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Quote size={36} color="var(--color-light-orange)" style={{ opacity: 0.4, marginBottom: '0.75rem' }} />

      <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} fill="var(--color-primary-orange)" color="var(--color-primary-orange)" />
        ))}
      </div>

      <p style={{ fontStyle: 'italic', color: 'var(--color-body)', fontSize: '1rem', marginBottom: '1.5rem', flex: 1, lineHeight: 1.6 }}>
        "{quote}"
      </p>

      <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
        <div style={{ fontWeight: 700, fontFamily: 'var(--font-primary)', color: 'var(--color-primary-navy)' }}>
          {author}
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>
          {designation} {company ? `• ${company}` : ''}
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
