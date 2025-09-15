"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function NewSitePage() {
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
      <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]">
        <img src="/hero-dark-gold-2.svg" alt="" className="w-full h-full object-cover opacity-60" />
      </div>

      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["website", "timeline", "features", "showcase"].map((section) => (
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
          id="website"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <header className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">PRAIRIESIGNAL / WEBSITE</div>
              <h1 className="text-3xl sm:text-4xl font-light">Premium Look. Effortless Booking.</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A dark-gold aesthetic, elegant typography, and two-tap booking that matches the quality of your services. Mobile-first, lightning fast, SEO-ready.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Dark + Gold", "Two-Tap Booking", "Mobile-First", "SEO"].map((chip) => (
                  <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-4 text-sm">
                <Link href="#website" className="bg-primary text-primary-foreground rounded-md border border-transparent px-3 py-2 hover:bg-primary/90 transition-colors">View Website</Link>
                <Link href="#timeline" className="rounded-md border border-border px-3 py-2 hover:border-[color:var(--brand-gold)] transition-colors">See Timeline</Link>
                <Link href="#showcase" className="rounded-md border border-border px-3 py-2 hover:border-[color:var(--brand-gold)] transition-colors">View Showcase</Link>
              </div>
            </header>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">DESIGN PHILOSOPHY</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    icon: "🎨",
                    title: "Dark & Gold Aesthetic",
                    description: "Sophisticated color palette that evokes luxury and professionalism",
                    features: ["Rich dark backgrounds", "Elegant gold accents", "High contrast typography", "Modern minimalist design"]
                  },
                  {
                    icon: "⚡",
                    title: "Two-Tap Booking",
                    description: "Streamlined booking process that converts visitors instantly",
                    features: ["Simplified form fields", "Wallet payment integration", "Mobile-optimized flow", "Confirmation in seconds"]
                  },
                  {
                    icon: "📱",
                    title: "Mobile-First Design",
                    description: "Built for mobile, enhanced for desktop - perfect on any device",
                    features: ["Touch-friendly interfaces", "Fast loading times", "Responsive layouts", "Native app feel"]
                  },
                  {
                    icon: "🚀",
                    title: "Performance Optimized",
                    description: "Lightning-fast loading and smooth interactions",
                    features: ["Image optimization", "CDN delivery", "Lazy loading", "Core Web Vitals optimized"]
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
          id="timeline"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Implementation Timeline</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                From design to launch in just 2 weeks with our proven methodology.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">BUILD PHASES</div>
              <div className="space-y-6">
                {[
                  {
                    phase: "Week 1: Design & Foundation",
                    title: "Visual System & Architecture",
                    description: "Establish design system and technical foundation",
                    deliverables: [
                      "Complete design system (colors, typography, spacing)",
                      "Information architecture and user flows",
                      "Technical setup (Next.js, Tailwind, analytics)",
                      "Content strategy and copywriting"
                    ]
                  },
                  {
                    phase: "Week 1: Development",
                    title: "Build & Integration",
                    description: "Rapid development with continuous integration",
                    deliverables: [
                      "Responsive layout implementation",
                      "Booking system integration",
                      "SEO optimization and schema markup",
                      "Performance optimization and testing"
                    ]
                  },
                  {
                    phase: "Week 2: Polish & Launch",
                    title: "Testing & Deployment",
                    description: "Final polish and seamless launch",
                    deliverables: [
                      "Cross-browser and device testing",
                      "Performance auditing and optimization",
                      "Content population and final review",
                      "Domain setup and DNS configuration"
                    ]
                  },
                  {
                    phase: "Post-Launch",
                    title: "Monitoring & Optimization",
                    description: "Continuous improvement and analytics",
                    deliverables: [
                      "Performance monitoring setup",
                      "Analytics configuration and goals",
                      "A/B testing framework",
                      "Monthly optimization reports"
                    ]
                  }
                ].map((phase, index) => (
                  <div
                    key={index}
                    className="group grid lg:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="lg:col-span-3">
                      <div className="text-sm text-primary font-mono">{phase.phase}</div>
                    </div>
                    <div className="lg:col-span-6 space-y-3">
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {phase.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                    </div>
                    <div className="lg:col-span-3 space-y-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                          <span>{deliverable}</span>
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
          id="features"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Key Features</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Everything you need to convert visitors into loyal customers.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">USER EXPERIENCE</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    title: "Hero Section with Booking CTA",
                    description: "Compelling hero section that drives immediate bookings",
                    benefits: ["Clear value proposition", "Prominent booking button", "Trust indicators", "Mobile-optimized layout"]
                  },
                  {
                    title: "Service Showcase",
                    description: "Beautiful presentation of your services and packages",
                    benefits: ["High-quality imagery", "Clear pricing display", "Service descriptions", "Add-on options"]
                  },
                  {
                    title: "Team Profiles",
                    description: "Showcase your talented team and build trust",
                    benefits: ["Professional photos", "Staff specialties", "Experience highlights", "Personal touches"]
                  },
                  {
                    title: "Reviews & Social Proof",
                    description: "Display customer testimonials and reviews prominently",
                    benefits: ["Google Reviews integration", "Star ratings display", "Recent testimonials", "Trust badges"]
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      <div className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {benefit}
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
          id="showcase"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Design Showcase</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                See examples of our website designs and the transformation they create.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">RESOURCES</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
                {[
                  {
                    title: "Style Guide",
                    description: "Complete design system documentation",
                    type: "PDF Download"
                  },
                  {
                    title: "Wireframes",
                    description: "Site structure and user flow diagrams",
                    type: "Interactive Preview"
                  },
                  {
                    title: "Content Template",
                    description: "Ready-to-use content for your new site",
                    type: "Word Document"
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
                        Download →
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


