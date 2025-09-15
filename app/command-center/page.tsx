import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Command Center — Andreas & Co | PrairieSignal",
  description:
    "An AI-first spreadsheet that turns appointment rows into SMS, time windows, and next actions.",
}

export default function CommandCenterPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-12 sm:py-16">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-light">Andreas_Rebook_Command_Center (Paradigm.ai)</h1>
        <p className="text-muted-foreground max-w-2xl">
          An AI-first spreadsheet that turns appointment rows into SMS, time windows, and next actions.
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          {["Bulk Enrich", "Cell/Column Prompts", "Confidence & Risk", "Masked PII"].map((chip) => (
            <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
              {chip}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2 text-sm">
          <a href="#open-demo" className="rounded-md border border-border px-3 py-2 hover:border-muted-foreground/60 transition-colors">Open Demo</a>
          <a href="#setup" className="rounded-md border border-border px-3 py-2 hover:border-muted-foreground/60 transition-colors">Download Setup Guide</a>
          <a href="/pricing" className="rounded-md border border-border px-3 py-2 hover:border-muted-foreground/60 transition-colors">Pricing & ROI</a>
        </div>
      </header>

      <aside className="mt-8 text-xs text-muted-foreground font-mono">
        Helper: Select 11–16 → Enrich → sort Confidence ≥ 80 → do Next_Action
      </aside>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-light">Schema & Columns</h2>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Schema: Date · Start · Duration · Provider · Service · Client_First · Phone_Masked · Last_Seen_Date · LTV_$ · Status</li>
          <li>AI Columns: Last_Seen_Days · No_Show_Risk_0_100 · Window_Suggestion · Rebook_SMS · Confidence_0_100 · Next_Action</li>
        </ul>
        <div className="text-sm text-muted-foreground">
          Why it Works: Revenue rescue · Efficiency (AI drafts, human approvals) · Consistency · Privacy
        </div>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-2">
        {[
          { title: "Edit copy? Yes (approval gate)", href: "#faq1" },
          { title: "Learn our tone? Yes (tone prompts)", href: "#faq2" },
          { title: "Add columns? It’s a spreadsheet", href: "#faq3" },
          { title: "Setup speed? 1–3 days", href: "#faq4" },
        ].map((card) => (
          <a key={card.title} href={card.href} className="rounded-lg border border-border p-4 hover:border-muted-foreground/60 transition-colors">
            <div className="font-medium">{card.title}</div>
          </a>
        ))}
      </section>
    </main>
  )
}


