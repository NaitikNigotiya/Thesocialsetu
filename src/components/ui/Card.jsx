import React from 'react';

export const Card = ({ children, variant = 'light', className = '', ...props }) => {
  const cardClass = variant === 'dark' ? 'card card-dark' : 'card';
  return (
    <div className={`${cardClass} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
};

export default Card;
