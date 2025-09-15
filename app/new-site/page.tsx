import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Website Refresh — Andreas & Co | PrairieSignal",
  description:
    "Dark-gold aesthetic, elegant type, and two-tap booking. Mobile-first, fast, and SEO-ready.",
}

export default function NewSitePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-12 sm:py-16">
      <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]">
        <img src="/hero-dark-gold-2.svg" alt="" className="w-full h-full object-cover opacity-60" />
      </div>
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-light">Premium Look. Effortless Booking.</h1>
        <p className="text-muted-foreground max-w-2xl">
          A dark-gold aesthetic, elegant typography, and two-tap booking that matches the quality of your services.
          Mobile-first, lightning fast, SEO-ready.
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          {["Dark + Gold", "Two-Tap Booking", "Mobile-First", "SEO"].map((chip) => (
            <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
              {chip}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2 text-sm">
          <a href="#before-after" className="rounded-md border border-border px-3 py-2 hover:border-muted-foreground/60 transition-colors">View Before/After</a>
          <a href="#flow" className="rounded-md border border-border px-3 py-2 hover:border-muted-foreground/60 transition-colors">Try Two-Tap Flow</a>
          <a href="#style" className="rounded-md border border-border px-3 py-2 hover:border-muted-foreground/60 transition-colors">Download Style Guide</a>
        </div>
      </header>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-light">Timeline (01–04)</h2>
        <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-2">
          <li>Visual System — Palette, type, spacing, iconography.</li>
          <li>Booking Flow — Fixed “Book”, simplified form, wallet-ready.</li>
          <li>Services & Rituals — Scannable cards + benefits & add-ons.</li>
          <li>Performance & SEO — Optimized images, schema, CDN.</li>
        </ol>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-2">
        {[
          { title: "Before/After gallery", href: "#before-after" },
          { title: "Copy & Tone samples", href: "#copy" },
          { title: "Booking micro-flows", href: "#flow" },
          { title: "Accessibility (AA) checklist", href: "#a11y" },
        ].map((card) => (
          <a key={card.title} href={card.href} className="rounded-lg border border-border p-4 hover:border-muted-foreground/60 transition-colors">
            <div className="font-medium">{card.title}</div>
          </a>
        ))}
      </section>
    </main>
  )
}


