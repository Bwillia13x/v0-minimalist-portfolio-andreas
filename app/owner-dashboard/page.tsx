import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Owner Pack — Andreas & Co | PrairieSignal",
  description:
    "A one-page weekly summary you can actually read—plus an agent for follow-ups.",
}

export default function OwnerDashboardPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-12 sm:py-16">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-light">The Owner Pack (weekly)</h1>
        <p className="text-muted-foreground max-w-2xl">
          A one-page summary you can actually read—plus an agent you can ask follow-ups.
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          {["Revenue", "Show Rate", "Rebook Conversion", "LTV Mix", "Provider Capacity", "Services Mix"].map((chip) => (
            <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
              {chip}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2 text-sm">
          <a href="#download" className="rounded-md border border-border px-3 py-2 hover:border-muted-foreground/60 transition-colors">Download last week’s one-pager</a>
          <a href="#ask" className="rounded-md border border-border px-3 py-2 hover:border-muted-foreground/60 transition-colors">Ask the Owner-Analyst Agent</a>
        </div>
      </header>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-light">Tiles</h2>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Revenue & Trend — Week vs prior 4; drivers</li>
          <li>Show Rate & Rebook — No-show trend; conversions</li>
          <li>Provider Capacity — Under/over-utilization; hours</li>
          <li>Mix & LTV — Services/retail mix; VIPs</li>
        </ul>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-2">
        {[
          { title: "Friday drop example", href: "#ex1" },
          { title: "Promo window", href: "#ex2" },
          { title: "Retail driver", href: "#ex3" },
          { title: "VIP drift", href: "#ex4" },
        ].map((card) => (
          <a key={card.title} href={card.href} className="rounded-lg border border-border p-4 hover:border-muted-foreground/60 transition-colors">
            <div className="font-medium">{card.title}</div>
          </a>
        ))}
      </section>
    </main>
  )
}


