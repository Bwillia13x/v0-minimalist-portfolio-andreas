import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prompt Pack - AI Automation Templates | PrairieSignal",
  description: "Plug-and-play prompts for SMS, email, and sheets. Canadian spelling, ≤140 chars for SMS, and human approval by default. Free download for service businesses.",
  keywords: ["AI prompts", "automation templates", "SMS prompts", "email automation", "service business", "barbershop software", "Canadian business"],
  openGraph: {
    title: "Prompt Pack - AI Automation Templates",
    description: "Plug-and-play prompts for SMS, email, and sheets with Canadian localization and safety controls.",
    url: "https://prairiesignal.ca/prompt-pack",
    type: "website",
    images: [
      {
        url: "/hero-dark-gold.svg",
        width: 1200,
        height: 630,
        alt: "PrairieSignal Prompt Pack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompt Pack - AI Automation Templates",
    description: "Plug-and-play prompts for SMS, email, and sheets with Canadian localization.",
    images: ["/hero-dark-gold.svg"],
  },
}
