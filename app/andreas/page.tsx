"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function AndreasPitchPage() {
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
          {["summary", "roadmap", "website", "marketing", "enablement", "next"].map((section) => (
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
          id="summary"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <header className="space-y-6 sm:space-y-8">
              <div className="flex items-center justify-between gap-4">
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← Back to home
                </Link>
                <div className="text-xs text-muted-foreground font-mono">PrairieSignal</div>
              </div>

              <div className="text-sm text-muted-foreground font-mono tracking-wider">PRAIRIESIGNAL / ANDREAS & CO</div>
              <h1 className="text-4xl sm:text-5xl font-light tracking-tight">
                Andreas & Co Barbershop
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A concise, AI-enabled growth plan focused on three angles of attack: 1) Modern
                website refresh, 2) AI-enabled marketing strategy, and 3) AI enablement for
                operations and quality of life. Designed and presented by PrairieSignal.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 text-sm">
                <Link href="#roadmap" className="bg-primary text-primary-foreground rounded-md border border-transparent px-3 py-2 hover:bg-primary/90 transition-colors">View Roadmap</Link>
                <Link href="/contact" className="rounded-md border border-border px-3 py-2 hover:border-[color:var(--brand-gold)] transition-colors">Book Discovery Call</Link>
              </div>
            </header>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">WHAT WE'LL BUILD TOGETHER</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
                {[
                  {
                    number: "01",
                    title: "Modern Website That Converts",
                    description: "A beautiful, fast website that turns visitors into paying customers. Think: easy booking buttons everywhere, stunning photos of your work, and clear information about your services and prices.",
                    features: ["One-click booking from any page", "Mobile-friendly design", "Professional photography", "Clear pricing and services"],
                    outcome: "40% more online bookings within 3 months"
                  },
                  {
                    number: "02",
                    title: "Smart Marketing That Works",
                    description: "Automated systems that handle the marketing busywork so you can focus on great haircuts. Social media posts, review responses, and customer outreach that happens on autopilot.",
                    features: ["Weekly social media content", "Automatic review replies", "Email newsletters", "Google My Business optimization"],
                    outcome: "25% increase in new customers"
                  },
                  {
                    number: "03",
                    title: "AI Assistants That Help",
                    description: "Friendly AI helpers that handle routine tasks like answering common questions, reminding clients about appointments, and giving you insights about your business performance.",
                    features: ["24/7 customer chat assistant", "Automated appointment reminders", "Weekly business summaries", "Smart inventory alerts"],
                    outcome: "5 hours saved per week"
                  }
                ].map((angle, index) => (
                  <div
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl font-light text-primary">{angle.number}</div>
                        <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                          {angle.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{angle.description}</p>
                      <div className="space-y-2">
                        {angle.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      {angle.outcome && (
                        <div className="pt-3 border-t border-border/50">
                          <div className="text-xs text-primary font-medium">Expected Result:</div>
                          <div className="text-sm text-muted-foreground">{angle.outcome}</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="roadmap"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Implementation Roadmap</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A structured approach to transform Andreas & Co with AI-enabled growth strategies.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">PHASED APPROACH</div>
              <div className="space-y-6">
                {[
                  {
                    phase: "Phase 0 — Discovery",
                    duration: "0.5–1 week",
                    title: "Foundation & Assessment",
                    description: "Fast baseline audit and goal clarification",
                    tasks: [
                      "Site, SEO, analytics, and booking flow audit",
                      "Goal clarification: utilization, bookings mix, LTV",
                      "Success metrics and tracking plan definition"
                    ]
                  },
                  {
                    phase: "Phase 1 — Website",
                    duration: "1–2 weeks",
                    title: "Digital Presence Refresh",
                    description: "Modern, conversion-focused website implementation",
                    tasks: [
                      "Conversion-focused information architecture",
                      "Mobile-first design with booking CTAs",
                      "Local SEO basics and performance optimization"
                    ]
                  },
                  {
                    phase: "Phase 2 — Marketing",
                    duration: "2–4 weeks",
                    title: "AI-Enabled Growth",
                    description: "Smart marketing automation and content systems",
                    tasks: [
                      "Content calendar and UGC motion",
                      "Email/SMS automation workflows",
                      "Local SEO enhancements and paid experiments"
                    ]
                  },
                  {
                    phase: "Phase 3 — AI Enablement",
                    duration: "Ongoing",
                    title: "Operational Excellence",
                    description: "AI assistants and operational insights",
                    tasks: [
                      "AI assistants for FAQs and review responses",
                      "Operational dashboards and insights",
                      "Monthly optimization and staff training"
                    ]
                  }
                ].map((phase, index) => (
                  <div
                    key={index}
                    className="group grid lg:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="lg:col-span-3">
                      <div className="text-sm text-primary font-mono">{phase.phase}</div>
                      <div className="text-lg font-medium mt-1">{phase.duration}</div>
                    </div>
                    <div className="lg:col-span-6 space-y-3">
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
          id="website"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Website Refresh</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Goals: increase booking conversions, improve first impression, and clarify services. Keep it clean, fast, and easy to maintain.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">CORE PAGES & FEATURES</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
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
                ].map((page, index) => (
                  <div
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {page.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{page.description}</p>
                      <div className="space-y-2">
                        {page.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">TECHNICAL FOUNDATION</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-medium mb-4">Technology Stack</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>Next.js + Tailwind CSS for modern performance</div>
                    <div>Image optimization and lazy loading</div>
                    <div>Analytics integration and tracking</div>
                    <div>SEO optimization and meta management</div>
                  </div>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-medium mb-4">Performance & SEO</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>Local SEO: schema markup, GMB sync</div>
                    <div>Core Web Vitals optimization</div>
                    <div>Mobile accessibility compliance</div>
                    <div>Fast loading times and smooth UX</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="marketing"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">AI-Enabled Marketing</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Objectives: defend local search, grow word-of-mouth, and keep chairs full with timely content and gentle reminders.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">MARKETING PROGRAMS</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    title: "Content Marketing System",
                    description: "Monthly themes and weekly content calendar",
                    features: ["Monthly content themes", "Weekly posts and reels", "UGC integration", "Brand consistency"]
                  },
                  {
                    title: "Review & Referral Motion",
                    description: "Automated review requests and referral incentives",
                    features: ["Post-service review requests", "Referral program", "Loyalty incentives", "Social proof collection"]
                  },
                  {
                    title: "Email & SMS Automation",
                    description: "Personalized touchpoints throughout customer journey",
                    features: ["Welcome sequences", "Appointment reminders", "Win-back campaigns", "Seasonal promotions"]
                  },
                  {
                    title: "Paid Advertising",
                    description: "Geo-fenced campaigns and offer-driven experiments",
                    features: ["Local area targeting", "Seasonal offers", "Performance tracking", "A/B testing"]
                  }
                ].map((program, index) => (
                  <div
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                      <div className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">AI ASSISTANCE</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-medium mb-4">Content Generation</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>On-brand captions and social media copy</div>
                    <div>Personalized offer and promotion text</div>
                    <div>Email newsletter content</div>
                    <div>Review response drafts</div>
                  </div>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-medium mb-4">Strategy & Analytics</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>Demand forecasting and calendar suggestions</div>
                    <div>Customer segmentation and targeting</div>
                    <div>Performance analytics and reporting</div>
                    <div>ROI tracking and optimization insights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="enablement"
          ref={(el) => (sectionsRef.current[4] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">AI Enablement</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Reduce routine admin and let the team focus on clients. Human-in-the-loop controls to keep quality high.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">AI ASSISTANTS</div>
              <div className="grid gap-6 sm:gap-8">
                {[
                  {
                    icon: "💬",
                    title: "Customer Service Assistant",
                    description: "Handles FAQs, booking inquiries, and basic customer support",
                    capabilities: ["24/7 FAQ responses", "Booking triage", "Appointment scheduling", "Basic customer queries"]
                  },
                  {
                    icon: "⭐",
                    title: "Review Response Assistant",
                    description: "Drafts personalized responses to customer reviews with approval workflow",
                    capabilities: ["Review monitoring", "Response drafting", "Tone matching", "Approval queue"]
                  },
                  {
                    icon: "📚",
                    title: "Knowledge Base Assistant",
                    description: "Maintains and provides access to policies, procedures, and staff information",
                    capabilities: ["Policy documentation", "Staff onboarding", "Procedure updates", "Quick reference"]
                  },
                  {
                    icon: "📊",
                    title: "Operations Dashboard",
                    description: "Simple insights into utilization, popular services, and operational metrics",
                    capabilities: ["Utilization tracking", "Service popularity", "No-show analysis", "Revenue insights"]
                  }
                ].map((assistant, index) => (
                  <div
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl">{assistant.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                            {assistant.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mt-1">{assistant.description}</p>
                        </div>
                      </div>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {assistant.capabilities.map((capability, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {capability}
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
          id="next"
          ref={(el) => (sectionsRef.current[5] = el)}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Next Steps</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Ready to transform Andreas & Co with AI-enabled growth strategies? Let's get started.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">GET STARTED</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
                {[
                  {
                    step: "1",
                    title: "Discovery Call",
                    description: "Book a 45–60 minute discovery session to discuss goals and constraints",
                    action: "Schedule Call"
                  },
                  {
                    step: "2",
                    title: "Project Scoping",
                    description: "Receive detailed plan with timeline, budget bands, and success metrics",
                    action: "View Scope"
                  },
                  {
                    step: "3",
                    title: "Kickoff Sprint",
                    description: "Begin implementation with focused 1–2 week website and marketing sprint",
                    action: "Start Project"
                  }
                ].map((step, index) => (
                  <div
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl font-light text-primary">{step.step}</div>
                        <h3 className="text-lg sm:text-xl font-medium">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      <div className="pt-2">
                        <button className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">
                          {step.action} →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">CONNECT</div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  <span className="text-base sm:text-lg">Book a discovery call</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="https://prairiesignal.ca"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <span className="text-base sm:text-lg">Visit prairiesignal.ca</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
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


