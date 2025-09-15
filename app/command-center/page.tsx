"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function CommandCenterPage() {
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
          {["command-center", "schema", "features"].map((section) => (
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
          id="command-center"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <header className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">PRAIRIESIGNAL / COMMAND CENTER</div>
              <h1 className="text-3xl sm:text-4xl font-light">Andreas_Rebook_Command_Center (Paradigm.ai)</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                An AI-first spreadsheet that turns appointment rows into SMS, time windows, and next actions.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Bulk Enrich", "Cell/Column Prompts", "Confidence & Risk", "Masked PII"].map((chip) => (
                  <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-4 text-sm">
                <Link href="#command-center" className="bg-primary text-primary-foreground rounded-md border border-transparent px-3 py-2 hover:bg-primary/90 transition-colors">View Command Center</Link>
                <Link href="#schema" className="rounded-md border border-border px-3 py-2 hover:border-[color:var(--brand-gold)] transition-colors">See Schema</Link>
                <Link href="/pricing" className="rounded-md border border-border px-3 py-2 hover:border-[color:var(--brand-gold)] transition-colors">Pricing & ROI</Link>
              </div>
            </header>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">WORKFLOW HELPER</div>
              <div className="p-6 border border-border rounded-lg bg-muted/5">
                <div className="font-mono text-sm text-primary">
                  Select columns 11–16 → Enrich → Sort by Confidence ≥ 80 → Execute Next_Action
                </div>
                <div className="mt-3 text-sm text-muted-foreground">
                  This automated workflow processes appointment data, enriches it with AI insights, and prioritizes high-confidence rebooking opportunities.
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">SUCCESS STORIES</div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg border border-border p-6">
                  <div className="text-sm text-muted-foreground font-mono mb-2">DENTAL PRACTICE • CALGARY</div>
                  <p className="text-sm text-muted-foreground mb-3 italic">
                    "The Command Center processes 200 appointments weekly. We've reduced no-shows by 35% and
                    the AI suggestions are getting better every week."
                  </p>
                  <div className="text-xs text-muted-foreground">$8,400 monthly revenue recovered</div>
                </div>
                <div className="rounded-lg border border-border p-6">
                  <div className="text-sm text-muted-foreground font-mono mb-2">MEDICAL CLINIC • EDMONTON</div>
                  <p className="text-sm text-muted-foreground mb-3 italic">
                    "Setup took 2 days and the results were immediate. The confidence scoring helps us prioritize
                    our most valuable patients."
                  </p>
                  <div className="text-xs text-muted-foreground">40% improvement in rebooking rate</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">WHY IT WORKS</div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: "💰",
                    title: "Revenue Rescue",
                    description: "Automatically identify and act on rebooking opportunities"
                  },
                  {
                    icon: "⚡",
                    title: "Efficiency",
                    description: "AI drafts messages, humans approve - perfect balance"
                  },
                  {
                    icon: "🎯",
                    title: "Consistency",
                    description: "Standardized processes and messaging across all touchpoints"
                  },
                  {
                    icon: "🔒",
                    title: "Privacy",
                    description: "PII masking and compliance built into every operation"
                  }
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="group p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <div className="text-2xl">{benefit.icon}</div>
                      <div>
                        <h3 className="font-medium group-hover:text-muted-foreground transition-colors duration-300">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="schema"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Schema & Columns</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                The command center processes appointment data through a structured schema that combines your existing data with AI-generated insights.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">DATA SCHEMA</div>
              <div className="space-y-6">
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-medium mb-3">Source Columns (Your Data)</h3>
                  <div className="font-mono text-sm text-muted-foreground bg-muted/5 p-3 rounded">
                    Date · Start · Duration · Provider · Service · Client_First · Phone_Masked · Last_Seen_Date · LTV_$ · Status
                  </div>
                </div>

                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-medium mb-3">AI-Generated Columns</h3>
                  <div className="font-mono text-sm text-primary bg-primary/5 p-3 rounded">
                    Last_Seen_Days · No_Show_Risk_0_100 · Window_Suggestion · Rebook_SMS · Confidence_0_100 · Next_Action
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">AI COLUMN DETAILS</div>
              <div className="grid gap-6 sm:gap-8">
                {[
                  {
                    column: "Last_Seen_Days",
                    type: "Calculation",
                    description: "Days since client's last visit, calculated from Last_Seen_Date"
                  },
                  {
                    column: "No_Show_Risk_0_100",
                    type: "Prediction",
                    description: "AI-predicted risk of no-show based on historical patterns"
                  },
                  {
                    column: "Window_Suggestion",
                    type: "Recommendation",
                    description: "Optimal time windows for rebooking SMS based on client history"
                  },
                  {
                    column: "Rebook_SMS",
                    type: "Generation",
                    description: "Personalized SMS text drafted by AI, ready for approval"
                  },
                  {
                    column: "Confidence_0_100",
                    type: "Scoring",
                    description: "AI confidence score for rebooking success (0-100)"
                  },
                  {
                    column: "Next_Action",
                    type: "Decision",
                    description: "Recommended action: SMS, Call, VIP_Escalate, or Skip"
                  }
                ].map((column, index) => (
                  <div
                    key={index}
                    className="group grid lg:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="lg:col-span-3">
                      <div className="font-mono text-sm text-primary">{column.column}</div>
                      <div className="text-xs text-muted-foreground mt-1">{column.type}</div>
                    </div>
                    <div className="lg:col-span-9">
                      <p className="text-muted-foreground leading-relaxed">{column.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Key Features</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Built for speed, safety, and effectiveness in real-world healthcare operations.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">CAPABILITIES</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    title: "Edit copy? Yes (approval gate)",
                    href: "#faq1",
                    description: "All AI-generated content goes through human approval before sending",
                    details: ["Review all SMS content", "Edit before approval", "Track approval history", "Override AI suggestions"]
                  },
                  {
                    title: "Learn our tone? Yes (tone prompts)",
                    href: "#faq2",
                    description: "AI learns your brand voice through custom training prompts",
                    details: ["Brand voice training", "Tone consistency", "Contextual adaptation", "Multi-language support"]
                  },
                  {
                    title: "Add columns? It's a spreadsheet",
                    href: "#faq3",
                    description: "Fully customizable - add any columns or modify existing ones",
                    details: ["Custom column formulas", "Additional AI prompts", "Integration fields", "Reporting columns"]
                  },
                  {
                    title: "Setup speed? 1–3 days",
                    href: "#faq4",
                    description: "Rapid deployment with our proven setup methodology",
                    details: ["Data mapping (1 day)", "AI training (1-2 days)", "Testing & validation (1 day)", "Go-live support"]
                  },
                ].map((feature, index) => (
                  <Link
                    key={index}
                    href={feature.href}
                    className="group block p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      <div className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {detail}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <span>Learn more</span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
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
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
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


