export const site = {
  name: "Sumystic Digital",
  tagline: "Performance marketing that scales.",
  description:
    "We run high-intent paid media across every vertical: e-commerce, pay per call, CPS, peptides, and beyond. Data-first campaigns built to convert.",
  phone: "(717) 471-5377",
  phoneRaw: "7174715377",
  email: "admin@sumysticdigital.com",
  address: {
    street: "2847 Commerce Street, Suite 400",
    city: "Dallas",
    state: "TX",
    zip: "75226",
    country: "USA",
  },
  services: [
    {
      id: "performance",
      title: "Performance Marketing",
      description:
        "Full-funnel campaigns on Meta, Google, TikTok, and native. We optimize for ROAS, CPA, and scale, not vanity metrics.",
      icon: "target",
    },
    {
      id: "ecom",
      title: "E-Commerce",
      description:
        "Product feeds, dynamic retargeting, and catalog campaigns that turn browsers into buyers across Shopify, WooCommerce, and custom stores.",
      icon: "shopping",
    },
    {
      id: "ppc",
      title: "Pay Per Call",
      description:
        "High-intent call campaigns with rigorous IVR tracking, call quality scoring, and payout optimization for lead gen verticals.",
      icon: "phone",
    },
    {
      id: "cps",
      title: "CPS Campaigns",
      description:
        "Cost-per-sale partnerships with transparent attribution, fraud prevention, and payout structures aligned to your margins.",
      icon: "chart",
    },
    {
      id: "peptides",
      title: "Peptides & ROU",
      description:
        "Specialized media buying for peptides, wellness, and regulated-adjacent verticals with compliant creative and landing page strategy.",
      icon: "flask",
    },
    {
      id: "everything",
      title: "Ads for Everything",
      description:
        "Insurance, finance, home services, legal, health, SaaS, and more. If it converts on paid media, we have run it.",
      icon: "layers",
    },
  ],
  stats: [
    { value: "$50M+", label: "Ad spend managed" },
    { value: "40+", label: "Verticals served" },
    { value: "3.2x", label: "Avg. ROAS lift" },
    { value: "24/7", label: "Campaign monitoring" },
  ],
  process: [
    {
      step: "01",
      title: "Audit & Strategy",
      text: "We map your funnel, competitors, and unit economics before a single dollar hits the platforms.",
    },
    {
      step: "02",
      title: "Launch & Test",
      text: "Rapid creative and audience testing across channels to find winning combinations fast.",
    },
    {
      step: "03",
      title: "Scale & Optimize",
      text: "Double down on winners, cut losers, and expand into new placements and geos with confidence.",
    },
  ],
} as const
