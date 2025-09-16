"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function AgentsPage() {
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
          {["agents", "timeline", "integrations"].map((section) => (
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
          id="agents"
          ref={(el) => { sectionsRef.current[0] = el }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <header className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">PRAIRIESIGNAL / AGENTS</div>
              <h1 className="text-3xl sm:text-4xl font-light">Agents that work like staff, not scripts</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Frontier models with safe defaults—each agent focuses on a job and routes decisions to people when it matters.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Front-Desk", "Owner-Analyst", "Inventory", "Campaign"].map((chip) => (
                  <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-4 text-sm">
                <Link href="/command-center" className="bg-primary text-primary-foreground rounded-md border border-transparent px-3 py-2 hover:bg-primary/90 transition-colors">See Command Center</Link>
                <Link href="/contact" className="rounded-md border border-border px-3 py-2 hover:border-[color:var(--brand-gold)] transition-colors">Book a working session</Link>
              </div>
            </header>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">AGENT TYPES</div>
              <div className="grid gap-6 sm:gap-8">
                {[
                  {
                    icon: "🏢",
                    title: "Front-Desk Agent",
                    description: "Day-of triage, reminders, and rebooking nudges with intelligent escalation",
                    features: ["SMS suggestions", "VIP call escalation", "Automated reminders", "Confidence scoring"]
                  },
                  {
                    icon: "📊",
                    title: "Owner-Analyst Agent",
                    description: "Weekly insights and trend analysis with automated reporting",
                    features: ["Performance comparison", "Chart generation", "KPI tracking", "Executive summaries"]
                  },
                  {
                    icon: "📦",
                    title: "Inventory Agent",
                    description: "Smart stock management with predictive analytics and bundle recommendations",
                    features: ["Stockout forecasting", "Seasonal analysis", "Bundle suggestions", "Velocity tracking"]
                  },
                  {
                    icon: "📢",
                    title: "Campaign Agent",
                    description: "Safe, compliant client outreach with approval workflows",
                    features: ["Lapsed client targeting", "Approval gates", "Throttle controls", "Opt-out management"]
                  }
                ].map((agent, index) => (
                  <div
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{agent.icon}</div>
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                            {agent.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mt-1">{agent.description}</p>
                        </div>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {agent.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {feature}
                            </div>
                          ))}
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
          id="timeline"
          ref={(el) => { sectionsRef.current[1] = el }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Implementation Timeline</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                From initial setup to full automation, our agents are designed for rapid deployment and immediate impact.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">DEPLOYMENT PHASES</div>
              <div className="space-y-8">
                {[
                  {
                    phase: "Week 1",
                    title: "Setup & Training",
                    description: "Configure agents with your data, brand voice, and operational parameters.",
                    tasks: ["Data integration", "Brand voice training", "Safety parameters", "Initial testing"]
                  },
                  {
                    phase: "Week 2",
                    title: "Pilot Operations",
                    description: "Run parallel operations with human oversight and gradual automation increase.",
                    tasks: ["Shadow mode testing", "Gradual automation", "Performance monitoring", "Feedback collection"]
                  },
                  {
                    phase: "Week 3",
                    title: "Full Deployment",
                    description: "Complete transition to automated operations with monitoring and optimization.",
                    tasks: ["Full automation", "Performance analytics", "Process optimization", "Team training"]
                  },
                  {
                    phase: "Ongoing",
                    title: "Optimization & Scaling",
                    description: "Continuous improvement and expansion to additional workflows.",
                    tasks: ["Performance analysis", "Feature expansion", "Process refinement", "Scale deployment"]
                  }
                ].map((phase, index) => (
                  <div
                    key={index}
                    className="group grid lg:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="lg:col-span-2">
                      <div className="text-lg font-medium text-primary">{phase.phase}</div>
                    </div>
                    <div className="lg:col-span-7 space-y-3">
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {phase.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                    </div>
                    <div className="lg:col-span-3 space-y-2">
                      {phase.tasks.map((task, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {task}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="integrations"
          ref={(el) => { sectionsRef.current[2] = el }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Integrations & Tools</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Our agents work seamlessly with your existing tools and platforms.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">PLATFORM INTEGRATIONS</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    title: "Paradigm.ai",
                    href: "/command-center",
                    description: "AI-powered spreadsheet automation and data processing",
                    features: ["Real-time processing", "API integration", "Custom workflows", "Audit trails"]
                  },
                  {
                    title: "Shortcut.ai",
                    href: "#shortcut",
                    description: "Advanced AI models for natural language processing and generation",
                    features: ["Multi-model support", "Context awareness", "Safety controls", "Cost optimization"]
                  },
                  {
                    title: "SMS/Email Platforms",
                    href: "#integrations",
                    description: "Seamless integration with popular communication platforms",
                    features: ["Twilio integration", "SendGrid compatibility", "Template management", "Delivery tracking"]
                  },
                  {
                    title: "Models & Costs",
                    href: "#models",
                    description: "Transparent pricing and model selection for optimal performance",
                    features: ["Cost comparison", "Performance metrics", "Usage analytics", "Budget controls"]
                  },
                ].map((integration, index) => (
                  <Link
                    key={index}
                    href={integration.href}
                    className="group block p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {integration.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{integration.description}</p>
                      <div className="space-y-2">
                        {integration.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feature}
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


