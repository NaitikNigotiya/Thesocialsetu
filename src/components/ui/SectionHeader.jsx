import React from 'react';
import Badge from './Badge';

export const SectionHeader = ({
  badgeText,
  badgeIcon,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = ''
}) => {
  return (
    <div 
      className={`section-header ${className}`} 
      style={{
        textAlign: centered ? 'center' : 'left',
        maxWidth: centered ? '780px' : '100%',
        margin: centered ? '0 auto 3.5rem auto' : '0 0 2.5rem 0'
      }}
    >
      {badgeText && (
        <div style={{ marginBottom: '1rem' }}>
          <Badge variant={dark ? 'dark' : 'light'} icon={badgeIcon}>
            {badgeText}
          </Badge>
        </div>
      )}
      {title && (
        <h2 style={{ 
          color: dark ? 'var(--color-white)' : 'var(--color-primary-navy)',
          marginBottom: '1rem'
        }}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p style={{ 
          fontSize: '1.15rem', 
          color: dark ? 'rgba(255, 255, 255, 0.8)' : 'var(--color-muted)',
          margin: 0
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
