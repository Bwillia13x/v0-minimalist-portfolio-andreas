import type { Metadata } from "next"
import WebsitePageClient from "./WebsitePageClient"

export const metadata: Metadata = {
  title: "Modern Website That Converts | PrairieSignal",
  description: "Clean design, fast performance, and one-click booking from every page. Transform your service business website into a conversion machine.",
  keywords: ["website design", "conversion optimization", "booking website", "service business", "barbershop website", "local SEO"],
  openGraph: {
    title: "Modern Website That Converts | PrairieSignal",
    description: "Clean design, fast performance, and one-click booking from every page.",
    url: "https://prairiesignal.ca/solutions/website",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Website That Converts | PrairieSignal",
    description: "Clean design, fast performance, and one-click booking from every page.",
  },
  alternates: {
    canonical: "/solutions/website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function WebsitePage() {
  return <WebsitePageClient />
}