import React from 'react';
import { Home as HomeIcon } from 'lucide-react';
import SEO from '../components/sections/SEO';
import Button from '../components/ui/Button';

export const NotFound = () => {
  return (
    <>
      <SEO title="404 - Page Not Found" description="The requested page could not be found." />
      <div style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 1.5rem'
      }}>
        <h1 style={{ fontSize: '6rem', color: 'var(--color-primary-orange)', lineHeight: 1 }}>404</h1>
        <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
        <p style={{ color: 'var(--color-muted)', maxWidth: '500px', marginBottom: '2rem' }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button to="/" variant="primary" icon={HomeIcon}>
          Back to Homepage
        </Button>
      </div>
    </>
  );
};

export default NotFound;
