// data/prompt-pack.ts
export type PromptEntry = {
  id: string;
  title: string;
  body: string; // the actual prompt text
  channel: 'sms' | 'email' | 'sheets' | 'owner';
  tags: string[]; // e.g., ['Rebooking','Safety','Reviews']
  maxChars?: number; // e.g., 140 for SMS
  variables?: string[]; // e.g., ['Client_First','Time','Your_Name']
};

export type PromptSection = {
  id: string; // 'quick-start', 'core-automation', ...
  title: string;
  description?: string;
  entries: PromptEntry[];
};

export type PromptCategory = {
  id: string; // 'sms-rebooking', 'data-enrichment', ...
  title: string;
  summary: string;
  countHint?: number; // optional; UI will compute actual count
  icon?: string; // emoji or icon name
  filters: string[]; // default filters to apply on click
};

export type PromptPack = {
  hero: {
    intro: string;
    bullets: string[];
    badges: string[];
  };
  categories: PromptCategory[];
  sections: PromptSection[];
};

export const promptPack: PromptPack = {
  hero: {
    intro: "Plug-and-play prompts for copy, sheets, and SMS. Canadian spelling, ≤140 chars for SMS, and human approval by default.",
    bullets: [
      "Plug-and-play prompts for SMS, email, and sheets",
      "Canadian spelling + built-in opt-out",
      "Human approval by default"
    ],
    badges: ["Copy", "Sheets", "SMS", "Safety"]
  },
  categories: [
    {
      id: "sms-rebooking",
      title: "SMS Rebooking Prompts",
      summary: "Personalized SMS templates for appointment reminders and rebooking",
      icon: "📱",
      filters: ["SMS", "Rebooking"]
    },
    {
      id: "data-enrichment",
      title: "Data Enrichment Prompts",
      summary: "AI prompts for processing and analyzing appointment data",
      icon: "📊",
      filters: ["Sheets", "Owner"]
    },
    {
      id: "email-campaigns",
      title: "Email Campaign Prompts",
      summary: "Templates for newsletters, promotions, and customer communications",
      icon: "✉️",
      filters: ["Email", "Campaigns"]
    },
    {
      id: "review-responses",
      title: "Review Response Prompts",
      summary: "Professional response templates for Google and Facebook reviews",
      icon: "⭐",
      filters: ["Reviews", "Safety"]
    },
    {
      id: "weekly-summaries",
      title: "Weekly Summary Prompts",
      summary: "Executive summary templates for owner reports",
      icon: "📋",
      filters: ["Owner", "Sheets"]
    },
    {
      id: "safety-compliance",
      title: "Safety & Compliance",
      summary: "Built-in guardrails and Canadian compliance features",
      icon: "🛡️",
      filters: ["Safety"]
    }
  ],
  sections: [
    {
      id: "quick-start",
      title: "Quick Start Prompts",
      description: "Get started immediately with these ready-to-use prompts for your most common tasks.",
      entries: [
        {
          id: "sms-rebooking-basic",
          title: "Basic SMS Rebooking",
          body: "Hi [Client_First], it's [Your_Name] at Andreas & Co. We have a great window tomorrow at [Time]. Want me to hold it? Reply Y/N.",
          channel: "sms",
          tags: ["Rebooking", "Basic"],
          maxChars: 140,
          variables: ["Client_First", "Your_Name", "Time"]
        },
        {
          id: "sms-rebooking-personalized",
          title: "Personalized SMS Rebooking with History",
          body: "Hi [Client_First], it's [Your_Name] at Andreas & Co. Loved your last [Service]! We have [Day] [Time] free - same style? Reply Y/N.",
          channel: "sms",
          tags: ["Rebooking", "Personalized"],
          maxChars: 140,
          variables: ["Client_First", "Your_Name", "Service", "Day", "Time"]
        },
        {
          id: "weekly-owner-summary",
          title: "Weekly Owner Summary",
          body: "Summarize this week's performance vs prior 4 weeks. Use plain English. Sections: Revenue, Show Rate, Rebook Rate, LTV Mix, Provider Capacity. End with 3 bullets: What worked well, What needs attention, What to try next.",
          channel: "owner",
          tags: ["Owner", "Analysis"],
          variables: []
        }
      ]
    },
    {
      id: "core-automation",
      title: "Core Automation Prompts",
      description: "Advanced prompts for your most important business processes and automations.",
      entries: [
        {
          id: "data-enrichment-paradigm",
          title: "Data Enrichment (Paradigm.ai)",
          body: `Add these columns: Last_Seen_Days, No_Show_Risk_0_100, Window_Suggestion, Rebook_SMS_140_chars, Confidence_0_100, Next_Action.

Rules:
- Last_Seen_Days: Days since last visit (calculate from today)
- No_Show_Risk: 0-100 scale based on history and patterns
- Window_Suggestion: Best available slot within 2 weeks
- Rebook_SMS: Personalized SMS under 140 chars, Canadian spelling
- Confidence: How likely they'll rebook (0-100)
- Next_Action: "Send_SMS", "Call_Priority", or "Skip_Low_Value"`,
          channel: "sheets",
          tags: ["Sheets", "Data", "Automation"],
          variables: []
        },
        {
          id: "review-response-automation",
          title: "Review Response Automation",
          body: `Review: "[PASTE_REVIEW_HERE]"

Tone: Warm, genuine, professional. Use our voice - friendly but not over-familiar.

Rules:
- Acknowledge specific points mentioned
- Thank them for their feedback
- Address any concerns without promising discounts
- Invite them back with personalized touch
- Keep under 80 words
- Canadian spelling throughout

Draft a response:`,
          channel: "owner",
          tags: ["Reviews", "Safety", "Automation"],
          variables: []
        },
        {
          id: "email-campaign-content",
          title: "Email Campaign Content",
          body: `Subject: [Generate 3 options]

Business: Andreas & Co Barbershop
Audience: [Regular clients / Lapsed 3+ months / New to area]
Goal: [Rebook appointments / Try new service / Visit during slow period]

Content requirements:
- Subject lines that get opened (under 50 chars)
- Personal greeting when possible
- Specific value proposition
- Clear call-to-action
- Social proof element
- Contact info and booking link
- Canadian spelling and friendly tone

Write the email:`,
          channel: "email",
          tags: ["Email", "Campaigns"],
          variables: []
        }
      ]
    },
    {
      id: "specialized-use-cases",
      title: "Specialized Use Cases",
      description: "Advanced prompts for specific business scenarios and operational challenges.",
      entries: [
        {
          id: "inventory-management",
          title: "Inventory Management",
          body: "Analyze sales data for product [X]. Forecast 4 weeks demand. Flag if stock < 2 weeks supply. Suggest service bundles to increase attach rate.",
          channel: "owner",
          tags: ["Inventory", "Analysis"],
          variables: []
        },
        {
          id: "staff-scheduling",
          title: "Staff Scheduling Optimization",
          body: "Review next week's schedule. Identify over/under booked days. Suggest adjustments for optimal capacity utilization. Consider staff preferences.",
          channel: "owner",
          tags: ["Staff", "Scheduling"],
          variables: []
        },
        {
          id: "loyalty-program",
          title: "Loyalty Program Design",
          body: "Segment clients by visit frequency and spend. Design personalized retention offers. Calculate lifetime value impact. Keep under $50 value limit.",
          channel: "owner",
          tags: ["Loyalty", "Retention"],
          variables: []
        },
        {
          id: "social-media-posts",
          title: "Social Media Content Creation",
          body: "Create Instagram caption for [service photo]. Include emoji, call-to-action, relevant hashtags. Keep engaging and brand-consistent. Max 150 chars.",
          channel: "owner",
          tags: ["Social Media", "Content"],
          variables: []
        },
        {
          id: "customer-support",
          title: "Customer Support Responses",
          body: "Customer inquiry: \"[PASTE_INQUIRY]\". Respond as Andreas & Co. Be helpful, friendly, and solution-oriented. Include next steps if needed.",
          channel: "owner",
          tags: ["Support", "Customer Service"],
          variables: []
        },
        {
          id: "performance-analysis",
          title: "Performance Analysis",
          body: "Analyze monthly trends. Compare to industry benchmarks. Identify 3 improvement opportunities. Prioritize by impact and ease of implementation.",
          channel: "owner",
          tags: ["Performance", "Analysis"],
          variables: []
        }
      ]
    }
  ]
};
