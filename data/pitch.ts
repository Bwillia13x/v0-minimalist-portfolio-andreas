export type Phase = {
  id: string;
  title: string;
  duration: string;
  goal: string;
  deliverables: string[];
  exit: string;
  deps?: string[];
  status?: 'planned' | 'in_progress' | 'done';
};

export type FeatureGroup = {
  title: string;
  description: string;
  features: string[];
  cadence?: string;
};

export type Assistant = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
  approvalPath: string;
};

export type ROIDefaults = {
  cancelsPerDay: number;
  showRate: number;
  rebookRate: number;
  avgTicket: number;
  daysPerMonth: number;
};

export const roiDefaults: ROIDefaults = {
  cancelsPerDay: 2,
  showRate: 60,
  rebookRate: 40,
  avgTicket: 70,
  daysPerMonth: 26,
};

export type PitchData = {
  client: string;
  scope: string[];
  timelineWeeks: number[];
  priceBands: {
    pilotA: number;
    pilotB: number;
    pilotC: number;
    passthroughRange: [number, number];
  };
  phases: Phase[];
  website: {
    core: FeatureGroup[];
    tech: FeatureGroup[];
    contentNeeds: string[];
  };
  marketing: {
    programs: FeatureGroup[];
    aiAssistance: FeatureGroup[];
  };
  assistants: Assistant[];
  assumptions: string[];
  guardrails: string[];
};

