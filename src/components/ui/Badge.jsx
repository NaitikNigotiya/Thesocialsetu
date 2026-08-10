import React from 'react';

export const Badge = ({ children, variant = 'light', icon: Icon, className = '' }) => {
  const badgeClass = variant === 'dark' ? 'badge badge-dark' : 'badge';
  return (
    <span className={`${badgeClass} ${className}`.trim()}>
      {Icon && <Icon size={14} />}
      {children}
    </span>
  );
};

export default Badge;
