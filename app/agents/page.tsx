import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Agents & Automations — Andreas & Co | PrairieSignal",
  description:
    "Frontier-model agents with safe defaults: Front-Desk, Owner-Analyst, Inventory, Campaign.",
}

export default function AgentsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-12 sm:py-16">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-light">Agents that work like staff, not scripts</h1>
        <p className="text-muted-foreground max-w-2xl">
          Frontier models with safe defaults—each agent focuses on a job and routes decisions to people when it matters.
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          {["Front-Desk", "Owner-Analyst", "Inventory", "Campaign"].map((chip) => (
            <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
              {chip}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2 text-sm">
          <a href="/command-center" className="rounded-md border border-border px-3 py-2 hover:border-muted-foreground/60 transition-colors">See Command Center</a>
          <a href="#contact" className="rounded-md border border-border px-3 py-2 hover:border-muted-foreground/60 transition-colors">Book a working session</a>
        </div>
      </header>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-light">Timeline</h2>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Front-Desk Agent: Day-of triage, reminders, rebooking nudges (suggest SMS, escalate VIP calls).</li>
          <li>Owner-Analyst Agent: “What changed vs prior 4?” → one-pager + chart stubs.</li>
          <li>Inventory Agent: Forecast stockouts; propose bundles (seasonality + velocity).</li>
          <li>Campaign Agent (opt): Lapsed-client nudges (approval gate, throttle, opt-out language).</li>
        </ul>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-2">
        {[
          { title: "Paradigm.ai", href: "/command-center" },
          { title: "Shortcut.ai", href: "#shortcut" },
          { title: "SMS/Email integrations", href: "#integrations" },
          { title: "Models & Costs", href: "#models" },
        ].map((card) => (
          <a key={card.title} href={card.href} className="rounded-lg border border-border p-4 hover:border-muted-foreground/60 transition-colors">
            <div className="font-medium">{card.title}</div>
          </a>
        ))}
      </section>
    </main>
  )
}


