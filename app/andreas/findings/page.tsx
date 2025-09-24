import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/Section"

const criticalFindings = [
  {
    title: "LocalBusiness schema missing",
    impact:
      "Lower rich-result eligibility and fewer qualified clicks from Search and Maps.",
    why:
      "Structured data clarifies hours, services, and NAP details for Google and can unlock enhanced listings.",
    fix: "Add full LocalBusiness JSON-LD with services, hours, NAP, price range, and validate in Rich Results Test."
  },
  {
    title: "Booking friction across GBP and site",
    impact: "Missed opportunities when prospects cannot book directly from Google or sticky CTAs.",
    why:
      "Reserve with Google or direct booking links reduce steps between discovery and appointment.",
    fix: "Publish a first-party booking URL on GBP, evaluate Reserve with Google eligibility, and make CTAs sticky with UTM tracking."
  },
  {
    title: "Inconsistent name, address, phone (NAP)",
    impact: "Thin local relevance signals and trust gaps if hours differ across touchpoints.",
    why:
      "Google ranks local businesses on relevance, distance, and prominence—consistency fuels relevance and conversions.",
    fix: "Mirror exact NAP, hours, and services across GBP, site footer, contact page, and schema."
  }
]

const highPriorityFindings = [
  {
    title: "Service pages incomplete",
    impact: "Key intents (cut, shave, facial, massage) lack scannable pricing and FAQs, hurting conversion.",
    why: "People-first content and clear IA convert better and align with Helpful Content guidance.",
    fix: "Launch four focused service pages with price anchors, FAQs, social proof, and Book CTAs."
  },
  {
    title: "Core Web Vitals risk",
    impact: "Heavy hero assets and font loading threaten LCP/INP/CLS and degrade user experience.",
    why: "Google recommends good Core Web Vitals for search success and satisfaction.",
    fix: "Compress hero to ≤300 KB, define media dimensions, preconnect/preload fonts, defer non-critical JS."
  },
  {
    title: "Accessibility gaps",
    impact: "Reduced reach and potential compliance risk from low contrast, missing focus states, and weak alt text.",
    why: "WCAG 2.2 AA focus and contrast rules improve inclusivity and mitigate legal exposure.",
    fix: "Enforce contrast tokens, visible focus outlines, labeled inputs, and logical heading hierarchy."
  },
  {
    title: "Thin social proof",
    impact: "Fewer conversions without prominent reviews, staff credentials, or ritual storytelling.",
    why: "BrightLocal reports reviews strongly influence local services selection.",
    fix: "Surface review carousel, staff bios, hygiene/policy content on home and service pages."
  },
  {
    title: "Analytics instrumentation missing",
    impact: "No visibility into booking, call, or form conversions to guide optimizations.",
    why: "Structured measurement is required to prove lift from schema, speed, and content work.",
    fix: "Add GA4 events for booking, call, and form taps plus consistent UTM parameters."
  }
]

