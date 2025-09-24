"use client"

import { useEffect, useState } from "react"
import { Section } from "@/components/Section"

const sections = [
  { id: "agenda", label: "Agenda" },
  { id: "why-this-matters", label: "Why this matters" },
  { id: "deliverables", label: "What we’ll deliver" },
  { id: "scope-1", label: "Scope 1" },
  { id: "scope-2", label: "Scope 2" },
  { id: "scope-3", label: "Scope 3" },
  { id: "timeline", label: "Timeline" },
  { id: "success", label: "Success" },
  { id: "faqs", label: "FAQs" },
  { id: "proof", label: "Reference" },
]

export default function Home() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-[var(--ps-surface)]/60 backdrop-blur supports-[backdrop-filter]:bg-[var(--ps-surface)]/40">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-6 px-6 py-4">
          <nav className="hidden md:flex items-center gap-4 text-xs font-mono tracking-wide text-muted-foreground uppercase">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-foreground transition-colors"
              >
                {section.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => setIsDark((prev) => !prev)}
            className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        <section id="hero" className="py-20 md:py-24">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-2 text-muted-foreground font-mono text-xs tracking-widest uppercase">
              <span>Andreas &amp; Co / Live Briefing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-balance">
              Booking-first growth roadmap — presenter edition
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              A focused 90-day program: Website Refresh → Marketing Strategy &amp; Playbook → New Brand Assets designed to lift bookings, Google Business Profile (GBP) actions, and retention. Walk ownership through each section in order—this page is your live script.
            </p>
            <p className="text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed">
              Tip: display this page, speak to the headlines, and pause for questions at the end of every section or when the agenda indicates.
            </p>
          </div>
        </section>

        <Section id="agenda" title="Presentation flow">
          <ul className="list-decimal space-y-3 pl-6 text-sm text-muted-foreground">
            <li>Context-setting: why visibility, speed, and proof drive local bookings.</li>
            <li>Program outcomes: what the 90-day effort delivers.</li>
            <li>Three scopes: Website Refresh, Marketing Playbook, Brand Assets.</li>
            <li>Timeline highlights and success signals to track together.</li>
            <li>Owner-ready FAQs and supporting reference notes.</li>
          </ul>
        </Section>

        <Section id="why-this-matters" title="Why this matters (proof in plain English)">
          <ul className="list-disc space-y-3 pl-6 text-sm text-muted-foreground">
            <li>Local search visibility runs on relevance, distance, and prominence—your site plus GBP completeness and reviews determine who gets picked.</li>
            <li>Google recommends hitting good Core Web Vitals (speed, interactivity, stability) to support search success and user experience.</li>
            <li>Reserve with Google or a &quot;Book&quot; action on Search and Maps reduces friction from search to appointment; if a supported provider exists, we enable it—or link directly to your booking page.</li>
            <li>LocalBusiness structured data helps Google understand hours, location, and services, and can unlock booking actions.</li>
            <li>Reviews and high-quality photos meaningfully influence customer choice; owners should post, respond, and add category-specific images on a routine cadence.</li>
          </ul>
        </Section>

        <Section id="deliverables" title="What we’ll deliver in 90 days">
          <ul className="list-disc space-y-3 pl-6 text-sm text-muted-foreground">
            <li>Faster, clearer site with sticky Book Now, service pages, FAQs, and LocalBusiness schema; Core Web Vitals tracked in Search Console.</li>
            <li>Always-on local marketing playbook: GBP hygiene, review flywheel (no incentives), tight-radius search ads, and a weekly scorecard.</li>
            <li>New brand assets (photo/video kit plus micro-system) to lift trust across GBP, site, and ads; consistent brands correlate with higher revenue.</li>
          </ul>
        </Section>

        <Section id="scope-1" title="Scope 1 — Website Refresh (conversion-first)">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">Objectives</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                <li>Turn more local searches into booked appointments.</li>
                <li>Hit Google’s Core Web Vitals thresholds where feasible and remove UX friction.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">What we fix</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                <li>Clear messaging and information architecture: premium services, pricing visibility, social proof.</li>
                <li>Booking friction: header and sticky Book Now buttons, above-the-fold CTA, UTM-tagged links to measure source.</li>
                <li>Local SEO alignment: service pages mapped to GBP categories, NAP consistency, LocalBusiness JSON-LD.</li>
                <li>Speed and UX: optimized hero media, modern image formats, font loading, script diet, tracked in Search Console for Core Web Vitals.</li>
                <li>Accessibility essentials (WCAG 2.2 AA): contrast, focus states, keyboard navigation, form labels.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">Deliverables</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                <li>One conversion-first home page, four to six service pages, policy/FAQ content, schema block, analytics events, and a Core Web Vitals report.</li>
                <li>Acceptance criteria: Book CTA visible at all viewports, improved LCP/INP/CLS on key pages, valid JSON-LD, and tracked tap-to-call actions.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">KPIs we expect to influence</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                <li>Bookings from Search and Maps.</li>
                <li>GBP actions (calls, clicks, directions).</li>
                <li>Core Web Vitals pass rate.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="scope-2" title="Scope 2 — New Marketing Strategy & Execution Playbook">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">Objectives</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                <li>Build an always-on discovery flywheel: GBP → site → booking → review → GBP.</li>
                <li>Layer measured paid search to stabilize demand while reviews and organic efforts compound.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">What’s inside</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                <li>GBP hygiene: categories, services, weekly Posts, Q&amp;A, messaging, and a photo cadence (interior, team, before/after).</li>
                <li>Review flywheel (FTC-safe): post-visit SMS or email requests, owner responses weekly, and no incentives.</li>
                <li>Search ads starter kit: two ad groups (Brand plus “near me” or service intent), sitelinks, call/location extensions, benchmark check for 2025.</li>
                <li>Retention mechanics: default rebook scripting and SMS reminders to reduce no-shows.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">Weekly scorecard</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                GBP actions, review velocity and rating, bookings, ad CTR/CPC/CVR, rebook percentage, and no-show percentage. Benchmarks: 2025 average search conversion rate ≈ 7.5%; we adjust to the barbershop context.
              </p>
            </div>
          </div>
        </Section>

        <Section id="scope-3" title="Scope 3 — New Brand Assets (trust & premium cues)">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">Objectives</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                <li>Make Andreas &amp; Co look as premium online as the in-chair experience feels.</li>
                <li>Standardize visuals for GBP, site, and ads.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">What we create</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                <li>Photo and video kit: hero set, ritual sequences (hot towel, straight-razor), before/after crops sized for web, GBP, and social.</li>
                <li>Micro brand system: refined wordmark and lockups, color and typography, review and testimonial treatment, GBP and social templates.</li>
                <li>In-shop touchpoints: mirror QR to review flow and rebook cards.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">Why this adds value</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Consistent, high-quality brand presentation is associated with meaningful revenue lift in multiple surveys (≈23% in Demand Metric and Lucidpress studies).
              </p>
            </div>
          </div>
        </Section>

        <Section id="timeline" title="Timeline (90 days)">
          <ol className="space-y-4 text-sm text-muted-foreground">
            <li>
              <div className="font-medium text-foreground">Weeks 1–2</div>
              <p>Site refresh sprint (copy, service pages, schema, Core Web Vitals fixes) plus GBP audit and updates.</p>
            </li>
            <li>
              <div className="font-medium text-foreground">Weeks 3–6</div>
              <p>Review flywheel live, photo and video shoot, launch tight-radius search ads, set up weekly scorecard.</p>
            </li>
            <li>
              <div className="font-medium text-foreground">Weeks 7–12</div>
              <p>Iterate ads and landing pages, publish templated GBP posts, roll out accessibility and micro-brand touches, Reserve with Google eligibility check.</p>
            </li>
          </ol>
        </Section>

        <Section id="success" title="What success looks like">
          <ul className="list-disc space-y-3 pl-6 text-sm text-muted-foreground">
            <li>More bookings from Google (Search/Maps “Book” plus tracked site CTAs).</li>
            <li>Higher GBP engagement (calls, clicks, directions) with richer, accurate business info and visuals.</li>
            <li>Faster, more stable pages meeting Google’s guidance for Core Web Vitals.</li>
            <li>Stronger social proof (steady review velocity and owner responses).</li>
          </ul>
        </Section>

        <Section id="faqs" title="FAQs (owner-friendly)">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">Do we need “Reserve with Google”?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If your scheduling platform is supported in Canada, we enable it for a native Book button. If not, we add your booking link. Either way, we reduce clicks from discovery to appointment.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">Will speed really help our ranking?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Google says good Core Web Vitals are recommended for success in Search and for better user experience. We improve LCP, INP, and CLS on key pages and monitor them in Search Console.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">Why put effort into photos and reviews?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Google encourages category-specific, high-quality photos, and independent surveys show reviews heavily influence local buying decisions. We operationalize both so you do not have to reinvent the wheel.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">Will you handle accessibility?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Yes—priority WCAG 2.2 AA fixes (contrast, focus, labels, headings) broaden reach and reduce risk.
              </p>
            </div>
          </div>
        </Section>

        <Section id="proof" title="Reference notes for Q&A" eyebrow="Supporting guidance">
          <ul className="list-disc space-y-2 pl-6 text-xs text-muted-foreground">
            <li>Local ranking = relevance + distance + prominence (Google).</li>
            <li>Core Web Vitals recommended for Search success and UX (Google).</li>
            <li>Reserve with Google or booking link reduces friction (Google).</li>
            <li>LocalBusiness structured data clarifies business details and can enable actions.</li>
            <li>Reviews and photos influence customer choice (BrightLocal and Google guidance).</li>
          </ul>
        </Section>
      </main>

      <footer className="border-t border-border bg-[var(--ps-surface)]/60">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-6 py-8">
          <p className="text-xs text-muted-foreground">© 2025 PrairieSignal. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span>Calgary-based • PIPEDA/PIPA aware</span>
            <span>Booking-first growth program</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
