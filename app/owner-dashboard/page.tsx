"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function OwnerDashboardPage() {
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
          {["dashboard", "metrics", "insights", "agent"].map((section) => (
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
          id="dashboard"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <header className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">PRAIRIESIGNAL / OWNER DASHBOARD</div>
              <h1 className="text-3xl sm:text-4xl font-light">The Owner Pack (weekly)</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A one-page summary you can actually read—plus an agent you can ask follow-ups. No more drowning in spreadsheets.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Revenue", "Show Rate", "Rebook Conversion", "LTV Mix", "Provider Capacity", "Services Mix"].map((chip) => (
                  <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-4 text-sm">
                <Link href="#dashboard" className="bg-primary text-primary-foreground rounded-md border border-transparent px-3 py-2 hover:bg-primary/90 transition-colors">View Dashboard</Link>
                <Link href="#agent" className="rounded-md border border-border px-3 py-2 hover:border-[color:var(--brand-gold)] transition-colors">Meet the Agent</Link>
              </div>
            </header>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">WHAT YOU GET EVERY FRIDAY</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    icon: "📊",
                    title: "One-Page Executive Summary",
                    description: "Clear, actionable insights that fit on a single page",
                    features: ["Week-over-week comparisons", "Key performance indicators", "Trend analysis", "Action items"]
                  },
                  {
                    icon: "🎯",
                    title: "Smart Alerts & Anomalies",
                    description: "Automatic detection of important changes and opportunities",
                    features: ["Revenue anomalies", "Capacity issues", "Customer trends", "Competitive insights"]
                  },
                  {
                    icon: "💡",
                    title: "Personalized Recommendations",
                    description: "AI-driven suggestions tailored to your business",
                    features: ["Pricing optimization", "Service mix adjustments", "Staffing recommendations", "Marketing opportunities"]
                  },
                  {
                    icon: "🤖",
                    title: "Owner-Analyst Agent",
                    description: "Ask questions about your data in plain English",
                    features: ["Natural language queries", "Deep data analysis", "Custom reports", "Trend explanations"]
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl">{feature.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mt-1">{feature.description}</p>
                        </div>
                      </div>
                      <div className="grid gap-2 sm:grid-cols-1">
                        {feature.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feat}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="metrics"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Key Performance Metrics</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                The essential numbers that drive your business decisions, explained clearly.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">PRIMARY METRICS</div>
              <div className="grid gap-6 sm:gap-8">
                {[
                  {
                    metric: "Revenue & Trends",
                    description: "Weekly revenue compared to previous 4 weeks with driver analysis",
                    indicators: ["Total revenue", "Week-over-week change", "Revenue per service", "Seasonal trends"],
                    importance: "High"
                  },
                  {
                    metric: "Show Rate & Rebooking",
                    description: "Appointment attendance and conversion to future bookings",
                    indicators: ["No-show percentage", "Rebooking rate", "Average booking lead time", "Cancellation patterns"],
                    importance: "High"
                  },
                  {
                    metric: "Provider Capacity",
                    description: "Staff utilization and scheduling efficiency",
                    indicators: ["Hours worked vs available", "Revenue per hour", "Overtime trends", "Staff satisfaction"],
                    importance: "Medium"
                  },
                  {
                    metric: "Customer Mix & LTV",
                    description: "Service preferences and customer lifetime value analysis",
                    indicators: ["Service popularity", "Average ticket size", "Customer retention rate", "VIP customer trends"],
                    importance: "Medium"
                  }
                ].map((metric, index) => (
                  <div
                    key={index}
                    className="group grid lg:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="lg:col-span-4">
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {metric.metric}
                      </h3>
                      <div className="text-sm text-muted-foreground mt-1">{metric.description}</div>
                      <div className={`text-xs px-2 py-1 rounded-full mt-2 inline-block ${
                        metric.importance === "High" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {metric.importance} Priority
                      </div>
                    </div>
                    <div className="lg:col-span-8">
                      <div className="text-sm text-muted-foreground font-mono mb-3">KEY INDICATORS:</div>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {metric.indicators.map((indicator, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                            <span>{indicator}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="insights"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Sample Insights & Reports</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Real examples of the actionable insights your weekly dashboard provides.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">REPORT EXAMPLES</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    title: "Friday Revenue Drop Alert",
                    scenario: "Revenue down 15% vs last week",
                    insight: "Tuesday appointments are underperforming - consider promotional push",
                    action: "Send rebooking SMS to lapsed Tuesday clients",
                    impact: "Recovered $800 in revenue"
                  },
                  {
                    title: "Capacity Optimization",
                    scenario: "Provider A at 60% utilization on Wednesdays",
                    insight: "Underutilized time slots could be filled with existing demand",
                    action: "Adjust scheduling to fill Wednesday gaps",
                    impact: "Increased utilization by 20%"
                  },
                  {
                    title: "Service Mix Trend",
                    scenario: "Beard trims increasing 40% month-over-month",
                    insight: "Trending service indicates market demand shift",
                    action: "Add beard trim specialist and marketing focus",
                    impact: "$1,200 additional monthly revenue"
                  },
                  {
                    title: "Customer Retention Alert",
                    scenario: "VIP clients booking less frequently",
                    insight: "3 high-value clients haven't booked in 8 weeks",
                    action: "Personal outreach to understand concerns",
                    impact: "Recovered 2 of 3 VIP clients"
                  }
                ].map((example, index) => (
                  <div
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {example.title}
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <div className="text-xs text-muted-foreground font-mono uppercase">Situation</div>
                          <div className="text-sm text-muted-foreground">{example.scenario}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground font-mono uppercase">Insight</div>
                          <div className="text-sm text-muted-foreground">{example.insight}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground font-mono uppercase">Action Taken</div>
                          <div className="text-sm text-muted-foreground">{example.action}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground font-mono uppercase">Business Impact</div>
                          <div className="text-sm font-medium text-primary">{example.impact}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="agent"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Owner-Analyst Agent</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Ask questions about your business data in plain English and get instant, actionable insights.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">GET STARTED</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
                {[
                  {
                    title: "Sample Report",
                    description: "Download a real example of the weekly owner pack",
                    type: "PDF Download"
                  },
                  {
                    title: "Try the Agent",
                    description: "Test the Owner-Analyst Agent with sample data",
                    type: "Interactive Demo"
                  },
                  {
                    title: "Pricing Calculator",
                    description: "Calculate ROI for your business size",
                    type: "ROI Calculator"
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
                        Try it →
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