const backlogAreas = [
  {
    area: "Messaging & IA",
    issues: "Hero copy generic, pricing hidden, Book CTA not sticky.",
    observation: "Dev version improves layout but still needs sticky header and price anchors.",
    actions: [
      "Refresh H1/subhead from provided copy.",
      "Add sticky Book Now and price anchors per service.",
      "Introduce trust badges and review snippets above the fold."
    ],
    owner: "Content & Design",
    effort: "S",
    acceptance:
      "Above-the-fold CTA visible, pricing scannable, and scroll testing passes."
  },
  {
    area: "Booking friction",
    issues: "No direct booking link and deep click path to scheduler.",
    observation: "Dev build adds Book buttons but lacks live scheduler and UTMs.",
    actions: [
      "Add booking URL to GBP and site header/footer with UTMs.",
      "Evaluate providers for Reserve with Google in Canada.",
      "Embed or link to booking page once provider is chosen."
    ],
    owner: "Ops & Dev",
    effort: "S → M",
    acceptance:
      "Book button live on GBP and site with measurable GA4 events."
  },
  {
    area: "Local SEO / GBP",
    issues: "Missing JSON-LD, NAP mismatch, services not mapped.",
    observation: "Footer NAP exists but schema and internal links are absent.",
    actions: [
      "Publish LocalBusiness JSON-LD aligned with GBP services.",
      "Ensure hours and phone match exactly.",
      "Link home to each service page for crawl coverage."
    ],
    owner: "SEO",
    effort: "S",
    acceptance: "Rich Results Test passes and GBP mirrors site data."
  },
  {
    area: "On-page SEO",
    issues: "Single long services page, weak headings, missing alt text.",
    observation: "Dev version adds cards and pricing but needs refined H1/H2s and internal links.",
    actions: [
      "Set unique Title/H1 per page and supporting H2s.",
      "Add FAQ blocks with concise answers.",
      "Link to add-ons and related services."
    ],
    owner: "Content",
    effort: "S",
    acceptance: "Published FAQs, internal links live, and alt text policy in place."
  },
  {
    area: "Speed & Core Web Vitals",
    issues: "Heavy hero media, font flashes, missing image sizing, unused JS.",
    observation: "Dev build trims assets but needs guardrails.",
    actions: [
      "Convert hero to AVIF/WebP and preload LCP image.",
      "Preconnect to font host and use font-display: swap.",
      "Lazy-load below-the-fold imagery and defer scripts."
    ],
    owner: "Dev",
    effort: "S",
    acceptance: "Lab LCP <2.5s, CLS <0.1, INP <200ms on test devices."
  },
  {
    area: "Accessibility",
    issues: "Low contrast, missing focus indicators, unlabeled imagery.",
    observation: "Structure improved but tokens and alt text are inconsistent.",
    actions: [
      "Adopt contrast tokens that meet WCAG 2.2 AA.",
      "Add two-color focus outlines and keyboard testing.",
      "Document alt text rules for informative vs decorative images."
    ],
    owner: "Design & Dev",
    effort: "S",
    acceptance: "Keyboard-only navigation passes WAVE/axe smoke tests."
  },
  {
    area: "Trust & conversion",
    issues: "Reviews and policies buried, minimal staff proof.",
    observation: "Membership messaging stronger but still light on social proof.",
    actions: [
      "Launch review carousel and testimonials on home + services.",
      "Publish barber credentials and hygiene/cancellation policy page.",
      "Add in-shop photo gallery for rituals and environment."
    ],
    owner: "Content",
    effort: "S",
    acceptance: "Review snippets live with footer policy links."
  },
  {
    area: "Analytics readiness",
    issues: "No UTMs or GA4 tracking for bookings and calls.",
    observation: "Measurement prerequisites missing in both live and dev builds.",
    actions: [
      "Apply UTM schema to every booking CTA.",
      "Trigger GA4 events for click_book, click_call, form_submit.",
      "Build weekly Looker Studio dashboard for leadership."
    ],
    owner: "Analytics",
    effort: "S",
    acceptance: "Events visible in GA4 realtime with weekly reporting cadence."
  }
]

const quickWins = [
  "Add booking link to GBP and sticky CTAs site-wide with UTMs.",
  "Publish LocalBusiness JSON-LD and validate in Rich Results Test.",
  "Compress hero media, define width/height, and lazy-load secondary images.",
  "Ship accessibility essentials: contrast tokens and visible focus styles.",
  "Launch lightweight service pages (Cut, Shave, Facial, Massage) with FAQs."
]

const workPlan = [
  {
    label: "Days 1–3",
    focus: "Quick wins",
    actions: [
      "Booking link + sticky CTA rollout with tracking.",
      "Hero media optimization and schema publication.",
      "GBP audit to confirm NAP/services alignment."
    ],
    owners: "Ops, Dev, SEO"
  },
  {
    label: "Days 4–7",
    focus: "Content and trust",
    actions: [
      "Publish four service pages with pricing and FAQs.",
      "Mirror GBP services/hours on site.",
      "Add review carousel, staff credentials, hygiene policy."
    ],
    owners: "Content, SEO, Design"
  },
  {
    label: "Days 8–10",
    focus: "Accessibility and analytics",
    actions: [
      "Contrast tokens, focus states, labeled inputs, alt text pass.",
      "GA4 event wiring and weekly Looker Studio dashboard."
    ],
    owners: "Dev, Analytics"
  },
  {
    label: "Days 11–14",
    focus: "Booking maturity",
    actions: [
      "Evaluate Reserve with Google providers and enroll if eligible.",
      "Publish GBP-aligned promo (Executive Hour) and monitor impact."
    ],
    owners: "Ops, Marketing"
  }
]

const evidence = [
  "Live site: dense services page, no sticky Book CTA, missing JSON-LD.",
  "Dev build: improved hero and pricing cards, Book buttons present but scheduler and UTMs absent."
]

const sources = [
  "Google: Local ranking factors (relevance, distance, prominence).",
  "Google: Core Web Vitals guidance for Search success.",
  "Google: LocalBusiness structured data and rich results gallery.",
  "Google Business Profile: Booking links and Reserve with Google overview.",
  "BrightLocal 2025: Local Consumer Review Survey.",
  "W3C: WCAG 2.2 focus visible/appearance benefits."
]

export const metadata: Metadata = {
  title: "Audit Findings — Andreas & Co.",
  description:
    "Executive-ready summary of the Andreas & Co. website audit with priorities, backlog, quick wins, and 14-day work plan.",
  alternates: {
    canonical: "/andreas/findings"
  }
}

