import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const AccordionItem = ({ question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="accordion-item" style={{
      borderBottom: '1px solid rgba(25, 33, 47, 0.1)',
      padding: '1.25rem 0'
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'none',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
          fontFamily: 'var(--font-primary)',
          fontSize: '1.15rem',
          fontWeight: 600,
          color: 'var(--color-primary-navy)',
          gap: '1rem'
        }}
      >
        <span>{question}</span>
        <ChevronDown 
          size={20} 
          style={{ 
            transition: 'transform 0.3s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            flexShrink: 0,
            color: 'var(--color-primary-orange)'
          }} 
        />
      </button>
      {isOpen && (
        <div style={{ marginTop: '0.75rem', color: 'var(--color-body)', fontSize: '1rem', lineHeight: 1.6 }}>
          {answer}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
