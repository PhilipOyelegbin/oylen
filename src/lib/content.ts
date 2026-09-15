export const navLinks = [
  { label: "Our Subsidiaries", href: "#subsidiaries" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "About Us", href: "#about" },
  { label: "Investors", href: "#investors" },
  // { label: "News & Insights", href: "#news" },
  // { label: "Contact", href: "#contact" },
];

export const statBar = [
  {
    label: "Entities",
    value: "3+",
    caption: "High-Growth Subsidiaries",
    icon: "briefcase",
  },
  {
    label: "Lease Integrity",
    value: "$120M+",
    caption: "Escrow & Leases Protected",
    icon: "shield",
  },
  {
    label: "SLA Benchmark",
    value: "99.99%",
    caption: "Infrastructure Availability",
    icon: "activity",
  },
  {
    label: "Engineering",
    value: "24/7",
    caption: "Live Incident Diagnostics",
    icon: "radar",
  },
];

export type Subsidiary = {
  tagLabel: string;
  tagTone: "primary" | "tertiary" | "neutral" | "outline";
  tagIcon: "server" | "lock" | "zap" | "flask";
  systemMode: string;
  name: string;
  description: string;
  url: string;
  bullets: string[];
  cta: string;
  ctaTone: "primary" | "outline" | "secondary";
  glyph: "triangle" | "house" | "wave" | "hex";
};

export const subsidiaries: Subsidiary[] = [
  {
    tagLabel: "Cloud & Dev Infrastructure",
    tagTone: "primary",
    tagIcon: "server",
    systemMode: "System Mode 01",
    name: "KodasHub",
    description:
      "Technical resolution platform for critical website errors, unexpected server crashes, domain DNS routing, and enterprise hosting orchestration.",
    url: "https://kodashub.netlify.app",
    bullets: [
      "24/7 Instant Diagnostics Engine",
      "DNS & HTTPS Security",
      "Website App Development & Deployment",
    ],
    cta: "Explore KodasHub",
    ctaTone: "primary",
    glyph: "triangle",
  },
  {
    tagLabel: "Direct PropTech & Leasing",
    tagTone: "tertiary",
    tagIcon: "lock",
    systemMode: "System Mode 02",
    name: "DwellingBloom",
    description:
      "Direct peer-to-owner marketplace connecting verified landlords directly with prospective tenants, completely exiting out exploitative middlemen and rental scams.",
    url: "https://dwellingbloom.netlify.app",
    bullets: [
      "Direct Owner–Tenant Peer Protocol",
      "Escrow Rental Vault Protection",
      "100% Scam-Proof Verified Physical Tours",
    ],
    cta: "Discover DwellingBloom",
    ctaTone: "outline",
    glyph: "house",
  },
  {
    tagLabel: "FinTech & Telecommunications",
    tagTone: "neutral",
    tagIcon: "zap",
    systemMode: "System Mode 03",
    name: "Flip2Pay",
    description:
      "High-throughput virtual top-up platform powering instant mobile airtime disbursement, automated utility billing, and wholesale telecom merchant APIs.",
    url: "#",
    bullets: [
      "Sub-Second Telecommunication Fulfillment",
      "High-Capacity Wholesale Merchant APIs",
      "Automated Multi-Currency Settlements",
    ],
    cta: "Launch Flip2Pay Portal",
    ctaTone: "secondary",
    glyph: "wave",
  },
  // {
  //   tagLabel: "Venture Builder & R&D",
  //   tagTone: "outline",
  //   tagIcon: "flask",
  //   systemMode: "System Mode 04",
  //   name: "Oylen Labs",
  //   description:
  //     "Strategic research and venture studio incubating autonomous machine intelligence, distributed sovereign protocols, and future multi-sector infrastructure.",
  //   url: "#",
  //   bullets: [
  //     "Algorithmic Capital Allocation",
  //     "Proprietary Agentic Automation Models",
  //     "Institutional Sandboxing & Compliance",
  //   ],
  //   cta: "Explore Oylen Labs",
  //   ctaTone: "outline",
  //   glyph: "hex",
  // },
];

export const solveFeatures = [
  {
    icon: "shield",
    title: "Zero-Middleman Protocol",
    description:
      "DwellingBloom and Oylen VTU bypass exploitative layers, routing tenants straight to verifiable landlords, and businesses directly to telco core switches.",
  },
  {
    icon: "server",
    title: "Self-Healing DevOps Engine",
    description:
      "KodasHub integrates AI-driven server health checks that remediate Apache/Nginx crash states, renew SSLs, and route DNS prior to customer outage notices.",
  },
];

export const pillars = [
  {
    icon: "swap",
    title: "Cross-Subsidiary Synergy",
    description:
      "PropTech tenants settle leases using Oylen VTU financial micro-rails, hosted on KodasHub resilient web infrastructure.",
    index: "01 / Integrated Stack",
    tone: "primary",
  },
  {
    icon: "scale",
    title: "Zero-Middleman Integrity",
    description:
      "We eradicate opportunistic brokers and hidden fee layers. Every contract, escrow deposit, and wholesale data transaction executes with tamper-proof mathematical finality.",
    index: "02 / Fraud Eradication",
    tone: "tertiary",
  },
  {
    icon: "cloud",
    title: "Resilient Enterprise Tech",
    description:
      "Designed from day zero for fault tolerance. Redundant edge network distributions across 12 countries safeguard institutional uptime and critical transaction delivery.",
    index: "03 / 99.99% Resilience",
    tone: "secondary",
  },
];

export const footerColumns = [
  {
    heading: "Partners & Investors",
    links: ["Institutional Relations", "Board Governance", "Financial Filings"],
  },
  {
    heading: "Our Subsidiaries",
    links: ["KodasHub", "DwellingBloom", "Flip2pay"],
  },
  {
    heading: "Help / Sitemap",
    links: [
      "Executive Careers",
      "Press Kits & Media",
      "Secure Whistleblower Desk",
    ],
  },
  {
    heading: "Legal & Integrity",
    links: [
      "Privacy & Data Safeguards",
      "Regulatory Disclosures",
      "ESG & Sustainability Code",
      "Anti-Corruption Charter",
    ],
  },
];
