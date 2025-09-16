import type { Metadata } from "next"
import MarketingPageClient from "./MarketingPageClient"

export const metadata: Metadata = {
  title: "Marketing Engine That Works | PrairieSignal",
  description: "Steady content, gentle reminders, and opt-in growth with human approvals. AI-powered marketing automation for service businesses.",
  keywords: ["marketing automation", "social media marketing", "review management", "email marketing", "SMS marketing", "service business"],
  openGraph: {
    title: "Marketing Engine That Works | PrairieSignal",
    description: "Steady content, gentle reminders, and opt-in growth with human approvals.",
    url: "https://prairiesignal.ca/solutions/marketing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Engine That Works | PrairieSignal",
    description: "Steady content, gentle reminders, and opt-in growth with human approvals.",
  },
  alternates: {
    canonical: "/solutions/marketing",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function MarketingPage() {
  return <MarketingPageClient />
}