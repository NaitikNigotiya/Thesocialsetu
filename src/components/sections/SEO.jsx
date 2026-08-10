import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Reusable SEO component using react-helmet-async
 * Sets head title, meta description, and OpenGraph tags dynamically per route
 */
export const SEO = ({ 
  title = 'The Social Setu | Digital Marketing & Lead Generation Agency', 
  description = 'The Social Setu is a ROI-focused digital marketing agency delivering performance ads, SEO, lead-gen funnels, and high-converting web design for ambitious brands.',
  canonicalUrl,
  ogImage = '/og-image.jpg'
}) => {
  const pageTitle = title.includes('The Social Setu') ? title : `${title} | The Social Setu`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      
      {/* OpenGraph Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};

export default SEO;
