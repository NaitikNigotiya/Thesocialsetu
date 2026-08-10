// Comprehensive Pricing & Packages Dataset for The Social Setu

// 1. SME Startup Packages (Tiered Retainer Cards)
export const startupPackages = [
  {
    id: 'starter',
    name: 'SETU STARTER',
    price: '₹6,999',
    period: 'per month',
    popular: false,
    badgeText: 'STARTER RETAINER',
    description: 'Perfect for small local businesses & startups looking for consistent social media presence, post design, and basic monthly reporting.',
    features: [
      'Social Media Management (FB & IG)',
      '12 Static / Carousel Posts per month',
      '4 Short-Form Reels / Videos per month',
      'Captions & Hashtag Research included',
      'Monthly Performance Report'
    ],
    ctaText: 'Get Started with Setu Starter',
    ctaLink: '/inquiry?plan=starter'
  },
  {
    id: 'grow',
    name: 'SETU GROW',
    price: '₹11,999',
    period: 'per month',
    popular: true,
    badgeText: 'MOST POPULAR',
    description: 'Ideal for growing SMEs ready to generate leads with Meta Ads, scale video content, and capture local Google search customers.',
    features: [
      'Social Media Management (FB & IG)',
      '16 Static / Carousel Posts per month',
      '8 Short-Form Reels / Videos per month',
      'Captions & Hashtags included',
      'Meta Ads Management (FB & IG Ads)',
      'Basic SEO & Google Business Profile setup',
      'Monthly Performance Report',
      '1-on-1 Monthly Strategy Call'
    ],
    ctaText: 'Scale with Setu Grow',
    ctaLink: '/inquiry?plan=grow'
  },
  {
    id: 'pro',
    name: 'SETU PRO',
    price: '₹19,999',
    period: 'per month',
    popular: false,
    badgeText: 'FULL-FUNNEL DOMINATION',
    description: 'Complete digital marketing dominance across Meta Ads, Google Ads, SEO, Local Maps ranking, and deep analytics reviews.',
    features: [
      'Social Media Management (FB & IG)',
      '20 Static / Carousel Posts per month',
      '12 Short-Form Reels / Videos per month',
      'Captions & Hashtags included',
      'Meta Ads Management (FB & IG Ads)',
      'Google Ads Management (Search & Maps)',
      'Full SEO + Local SEO & Google Business Profile',
      'Monthly Performance Report',
      'Monthly Strategy Call (with analytics audit)'
    ],
    ctaText: 'Dominate with Setu Pro',
    ctaLink: '/inquiry?plan=pro'
  }
];

// 2. Starter Price List (A La Carte Individual Offerings)
export const starterPriceList = [
  { service: 'Social Media Management', price: '₹4,999/month', category: 'Social Media' },
  { service: 'Social Media Management + Reels', price: '₹7,999/month', category: 'Social Media' },
  { service: 'Social Media Content Design', price: '₹2,999/month', category: 'Design & Content' },
  { service: 'Reels / Short Video Editing', price: '₹499/video', category: 'Video Editing' },
  { service: 'Meta Ads Management', price: '₹2,999/month', category: 'Performance Ads' },
  { service: 'Google Ads Management', price: '₹3,999/month', category: 'Performance Ads' },
  { service: 'SEO – Basic', price: '₹4,999/month', category: 'Search Engine' },
  { service: 'Local SEO + Google Business Profile', price: '₹2,999/month', category: 'Search Engine' },
  { service: 'WordPress Business Website', price: '₹7,999 onwards', category: 'Web Development' },
  { service: 'Landing Page', price: '₹3,999 onwards', category: 'Web Development' },
  { service: 'Basic E-commerce Website', price: '₹14,999 onwards', category: 'Web Development' },
  { service: 'Logo Design', price: '₹1,499 onwards', category: 'Branding & Design' },
  { service: 'Basic Branding Kit', price: '₹2,999 onwards', category: 'Branding & Design' },
  { service: 'Digital Marketing Consultation', price: '₹999/session', category: 'Consultation & Audits' },
  { service: 'Social Media Audit', price: '₹999', category: 'Consultation & Audits' },
  { service: 'Competitor Research', price: '₹1,499 onwards', category: 'Consultation & Audits' }
];

// 3. Complete Feature Comparison Table
export const comparisonRows = [
  { feature: 'Social Media Management', starter: 'Yes', grow: 'Yes', pro: 'Yes' },
  { feature: 'Static / Carousel Posts', starter: '12 posts/mo', grow: '16 posts/mo', pro: '20 posts/mo' },
  { feature: 'Reels / Short Videos', starter: '4 Reels/mo', grow: '8 Reels/mo', pro: '12 Reels/mo' },
  { feature: 'Captions + Hashtags', starter: 'Yes', grow: 'Yes', pro: 'Yes' },
  { feature: 'Meta Ads Management', starter: '—', grow: 'Yes', pro: 'Yes' },
  { feature: 'Google Ads Management', starter: '—', grow: '—', pro: 'Yes' },
  { feature: 'Basic SEO / Google Business Profile', starter: '—', grow: 'Yes', pro: 'Yes' },
  { feature: 'SEO + Local SEO Domination', starter: '—', grow: '—', pro: 'Yes' },
  { feature: 'Monthly Performance Report', starter: 'Yes', grow: 'Yes', pro: 'Yes' },
  { feature: 'Monthly Strategy Call', starter: '—', grow: 'Yes', pro: 'Yes (with analytics audit)' }
];
