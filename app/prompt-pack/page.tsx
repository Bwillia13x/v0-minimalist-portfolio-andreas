"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function PromptPackPage() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["prompts", "automation", "specialized", "implementation"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-primary shadow-[0_0_0_2px_rgba(122,90,248,0.3)]" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <section
          id="prompts"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <header className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">PRAIRIESIGNAL / PROMPT PACK</div>
              <h1 className="text-3xl sm:text-4xl font-light">Prompt Pack</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Plug-and-play prompts for copy, sheets, and SMS. Canadian spelling, ≤140 chars for SMS, and human approval by default.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Copy", "Sheets", "SMS", "Safety"].map((chip) => (
                  <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-4 text-sm">
                <Link href="#prompts" className="bg-primary text-primary-foreground rounded-md border border-transparent px-3 py-2 hover:bg-primary/90 transition-colors">Browse Prompts</Link>
                <Link href="#implementation" className="rounded-md border border-border px-3 py-2 hover:border-[color:var(--brand-gold)] transition-colors">Implementation Guide</Link>
              </div>
            </header>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">WHAT'S INCLUDED</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    icon: "📱",
                    title: "SMS Rebooking Prompts",
                    description: "Personalized SMS templates for appointment reminders and rebooking",
                    count: "12 prompts"
                  },
                  {
                    icon: "📊",
                    title: "Data Enrichment Prompts",
                    description: "AI prompts for processing and analyzing appointment data",
                    count: "8 prompts"
                  },
                  {
                    icon: "✉️",
                    title: "Email Campaign Prompts",
                    description: "Templates for newsletters, promotions, and customer communications",
                    count: "15 prompts"
                  },
                  {
                    icon: "⭐",
                    title: "Review Response Prompts",
                    description: "Professional response templates for Google and Facebook reviews",
                    count: "6 prompts"
                  },
                  {
                    icon: "📋",
                    title: "Weekly Summary Prompts",
                    description: "Executive summary templates for owner reports",
                    count: "4 prompts"
                  },
                  {
                    icon: "🛡️",
                    title: "Safety & Compliance",
                    description: "Built-in guardrails and Canadian compliance features",
                    count: "Safety-first"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl">{item.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mt-1">{item.description}</p>
                        </div>
                      </div>
                      <div className="text-sm text-primary font-mono">{item.count}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="automation"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Quick Start Prompts</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Get started immediately with these ready-to-use prompts for your most common tasks.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ESSENTIAL PROMPTS</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">📱 SMS Rebooking (≤140 chars)</h3>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">Basic rebooking message:</div>
                      <div className="p-4 bg-muted/5 rounded-lg border">
                        <pre className="text-sm whitespace-pre-wrap font-sans leading-relaxed">
Hi [Client_First], it's [Your_Name] at Andreas & Co. We have a great window tomorrow at [Time]. Want me to hold it? Reply Y/N.
                        </pre>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground mb-2">Personalized with history:</div>
                      <div className="p-4 bg-muted/5 rounded-lg border">
                        <pre className="text-sm whitespace-pre-wrap font-sans leading-relaxed">
Hi Sarah, it's Andreas at Andreas & Co. Loved your last haircut! We have Tuesday 2 PM free - same style? Reply Y/N.
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-medium">📊 Weekly Owner Summary</h3>
                  <div className="text-sm text-muted-foreground mb-3">Paste into ChatGPT/Claude for instant insights:</div>
                  <div className="p-4 bg-muted/5 rounded-lg border">
                    <pre className="text-sm whitespace-pre-wrap font-sans leading-relaxed">
Summarize this week's performance vs prior 4 weeks. Use plain English. Sections: Revenue, Show Rate, Rebook Rate, LTV Mix, Provider Capacity. End with 3 bullets: What worked well, What needs attention, What to try next.
                    </pre>
                  </div>

                  <div className="text-xs text-muted-foreground">
                    💡 Pro tip: Copy your data and paste this prompt for instant weekly insights
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="specialized"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Core Automation Prompts</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Advanced prompts for your most important business processes and automations.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">AUTOMATION TEMPLATES</div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">📊 Data Enrichment (Paradigm.ai)</h3>
                  <p className="text-sm text-muted-foreground">Transform raw appointment data into actionable insights:</p>
                  <div className="p-4 bg-muted/5 rounded-lg border">
                    <pre className="text-sm whitespace-pre-wrap font-sans leading-relaxed">
Add these columns: Last_Seen_Days, No_Show_Risk_0_100, Window_Suggestion, Rebook_SMS_140_chars, Confidence_0_100, Next_Action.

Rules:
- Last_Seen_Days: Days since last visit (calculate from today)
- No_Show_Risk: 0-100 scale based on history and patterns
- Window_Suggestion: Best available slot within 2 weeks
- Rebook_SMS: Personalized SMS under 140 chars, Canadian spelling
- Confidence: How likely they'll rebook (0-100)
- Next_Action: "Send_SMS", "Call_Priority", or "Skip_Low_Value"
                    </pre>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">⭐ Review Response Automation</h3>
                  <p className="text-sm text-muted-foreground">Generate warm, specific replies to Google/Facebook reviews:</p>
                  <div className="p-4 bg-muted/5 rounded-lg border">
                    <pre className="text-sm whitespace-pre-wrap font-sans leading-relaxed">
Review: "[PASTE_REVIEW_HERE]"

Tone: Warm, genuine, professional. Use our voice - friendly but not over-familiar.

Rules:
- Acknowledge specific points mentioned
- Thank them for their feedback
- Address any concerns without promising discounts
- Invite them back with personalized touch
- Keep under 80 words
- Canadian spelling throughout

Draft a response:
                    </pre>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">✉️ Email Campaign Content</h3>
                  <p className="text-sm text-muted-foreground">Generate promotional emails that convert:</p>
                  <div className="p-4 bg-muted/5 rounded-lg border">
                    <pre className="text-sm whitespace-pre-wrap font-sans leading-relaxed">
Subject: [Generate 3 options]

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

Write the email:
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="implementation"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Specialized Use Cases</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Advanced prompts for specific business scenarios and operational challenges.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">BUSINESS SCENARIOS</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    title: "📦 Inventory Management",
                    description: "Optimize stock levels and suggest service bundles",
                    prompt: "Analyze sales data for product [X]. Forecast 4 weeks demand. Flag if stock < 2 weeks supply. Suggest service bundles to increase attach rate."
                  },
                  {
                    title: "👥 Staff Scheduling",
                    description: "Optimize provider schedules and capacity utilization",
                    prompt: "Review next week's schedule. Identify over/under booked days. Suggest adjustments for optimal capacity utilization. Consider staff preferences."
                  },
                  {
                    title: "💎 Loyalty Program",
                    description: "Design personalized retention strategies",
                    prompt: "Segment clients by visit frequency and spend. Design personalized retention offers. Calculate lifetime value impact. Keep under $50 value limit."
                  },
                  {
                    title: "📱 Social Media Posts",
                    description: "Create engaging, brand-consistent content",
                    prompt: "Create Instagram caption for [service photo]. Include emoji, call-to-action, relevant hashtags. Keep engaging and brand-consistent. Max 150 chars."
                  },
                  {
                    title: "🛟 Customer Support",
                    description: "Handle inquiries with consistent, professional responses",
                    prompt: "Customer inquiry: \"[PASTE_INQUIRY]\". Respond as Andreas & Co. Be helpful, friendly, and solution-oriented. Include next steps if needed."
                  },
                  {
                    title: "📈 Performance Analysis",
                    description: "Identify trends and improvement opportunities",
                    prompt: "Analyze monthly trends. Compare to industry benchmarks. Identify 3 improvement opportunities. Prioritize by impact and ease of implementation."
                  }
                ].map((useCase, index) => (
                  <div
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {useCase.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                      <div className="p-4 bg-muted/5 rounded-lg border">
                        <pre className="text-sm whitespace-pre-wrap font-sans leading-relaxed">
                          {useCase.prompt}
                        </pre>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">GET YOUR PROMPT PACK</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
                {[
                  {
                    title: "Complete Prompt Library",
                    description: "50+ ready-to-use prompts for every business scenario",
                    type: "Full Download"
                  },
                  {
                    title: "Implementation Guide",
                    description: "Step-by-step instructions for getting started",
                    type: "PDF Guide"
                  },
                  {
                    title: "Customization Service",
                    description: "Get prompts tailored to your specific business",
                    type: "Premium Service"
                  }
                ].map((resource, index) => (
                  <div
                    key={index}
                    className="group p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-medium group-hover:text-muted-foreground transition-colors duration-300">
                          {resource.title}
                        </h3>
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {resource.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{resource.description}</p>
                      <button className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">
                        Get Access →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 PrairieSignal. All rights reserved.</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l(.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}


