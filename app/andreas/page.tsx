import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Andreas & Co Barbershop — AI-Enabled Growth Plan | PrairieSignal",
  description:
    "Web-based pitch: website refresh, AI-enabled marketing, and AI ops enablement for Andreas & Co Barbershop by PrairieSignal.",
}

export default function AndreasPitchPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-12 sm:py-16">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to home
          </Link>
          <div className="text-xs text-muted-foreground font-mono">PrairieSignal</div>
        </div>

        <header className="mt-8 space-y-4 sticky top-14 bg-background/70 backdrop-blur border-b border-border/60 z-40">
          <div className="max-w-4xl mx-auto px-0 sm:px-0 lg:px-0 py-4">
          <div className="text-sm text-muted-foreground font-mono tracking-wider">
            Pitch Deck / 2025
          </div>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight">
            Andreas & Co Barbershop
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            A concise, AI-enabled growth plan focused on three angles of attack: 1) Modern
            website refresh, 2) AI-enabled marketing strategy, and 3) AI enablement for
            operations and quality of life. Designed and presented by PrairieSignal.
          </p>
          <nav className="flex flex-wrap gap-2 pt-2">
            {[
              { id: "summary", label: "Executive Summary" },
              { id: "roadmap", label: "Roadmap" },
              { id: "website", label: "Website Refresh" },
              { id: "marketing", label: "AI Marketing" },
              { id: "enablement", label: "AI Enablement" },
              { id: "next", label: "Next Steps" },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-xs sm:text-sm rounded-full border border-border px-3 py-1 text-muted-foreground hover:text-foreground hover:border-muted-foreground/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          </div>
        </header>

        <section id="summary" className="mt-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-light">Executive Summary</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border p-4">
              <div className="text-sm text-muted-foreground font-mono">01</div>
              <div className="mt-2 text-lg">Website Refresh</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Modern, fast, mobile-first site that converts visitors to bookings and
                strengthens brand perception.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="text-sm text-muted-foreground font-mono">02</div>
              <div className="mt-2 text-lg">AI-Enabled Marketing</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Smarter local SEO, content, UGC, and lightweight automations to drive
                awareness and repeat bookings.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="text-sm text-muted-foreground font-mono">03</div>
              <div className="mt-2 text-lg">AI Enablement</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Reduce admin toil with AI assistants for FAQ, scheduling, review replies,
                and simple ops insights.
              </p>
            </div>
          </div>
        </section>

        <section id="roadmap" className="mt-16 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-light">Roadmap</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border p-4">
              <div className="text-sm font-medium">Phase 0 — Discovery (0.5–1 week)</div>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Fast baseline audit: site, SEO, analytics, booking flow, content.</li>
                <li>Clarify goals: utilization, bookings mix, service priorities, LTV.</li>
                <li>Define success metrics and tracking plan.</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="text-sm font-medium">Phase 1 — Website (1–2 weeks)</div>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Implement refreshed site with conversion-focused information architecture.</li>
                <li>Integrate booking CTA throughout; ensure mobile speed and accessibility.</li>
                <li>Ship local SEO basics (schema, GMB alignment, on-page).</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="text-sm font-medium">Phase 2 — Marketing (2–4 weeks)</div>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Content system and calendar; UGC and reviews motion.</li>
                <li>Lightweight email/SMS automations; promotional experiments.</li>
                <li>Local SEO enhancements; measurement and iteration loop.</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="text-sm font-medium">Phase 3 — AI Enablement (ongoing)</div>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>AI assistant for FAQs/booking triage; review responder with approval.</li>
                <li>Phone/SMS capture and handoff; staff knowledge base; ops dashboards.</li>
                <li>Monthly tune-ups based on data and staff feedback.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="website" className="mt-16 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-light">Angle 1 — Website Refresh/Update</h2>
          <p className="text-muted-foreground">
            Goals: increase booking conversions, improve first impression, and clarify
            services. Keep it clean, fast, and easy to maintain.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border p-4">
              <div className="font-medium">Core Pages</div>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Home with hero booking CTA and brand story.</li>
                <li>Services & pricing with clear booking links.</li>
                <li>Team profiles, gallery/Instagram, reviews.</li>
                <li>Location, hours, parking, contact.</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="font-medium">Tech & Performance</div>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Next.js + Tailwind; image optimization; analytics.</li>
                <li>Local SEO: schema, titles, meta, GMB sync.</li>
                <li>Accessibility and mobile speed targets.</li>
                <li>Optional CMS for easy updates.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="marketing" className="mt-16 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-light">Angle 2 — Marketing Strategic Refresh (AI-Enabled)</h2>
          <p className="text-muted-foreground">
            Objectives: defend local search, grow word-of-mouth, and keep the chair full
            with timely content and gentle reminders.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border p-4">
              <div className="font-medium">Programs</div>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Content system: monthly themes, weekly posts/reels.</li>
                <li>Review and referral motion; simple loyalty incentives.</li>
                <li>Email/SMS touchpoints: new client, win-back, seasonal promos.</li>
                <li>Lightweight paid experiments (geo-fenced, offer-driven).</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="font-medium">AI Assist</div>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Generate on-brand captions, offers, and ad copy.</li>
                <li>Calendar suggestions from demand and seasonality.</li>
                <li>UGC prompts and automated review response drafts.</li>
                <li>Reporting: bookings, CAC, ROAS, retention, LTV directionally.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="enablement" className="mt-16 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-light">Angle 3 — AI Enablement for Ops & QoL</h2>
          <p className="text-muted-foreground">
            Reduce routine admin and let the team focus on clients. Human-in-the-loop
            controls to keep quality high.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border p-4">
              <div className="font-medium">Assistants</div>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Site/SMS assistant for FAQs and booking triage.</li>
                <li>Auto-draft review replies with approval step.</li>
                <li>Knowledge base for policies and SOPs.</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="font-medium">Insights</div>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Simple dashboard: utilization, popular services, no-shows.</li>
                <li>Inventory nudge and scheduling suggestions.</li>
                <li>Privacy and data minimization by default.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="next" className="mt-16 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-light">Next Steps</h2>
          <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-2">
            <li>Book a 45–60 min discovery to confirm goals and constraints.</li>
            <li>Approve Phase 0 scope; receive plan with timeline and budget bands.</li>
            <li>Kick off Phase 1 with a focused 1–2 week implementation sprint.</li>
          </ol>
          <div className="pt-4">
            <a
              href="https://prairiesignal.ca"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm hover:border-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              Learn more at prairiesignal.ca ↗
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}


