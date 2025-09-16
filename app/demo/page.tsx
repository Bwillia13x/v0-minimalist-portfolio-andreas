"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function DemoPage() {
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
          {["demo", "steps", "resources"].map((section) => (
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
          id="demo"
          ref={(el) => { sectionsRef.current[0] = el; }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <header className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">PRAIRIESIGNAL / DEMO</div>
              <h1 className="text-3xl sm:text-4xl font-light">See it work in 2 minutes</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Watch the sheet enrich 15–30 rows, sort by confidence, and produce two ready-to-send texts. Quick, safe, on-brand.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {["≤140 chars", "Canadian spelling", "No PII", "Approval"].map((chip) => (
                  <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-4 text-sm">
                <Link href="#demo" className="bg-primary text-primary-foreground rounded-md border border-transparent px-3 py-2 hover:bg-primary/90 transition-colors">View Demo</Link>
                <Link href="#steps" className="rounded-md border border-border px-3 py-2 hover:border-[color:var(--brand-gold)] transition-colors">See Process</Link>
                <Link href="/contact" className="rounded-md border border-border px-3 py-2 hover:border-[color:var(--brand-gold)] transition-colors">Book Consult</Link>
              </div>
            </header>

            {/* Sample Data Transformation */}
            <div className="space-y-6">
              <h2 className="text-2xl font-light">See the transformation</h2>
              <div className="space-y-6">
                <div className="text-sm text-muted-foreground font-mono">BEFORE: Raw appointment data</div>
                <div className="overflow-x-auto">
                  <table className="w-full border border-border text-xs">
                    <thead className="bg-muted/20">
                      <tr>
                        <th className="border border-border p-2 text-left">Date</th>
                        <th className="border border-border p-2 text-left">Client</th>
                        <th className="border border-border p-2 text-left">Service</th>
                        <th className="border border-border p-2 text-left">Last Visit</th>
                        <th className="border border-border p-2 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-2">2025-01-15</td>
                        <td className="border border-border p-2">Sarah Johnson</td>
                        <td className="border border-border p-2">Haircut + Style</td>
                        <td className="border border-border p-2">2024-11-20</td>
                        <td className="border border-border p-2">Completed</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">2025-01-16</td>
                        <td className="border border-border p-2">Mike Chen</td>
                        <td className="border border-border p-2">Beard Trim</td>
                        <td className="border border-border p-2">2024-12-15</td>
                        <td className="border border-border p-2">No-show</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">2025-01-17</td>
                        <td className="border border-border p-2">Jennifer Smith</td>
                        <td className="border border-border p-2">Full Service</td>
                        <td className="border border-border p-2">2024-10-30</td>
                        <td className="border border-border p-2">Completed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="text-sm text-muted-foreground font-mono">AFTER: AI-enriched with insights</div>
                <div className="overflow-x-auto">
                  <table className="w-full border border-border text-xs">
                    <thead className="bg-primary/5">
                      <tr>
                        <th className="border border-border p-2 text-left">Date</th>
                        <th className="border border-border p-2 text-left">Client</th>
                        <th className="border border-border p-2 text-left">Service</th>
                        <th className="border border-border p-2 text-left">Last Seen</th>
                        <th className="border border-border p-2 text-left">Risk</th>
                        <th className="border border-border p-2 text-left">Time Window</th>
                        <th className="border border-border p-2 text-left">SMS Draft</th>
                        <th className="border border-border p-2 text-left">Confidence</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-2">2025-01-15</td>
                        <td className="border border-border p-2">Sarah Johnson</td>
                        <td className="border border-border p-2">Haircut + Style</td>
                        <td className="border border-border p-2">58 days</td>
                        <td className="border border-border p-2">Low (15)</td>
                        <td className="border border-border p-2">Tue 2-3 PM</td>
                        <td className="border border-border p-2">"Hi Sarah, it's Andreas..."</td>
                        <td className="border border-border p-2 text-green-600 font-medium">92</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">2025-01-16</td>
                        <td className="border border-border p-2">Mike Chen</td>
                        <td className="border border-border p-2">Beard Trim</td>
                        <td className="border border-border p-2">32 days</td>
                        <td className="border border-border p-2">Medium (45)</td>
                        <td className="border border-border p-2">Wed 10-11 AM</td>
                        <td className="border border-border p-2">"Hi Mike, it's Andreas..."</td>
                        <td className="border border-border p-2 text-yellow-600 font-medium">78</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">2025-01-17</td>
                        <td className="border border-border p-2">Jennifer Smith</td>
                        <td className="border border-border p-2">Full Service</td>
                        <td className="border border-border p-2">78 days</td>
                        <td className="border border-border p-2">High (75)</td>
                        <td className="border border-border p-2">Fri 1-2 PM</td>
                        <td className="border border-border p-2">Low priority - skip</td>
                        <td className="border border-border p-2 text-red-600 font-medium">45</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">FEATURES</div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: "📊",
                    title: "Data Enrichment",
                    description: "Clean and enhance customer data automatically",
                    details: ["Pattern recognition", "Missing data completion", "Duplicate detection"]
                  },
                  {
                    icon: "🎯",
                    title: "Confidence Scoring",
                    description: "AI-powered prioritization of outreach opportunities",
                    details: ["Risk assessment", "Value prediction", "Timing optimization"]
                  },
                  {
                    icon: "💬",
                    title: "Smart Messaging",
                    description: "Generate personalized, on-brand communications",
                    details: ["Voice consistency", "Cultural adaptation", "Regulatory compliance"]
                  },
                  {
                    icon: "✅",
                    title: "Approval Workflow",
                    description: "Human oversight with automated suggestions",
                    details: ["Review gates", "Edit capabilities", "Audit trails"]
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <div className="text-2xl">{feature.icon}</div>
                      <div>
                        <h3 className="font-medium group-hover:text-muted-foreground transition-colors duration-300">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                        <ul className="mt-3 space-y-1">
                          {feature.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="steps"
          ref={(el) => { sectionsRef.current[1] = el; }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Demo steps</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                See the complete workflow in action with real data processing and automated decision-making.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">WORKFLOW</div>
              <div className="grid gap-6 sm:gap-8">
                {[
                  {
                    step: "01",
                    title: "Prepare data → Enrich in bulk",
                    description: "Upload your customer data and watch as AI enhances each record with relevant context and insights.",
                    details: ["Clean data validation", "Missing information enrichment", "Duplicate detection"]
                  },
                  {
                    step: "02",
                    title: "Triage: sort Confidence ≥ 80",
                    description: "Automatically prioritize high-value opportunities using AI confidence scoring.",
                    details: ["Rebooking potential analysis", "Customer lifetime value assessment", "Timing optimization"]
                  },
                  {
                    step: "03",
                    title: "Send two SMS → respectful windows",
                    description: "Generate and schedule personalized messages within appropriate time windows.",
                    details: ["Brand voice consistency", "Regulatory compliance", "Delivery optimization"]
                  },
                  {
                    step: "04",
                    title: "Debrief & iterate",
                    description: "Review performance metrics and refine your approach based on real results.",
                    details: ["Success rate analysis", "A/B testing insights", "Continuous improvement"]
                  }
                ].map((step, index) => (
                  <div
                    key={index}
                    className="group grid lg:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="lg:col-span-2">
                      <div className="text-3xl sm:text-4xl font-light text-primary">{step.step}</div>
                    </div>
                    <div className="lg:col-span-7 space-y-3">
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                    <div className="lg:col-span-3 space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {detail}
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
          id="resources"
          ref={(el) => { sectionsRef.current[2] = el; }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Demo Resources</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Everything you need to understand and implement our AI automation solutions.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">TOOLS & GUIDES</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    title: "Interactive Demo Sheet",
                    href: "#open-demo",
                    description: "Live spreadsheet with 30 sample rows. See AI enrichment and confidence scoring in real-time.",
                    type: "Interactive",
                    details: "No setup required • 2-minute walkthrough"
                  },
                  {
                    title: "Implementation Checklist",
                    href: "#script",
                    description: "Complete PDF guide covering setup, training, and go-live procedures for your team.",
                    type: "Guide",
                    details: "12 pages • Step-by-step • Downloadable"
                  },
                  {
                    title: "Prompt Library",
                    href: "/prompt-pack",
                    description: "50+ ready-to-use prompts for SMS, email, reviews, and data enrichment scenarios.",
                    type: "Templates",
                    details: "Copy-paste ready • Canadian localization"
                  },
                  {
                    title: "Safety & Governance",
                    href: "/security",
                    description: "Detailed documentation of privacy controls, approval workflows, and compliance measures.",
                    type: "Documentation",
                    details: "PIPEDA compliant • Audit trails included"
                  },
                  {
                    title: "Sample Dataset",
                    href: "#dataset",
                    description: "Anonymized appointment data from real barbershops. Perfect for testing your own scenarios.",
                    type: "Data",
                    details: "200 rows • Multiple locations • 6 months history"
                  },
                  {
                    title: "ROI Calculator",
                    href: "/pricing#roi",
                    description: "Interactive calculator showing potential savings from rebooking automation.",
                    type: "Tool",
                    details: "Customize variables • Export reports"
                  },
                ].map((resource, index) => (
                  <Link
                    key={index}
                    href={resource.href}
                    className="group block p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                          {resource.title}
                        </h3>
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {resource.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{resource.description}</p>
                      <div className="text-xs text-muted-foreground mt-2">{resource.details}</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 mt-3">
                        <span>Access resource</span>
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

            {/* Safety & Controls */}
            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">SAFETY & CONTROLS</div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg border border-border p-6">
                  <h3 className="text-lg font-medium mb-4">Privacy Protection</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Phone numbers masked in demo environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>No personally identifiable information stored</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>GDPR/PIPEDA compliant data handling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>All demo data deleted after session</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-border p-6">
                  <h3 className="text-lg font-medium mb-4">Human Oversight</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Every message requires explicit approval</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Edit or reject any AI-generated content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Stop campaign at any time with one click</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Complete audit trail of all actions taken</span>
                    </li>
                  </ul>
                </div>
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


