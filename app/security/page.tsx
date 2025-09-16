"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function SecurityPage() {
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
          {["security", "compliance", "controls", "resources"].map((section) => (
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
          id="security"
          ref={(el) => { sectionsRef.current[0] = el; }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <header className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">PRAIRIESIGNAL / SECURITY</div>
              <h1 className="text-3xl sm:text-4xl font-light">Safety by default</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                PIPEDA/PIPA-aware, minimal data, and human approval before send. Privacy and compliance built into every feature.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Masked PII", "Quiet Hours", "Throttle", "Logs"].map((chip) => (
                  <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-4 text-sm">
                <Link href="#request" className="bg-primary text-primary-foreground rounded-md border border-transparent px-3 py-2 hover:bg-primary/90 transition-colors">Request Data Handling Note</Link>
                <Link href="#audit" className="rounded-md border border-border px-3 py-2 hover:border-[color:var(--brand-gold)] transition-colors">See Audit Log Example</Link>
              </div>
            </header>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">OUR SECURITY APPROACH</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    icon: "🛡️",
                    title: "Privacy-First Design",
                    description: "Every feature is designed with privacy in mind from the ground up",
                    features: ["Minimal data collection", "PII masking by default", "Purpose limitation", "Data minimization"]
                  },
                  {
                    icon: "👥",
                    title: "Human-in-the-Loop",
                    description: "AI suggestions require human approval before any customer contact",
                    features: ["Review all AI outputs", "Edit before sending", "Override capabilities", "Audit trails"]
                  }
                ].map((approach, index) => (
                  <div
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl">{approach.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                            {approach.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mt-1">{approach.description}</p>
                        </div>
                      </div>
                      <div className="grid gap-2 sm:grid-cols-1">
                        {approach.features.map((feat, idx) => (
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
          id="compliance"
          ref={(el) => { sectionsRef.current[1] = el; }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Regulatory Compliance</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Canadian privacy laws and industry standards guide every aspect of our platform.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">CANADIAN PRIVACY LAWS</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    law: "PIPEDA (Personal Information Protection and Electronic Documents Act)",
                    description: "Federal privacy law governing how organizations collect, use, and disclose personal information",
                    requirements: [
                      "Obtain consent for data collection",
                      "Limit collection to necessary information",
                      "Ensure data accuracy and security",
                      "Provide access to personal information"
                    ]
                  },
                  {
                    law: "CASL (Canada's Anti-Spam Legislation)",
                    description: "Regulates commercial electronic messages and requires consent",
                    requirements: [
                      "Express consent for marketing emails",
                      "Clear identification of sender",
                      "Easy unsubscribe mechanism",
                      "Commercial intent disclosure"
                    ]
                  }
                ].map((regulation, index) => (
                  <div
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {regulation.law}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{regulation.description}</p>
                      <div className="space-y-2">
                        <div className="text-xs text-muted-foreground font-mono uppercase">Key Requirements:</div>
                        {regulation.requirements.map((req, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                            <span>{req}</span>
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
          id="controls"
          ref={(el) => { sectionsRef.current[2] = el; }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Safety Controls</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Built-in safeguards ensure every interaction respects privacy and maintains compliance.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">DATA PROTECTION</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    title: "PII Masking & Encryption",
                    description: "Personal information is automatically masked and encrypted",
                    controls: [
                      "Phone numbers masked in displays",
                      "Email addresses tokenized",
                      "Data encrypted at rest and in transit",
                      "Access logging and monitoring"
                    ]
                  },
                  {
                    title: "Quiet Hours Enforcement",
                    description: "Respectful timing prevents unwanted contact outside business hours",
                    controls: [
                      "8:30 PM - 8:00 AM restrictions",
                      "Weekend scheduling controls",
                      "Holiday calendar integration",
                      "Emergency override procedures"
                    ]
                  }
                ].map((control, index) => (
                  <div
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {control.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{control.description}</p>
                      <div className="space-y-2">
                        {control.controls.map((ctrl, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
                            <span>{ctrl}</span>
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
          id="resources"
          ref={(el) => { sectionsRef.current[3] = el; }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Security Resources</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Documentation and tools to maintain compliance and security in your operations.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">DOCUMENTATION</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    title: "Data Handling Procedures",
                    description: "Complete guide to our data collection, processing, and retention policies",
                    type: "PDF Document"
                  },
                  {
                    title: "Privacy Impact Assessment",
                    description: "Detailed analysis of privacy implications and mitigation strategies",
                    type: "Assessment Report"
                  }
                ].map((resource, index) => (
                  <div
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
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
                      <button className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">
                        Access Resource →
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
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l(.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l(.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
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


