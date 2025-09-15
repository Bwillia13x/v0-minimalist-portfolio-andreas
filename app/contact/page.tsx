import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact — Andreas & Co | PrairieSignal",
  description:
    "20 minutes to map your quick wins. Calgary-based, PIPEDA/PIPA-aware.",
}

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-12 sm:py-16">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-light">Let’s fill your chairs</h1>
        <p className="text-muted-foreground max-w-2xl">
          20 minutes to map your quick wins. Calgary-based, PIPEDA/PIPA-aware.
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          {["Discovery", "Readiness", "Pilot"].map((chip) => (
            <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
              {chip}
            </span>
          ))}
        </div>
      </header>

      <section className="mt-8 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <a href="#book" className="rounded-md border border-border px-4 py-3 text-sm hover:border-muted-foreground/60 transition-colors">Book a 20-min Owner Consult</a>
          <a href="mailto:hello@prairiesignal.ca" className="rounded-md border border-border px-4 py-3 text-sm hover:border-muted-foreground/60 transition-colors">hello@prairiesignal.ca</a>
        </div>
        <div className="text-sm text-muted-foreground">
          Form fields: Name · Email · Phone · Preferred time · Notes
        </div>
      </section>
    </main>
  )
}


