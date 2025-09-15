import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Security & Privacy — Andreas & Co | PrairieSignal",
  description:
    "Safety by default: PIPEDA/PIPA-aware, minimal data, and human approval before send.",
}

export default function SecurityPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-12 sm:py-16">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-light">Safety by default</h1>
        <p className="text-muted-foreground max-w-2xl">
          PIPEDA/PIPA-aware, minimal data, and human approval before send.
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          {["Masked PII", "Quiet Hours", "Throttle", "Logs"].map((chip) => (
            <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
              {chip}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2 text-sm">
          <a href="#request" className="rounded-md border border-border px-3 py-2 hover:border-muted-foreground/60 transition-colors">Request data handling note</a>
          <a href="#audit" className="rounded-md border border-border px-3 py-2 hover:border-muted-foreground/60 transition-colors">See audit log example</a>
        </div>
      </header>

      <section className="mt-12 space-y-4 text-sm text-muted-foreground">
        <div>Timeline: Data minimization → Human-in-the-loop → Transparency → Compliance</div>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-2">
        {[
          { title: "Data Handling Note", href: "#dh" },
          { title: "DPA/ROPA templates", href: "#dpa" },
          { title: "Incident Playbook", href: "#incidents" },
          { title: "Vendor List", href: "#vendors" },
        ].map((card) => (
          <a key={card.title} href={card.href} className="rounded-lg border border-border p-4 hover:border-muted-foreground/60 transition-colors">
            <div className="font-medium">{card.title}</div>
          </a>
        ))}
      </section>
    </main>
  )
}


