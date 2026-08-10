// Data Store for The Social Setu Services organized by domain categories
export const servicesData = [
  // 1. Social Media Management
  {
    slug: 'social-media-management',
    name: 'Social Media Management',
    category: 'Social & Content',
    categoryName: 'Social Media & Content',
    isHero: true,
    badgeText: 'CORE SERVICE',
    icon: 'Share2',
    shortDesc: 'Complete end-to-end Instagram and Facebook management, visual content creation, Reels, captions, and audience growth.',
    deliverables: [
      'Instagram & Facebook page management',
      'Monthly content calendar planning',
      'Post & carousel design deliverables',
      'Reels & short-form video creation',
      'Captions, hashtag research & posting',
      'Complete page optimization & bio setup',
      'Basic performance analytics & reporting'
    ],
    statHighlights: [
      { label: 'Monthly Video Views', value: '12M+' },
      { label: 'Engagement Rate Uplift', value: '+240%' },
      { label: 'Community Growth', value: '500K+' }
    ],
    faqs: [
      {
        question: 'What platforms do you manage for Social Media Management?',
        answer: 'We focus primarily on Instagram and Facebook, creating custom posts, carousels, Reels, captions, and hashtag strategies tailored for your Indian SME audience.'
      },
      {
        question: 'Do you create content calendars in advance?',
        answer: 'Yes! We deliver a complete monthly content calendar for your review and approval before scheduling or publishing any post.'
      }
    ]
  },
  // 2. Meta Ads
  {
    slug: 'meta-ads',
    name: 'Meta Ads',
    category: 'Performance Marketing',
    categoryName: 'Digital & Paid Ads',
    isHero: true,
    badgeText: 'CORE SERVICE',
    icon: 'TrendingUp',
    shortDesc: 'High-ROAS Facebook & Instagram ad campaigns engineered for lead generation, traffic, engagement, and retargeting.',
    deliverables: [
      'Facebook & Instagram Ads management',
      'High-converting lead generation campaigns',
      'Traffic & engagement campaigns',
      'Custom pixel retargeting & lookalike audiences',
      'Ongoing campaign monitoring & optimization',
      'Monthly performance reports & ROAS tracking'
    ],
    statHighlights: [
      { label: 'Average Client ROAS', value: '4.8x' },
      { label: 'Cost Per Lead Reduction', value: '-42%' },
      { label: 'Ad Spend Managed', value: '₹5Cr+' }
    ],
    faqs: [
      {
        question: 'Which ad objective works best for Indian local businesses?',
        answer: 'For service and retail businesses, lead generation ads with instant forms or WhatsApp click-to-chat ads deliver the highest response and ROI.'
      }
    ]
  },
  // 3. Google Ads
  {
    slug: 'google-ads',
    name: 'Google Ads',
    category: 'Performance Marketing',
    categoryName: 'Digital & Paid Ads',
    isHero: true,
    badgeText: 'CORE SERVICE',
    icon: 'Target',
    shortDesc: 'High-intent Search Ads and Google Maps campaigns designed to capture ready-to-buy customers actively searching for your business.',
    deliverables: [
      'Google Search Ads campaign setup',
      'Local & Google Maps-focused campaigns',
      'High-intent lead generation',
      'Keyword research & negative match optimization',
      'Continuous bid & campaign optimization',
      'Conversion tracking setup'
    ],
    statHighlights: [
      { label: 'Conversion Lift', value: '+180%' },
      { label: 'Search Impression Share', value: '88%' },
      { label: 'Qualified Leads', value: '85K+' }
    ],
    faqs: [
      {
        question: 'Why choose Google Ads over Meta Ads?',
        answer: 'Google Ads target customers with active search intent who are actively searching for your service right now, leading to higher immediate conversion rates.'
      }
    ]
  },
  // 4. SEO & Local SEO
  {
    slug: 'seo-local-seo',
    name: 'SEO & Local SEO',
    category: 'Search & Visibility',
    categoryName: 'Search Engine & Local SEO',
    isHero: true,
    badgeText: 'CORE SERVICE',
    icon: 'Search',
    shortDesc: 'Dominating search engine results and Google Business Profile local map rankings with data-backed technical and local SEO.',
    deliverables: [
      'Comprehensive website SEO audit',
      'High-intent keyword research',
      'On-page SEO & Schema markup',
      'Local SEO strategy',
      'Google Business Profile optimization',
      'Basic off-page SEO & link building',
      'Monthly SEO ranking reports'
    ],
    statHighlights: [
      { label: 'Organic Traffic Growth', value: '+310%' },
      { label: 'Page 1 Keyword Rankings', value: '85%+' },
      { label: 'Local Map Views', value: '1.5M+' }
    ],
    faqs: [
      {
        question: 'How long does SEO take to rank on Google?',
        answer: 'Local SEO and Google Business Profile optimizations typically show movement within 30 to 60 days. Organic website rankings mature significantly between months 3 and 6.'
      }
    ]
  },
  // 5. Website Development
  {
    slug: 'website-development',
    name: 'Website Development',
    category: 'Web & Branding',
    categoryName: 'Website & Development',
    isHero: true,
    badgeText: 'CORE SERVICE',
    icon: 'Layout',
    shortDesc: 'Fast, responsive business websites, landing pages, WordPress portals, and e-commerce stores optimized for speed and conversion.',
    deliverables: [
      'Custom business websites',
      'High-converting landing pages',
      'WordPress website development',
      'Basic e-commerce website setup',
      'Website maintenance & security',
      'Basic speed & SEO optimization'
    ],
    statHighlights: [
      { label: 'Avg Mobile Page Load', value: '1.2s' },
      { label: 'Conversion Rate Lift', value: '+65%' },
      { label: 'Google Speed Score', value: '96/100' }
    ],
    faqs: [
      {
        question: 'Are your websites mobile responsive?',
        answer: 'Yes! Every website we build is 100% mobile-first and optimized for seamless viewing across smartphones, tablets, and desktops.'
      }
    ]
  },
  // 6. Social Media Marketing
  {
    slug: 'social-media-marketing',
    name: 'Social Media Marketing',
    category: 'Social & Content',
    categoryName: 'Social Media & Content',
    isHero: false,
    badgeText: 'STRATEGY',
    icon: 'Compass',
    shortDesc: 'Strategic growth roadmap, brand positioning, audience research, competitor benchmarking, and engagement planning.',
    deliverables: [
      'Instagram/Facebook growth strategy',
      'Brand positioning & messaging',
      'Content strategy roadmap',
      'Engagement strategy planning',
      'Audience research & buyer personas',
      'Competitor analysis & benchmarking'
    ],
    statHighlights: [
      { label: 'Brand Reach Expansion', value: '+190%' },
      { label: 'Audience Insight Accuracy', value: '98%' }
    ],
    faqs: [
      {
        question: 'How is Social Media Marketing different from Management?',
        answer: 'Social Media Marketing focuses on strategic positioning, competitor audits, and growth blueprints, whereas Management covers day-to-day posting and execution.'
      }
    ]
  },
  // 7. Content Creation & Design
  {
    slug: 'content-creation-design',
    name: 'Content Creation & Design',
    category: 'Social & Content',
    categoryName: 'Social Media & Content',
    isHero: false,
    badgeText: 'CREATIVE',
    icon: 'Palette',
    shortDesc: 'High-converting social graphics, carousels, ad creatives, promotional posters, banners, and video editing.',
    deliverables: [
      'Social media graphics & posts',
      'Educational carousels & slides',
      'Reels & short-form video editing',
      'Promotional creatives',
      'High-converting ad creatives',
      'Event posters & banners',
      'Basic video editing & motion'
    ],
    statHighlights: [
      { label: 'Creatives Designed', value: '3,500+' },
      { label: 'Ad Click-Through Lift', value: '+75%' }
    ],
    faqs: [
      {
        question: 'Can I order standalone design packages?',
        answer: 'Yes, we provide custom design bundles for ad creatives, carousels, or promotional campaign graphics on demand.'
      }
    ]
  },
  // 8. Google Business Profile
  {
    slug: 'google-business-profile',
    name: 'Google Business Profile',
    category: 'Search & Visibility',
    categoryName: 'Search Engine & Local SEO',
    isHero: false,
    badgeText: 'LOCAL SEO',
    icon: 'MapPin',
    shortDesc: 'Profile setup, local search optimization, photos, posts, review strategy, and Google Map pack ranking.',
    deliverables: [
      'Profile setup / optimization',
      'Business information optimization',
      'Photos & update posts',
      'Review management strategy',
      'Local visibility & Map Pack optimization'
    ],
    statHighlights: [
      { label: 'Google Maps Call Action Rate', value: '+210%' },
      { label: 'Search Views Surge', value: '3.5x' }
    ],
    faqs: [
      {
        question: 'Will Google Business Profile help get local phone calls?',
        answer: 'Absolutely! An optimized profile with regular posts and positive reviews ranks in the Google 3-Pack, driving direct calls and location visits.'
      }
    ]
  },
  // 9. Branding — Basic
  {
    slug: 'branding-basic',
    name: 'Branding — Basic',
    category: 'Web & Branding',
    categoryName: 'Website & Development',
    isHero: false,
    badgeText: 'BRANDING',
    icon: 'Award',
    shortDesc: 'Professional logo design, curated brand color palette, font selection, and essential social media style guide.',
    deliverables: [
      'Custom logo design',
      'Brand color palette curation',
      'Typography & font selection',
      'Social media profile branding',
      'Basic brand guidelines document'
    ],
    statHighlights: [
      { label: 'Brands Visualized', value: '60+' },
      { label: 'Brand Recognition Uplift', value: '+160%' }
    ],
    faqs: [
      {
        question: 'What formats do I receive for my logo?',
        answer: 'You will receive high-resolution PNG, SVG vector, JPG, and transparent background files suitable for print and web.'
      }
    ]
  },
  // 10. Digital Marketing Consultation
  {
    slug: 'digital-marketing-consultation',
    name: 'Digital Marketing Consultation',
    category: 'Performance Marketing',
    categoryName: 'Digital & Paid Ads',
    isHero: false,
    badgeText: 'CONSULTATION',
    icon: 'HelpCircle',
    shortDesc: 'Digital presence audit, comprehensive marketing roadmap, market research, campaign planning, and actionable growth recommendations.',
    deliverables: [
      'Digital presence audit',
      'Marketing strategy roadmap',
      'Competitor research',
      'Customer / audience research',
      'Campaign planning & budget advice',
      'Growth recommendations report'
    ],
    statHighlights: [
      { label: 'Audit Points Analyzed', value: '45+' },
      { label: 'Strategic Clarity Score', value: '100%' }
    ],
    faqs: [
      {
        question: 'Who is this consultation for?',
        answer: 'This is ideal for business owners looking for a expert 1-on-1 strategic roadmap before allocating significant marketing budgets.'
      }
    ]
  }
];

export const heroServices = servicesData.filter(s => s.isHero);

export const categoriesList = [
  {
    id: 'performance-marketing',
    title: 'Digital & Paid Ads',
    shortTitle: 'Digital Marketing',
    services: servicesData.filter(s => s.category === 'Performance Marketing')
  },
  {
    id: 'social-content',
    title: 'Social Media & Content',
    shortTitle: 'Social & Content',
    services: servicesData.filter(s => s.category === 'Social & Content')
  },
  {
    id: 'search-seo',
    title: 'Search Engine & Local SEO',
    shortTitle: 'SEO & Local Search',
    services: servicesData.filter(s => s.category === 'Search & Visibility')
  },
  {
    id: 'web-branding',
    title: 'Website Development & Branding',
    shortTitle: 'Website Design',
    services: servicesData.filter(s => s.category === 'Web & Branding')
  }
];
