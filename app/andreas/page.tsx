"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Section } from "@/components/Section"
import { PitchSubnav } from "@/components/PitchSubnav"
import { trackEvent } from "@/components/Analytics"
import { calculateROI, pitchData, roiDefaults } from "@/data/pitch"
import { Badge } from "@/components/ui/badge"

const overviewHighlights = [
  {
    title: "Objective",
    description:
      "Give Andreas & Co. ownership a crisp path to stabilize bookings, modernize the brand touchpoints, and prepare the team for AI-enabled operations."
  },
  {
    title: "Approach",
    description:
      "Sequenced 4–6 week engagement: align on goals, refresh the digital storefront, instrument marketing, and layer AI assistants with guardrails."
  },
  {
    title: "Commitment",
    description:
      "Stay owner-friendly—low-lift handoffs, transparent measurement, and human approval before any AI touches clients or brand voice."
  }
]

const keyMetrics = [
  {
    label: "Booking lift",
    value: "+15–30%",
    detail: "Conversion-focused site, sticky CTAs, and automated rebooking touches."
  },
  {
    label: "Recovered revenue",
    value: "$1.6k/mo",
    detail: "No-show recovery program with SMS, email, and front-desk nudges."
  },
  {
    label: "Owner visibility",
    value: "Daily ops dashboard",
    detail: "Single view of utilization, campaign performance, and next actions."
  }
]

const auditSnapshot = [
  {
    title: "Local signals inconsistent",
    impact: "Schema missing, GBP booking absent, and NAP mismatches limit findability.",
    fix: "Ship LocalBusiness JSON-LD, align GBP/site, and add direct booking."
  },
  {
    title: "Conversion friction",
    impact: "Service content is dense, pricing hidden, CTAs not persistent—bookings leak.",
    fix: "Launch focused service pages with pricing anchors plus sticky Book buttons."
  },
  {
    title: "Speed & accessibility risk",
    impact: "Heavy hero media and low-contrast UI threaten Core Web Vitals and inclusivity.",
    fix: "Optimize assets, enforce WCAG tokens, and add visible focus states."
  }
]

const quickRemedies = [
  "Add booking links and UTMs across GBP + site header/footer",
  "Publish schema + guardrails to unlock rich results",
  "Compress hero imagery and standardize contrast + focus states"
]

const solutionPillars = [
  {
    id: "website",
    title: "Website Refresh",
    promise: "A storefront that converts at first glance.",
    highlights: [
      "Homepage narrative with proof and persistent booking CTA",
      "Service landing pages with pricing, FAQs, and rituals",
      "Fast, accessible build on Next.js with performance guardrails"
    ]
  },
  {
    id: "marketing",
    title: "Marketing Ops",
    promise: "Always-on retention and local discovery.",
    highlights: [
      "Content calendar covering social, Google, and email",
      "Review + referral programs that auto-trigger post-visit",
      "Analytics instrumentation for bookings, calls, and walk-ins"
    ]
  },
  {
    id: "assistants",
    title: "AI Assistants",
    promise: "Human-in-the-loop automations for the team.",
    highlights: [
      "Customer service triage and approved reply drafting",
      "Review response assistant with tone guidance",
      "Operations dashboard surfacing utilization + trends"
    ]
  }
]

const investmentOptions = [
  {
    name: "Pilot B — Operations Booster",
    price: pitchData.priceBands.pilotB,
    recommended: true,
    summary: "Command Center, three automations, and conversion-ready website.",
    includes: ["Website refresh", "Booking + rebooking flows", "Ops dashboard setup"]
  },
  {
    name: "Pilot C — Pro Implementation",
    price: pitchData.priceBands.pilotC,
    recommended: false,
    summary: "Adds custom team interface and advanced integrations.",
    includes: ["Everything in Pilot B", "Custom staff hub", "Extended analytics"]
  }
]

const nextSteps = [
  {
    step: "1",
    title: "Discovery (45 mins)",
    description: "Align on success metrics, constraints, and go/no-go guardrails."
  },
  {
    step: "2",
    title: "Scope lock (5 days)",
    description: "Finalize backlog, owners, and success measures for Phase 0–2."
  },
  {
    step: "3",
    title: "Kickoff sprint",
    description: "Launch quick wins, then cycle through website, marketing, and AI pillars."
  }
]

