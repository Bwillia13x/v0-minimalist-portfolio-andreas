"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function PricingPage() {
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
          {["pricing", "roi"].map((section) => (
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
          id="pricing"
          ref={(el) => { sectionsRef.current[0] = el; }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <header className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">PRAIRIESIGNAL / PRICING</div>
              <h1 className="text-3xl sm:text-4xl font-light">Clear, low-risk pricing</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Fixed-scope pilots, pass-through usage, and Care Plans. Calgary, AB.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Readiness", "Pilots", "Care Plans", "Pass-through"].map((chip) => (
                  <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-4 text-sm">
                <Link href="#pricing" className="bg-primary text-primary-foreground rounded-md border border-transparent px-3 py-2 hover:bg-primary/90 transition-colors">View Pricing</Link>
                <Link href="/contact" className="rounded-md border border-border px-3 py-2 hover:border-[color:var(--brand-gold)] transition-colors">Book a consult</Link>
              </div>
            </header>

            {/* Success Stories */}
            <div className="space-y-6">
              <h2 className="text-2xl font-light">Real Results</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-border p-6">
                  <div className="text-sm text-muted-foreground font-mono mb-2">BARBERSHOP OWNER</div>
                  <p className="text-sm text-muted-foreground mb-3">
                    &ldquo;Pilot B paid for itself in 6 weeks. We went from chasing 40% of no-shows to proactively rebooking them.&rdquo;
                  </p>
                  <div className="text-xs text-muted-foreground">Calgary, AB • 3 months in</div>
                </div>
                <div className="rounded-lg border border-border p-6">
                  <div className="text-sm text-muted-foreground font-mono mb-2">SALON MANAGER</div>
                  <p className="text-sm text-muted-foreground mb-3">
                    &ldquo;The rebooking SMS alone saved us $800/month. Clients love the personal touch.&rdquo;
                  </p>
                  <div className="text-xs text-muted-foreground">Edmonton, AB • 4 months in</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">PILOT PACKAGES</div>
              <div className="grid gap-6 sm:gap-8">
                {[
                  {
                    name: "Readiness & Roadmap",
                    price: "$750",
                    duration: "Foundation assessment + 90-day plan",
                    description: "Get clarity before committing. We audit your current processes, identify quick wins, and build a roadmap.",
                    features: [
                      "Current process audit & mapping",
                      "Data privacy & PIPEDA compliance review",
                      "Technical infrastructure assessment",
                      "90-day implementation roadmap",
                      "ROI projections & risk assessment",
                      "Stakeholder interviews & goal alignment"
                    ]
                  },
                  {
                    name: "Pilot A — Micro Automation",
                    price: "$2,500",
                    duration: "2 weeks • Perfect for skeptics",
                    description: "Test the waters with one focused workflow. See real results without long-term commitment.",
                    features: [
                      "One complete automation workflow",
                      "Integration with 2 business apps",
                      "Setup & training (1 day)",
                      "2-week support & iteration",
                      "Results report & next steps",
                      "Easy cancellation, no strings attached"
                    ]
                  },
                  {
                    name: "Pilot B — Operations Booster",
                    price: "$5,500",
                    duration: "3 weeks • Most Popular",
                    description: "The sweet spot. Command Center setup with 3 automations that transform your daily operations.",
                    features: [
                      "Full Command Center spreadsheet setup",
                      "3 automation workflows",
                      "Rebooking SMS system with approval gates",
                      "Owner dashboard with KPIs",
                      "3-week support & optimization",
                      "Team training & handover"
                    ]
                  },
                  {
                    name: "Pilot C — Pro Implementation",
                    price: "$9,500",
                    duration: "4 weeks • Full transformation",
                    description: "Go all-in. 5 automations plus a simple custom interface for your team to manage everything.",
                    features: [
                      "Everything in Pilot B plus:",
                      "2 additional automation workflows",
                      "Custom team interface/dashboard",
                      "Advanced integrations & APIs",
                      "Performance monitoring & alerts",
                      "4-week support & optimization"
                    ]
                  }
                ].map((pilot, index) => (
                  <div
                    key={index}
                    className={`group p-6 sm:p-8 border rounded-lg transition-all duration-500 hover:shadow-lg ${
                      pilot.name.includes("Pilot B") ? "border-primary/20 bg-primary/5" : "border-border hover:border-muted-foreground/50"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="space-y-2 flex-1">
                        <h3 className="text-lg sm:text-xl font-medium">{pilot.name}</h3>
                        <div className="text-muted-foreground text-sm">{pilot.duration}</div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{pilot.description}</p>
                      </div>
                      <div className="text-2xl sm:text-3xl font-light text-primary">{pilot.price}</div>
                    </div>
                    <div className="space-y-2">
                      {pilot.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
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
          id="roi"
          ref={(el) => { sectionsRef.current[1] = el; }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Quick ROI Math</h2>
              <div className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Recovered/day = Cancels/day × Rebook Rate × Avg Ticket
                <br />
                <span className="text-primary font-medium">Example: 2 × 40% × $70 ≈ $1,680/mo</span>
                <br />
                Breakeven (Pilot B): ~3.3 months
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">CARE PLANS</div>
              <p className="text-muted-foreground">
                Keep your automations running smoothly with monthly maintenance and improvements.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    name: "Essentials",
                    price: "$600/mo",
                    description: "Perfect for stable operations that need basic maintenance.",
                    features: [
                      "Monthly performance check-ins",
                      "Bug fixes and security updates",
                      "Email support during business hours",
                      "Basic usage monitoring",
                      "30-day cancellation notice"
                    ]
                  },
                  {
                    name: "Standard",
                    price: "$1,200/mo",
                    description: "Most popular. Includes new features and priority support.",
                    features: [
                      "Everything in Essentials",
                      "New feature requests & implementations",
                      "Quarterly optimization reviews",
                      "Phone & email support",
                      "Training refresh sessions",
                      "Priority feature requests"
                    ]
                  },
                  {
                    name: "Plus",
                    price: "$2,500/mo",
                    description: "Full-service partnership with custom development.",
                    features: [
                      "Everything in Standard",
                      "Custom feature development",
                      "Dedicated account manager",
                      "Strategic consulting sessions",
                      "Advanced analytics & reporting",
                      "24/7 emergency support"
                    ]
                  }
                ].map((plan, index) => (
                  <div
                    key={index}
                    className={`p-6 border rounded-lg transition-all duration-500 hover:shadow-lg ${
                      plan.name === "Standard" ? "border-primary/20 bg-primary/5" : "border-border hover:border-muted-foreground/50"
                    }`}
                  >
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium">{plan.name}</h3>
                        <div className="text-2xl font-light text-primary">{plan.price}</div>
                        <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                      </div>
                      <div className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-8">
              <h2 className="text-2xl font-light">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="rounded-lg border border-border p-6">
                  <h3 className="font-medium mb-3">What&rsquo;s included in pass-through billing?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    API costs for AI services and third-party integrations. We pass these through at cost with no markup.
                    Typical monthly cost: $50–200 depending on usage volume and AI model selection.
                  </p>
                </div>

                <div className="rounded-lg border border-border p-6">
                  <h3 className="font-medium mb-3">Can I cancel anytime?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes! Pilot packages are fixed-scope with no ongoing commitment. Care Plans require 30 days notice.
                    Your automations and data remain yours - we can export everything for you.
                  </p>
                </div>

                <div className="rounded-lg border border-border p-6">
                  <h3 className="font-medium mb-3">What if I&rsquo;m not technical?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    No problem! Most clients are surprised at how non-technical our solutions are. We handle all the
                    setup and provide simple training. You&rsquo;ll be up and running within a day, with full support during your pilot.
                  </p>
                </div>

                <div className="rounded-lg border border-border p-6">
                  <h3 className="font-medium mb-3">Do you work with my existing tools?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes! We integrate with popular business tools like Google Workspace, Zapier, Calendly, and most
                    scheduling/bookkeeping software. If you use something specific, we can usually connect to it.
                  </p>
                </div>

                <div className="rounded-lg border border-border p-6">
                  <h3 className="font-medium mb-3">How quickly do I see results?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Most clients see initial results within 1-2 weeks. Pilot A shows quick wins in specific areas.
                    Pilot B typically breaks even in 2-4 months with significant ROI by month 6.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">RESOURCES</div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "ROI Calculator", href: "#roi", description: "Calculate your potential savings" },
                  { title: "What's Included", href: "#included", description: "Detailed feature breakdown" },
                  { title: "Pass-Through Billing", href: "#passthrough", description: "Transparent usage costs" },
                  { title: "Terms & SLAs", href: "#terms", description: "Service agreements" },
                ].map((card, index) => (
                  <Link
                    key={index}
                    href={card.href}
                    className="group block p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-2">
                      <h3 className="font-medium group-hover:text-muted-foreground transition-colors duration-300">{card.title}</h3>
                      <p className="text-sm text-muted-foreground">{card.description}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <span>Learn more</span>
                        <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

              <button
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle conversation panel"
              >
                <span className="sr-only">Toggle conversation panel</span>
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


