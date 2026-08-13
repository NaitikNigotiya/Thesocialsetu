// Comprehensive Pricing & Packages Dataset for The Social Setu

export const pricingNotice = "* Starter pricing — final rates to be confirmed by Raghav Gupta before the pricing page goes live. All prices in INR; ad spend is separate from management fees.";

// 1. Categorized Services Price List
export const serviceCategoriesData = [
  {
    id: 'smm',
    category: 'Social Media Management',
    billingType: 'Monthly Retainer',
    note: 'Build an engaged social audience and consistent brand presence across Instagram & Facebook.',
    packages: [
      {
        tier: 'Starter',
        price: '₹6,000/mo',
        popular: false,
        includes: '1 platform, 12 posts/month, basic captions & hashtags'
      },
      {
        tier: 'Growth',
        price: '₹12,000/mo',
        popular: true,
        includes: '2 platforms, posts + reels, community management, monthly report'
      },
      {
        tier: 'Pro',
        price: '₹20,000/mo',
        popular: false,
        includes: '3 platforms, content calendar, reels + stories, strategy call, detailed reporting'
      }
    ]
  },
  {
    id: 'meta-ads',
    category: 'Meta Ads — Facebook & Instagram',
    billingType: 'Monthly (Ad spend extra)',
    note: 'High-converting lead generation & sales campaigns across Meta platforms.',
    packages: [
      {
        tier: 'Starter',
        price: '₹5,000/mo',
        popular: false,
        includes: '1 active campaign, basic targeting & creative guidance'
      },
      {
        tier: 'Growth',
        price: '₹8,000/mo',
        popular: true,
        includes: 'Up to 3 campaigns, A/B testing, retargeting setup'
      },
      {
        tier: 'Pro',
        price: '₹15,000/mo',
        popular: false,
        includes: 'Full-funnel campaigns, creative testing, weekly optimization, reporting'
      }
    ]
  },
  {
    id: 'google-ads',
    category: 'Google Ads',
    billingType: 'Monthly (Ad spend extra)',
    note: 'Capture high-intent search buyers actively looking for your products or services.',
    packages: [
      {
        tier: 'Starter',
        price: '₹5,000/mo',
        popular: false,
        includes: 'Search campaign setup & basic keyword targeting'
      },
      {
        tier: 'Growth',
        price: '₹9,000/mo',
        popular: true,
        includes: 'Search + Display, conversion tracking, monthly optimization'
      },
      {
        tier: 'Pro',
        price: '₹15,000/mo',
        popular: false,
        includes: 'Search + Display + Shopping/Performance Max, weekly bid optimization'
      }
    ]
  },
  {
    id: 'seo',
    category: 'SEO & Local SEO',
    billingType: 'Monthly Retainer',
    note: 'Rank on Page 1 of Google organic search and dominate local map pack results.',
    packages: [
      {
        tier: 'Starter',
        price: '₹7,000/mo',
        popular: false,
        includes: 'On-page SEO basics + Google Business Profile optimization'
      },
      {
        tier: 'Growth',
        price: '₹12,000/mo',
        popular: true,
        includes: 'On-page + local citations + monthly content/blog support'
      },
      {
        tier: 'Pro',
        price: '₹20,000/mo',
        popular: false,
        includes: 'Full technical SEO, link building, monthly ranking reports'
      }
    ]
  },
  {
    id: 'web-dev',
    category: 'Website Development',
    billingType: 'One-Time Project',
    note: 'Fast, mobile-responsive websites and e-commerce stores built to convert visitors.',
    packages: [
      {
        tier: 'Basic',
        price: '₹8,000',
        popular: false,
        includes: 'Up to 5 pages, static/informational site'
      },
      {
        tier: 'Business',
        price: '₹15,000',
        popular: true,
        includes: 'Up to 10 pages, CMS-managed, blog section'
      },
      {
        tier: 'E-commerce',
        price: '₹25,000 onward',
        popular: false,
        includes: 'Full online store with payment gateway integration'
      }
    ]
  }
];

// 2. Supporting & Add-on Services
export const supportingServicesData = [
  {
    service: 'Content & Design',
    price: '₹3,000 – ₹8,000/mo',
    type: 'Monthly',
    includes: 'Graphics, captions, basic content calendar'
  },
  {
    service: 'Branding',
    price: '₹5,000 – ₹12,000',
    type: 'One-Time',
    includes: 'Logo + basic brand kit (one-time)'
  },
  {
    service: 'GBP Setup',
    price: '₹2,000 – ₹4,000',
    type: 'One-Time',
    includes: 'Google Business Profile creation & optimization (one-time)'
  },
  {
    service: 'Consultation',
    price: 'Free / ₹1,500',
    type: 'Per Session',
    includes: 'First session free; paid sessions after for deep-dive strategy'
  }
];

// 3. Bundled Startup Packages (Recommended for Maximum Value)
export const startupPackages = [
  {
    id: 'starter',
    name: 'SETU STARTER',
    price: '₹6,000',
    period: 'per month',
    popular: false,
    badgeText: 'STARTER PACKAGE',
    description: 'Accessible starter plan for small businesses & local setups to build consistent social media presence.',
    features: [
      'Social Media Management (1 platform, 12 posts/mo)',
      'Basic captions & hashtags',
      'Meta or Google Ads (1 active campaign)',
      'GBP Setup & Local Profile Check',
      'Monthly Performance Summary'
    ],
    ctaText: 'Choose Starter',
    ctaLink: '/inquiry?plan=starter'
  },
  {
    id: 'grow',
    name: 'SETU GROW',
    price: '₹12,000',
    period: 'per month',
    popular: true,
    badgeText: 'MOST POPULAR',
    description: 'Accelerated growth package for expanding SMEs to drive qualified leads, video content, and search presence.',
    features: [
      'Social Media Management (2 platforms - Posts + Reels)',
      'Meta Ads Management (up to 3 campaigns & retargeting)',
      'Google Ads Search + Display Setup',
      'SEO Basics + Local Citation Support',
      'Community Management & Monthly Report',
      '1-on-1 Monthly Strategy Call'
    ],
    ctaText: 'Choose Growth',
    ctaLink: '/inquiry?plan=grow'
  },
  {
    id: 'pro',
    name: 'SETU PRO',
    price: '₹20,000',
    period: 'per month',
    popular: false,
    badgeText: 'FULL-FUNNEL PRO',
    description: 'Comprehensive digital strategy for full market domination across search, performance ads, and content.',
    features: [
      'Social Media Management (3 platforms - Content Calendar, Reels & Stories)',
      'Full-Funnel Meta Ads (Creative testing & weekly optimization)',
      'Google Ads (Search, Display & Shopping / PMax)',
      'Full Technical SEO + Link Building & Ranking Reports',
      'Detailed Reporting & Bi-weekly Strategy Calls'
    ],
    ctaText: 'Choose Pro',
    ctaLink: '/inquiry?plan=pro'
  }
];