export default function AndreasPitchPage() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const handleCTAClick = (cta: string, location: "hero" | "footer" | "value" = "hero") => {
    if (typeof window !== "undefined" && window.plausible) {
      trackEvent("pitch_cta_clicked", { cta, location })
    }
  }

  const roiSnapshot = useMemo(
    () =>
      calculateROI(
        roiDefaults.cancelsPerDay,
        roiDefaults.showRate,
        roiDefaults.rebookRate,
        roiDefaults.avgTicket,
        roiDefaults.daysPerMonth
      ),
    []
  )

  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
        maximumFractionDigits: 0
      }),
    []
  )

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Andreas & Co Barbershop AI Enablement Proposal",
    "description": "A concise, boardroom-ready plan covering website refresh, marketing automation, and AI assistants for Andreas & Co.",
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
    "hasPart": overviewHighlights.map((item) => ({
      "@type": "WebPageElement",
      "name": item.title,
      "text": item.description
    })),
    "offers": investmentOptions.map((option) => ({
      "@type": "Offer",
      "name": option.name,
      "price": option.price,
      "priceCurrency": "CAD",
      "description": option.summary
    }))
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--ps-primary)] text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <PitchSubnav />

      <main id="main-content" className="max-w-screen-lg mx-auto px-4 md:px-6">
        <section className="py-24 sm:py-32" aria-labelledby="hero-title">
          <div className="space-y-10">
            <div className="flex items-center justify-between text-sm text-[var(--ps-muted)]">
              <Link
                href="/"
                className="inline-flex items-center gap-1 hover:text-[var(--ps-text)] transition-colors"
              >
                <span aria-hidden>←</span> Back to home
              </Link>
              <span className="font-mono uppercase tracking-widest">PrairieSignal</span>
            </div>

            <div className="space-y-6">
              <p className="text-xs font-mono tracking-[0.4em] uppercase text-[var(--ps-muted)]">
                Andreas &amp; Co · Presentation Deck
              </p>
              <h1 id="hero-title" className="text-4xl sm:text-5xl font-light tracking-tight text-balance">
                The rationalized growth plan for Andreas &amp; Co Barbershop
              </h1>
              <p className="text-lg sm:text-xl text-[var(--ps-muted)] leading-relaxed max-w-2xl">
                Use this session-ready flow to brief ownership: start with what we learned, move through the plan, show
                the solution stack, and close on value and next steps.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="#overview"
                  className="bg-[var(--ps-primary)] text-white rounded-md px-4 py-2 hover:bg-[var(--ps-primary-weak)] transition-colors"
                >
                  Start presentation
                </Link>
                <Link
                  href="/andreas/findings"
                  className="border border-[var(--ps-border)] rounded-md px-4 py-2 text-sm hover:bg-[var(--ps-surface)] transition-colors"
                >
                  Open full audit ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Section id="overview" eyebrow="Slide 01" title="Executive overview">
          <div className="grid gap-6 md:grid-cols-3">
            {overviewHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--ps-border)] bg-[var(--ps-surface)] p-6 shadow-sm"
              >
                <h3 className="text-lg font-medium text-[var(--ps-text)] mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--ps-muted)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[var(--ps-border)] bg-[var(--ps-surface)] p-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--ps-muted)]">
                Success measures
              </h3>
              <Link
                href="#plan"
                className="text-sm text-[var(--ps-primary)] hover:text-[var(--ps-primary-weak)] transition-colors"
              >
                Jump to project plan →
              </Link>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {keyMetrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-[var(--ps-border)]/60 p-4">
                  <div className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--ps-muted)]">
                    {metric.label}
                  </div>
                  <div className="text-2xl font-semibold text-[var(--ps-text)] mt-2">{metric.value}</div>
                  <p className="text-sm text-[var(--ps-muted)] mt-2 leading-relaxed">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="audit" eyebrow="Slide 02" title="Audit snapshot">
          <p className="text-sm md:text-base text-[var(--ps-muted)] leading-relaxed max-w-3xl">
            Start with the blockers. These are undermining visibility, conversion, and perceived quality today. Each has
            a ready-to-ship fix lined up for Week 1.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {auditSnapshot.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[var(--ps-border)] bg-[var(--ps-surface)] p-6 shadow-sm">
                <div className="text-xs font-mono uppercase tracking-widest text-[var(--ps-primary)] mb-3">
                  Critical blocker
                </div>
                <h3 className="text-lg font-semibold text-[var(--ps-text)] mb-3">{item.title}</h3>
                <div className="space-y-3 text-sm text-[var(--ps-muted)]">
                  <p><span className="font-medium text-[var(--ps-text)]">Impact:</span> {item.impact}</p>
                  <p><span className="font-medium text-[var(--ps-text)]">Fix:</span> {item.fix}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[var(--ps-border)] bg-[var(--ps-surface)] p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--ps-muted)] mb-3">
              Quick remedies we launch immediately
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--ps-muted)]">
              {quickRemedies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-4">
              <Link
                href="/andreas/findings"
                className="inline-flex items-center gap-2 text-sm text-[var(--ps-primary)] hover:text-[var(--ps-primary-weak)] transition-colors"
              >
                View detailed audit notes ↗
              </Link>
            </div>
          </div>
        </Section>

        <Section id="plan" eyebrow="Slide 03" title="Plan of attack (4–6 weeks)">
          <p className="text-sm md:text-base text-[var(--ps-muted)] leading-relaxed max-w-3xl">
            Four phases, delivered as a single runway. Use this slide to walk through ownership questions on timing,
            accountability, and proof points.
          </p>

          <div className="overflow-hidden rounded-2xl border border-[var(--ps-border)] bg-[var(--ps-surface)]">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--ps-border)]">
              {pitchData.phases.map((phase, index) => (
                <div key={phase.id} className="p-6 space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-[var(--ps-primary)]">
                        {phase.id === "discovery" ? "Phase 0" : `Phase ${index}`}
                      </p>
                      <h3 className="text-lg font-semibold text-[var(--ps-text)]">{phase.title}</h3>
                    </div>
                    <Badge variant="secondary" className="bg-[var(--ps-surface)] border border-[var(--ps-border)] text-xs">
                      {phase.duration}
                    </Badge>
                  </div>
                  <p className="text-sm text-[var(--ps-muted)] leading-relaxed">{phase.goal}</p>
                  <div className="space-y-2 text-xs text-[var(--ps-muted)]">
                    {(phase.deliverables.length ? phase.deliverables.slice(0, 3) : []).map((deliverable) => (
                      <div key={deliverable} className="flex items-start gap-2">
                        <span className="mt-1 text-[var(--ps-primary)]">•</span>
                        <span>{deliverable}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-[var(--ps-muted)] border-t border-[var(--ps-border)] pt-3">
                    <span className="font-medium text-[var(--ps-text)]">Exit criteria:</span> {phase.exit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="solution-stack" eyebrow="Slide 04" title="Solution stack">
          <p className="text-sm md:text-base text-[var(--ps-muted)] leading-relaxed max-w-3xl">
            Three pillars. Present them as a single bundle—the value comes from launching all three in sequence rather
            than treating them as separate projects.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {solutionPillars.map((pillar) => (
              <div key={pillar.id} className="rounded-2xl border border-[var(--ps-border)] bg-[var(--ps-surface)] p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[var(--ps-text)] mb-2">{pillar.title}</h3>
                <p className="text-sm text-[var(--ps-muted)] leading-relaxed mb-4">{pillar.promise}</p>
                <ul className="space-y-2 text-sm text-[var(--ps-muted)]">
                  {pillar.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="text-[var(--ps-primary)] mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="value" eyebrow="Slide 05" title="Value & investment">
          <div className="rounded-2xl border border-[var(--ps-border)] bg-[var(--ps-surface)] p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--ps-muted)]">
              ROI snapshot
            </h3>
            <div className="grid gap-4 md:grid-cols-4 mt-4">
              <div className="rounded-xl border border-[var(--ps-border)]/60 p-4">
                <div className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--ps-muted)]">Recovered rev</div>
                <div className="text-2xl font-semibold text-[var(--ps-text)] mt-2">
                  {currencyFormatter.format(roiSnapshot.recoveredRevenue)} / mo
                </div>
                <p className="text-xs text-[var(--ps-muted)] mt-2">At default assumptions (no-shows, rebook rate).</p>
              </div>
              <div className="rounded-xl border border-[var(--ps-border)]/60 p-4">
                <div className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--ps-muted)]">Recovered appts</div>
                <div className="text-2xl font-semibold text-[var(--ps-text)] mt-2">
                  {roiSnapshot.recoveredBookings} / mo
                </div>
                <p className="text-xs text-[var(--ps-muted)] mt-2">No-show slots we win back via automation + outreach.</p>
              </div>
              <div className="rounded-xl border border-[var(--ps-border)]/60 p-4">
                <div className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--ps-muted)]">Payback</div>
                <div className="text-2xl font-semibold text-[var(--ps-text)] mt-2">
                  ~{roiSnapshot.pilotPaybackMonths.pilotB} months
                </div>
                <p className="text-xs text-[var(--ps-muted)] mt-2">Pilot B recoups within a quarter at baseline assumptions.</p>
              </div>
              <div className="rounded-xl border border-[var(--ps-border)]/60 p-4">
                <div className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--ps-muted)]">Booking mix</div>
                <div className="text-2xl font-semibold text-[var(--ps-text)] mt-2">Balanced</div>
                <p className="text-xs text-[var(--ps-muted)] mt-2">Defend regulars, uplift walk-ins, highlight premium chairs.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--ps-border)] bg-[var(--ps-surface)] p-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--ps-muted)]">
                Investment options
              </h3>
              <Link
                href="/pricing"
                className="text-sm text-[var(--ps-primary)] hover:text-[var(--ps-primary-weak)] transition-colors"
                onClick={() => handleCTAClick("pricing", "value")}
              >
                View detailed pricing →
              </Link>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {investmentOptions.map((option) => (
                <div key={option.name} className="rounded-xl border border-[var(--ps-border)]/70 p-5 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--ps-text)]">{option.name}</h4>
                      <p className="text-sm text-[var(--ps-muted)] mt-1 leading-relaxed">{option.summary}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-semibold text-[var(--ps-text)]">
                        {currencyFormatter.format(option.price)}
                      </div>
                      {option.recommended && (
                        <Badge className="mt-2 bg-[var(--ps-primary)] text-white hover:bg-[var(--ps-primary)]">Recommended</Badge>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-1 text-sm text-[var(--ps-muted)]">
                    {option.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[var(--ps-primary)] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-[var(--ps-primary)] text-white rounded-md px-4 py-2 hover:bg-[var(--ps-primary-weak)] transition-colors"
              onClick={() => handleCTAClick("consult", "value")}
            >
              Discuss kickoff
            </Link>
            <Link
              href="/pitch/print"
              className="border border-[var(--ps-border)] rounded-md px-4 py-2 hover:bg-[var(--ps-surface)] transition-colors"
              onClick={() => handleCTAClick("download-pdf", "value")}
            >
              Download printable deck
            </Link>
          </div>
        </Section>

        <Section id="next-steps" eyebrow="Slide 06" title="Next steps with ownership">
          <div className="rounded-2xl border border-[var(--ps-border)] bg-[var(--ps-surface)] p-6">
            <div className="grid gap-6 md:grid-cols-3">
              {nextSteps.map((item) => (
                <div key={item.step} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl font-light text-[var(--ps-primary)]">{item.step}</div>
                    <h3 className="text-lg font-semibold text-[var(--ps-text)]">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--ps-muted)] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-[var(--ps-primary)] text-white rounded-md px-4 py-2 hover:bg-[var(--ps-primary-weak)] transition-colors"
                onClick={() => handleCTAClick("consult", "footer")}
              >
                Book discovery call
              </Link>
              <Link
                href="/pricing"
                className="border border-[var(--ps-border)] rounded-md px-4 py-2 hover:bg-[var(--ps-surface)] transition-colors"
              >
                Review pricing
              </Link>
              <Link
                href="/andreas/findings"
                className="border border-[var(--ps-border)] rounded-md px-4 py-2 hover:bg-[var(--ps-surface)] transition-colors"
              >
                Full audit appendix
              </Link>
            </div>
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

              <button
                className="group p-3 rounded-lg border border-[var(--ps-border)] hover:border-[var(--ps-primary)]/50 transition-all duration-300"
                aria-label="Toggle conversation panel"
              >
                <span className="sr-only">Toggle conversation panel</span>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
    </div>
  )
}


