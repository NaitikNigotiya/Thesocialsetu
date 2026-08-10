import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Flexible Button component utilizing design-system CSS classes
 */
export const Button = ({
  children,
  to,
  href,
  variant = 'primary', // primary | secondary | outline | white
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon,
  ...props
}) => {
  const baseClass = `btn btn-${variant} ${className}`.trim();

  const handleGtmClick = (e) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'cta_click',
        button_text: typeof children === 'string' ? children : 'CTA Button',
        destination: to || href || 'action'
      });
    }
    if (onClick) onClick(e);
  };

  if (to) {
    return (
      <Link to={to} className={baseClass} onClick={handleGtmClick} {...props}>
        {children}
        {Icon && <Icon size={18} />}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClass} onClick={handleGtmClick} {...props}>
        {children}
        {Icon && <Icon size={18} />}
      </a>
    );
  }

  return (
    <button type={type} className={baseClass} onClick={handleGtmClick} disabled={disabled} {...props}>
      {children}
      {Icon && <Icon size={18} />}
    </button>
  );
};

export default Button;
