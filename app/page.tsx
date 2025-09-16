"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Section } from "@/components/Section"
import { CapabilityCard } from "@/components/CapabilityCard"
import { TestimonialCard } from "@/components/TestimonialCard"
import { ToolCard } from "@/components/ToolCard"
import { trackEvent } from "@/components/Analytics"

export default function Home() {
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
          {["intro", "work", "thoughts", "connect"].map((section) => (
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
        <header
          id="intro"
          ref={(el) => { sectionsRef.current[0] = el }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]">
            <img src="/hero-dark-gold.svg" alt="PrairieSignal AI Enablement background" className="w-full h-full object-cover opacity-60" />
          </div>
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PRAIRIESIGNAL / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  AI That Never Sleeps
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                {/* Value bullets */}
                <div className="space-y-3 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[var(--ps-primary)] rounded-full mt-3 flex-shrink-0"></div>
                    <div>Recover missed bookings automatically</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[var(--ps-primary)] rounded-full mt-3 flex-shrink-0"></div>
                    <div>Monday-morning KPI digest in plain English</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[var(--ps-primary)] rounded-full mt-3 flex-shrink-0"></div>
                    <div>Stock alerts + product bundles before items run out</div>
                  </div>
                </div>

                {/* CTA Stack */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link
                    href="/contact"
                    className="bg-[var(--ps-primary)] text-white rounded-md border border-transparent px-4 py-3 hover:bg-[var(--ps-primary-weak)] transition-colors font-medium text-center"
                    onClick={() => trackEvent('consult_booked', { location: 'hero' })}
                  >
                    Book a 20-min consult
                  </Link>
                  <Link
                    href="/demo"
                    className="rounded-md border border-[var(--ps-border)] px-4 py-3 hover:border-[var(--ps-primary)] transition-colors text-center"
                    onClick={() => trackEvent('demo_opened', { location: 'hero' })}
                  >
                    Open live demo
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-[var(--ps-muted)] hover:text-[var(--ps-primary)] transition-colors text-center"
                    onClick={() => trackEvent('pricing_viewed', { location: 'hero' })}
                  >
                    See pricing & ROI →
                  </Link>
                </div>

                {/* Trust line */}
                <div className="text-sm text-[var(--ps-muted)] pt-2">
                  Calgary small-business friendly • PIPEDA/PIPA aware
                </div>

                {/* Status badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Model Mix", "Focus"].map((chip) => (
                    <span key={chip} className="px-3 py-1 text-xs border border-[var(--ps-border)] rounded-full text-[var(--ps-muted)] opacity-80">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-[var(--ps-muted)] font-mono">MODEL MIX</div>
                <div className="space-y-2 text-sm text-[var(--ps-muted)]">
                  <div>ChatGPT</div>
                  <div>Claude</div>
                  <div>Gemini</div>
                  <div>Paradigm</div>
                  <div>Shortcut</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-[var(--ps-muted)] font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["Fast", "Safe", "Plain English"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-[var(--ps-border)] rounded-full hover:border-[var(--ps-primary)]/50 transition-colors duration-300 text-[var(--ps-muted)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <Section id="capabilities" title="AI Capabilities" eyebrow="AUTOMATION">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            {[
              {
                number: "01",
                title: "Smart Rebooking System",
                blurb: "Find likely return clients and draft polite texts at the right time. You approve; messages send within business hours.",
                chips: ["Personalization", "Smart Timing", "Risk Assessment"],
                example: (
                  <div>
                    Sarah missed her haircut last month. AI suggests texting her Tuesday at 2 PM with: "Hi Sarah, it's Andreas at Andreas & Co. We have your regular Tuesday slot free next week at 2 PM. Want me to hold it?"
                  </div>
                )
              },
              {
                number: "02",
                title: "Weekly Business Intelligence",
                blurb: "A concise Monday summary: what changed, what's at risk, and the next best actions—in plain English.",
                chips: ["Automated Analysis", "Trend Detection", "Actionable Insights"],
                example: (
                  <div>
                    This week: Revenue up 12% from last month. Your Tuesday 2 PM slots are 90% booked (usually 75%). Consider adding more evening appointments - demand is growing there.
                  </div>
                )
              },
              {
                number: "03",
                title: "Smart Inventory Assistant",
                blurb: "Predicts demand 4 weeks out, warns before stock-outs, and suggests sensible bundles that raise basket size.",
                chips: ["Demand Forecasting", "Stock Alerts", "Bundle Suggestions"],
                example: (
                  <div>
                    Alert: Shaving cream will run out in 12 days based on current sales. Consider bundling it with haircut packages - similar clients spend 23% more when you suggest complementary products.
                  </div>
                )
              },
              {
                number: "04",
                title: "Customer Campaign Manager",
                blurb: "Gentle nudges with built-in opt-out and pacing rules. Respectful reminders that keep calendars full.",
                chips: ["Respectful Outreach", "Opt-out Protection", "Personalized Messaging"],
                example: (
                  <div>
                    Mike hasn't been in for 8 weeks. At 10 AM on Wednesday: "Hi Mike, it's Andreas at Andreas & Co. We miss seeing you! Would you like to book your next appointment?" (Client can reply 'STOP' anytime to opt out)
                  </div>
                )
              },
            ].map((capability, index) => (
              <CapabilityCard
                key={index}
                number={capability.number}
                title={capability.title}
                blurb={capability.blurb}
                chips={capability.chips}
                example={capability.example}
              />
            ))}
          </div>
        </Section>

        {/* Explore Solutions Section */}
        <Section id="solutions" title="Explore Solutions" eyebrow="SERVICES">
          <p className="text-lg text-[var(--ps-muted)] leading-relaxed max-w-2xl mb-8">
            Three focused solutions to transform your business with AI.
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Website Redesign",
                description: "Modern, conversion-focused website that drives bookings from every page.",
                outcome: "15–30% higher conversion rates",
                href: "/solutions/website",
                icon: "🌐"
              },
              {
                title: "Marketing Engine",
                description: "AI-enabled growth systems with steady content and gentle reminders.",
                outcome: "20–30% fewer no-shows",
                href: "/solutions/marketing",
                icon: "📈"
              },
              {
                title: "AI Tools & Templates",
                description: "Plug-and-play prompts and assistants for SMS, email, and sheets.",
                outcome: "Save 5+ hours per week",
                href: "/solutions/ai-tools",
                icon: "🤖"
              }
            ].map((solution, index) => (
              <Link
                key={index}
                href={solution.href}
                className="group p-6 border border-[var(--ps-border)] rounded-lg hover:border-[var(--ps-primary)]/50 transition-all duration-500 hover:shadow-lg bg-[var(--ps-surface)]"
                onClick={() => {
                  trackEvent('solution_explored', {
                    solution: solution.title.toLowerCase().replace(' ', '_'),
                    location: 'home_solutions_strip'
                  })
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{solution.icon}</span>
                    <h3 className="text-lg font-medium group-hover:text-[var(--ps-primary)] transition-colors">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-[var(--ps-muted)] leading-relaxed">{solution.description}</p>
                  <div className="pt-2 border-t border-[var(--ps-border)]/50">
                    <div className="text-sm font-medium text-[var(--ps-text)]">Expected Outcome</div>
                    <div className="text-sm text-[var(--ps-primary)] mt-1">{solution.outcome}</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--ps-primary)] group-hover:text-[var(--ps-primary-weak)] transition-colors">
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
        </Section>

        <section
          id="thoughts"
          ref={(el) => { sectionsRef.current[2] = el }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Resources</h2>

            {/* Success Stories */}
            <Section id="testimonials" title="Real Results" eyebrow="SUCCESS STORIES">
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
                {[
                  {
                    quote: "We were losing 20% of our appointments to no-shows. After implementing the rebooking system, that dropped to 8%. The AI handles the outreach while we focus on great haircuts.",
                    author: "Barbershop Owner",
                    role: "Barbershop Owner",
                    city: "Calgary",
                    metric: "60% reduction in lost revenue"
                  },
                  {
                    quote: "The weekly owner reports save me 3 hours every Monday. I get clear insights on what's working and what needs attention. Game changer for running the business.",
                    author: "Salon Manager",
                    role: "Salon Manager",
                    city: "Edmonton",
                    metric: "$12k annual savings in admin time"
                  },
                  {
                    quote: "Finally found someone who speaks our language. No tech jargon, just practical solutions that work in a busy barbershop.",
                    author: "Andreas",
                    role: "Business Owner",
                    city: "Calgary",
                    metric: "5 hours saved per week"
                  },
                ].map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    city={testimonial.city}
                    metric={testimonial.metric}
                  />
                ))}
              </div>
            </Section>

            {/* Expanded Resources */}
            <Section id="tools" title="Tools & Guides" eyebrow="RESOURCES">
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    title: "Complete Prompt Library",
                    description: "50+ ready-to-use prompts for SMS, email, reviews, and business analysis. Copy-paste and customize for your needs.",
                    href: "/prompt-pack",
                    type: "Templates",
                    action: "Download →",
                    onClick: () => trackEvent('prompt_pack_downloaded', { location: 'resources' })
                  },
                  {
                    title: "Interactive Demo",
                    description: "Watch AI process real appointment data and generate personalized SMS campaigns with approval workflows.",
                    href: "/demo",
                    type: "Demo",
                    action: "Watch →"
                  },
                  {
                    title: "Pricing Calculator",
                    description: "See potential ROI and choose the right package. Includes real examples from similar businesses.",
                    href: "/pricing",
                    type: "Calculator",
                    action: "Calculate →"
                  },
                  {
                    title: "Free Consultation",
                    description: "20-minute call to discuss your specific needs and see how AI can transform your operations.",
                    href: "/contact",
                    type: "Consultation",
                    action: "Book →"
                  },
                ].map((tool, index) => (
                  <ToolCard
                    key={index}
                    title={tool.title}
                    description={tool.description}
                    href={tool.href}
                    type={tool.type}
                    action={tool.action}
                    onClick={tool.onClick}
                  />
                ))}
              </div>
            </Section>
          </div>
        </section>

        <Section id="connect" title="Let's turn ideas into bookings" eyebrow="GET STARTED">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-[var(--ps-muted)] leading-relaxed">
                20 minutes to map your quick wins. Calgary-based, PIPEDA/PIPA-aware.
              </p>

              <div className="space-y-4">
                <Link
                  href="/contact"
                  onClick={() => trackEvent('consult_booked', { location: 'footer' })}
                  className="bg-[var(--ps-primary)] text-white rounded-md border border-transparent px-4 py-3 hover:bg-[var(--ps-primary-weak)] transition-colors font-medium inline-flex items-center gap-2"
                >
                  <span>Book a 20-min consult</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="mailto:hello@prairiesignal.ca"
                  className="text-[var(--ps-muted)] hover:text-[var(--ps-primary)] transition-colors inline-flex items-center gap-2"
                >
                  <span>Email us</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-sm text-[var(--ps-muted)] font-mono">CONNECT</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Email", handle: "hello@prairiesignal.ca", url: "mailto:hello@prairiesignal.ca", icon: "✉️" },
                  { name: "Website", handle: "prairiesignal.ca", url: "https://prairiesignal.ca", icon: "🌐" },
                  { name: "LinkedIn", handle: "PrairieSignal", url: "#", icon: "💼" },
                  { name: "Demo", handle: "Live Preview", url: "/demo", icon: "🎬" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-[var(--ps-border)] rounded-lg hover:border-[var(--ps-primary)]/50 transition-all duration-500 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{social.icon}</span>
                        <div className="text-[var(--ps-text)] group-hover:text-[var(--ps-primary)] transition-colors duration-300 font-medium">
                          {social.name}
                        </div>
                      </div>
                      <div className="text-sm text-[var(--ps-muted)]">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Section>

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