export const pitchData: PitchData = {
  client: "Andreas & Co Barbershop",
  scope: ["Website refresh", "AI-enabled marketing", "AI assistants"],
  timelineWeeks: [0, 1, 2, 3, 4, 5, 6],
  priceBands: {
    pilotA: 2500,
    pilotB: 5500,
    pilotC: 9500,
    passthroughRange: [50, 200],
  },
  phases: [
    {
      id: "discovery",
      title: "Foundation & Assessment",
      duration: "0.5–1 week",
      goal: "Fast baseline audit and goal clarification to ensure alignment",
      deliverables: [
        "Site, SEO, analytics, and booking flow audit",
        "Goal clarification: utilization, bookings mix, LTV",
        "Success metrics and tracking plan definition",
        "Stakeholder interviews and requirement gathering"
      ],
      exit: "Clear project scope, baseline metrics, and stakeholder alignment",
      deps: ["Google Business Profile access", "Current booking system access", "Stakeholder availability"],
      status: "planned"
    },
    {
      id: "website",
      title: "Digital Presence Refresh",
      duration: "1–2 weeks",
      goal: "Modern, conversion-focused website that drives bookings",
      deliverables: [
        "Conversion-focused information architecture",
        "Mobile-first design with booking CTAs",
        "Local SEO basics and performance optimization",
        "Content integration and photography setup"
      ],
      exit: "Live website with all core pages and booking integration",
      deps: ["Logo and branding assets", "Service pricing information", "Photography approval"],
      status: "planned"
    },
    {
      id: "marketing",
      title: "AI-Enabled Growth",
      duration: "2–4 weeks",
      goal: "Smart marketing automation and content systems",
      deliverables: [
        "Content calendar and UGC motion setup",
        "Email/SMS automation workflows implementation",
        "Local SEO enhancements and GMB optimization",
        "Paid advertising experiments and tracking"
      ],
      exit: "All marketing systems live with first content published",
      deps: ["Social media account access", "Email marketing platform access", "Content approval process"],
      status: "planned"
    }
  ],
  website: {
    core: [
      {
        title: "Homepage & Brand Story",
        description: "Hero section with booking CTA, brand story, and social proof",
        features: ["Hero booking CTA", "Brand narrative", "Trust indicators", "Mobile optimization"]
      },
      {
        title: "Services & Pricing",
        description: "Clear service offerings with prominent booking links",
        features: ["Service packages", "Pricing transparency", "Booking integration", "Seasonal offers"]
      },
      {
        title: "Team & Gallery",
        description: "Staff profiles, work gallery, and Instagram integration",
        features: ["Team profiles", "Before/after gallery", "Instagram feed", "Staff specialties"]
      },
      {
        title: "Location & Contact",
        description: "Complete location info, hours, and contact methods",
        features: ["Google Maps integration", "Parking info", "Contact forms", "Business hours"]
      }
    ],
    tech: [
      {
        title: "Technology Stack",
        description: "Modern, scalable foundation for performance and growth",
        features: [
          "Next.js + Tailwind CSS for modern performance",
          "Image optimization and lazy loading",
          "Analytics integration and tracking",
          "SEO optimization and meta management"
        ]
      },
      {
        title: "Performance & SEO",
        description: "Fast loading and search engine optimization",
        features: [
          "Local SEO: schema markup, GMB sync",
          "Core Web Vitals optimization",
          "Mobile accessibility compliance",
          "Fast loading times and smooth UX"
        ]
      }
    ],
    contentNeeds: [
      "Logo/SVG files",
      "Service list with descriptions",
      "Price ranges and packages",
      "10+ professional photos",
      "Business hours and contact info",
      "Booking system integration details"
    ]
  },
  marketing: {
    programs: [
      {
        title: "Content Marketing System",
        description: "Monthly themes and weekly content calendar",
        features: ["Monthly content themes", "Weekly posts and reels", "UGC integration", "Brand consistency"],
        cadence: "2 posts/wk + 1 reel/wk; Instagram / Google"
      },
      {
        title: "Review & Referral Motion",
        description: "Automated review requests and referral incentives",
        features: ["Post-service review requests", "Referral program", "Loyalty incentives", "Social proof collection"],
        cadence: "Review request day+1; referral quarterly"
      },
      {
        title: "Email & SMS Automation",
        description: "Personalized touchpoints throughout customer journey",
        features: ["Welcome sequences", "Appointment reminders", "Win-back campaigns", "Seasonal promotions"],
        cadence: "Welcome, Reminders, Win-back; ≤140 chars for SMS"
      },
      {
        title: "Paid Advertising",
        description: "Geo-fenced campaigns and offer-driven experiments",
        features: ["Local area targeting", "Seasonal offers", "Performance tracking", "A/B testing"],
        cadence: "Geo-fenced offers; $10–$30/day experiments; 2-week sprints"
      }
    ],
    aiAssistance: [
      {
        title: "Content Generation",
        description: "AI-powered content creation and optimization",
        features: [
          "On-brand captions and social media copy",
          "Personalized offer and promotion text",
          "Email newsletter content",
          "Review response drafts"
        ]
      },
      {
        title: "Strategy & Analytics",
        description: "Data-driven insights and optimization",
        features: [
          "Demand forecasting and calendar suggestions",
          "Customer segmentation and targeting",
          "Performance analytics and reporting",
          "ROI tracking and optimization insights"
        ]
      }
    ]
  },
  assistants: [
    {
      id: "customer-service",
      title: "Customer Service Assistant",
      description: "Handles FAQs, booking inquiries, and basic customer support",
      icon: "💬",
      bullets: [
        "24/7 FAQ responses via chat widget",
        "Booking triage and scheduling assistance",
        "Appointment reminders and follow-ups",
        "Basic customer query resolution"
      ],
      approvalPath: "Draft → Review → Publish"
    },
    {
      id: "review-response",
      title: "Review Response Assistant",
      description: "Drafts personalized responses to customer reviews with approval workflow",
      icon: "⭐",
      bullets: [
        "Real-time review monitoring",
        "Context-aware response drafting",
        "Tone matching and brand consistency",
        "Approval queue for human oversight"
      ],
      approvalPath: "Draft → Human Approval → Send"
    },
    {
      id: "knowledge-base",
      title: "Knowledge Base Assistant",
      description: "Maintains and provides access to policies, procedures, and staff information",
      icon: "📚",
      bullets: [
        "Policy documentation and updates",
        "Staff onboarding and training materials",
        "Procedure standardization",
        "Quick reference for team questions"
      ],
      approvalPath: "Draft → Team Review → Publish"
    },
    {
      id: "operations-dashboard",
      title: "Operations Dashboard",
      description: "Simple insights into utilization, popular services, and operational metrics",
      icon: "📊",
      bullets: [
        "Real-time utilization tracking",
        "Service popularity analysis",
        "No-show pattern identification",
        "Revenue and performance insights"
      ],
      approvalPath: "Automated → Human Review → Action"
    }
  ],
  assumptions: [
    "Access to Google Business Profile for local SEO",
    "Integration with existing booking system",
    "Content approvals within 24–48 hours",
    "Basic technical setup and training time",
    "Stable internet and device access for team"
  ],
  guardrails: [
    "All AI communications require human approval",
    "Privacy-first approach with PIPEDA compliance",
    "24-hour response time for urgent customer issues",
    "Regular performance reviews and optimization",
    "Easy opt-out options for all customer communications"
  ]
};

// ROI Calculator function
export function calculateROI(
  cancelsPerDay: number,
  showRate: number,
  rebookRate: number,
  avgTicket: number,
  daysPerMonth: number
) {
  const noShowsPerMonth = cancelsPerDay * daysPerMonth;
  const recoveredBookings = noShowsPerMonth * (showRate / 100) * (rebookRate / 100);
  const recoveredRevenue = recoveredBookings * avgTicket;

  return {
    recoveredRevenue: Math.round(recoveredRevenue),
    recoveredBookings: Math.round(recoveredBookings * 10) / 10,
    noShowsPerMonth,
    pilotPaybackMonths: {
      pilotA: Math.ceil((pitchData.priceBands.pilotA / recoveredRevenue) * 12),
      pilotB: Math.ceil((pitchData.priceBands.pilotB / recoveredRevenue) * 12),
      pilotC: Math.ceil((pitchData.priceBands.pilotC / recoveredRevenue) * 12)
    }
  };
}
