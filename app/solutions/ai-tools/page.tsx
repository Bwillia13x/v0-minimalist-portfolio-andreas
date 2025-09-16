import type { Metadata } from "next"
import AIToolsPageClient from "./AIToolsPageClient"

export const metadata: Metadata = {
  title: "AI Tools & Prompt Pack | PrairieSignal",
  description: "Plug-and-play prompts and assistants for SMS, email, and sheets. Ready-to-use AI automation templates for service businesses.",
  keywords: ["AI prompts", "automation templates", "SMS automation", "email automation", "business automation", "service industry"],
  openGraph: {
    title: "AI Tools & Prompt Pack | PrairieSignal",
    description: "Plug-and-play prompts and assistants for SMS, email, and sheets.",
    url: "https://prairiesignal.ca/solutions/ai-tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools & Prompt Pack | PrairieSignal",
    description: "Plug-and-play prompts and assistants for SMS, email, and sheets.",
  },
  alternates: {
    canonical: "/solutions/ai-tools",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AIToolsPage() {
  return <AIToolsPageClient />
}