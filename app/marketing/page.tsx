import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marketing Engine — Andreas & Co | PrairieSignal",
  description:
    "Always-on, on-brand content with AI help: social, email, landing pages, same voice — better reach.",
}

export default function MarketingPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-12 sm:py-16">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-light">Always On, On-Brand</h1>
        <p className="text-muted-foreground max-w-2xl">
          AI helps you publish consistently—social posts, emails, and landing pages—without adding workload. Same voice,
          better reach.
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          {["SEO", "Social", "Email", "Blog"].map((chip) => (
            <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
              {chip}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2 text-sm">
          <a href="#calendar" className="rounded-md border border-border px-3 py-2 hover:border-muted-foreground/60 transition-colors">See Content Calendar</a>
          <a href="#samples" className="rounded-md border border-border px-3 py-2 hover:border-muted-foreground/60 transition-colors">View 3 Sample Posts</a>
          <a href="#voice" className="rounded-md border border-border px-3 py-2 hover:border-muted-foreground/60 transition-colors">Download Brand Voice</a>
        </div>
      </header>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-light">Timeline</h2>
        <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-2">
          <li>Brand Voice — Luxury warmth, plain English (short style guide).</li>
          <li>SEO Foundations — Services + location; schema; GMB refresh.</li>
          <li>Content Engine — Weekly cadence; AI drafts; owner approval → schedule.</li>
          <li>Campaigns — Seasonal & lapsed clients; offer runs; opt-outs.</li>
        </ol>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-2">
        {[
          { title: "Post Pack (3 samples)", href: "#samples" },
          { title: "Services Landing Copy", href: "#services" },
          { title: "Newsletter Draft", href: "#newsletter" },
          { title: "Promo Kit (Father’s Day)", href: "#promo" },
        ].map((card) => (
          <a key={card.title} href={card.href} className="rounded-lg border border-border p-4 hover:border-muted-foreground/60 transition-colors">
            <div className="font-medium">{card.title}</div>
          </a>
        ))}
      </section>
    </main>
  )
}


