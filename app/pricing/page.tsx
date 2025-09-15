import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing & ROI — Andreas & Co | PrairieSignal",
  description:
    "Clear, low-risk pricing: fixed-scope pilots, pass-through usage, and Care Plans.",
}

export default function PricingPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-12 sm:py-16">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-light">Clear, low-risk pricing</h1>
        <p className="text-muted-foreground max-w-2xl">
          Fixed-scope pilots, pass-through usage, and Care Plans. Calgary, AB.
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          {["Readiness", "Pilots", "Care Plans", "Pass-through"].map((chip) => (
            <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
              {chip}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2 text-sm">
          <a href="#start" className="rounded-md border border-border px-3 py-2 hover:border-muted-foreground/60 transition-colors">Start with Readiness</a>
          <a href="#contact" className="rounded-md border border-border px-3 py-2 hover:border-muted-foreground/60 transition-colors">Book a consult</a>
        </div>
      </header>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-light">Pricing</h2>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Readiness & Roadmap — $750 — 90-day plan; privacy review</li>
          <li>Pilot A — Micro Automation (2 wks) — $2,500 — 1 workflow, 2 apps</li>
          <li>Pilot B — Operations Booster (3 wks) — $5,500 — 3 automations + Command Center</li>
          <li>Pilot C — Pro (4 wks) — $9,500 — 5 automations + simple UI/agent</li>
          <li>Care Plans (mo) — Essentials $600 · Standard $1,200 · Plus $2,500</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-light">Quick ROI Math</h2>
        <div className="text-sm text-muted-foreground mt-2">
          Recovered/day = Cancels/day × Rebook Rate × Avg Ticket
          <br />
          Example: 2 × 40% × $70 ≈ $1,680/mo · Breakeven (Pilot B): ~3.3 months
        </div>
        <div className="grid gap-4 sm:grid-cols-2 mt-4">
          {[
            { title: "ROI Calculator", href: "#roi" },
            { title: "What’s Included", href: "#included" },
            { title: "Pass-Through Billing", href: "#passthrough" },
            { title: "Terms & SLAs", href: "#terms" },
          ].map((card) => (
            <a key={card.title} href={card.href} className="rounded-lg border border-border p-4 hover:border-muted-foreground/60 transition-colors">
              <div className="font-medium">{card.title}</div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}


