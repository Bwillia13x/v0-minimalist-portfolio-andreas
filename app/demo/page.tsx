import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Live Demo — Andreas & Co | PrairieSignal",
  description:
    "See it work in 2 minutes: enrich rows, sort by confidence, and produce two ready-to-send texts.",
}

export default function DemoPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-12 sm:py-16">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-light">See it work in 2 minutes</h1>
        <p className="text-muted-foreground max-w-2xl">
          Watch the sheet enrich 15–30 rows, sort by confidence, and produce two ready-to-send texts. Quick, safe,
          on-brand.
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          {["≤140 chars", "Canadian spelling", "No PII", "Approval"].map((chip) => (
            <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
              {chip}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2 text-sm">
          <a href="#open-demo" className="rounded-md border border-border px-3 py-2 hover:border-muted-foreground/60 transition-colors">Open Demo Sheet</a>
          <a href="#script" className="rounded-md border border-border px-3 py-2 hover:border-muted-foreground/60 transition-colors">Download Demo Script</a>
          <a href="#contact" className="rounded-md border border-border px-3 py-2 hover:border-muted-foreground/60 transition-colors">Book Consult</a>
        </div>
      </header>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-light">Demo steps</h2>
        <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-2">
          <li>Prepare data → Enrich in bulk</li>
          <li>Triage: sort Confidence ≥ 80</li>
          <li>Send two SMS → respectful windows</li>
          <li>Debrief & iterate</li>
        </ol>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-2">
        {[
          { title: "Demo Sheet (read-only)", href: "#open-demo" },
          { title: "Checklist (PDF)", href: "#script" },
          { title: "Prompt Pack", href: "#prompts" },
          { title: "Safety Controls", href: "#safety" },
        ].map((card) => (
          <a key={card.title} href={card.href} className="rounded-lg border border-border p-4 hover:border-muted-foreground/60 transition-colors">
            <div className="font-medium">{card.title}</div>
          </a>
        ))}
      </section>
    </main>
  )
}


