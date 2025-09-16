"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Section } from "@/components/Section"
import { Stat } from "@/components/Stat"
import { CtaBar } from "@/components/CtaBar"
import { trackEvent } from "@/components/Analytics"

export default function MarketingPageClient() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const handleCTAClick = (cta: string) => {
    if (typeof window !== "undefined" && window.plausible) {
      trackEvent("cta_clicked", { cta, location: "marketing-page" })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--ps-primary)] text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <main id="main-content" className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Hero Section */}
        <section className="min-h-screen py-20 sm:py-32 flex items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">
                PRAIRIESIGNAL / SOLUTIONS
              </div>
              <h1 className="text-4xl sm:text-5xl font-light tracking-tight">
                Marketing Engine That Works
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Steady content, gentle reminders, and opt-in growth with human approvals.
                AI-powered marketing automation for service businesses.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Link
                  href="/contact"
                  className="bg-primary text-primary-foreground rounded-md px-6 py-3 hover:bg-primary/90 transition-colors font-medium"
                  onClick={() => handleCTAClick("consult")}
                >
                  Book a 20-min consult
                </Link>
                <Link
                  href="/demo"
                  className="border border-border rounded-md px-6 py-3 hover:border-primary transition-colors"
                >
                  See Live Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <Section id="outcomes" title="Outcomes" eyebrow="RESULTS">
          <div className="grid gap-6 lg:grid-cols-3">
            <Stat value="↑ 40%" label="Review velocity improvement" trend="up" />
            <Stat value="↓ 20–30%" label="No-show rate reduction" trend="down" />
            <Stat value="Weekly" label="Consistent content delivery" />
          </div>
        </Section>

        {/* Marketing Programs Section */}
        <Section id="programs" title="Marketing Programs" eyebrow="STRATEGIES">
          <div className="space-y-8">
            {[
              {
                title: "Content Marketing System",
                cadence: "2 posts/week + 1 reel/week",
                description: "Automated content creation and scheduling across platforms",
                features: ["Instagram posts", "Story content", "Google Business Profile", "Email newsletters"]
              },
              {
                title: "Review & Referral Motion",
                cadence: "D+1 automated request",
                description: "Strategic timing for review requests and referral nudges",
                features: ["Review request automation", "Referral program", "Follow-up sequences", "Reputation management"]
              },
              {
                title: "Email & SMS Automation",
                cadence: "Welcome + reminders",
                description: "Personalized communication sequences with opt-out controls",
                features: ["Welcome series", "Appointment reminders", "Re-engagement campaigns", "Win-back sequences"]
              },
              {
                title: "Paid Advertising (Lightweight)",
                cadence: "2-week sprints",
                description: "Geo-fenced offers and seasonal promotions",
                features: ["Google Ads", "Facebook targeting", "Local promotions", "Performance tracking"]
              }
            ].map((program, index) => (
              <div
                key={index}
                className="group p-6 border border-border rounded-lg hover:border-primary/50 transition-all duration-500 hover:shadow-lg bg-card"
              >
                <div className="grid lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-4">
                    <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <div className="text-xs text-primary font-medium mb-3">
                      {program.cadence}
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="text-muted-foreground leading-relaxed text-sm mb-4">{program.description}</p>
                  </div>
                  <div className="lg:col-span-3 space-y-2">
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
        </Section>

        {/* AI Assistance */}
        <Section id="ai" title="AI-Powered Assistance" eyebrow="AUTOMATION">
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Smart Content Generation",
                features: ["Post ideas and captions", "Hashtag optimization", "Image suggestions", "Performance analysis"]
              },
              {
                title: "Intelligent Scheduling",
                features: ["Optimal posting times", "Audience engagement tracking", "Content calendar management", "Automated publishing"]
              }
            ].map((ai, index) => (
              <div key={index} className="p-6 border border-border rounded-lg bg-card">
                <h3 className="font-medium mb-4">{ai.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {ai.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Guardrails */}
        <Section id="guardrails" title="Privacy & Guardrails" eyebrow="COMPLIANCE">
          <div className="p-6 border border-border rounded-lg bg-card">
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "PIPEDA/CASL compliant messaging with clear opt-out options",
                "Human approval required for all marketing communications",
                "Quiet hours respected (no messages between 8 PM - 9 AM)",
                "Complete audit trail of all automated actions",
                "Client data never stored permanently - processed in real-time",
                "Easy unsubscribe process with one-click opt-out"
              ].map((guardrail, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  {guardrail}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* CTA Section */}
        <CtaBar
          title="Ready to Grow?"
          description="Transform your marketing with AI-powered automation that actually works."
          primaryCta={{
            text: "Book a 20-min consult",
            href: "/contact",
            variant: "primary"
          }}
          secondaryCta={{
            text: "View Pilot Packages",
            href: "/pricing",
            variant: "secondary"
          }}
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Marketing Engine That Works",
              "description": "Steady content, gentle reminders, and opt-in growth with human approvals",
              "provider": {
                "@type": "Organization",
                "name": "PrairieSignal",
                "url": "https://prairiesignal.ca",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Calgary",
                  "addressRegion": "AB",
                  "addressCountry": "CA"
                }
              },
              "areaServed": {
                "@type": "Place",
                "name": "Calgary, Alberta"
              },
              "serviceType": "Marketing Consulting",
              "url": "https://prairiesignal.ca/solutions/marketing"
            })
          }}
        />
      </main>
    </div>
  )
}
