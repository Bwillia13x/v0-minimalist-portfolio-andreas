import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prompt Pack — Andreas & Co | PrairieSignal",
  description: "Plug-and-play prompts for copy, sheets, and SMS with safe defaults.",
}

export default function PromptPackPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-12 sm:py-16">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-light">Prompt Pack</h1>
        <p className="text-muted-foreground max-w-2xl">
          Plug-and-play prompts for copy, sheets, and SMS. Canadian spelling, ≤140 chars for SMS, and human approval by default.
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          {["Copy", "Sheets", "SMS", "Safety"].map((chip) => (
            <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
              {chip}
            </span>
          ))}
        </div>
      </header>

      <section className="mt-12 space-y-6">
        <h2 className="text-2xl font-light">SMS Rebook (≤140 chars)</h2>
        <pre className="text-xs whitespace-pre-wrap rounded-md border border-border p-4 bg-background/60">
Client_First, it’s NAME at Andreas & Co. We’ve got a great window {'{'}Window_Suggestion{'}'}. Want me to hold it? Reply Y/N.
        </pre>
      </section>

      <section className="mt-12 space-y-6">
        <h2 className="text-2xl font-light">Owner Pack Summary</h2>
        <pre className="text-xs whitespace-pre-wrap rounded-md border border-border p-4 bg-background/60">
Summarize week vs prior 4 in plain English. Headings: Revenue, Show Rate, Rebook Conversion, LTV Mix, Provider Capacity. End with 3 bullets: What worked, What slipped, What to try.
        </pre>
      </section>

      <section className="mt-12 space-y-6">
        {[
          { title: "Paradigm Enrich", body: 'Add Last_Seen_Days, No_Show_Risk_0_100, Window_Suggestion, Rebook_SMS (≤140), Confidence_0_100, Next_Action. Canadian spelling.' },
          { title: "Review Reply", body: 'Draft a warm, specific reply using our tone. Never promise discounts. Keep ≤80 words.' },
        ].map((p) => (
          <div key={p.title} className="space-y-2">
            <h3 className="text-lg font-medium">{p.title}</h3>
            <pre className="text-xs whitespace-pre-wrap rounded-md border border-border p-4 bg-background/60">{p.body}</pre>
          </div>
        ))}
      </section>
    </main>
  )
}


