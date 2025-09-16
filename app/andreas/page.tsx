"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Section } from "@/components/Section"
import { ROICalculator } from "@/components/ROICalculator"
import { AssistantCard } from "@/components/AssistantCard"
import { StatusBadge } from "@/components/StatusBadge"
import { TimelineBand } from "@/components/TimelineBand"
import { PitchSubnav } from "@/components/PitchSubnav"
import { trackEvent } from "@/components/Analytics"
import { pitchData } from "@/data/pitch"
import { Badge } from "@/components/ui/badge"

export default function AndreasPitchPage() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const handleCTAClick = (cta: string) => {
    if (typeof window !== "undefined" && window.plausible) {
      trackEvent("pitch_cta_clicked", { cta, location: "hero" })
    }
  }

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Andreas & Co Barbershop AI Enablement Proposal",
    "description": "A comprehensive AI-powered growth plan for Andreas & Co Barbershop including website refresh, marketing automation, and AI assistants",
    "author": {
      "@type": "Organization",
      "name": "PrairieSignal",
      "url": "https://prairiesignal.ca"
    },
    "about": {
      "@type": "LocalBusiness",
      "name": "Andreas & Co Barbershop",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Calgary",
        "addressRegion": "AB",
        "addressCountry": "CA"
      }
    },
    "hasPart": [
      {
        "@type": "HowTo",
        "name": "Getting started with PrairieSignal",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Discovery Call",
            "text": "Book a 45–60 minute discovery session to discuss goals and constraints"
          },
          {
            "@type": "HowToStep",
            "name": "Project Scoping",
            "text": "Receive detailed plan with timeline, budget bands, and success metrics"
          },
          {
            "@type": "HowToStep",
            "name": "Kickoff Sprint",
            "text": "Begin implementation with focused 1–2 week website and marketing sprint"
          }
        ]
      }
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Pilot B - Operations Boost",
        "price": pitchData.priceBands.pilotB,
        "priceCurrency": "CAD",
        "description": "Full Command Center spreadsheet setup, 3 automation workflows, rebooking SMS system"
      },
      {
        "@type": "Offer",
        "name": "Pilot C - Pro Implementation",
        "price": pitchData.priceBands.pilotC,
        "priceCurrency": "CAD",
        "description": "Everything in Pilot B plus custom team interface and advanced integrations"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Accessibility skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--ps-primary)] text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Sticky sub-navigation */}
      <PitchSubnav />

      <main id="main-content" className="max-w-screen-lg mx-auto px-4 md:px-6">
        {/* Hero Header */}
        <section className="min-h-screen py-20 sm:py-32 flex items-center">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
                <Link
                  href="/"
                className="text-sm text-[var(--ps-muted)] hover:text-[var(--ps-text)] transition-colors"
                >
                  ← Back to home
                </Link>
              <div className="text-xs text-[var(--ps-muted)] font-mono">PrairieSignal</div>
            </div>

            <div className="space-y-6">
              <div className="text-sm text-[var(--ps-muted)] font-mono tracking-wider">
                PRAIRIESIGNAL / ANDREAS & CO
              </div>
              <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-[var(--ps-text)]">
                Andreas & Co Barbershop
              </h1>
              <p className="text-lg sm:text-xl text-[var(--ps-muted)] leading-relaxed max-w-2xl">
                A concise growth plan: modern website refresh, AI-enabled marketing, and AI assistants for operations and quality of life.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Link
                  href="#roadmap"
                  className="bg-[var(--ps-primary)] text-white rounded-md px-4 py-2 hover:bg-[var(--ps-primary-weak)] transition-colors"
                >
                  View Roadmap
                </Link>
                <Link
                  href="/contact"
                  className="border border-[var(--ps-border)] rounded-md px-4 py-2 hover:bg-[var(--ps-surface)] transition-colors"
                  onClick={() => handleCTAClick("consult")}
                >
                  Book Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <Section id="summary" title="Executive Summary">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Scope Card */}
            <div className="p-6 border border-[var(--ps-border)] rounded-lg bg-[var(--ps-surface)]">
              <h3 className="font-medium mb-2">Scope</h3>
              <p className="text-sm text-[var(--ps-muted)]">
                Website refresh + AI-enabled marketing + AI assistants
              </p>
            </div>

            {/* Timeline Card */}
            <div className="p-6 border border-[var(--ps-border)] rounded-lg bg-[var(--ps-surface)]">
              <h3 className="font-medium mb-2">Timeline</h3>
              <p className="text-sm text-[var(--ps-muted)]">
                4–6 weeks total (Phase 0–2)
              </p>
              <div className="mt-2 w-full bg-[var(--ps-border)] rounded-full h-2">
                <div className="bg-[var(--ps-primary)] h-2 rounded-full w-1/6"></div>
              </div>
            </div>

            {/* Price Band Card */}
            <div className="p-6 border border-[var(--ps-border)] rounded-lg bg-[var(--ps-surface)]">
              <h3 className="font-medium mb-2">Est. Cost</h3>
              <p className="text-sm text-[var(--ps-muted)]">
                Pilot B ${pitchData.priceBands.pilotB.toLocaleString()} → Pilot C ${pitchData.priceBands.pilotC.toLocaleString()}
              </p>
              <p className="text-xs text-[var(--ps-muted)] mt-1">
                Pass-through at cost (${pitchData.priceBands.passthroughRange[0]}–${pitchData.priceBands.passthroughRange[1]}/mo)
              </p>
            </div>

            {/* Outcomes Card */}
            <div className="p-6 border border-[var(--ps-border)] rounded-lg bg-[var(--ps-surface)]">
              <h3 className="font-medium mb-2">Outcomes</h3>
              <p className="text-sm text-[var(--ps-muted)]">
                Fewer no-shows, steadier bookings, faster responses, and clear Monday-morning insights.
              </p>
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="mt-8">
            <ROICalculator />
          </div>

          {/* Assumptions & Constraints */}
          <div className="mt-8 p-6 border border-[var(--ps-border)] rounded-lg bg-[var(--ps-surface)]">
            <h3 className="font-medium mb-3">Assumptions & Constraints</h3>
            <ul className="space-y-2 text-sm text-[var(--ps-muted)]">
              {pitchData.assumptions.map((assumption, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[var(--ps-primary)] mt-1">•</span>
                  {assumption}
                </li>
              ))}
            </ul>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-[var(--ps-primary)] text-white rounded-md px-4 py-2 hover:bg-[var(--ps-primary-weak)] transition-colors"
              onClick={() => handleCTAClick("consult")}
            >
              Book Discovery Call
            </Link>
            <Link
              href="/pricing"
              className="border border-[var(--ps-border)] rounded-md px-4 py-2 hover:bg-[var(--ps-surface)] transition-colors"
              onClick={() => handleCTAClick("pricing")}
            >
              View Pricing Options
            </Link>
            <Link
              href="/pitch/print"
              className="border border-[var(--ps-border)] rounded-md px-4 py-2 hover:bg-[var(--ps-surface)] transition-colors"
              onClick={() => {
                handleCTAClick("download-pdf");
                if (typeof window !== "undefined" && window.plausible) {
                  trackEvent("pitch_pdf_downloaded", { route: "/pitch/print" });
                }
              }}
            >
              Download PDF
            </Link>
          </div>
        </Section>

        {/* Roadmap */}
        <Section id="roadmap" title="Implementation Roadmap">
          <p className="text-lg text-[var(--ps-muted)] leading-relaxed max-w-2xl">
            A structured approach to transform Andreas & Co with AI-enabled growth strategies.
          </p>

          {/* Timeline Band */}
          <TimelineBand />

          {/* Phase Details */}
              <div className="space-y-6">
            {pitchData.phases.map((phase, index) => (
              <div
                key={phase.id}
                className="group p-6 border border-[var(--ps-border)] rounded-lg hover:border-[var(--ps-primary)]/50 transition-all duration-500 hover:shadow-lg bg-[var(--ps-surface)]"
              >
                <div className="grid lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-3">
                    <div className="text-sm text-[var(--ps-primary)] font-mono uppercase">
                      {phase.id === 'discovery' ? 'Phase 0' : `Phase ${index}`} — {phase.title}
                    </div>
                    <div className="text-lg font-medium mt-1 text-[var(--ps-text)]">{phase.duration}</div>
                    <div className="mt-2">
                      <StatusBadge status={phase.status || 'planned'} />
                    </div>
                  </div>
                  <div className="lg:col-span-6 space-y-3">
                    <p className="text-[var(--ps-muted)] leading-relaxed">{phase.goal}</p>
                  </div>
                  <div className="lg:col-span-3 space-y-3">
                    <div className="text-sm font-medium text-[var(--ps-text)]">Deliverables</div>
                    {phase.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-[var(--ps-muted)]">
                        <div className="w-1.5 h-1.5 bg-[var(--ps-primary)] rounded-full mt-1.5 flex-shrink-0"></div>
                        {deliverable}
                        </div>
                      ))}
                    <div className="pt-2 border-t border-[var(--ps-border)]/50">
                      <div className="text-xs font-medium text-[var(--ps-text)]">Exit Criteria</div>
                      <div className="text-xs text-[var(--ps-muted)] mt-1">{phase.exit}</div>
                    </div>
                    {phase.deps && (
                      <div className="pt-2 border-t border-[var(--ps-border)]/50">
                        <div className="text-xs font-medium text-[var(--ps-text)]">Dependencies</div>
                        <div className="text-xs text-[var(--ps-muted)] mt-1">{phase.deps.join(', ')}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Website Refresh */}
        <Section id="website" title="Website Refresh">
          <p className="text-lg text-[var(--ps-muted)] leading-relaxed max-w-2xl">
                Goals: increase booking conversions, improve first impression, and clarify services. Keep it clean, fast, and easy to maintain.
              </p>

          {/* Core Pages */}
          <div className="grid gap-6 lg:grid-cols-2">
            {pitchData.website.core.map((page, index) => (
                  <div
                    key={index}
                className="group p-6 border border-[var(--ps-border)] rounded-lg hover:border-[var(--ps-primary)]/50 transition-all duration-500 hover:shadow-lg bg-[var(--ps-surface)]"
                  >
                <h3 className="text-lg font-medium mb-2 group-hover:text-[var(--ps-text)] transition-colors">
                        {page.title}
                      </h3>
                <p className="text-[var(--ps-muted)] leading-relaxed text-sm mb-4">{page.description}</p>
                      <div className="space-y-2">
                        {page.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[var(--ps-muted)]">
                      <div className="w-1.5 h-1.5 bg-[var(--ps-primary)] rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
            </div>

          {/* Technical Foundation */}
          <div className="grid gap-6 lg:grid-cols-2 mt-8">
            {pitchData.website.tech.map((tech, index) => (
              <div key={index} className="p-6 border border-[var(--ps-border)] rounded-lg bg-[var(--ps-surface)]">
                <h3 className="font-medium mb-4">{tech.title}</h3>
                <div className="space-y-2 text-sm text-[var(--ps-muted)]">
                  {tech.features.map((feature, idx) => (
                    <div key={idx}>{feature}</div>
                  ))}
                </div>
              </div>
            ))}
                  </div>

          {/* Content Needs */}
          <div className="mt-8 p-6 border border-[var(--ps-border)] rounded-lg bg-[var(--ps-surface)]">
            <h3 className="font-medium mb-4">Content We'll Need</h3>
            <div className="grid gap-2 md:grid-cols-2">
              {pitchData.website.contentNeeds.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-[var(--ps-muted)]">
                  <div className="w-1.5 h-1.5 bg-[var(--ps-primary)] rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* AI-Enabled Marketing */}
        <Section id="marketing" title="AI-Enabled Marketing">
          <p className="text-lg text-[var(--ps-muted)] leading-relaxed max-w-2xl">
                Objectives: defend local search, grow word-of-mouth, and keep chairs full with timely content and gentle reminders.
              </p>

          {/* Marketing Programs */}
          <div className="grid gap-6 lg:grid-cols-2">
            {pitchData.marketing.programs.map((program, index) => (
                  <div
                    key={index}
                className="group p-6 border border-[var(--ps-border)] rounded-lg hover:border-[var(--ps-primary)]/50 transition-all duration-500 hover:shadow-lg bg-[var(--ps-surface)]"
                  >
                <h3 className="text-lg font-medium mb-2 group-hover:text-[var(--ps-text)] transition-colors">
                        {program.title}
                      </h3>
                <p className="text-[var(--ps-muted)] leading-relaxed text-sm mb-4">{program.description}</p>
                <div className="space-y-2 mb-4">
                        {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[var(--ps-muted)]">
                      <div className="w-1.5 h-1.5 bg-[var(--ps-primary)] rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                {program.cadence && (
                  <div className="pt-3 border-t border-[var(--ps-border)]/50">
                    <div className="text-xs text-[var(--ps-primary)] font-medium">Cadence</div>
                    <div className="text-sm text-[var(--ps-muted)]">{program.cadence}</div>
                  </div>
                )}
              </div>
            ))}
            </div>

          {/* AI Assistance */}
          <div className="grid gap-6 lg:grid-cols-2 mt-8">
            {pitchData.marketing.aiAssistance.map((ai, index) => (
              <div key={index} className="p-6 border border-[var(--ps-border)] rounded-lg bg-[var(--ps-surface)]">
                <h3 className="font-medium mb-4">{ai.title}</h3>
                <div className="space-y-2 text-sm text-[var(--ps-muted)]">
                  {ai.features.map((feature, idx) => (
                    <div key={idx}>{feature}</div>
                  ))}
                </div>
              </div>
            ))}
            </div>

          {/* Guardrails */}
          <div className="mt-8 p-6 border border-[var(--ps-border)] rounded-lg bg-[var(--ps-surface)]">
            <h3 className="font-medium mb-4">Privacy & Guardrails</h3>
            <ul className="space-y-2 text-sm text-[var(--ps-muted)]">
              {pitchData.guardrails.map((guardrail, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[var(--ps-primary)] mt-1">•</span>
                  {guardrail}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* AI Assistants */}
        <Section id="assistants" title="AI Assistants">
          <p className="text-lg text-[var(--ps-muted)] leading-relaxed max-w-2xl">
                Reduce routine admin and let the team focus on clients. Human-in-the-loop controls to keep quality high.
              </p>

          <div className="grid gap-6">
            {pitchData.assistants.map((assistant, index) => (
              <AssistantCard
                key={assistant.id}
                icon={assistant.icon}
                title={assistant.title}
                description={assistant.description}
                bullets={assistant.bullets}
                approvalPath={assistant.approvalPath}
              />
            ))}
          </div>
        </Section>

        {/* Next Steps */}
        <Section id="next-steps" title="Next Steps">
          <p className="text-lg text-[var(--ps-muted)] leading-relaxed max-w-2xl">
                Ready to transform Andreas & Co with AI-enabled growth strategies? Let's get started.
              </p>

          <div className="grid gap-6 lg:grid-cols-3">
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
                className="group p-6 border border-[var(--ps-border)] rounded-lg hover:border-[var(--ps-primary)]/50 transition-all duration-500 hover:shadow-lg bg-[var(--ps-surface)]"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                    <div className="text-2xl font-light text-[var(--ps-primary)]">{step.step}</div>
                    <h3 className="text-lg font-medium">{step.title}</h3>
                      </div>
                  <p className="text-[var(--ps-muted)] leading-relaxed">{step.description}</p>
                      <div className="pt-2">
                    <button className="text-sm text-[var(--ps-primary)] hover:text-[var(--ps-primary-weak)] transition-colors font-medium">
                          {step.action} →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

          <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
              className="bg-[var(--ps-primary)] text-white rounded-md px-4 py-2 hover:bg-[var(--ps-primary-weak)] transition-colors"
              onClick={() => handleCTAClick("consult")}
            >
              Book Discovery Call
            </Link>
            <Link
              href="/pricing"
              className="border border-[var(--ps-border)] rounded-md px-4 py-2 hover:bg-[var(--ps-surface)] transition-colors"
              onClick={() => handleCTAClick("pricing")}
            >
              View Pricing Options
                </Link>
                <Link
              href="/pitch/print"
              className="border border-[var(--ps-border)] rounded-md px-4 py-2 hover:bg-[var(--ps-surface)] transition-colors"
              onClick={() => {
                handleCTAClick("download-pdf");
                if (typeof window !== "undefined" && window.plausible) {
                  trackEvent("pitch_pdf_downloaded", { route: "/pitch/print" });
                }
              }}
            >
              Download PDF
                </Link>
          </div>
        </Section>

        <footer className="py-12 sm:py-16 border-t border-[var(--ps-border)]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-[var(--ps-muted)]">© 2025 PrairieSignal. All rights reserved.</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-[var(--ps-border)] hover:border-[var(--ps-primary)]/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-[var(--ps-muted)] group-hover:text-[var(--ps-text)] transition-colors duration-300"
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
                    className="w-4 h-4 text-[var(--ps-muted)] group-hover:text-[var(--ps-text)] transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className="group p-3 rounded-lg border border-[var(--ps-border)] hover:border-[var(--ps-primary)]/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-[var(--ps-muted)] group-hover:text-[var(--ps-text)] transition-colors duration-300"
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

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
    </div>
  )
}