export default function FindingsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="border-b border-border/70 bg-[var(--ps-surface)]/80 backdrop-blur supports-[backdrop-filter]:bg-[var(--ps-surface)]/60">
        <div className="max-w-screen-lg mx-auto px-4 md:px-6 py-14 md:py-20 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-muted-foreground">
            <Link
              href="/andreas"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span aria-hidden>←</span>
              Back to pitch overview
            </Link>
            <div className="font-mono uppercase tracking-widest text-xs">Audit Update · Sept 24, 2025</div>
          </div>
          <div className="space-y-6">
            <p className="text-xs font-mono tracking-[0.4em] uppercase text-muted-foreground">
              Andreas &amp; Co / Website Audit Findings
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-balance">
              Executive summary for ownership: what to fix, why it matters, and the 14-day plan
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Use this page to brief ownership on the audit outcomes. Start with the critical blockers, walk through the priority backlog, and close with the work plan and proof points. Every recommendation maps to measurable gains in bookings, visibility, or trust.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="#critical-priorities"
                className="bg-[var(--ps-primary)] text-white rounded-full px-4 py-2 text-sm hover:bg-[var(--ps-primary-weak)] transition-colors"
              >
                Jump to critical priorities
              </Link>
              <Link
                href="#work-plan"
                className="border border-border rounded-full px-4 py-2 text-sm hover:bg-[var(--ps-surface)] transition-colors"
              >
                View 14-day work plan
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Section id="critical-priorities" title="Critical P0 issues (fix this week)">
        <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
          These are blocking visibility and conversion today. Resolve them immediately to unlock richer search appearances and reduce booking drop-off.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {criticalFindings.map((item) => (
            <div
              key={item.title}
              className="p-6 border border-border rounded-xl bg-[var(--ps-surface)] shadow-sm"
            >
              <div className="text-xs uppercase font-mono tracking-widest text-[var(--ps-primary)] mb-3">
                Priority 0
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Impact</p>
                  <p>{item.impact}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Why it matters</p>
                  <p>{item.why}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Fix this week</p>
                  <p>{item.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="high-priority" title="High-priority P1 backlog (ship in the first sprint)">
        <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
          Tackle these next. Together they improve conversion momentum, protect Core Web Vitals, and make the experience owner- and client-ready.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {highPriorityFindings.map((item) => (
            <div
              key={item.title}
              className="p-6 border border-border rounded-xl bg-[var(--ps-surface)] shadow-sm"
            >
              <div className="text-xs uppercase font-mono tracking-widest text-muted-foreground mb-3">
                Priority 1
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Impact</p>
                  <p>{item.impact}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Why it matters</p>
                  <p>{item.why}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Fix in sprint</p>
                  <p>{item.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="backlog" title="Detailed audit backlog">
        <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
          Each area below summarizes the live-site issue, what we saw in the dev build, actions to close the gap, owners, effort, and acceptance criteria. Use this grid to assign work and track completion.
        </p>
        <div className="space-y-6">
          {backlogAreas.map((area) => (
            <div
              key={area.area}
              className="p-6 border border-border rounded-xl bg-[var(--ps-surface)] shadow-sm"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase font-mono tracking-widest text-muted-foreground">
                    Workstream
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">{area.area}</h3>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p><span className="font-medium text-foreground">Owner:</span> {area.owner}</p>
                  <p><span className="font-medium text-foreground">Effort:</span> {area.effort}</p>
                  <p className="max-w-sm"><span className="font-medium text-foreground">Acceptance:</span> {area.acceptance}</p>
                </div>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Issue (live)</p>
                  <p>{area.issues}</p>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Observed (dev build)</p>
                  <p>{area.observation}</p>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Fix steps</p>
                  <ul className="list-disc pl-4 space-y-1">
                    {area.actions.map((action) => (
                      <li key={action}>{action}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="quick-wins" title="Day 1 quick wins">
        <p className="text-sm text-muted-foreground max-w-3xl">
          Ship these without waiting for design revisions—they unlock immediate visibility, speed, and measurement gains.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-muted-foreground">
          {quickWins.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section id="work-plan" title="14-day work plan">
        <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
          Organize delivery into four waves. Each block builds on the previous so that measurement and booking flow mature together.
        </p>
        <div className="space-y-4">
          {workPlan.map((block) => (
            <div
              key={block.label}
              className="p-5 border border-border rounded-xl bg-[var(--ps-surface)] shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{block.label}</p>
                  <h3 className="text-lg font-semibold text-foreground">{block.focus}</h3>
                </div>
                <p className="text-sm text-muted-foreground">Owners: {block.owners}</p>
              </div>
              <ul className="mt-4 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                {block.actions.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="evidence" title="Key evidence and references" eyebrow="What we saw & supporting guidance">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 border border-border rounded-xl bg-[var(--ps-surface)] shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-foreground">Site observations</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              {evidence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="p-6 border border-border rounded-xl bg-[var(--ps-surface)] shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-foreground">Authoritative sources</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              {sources.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-6">
          <Link
            href="https://brass-routine.lovable.app/"
            className="inline-flex items-center gap-2 text-sm text-[var(--ps-primary)] hover:text-[var(--ps-primary-weak)] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View dev build for context
            <span aria-hidden>↗</span>
          </Link>
        </div>
      </Section>
    </div>
  )
}
