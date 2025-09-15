import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "AI Enablement — Andreas & Co.",
  description:
    "Practical, low-lift automations that rescue same-day revenue, keep clients loyal, and reduce front-desk busywork.",
  keywords: ["AI automation", "barbershop software", "appointment management", "customer retention", "business automation"],
  authors: [{ name: "PrairieSignal" }],
  creator: "PrairieSignal",
  publisher: "PrairieSignal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://prairiesignal.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "AI Enablement — Andreas & Co.",
    description: "Practical AI automations for service businesses. Rescue same-day revenue, keep clients loyal, reduce busywork.",
    url: 'https://prairiesignal.ca',
    siteName: 'PrairieSignal',
    images: [
      {
        url: '/hero-dark-gold.svg',
        width: 1200,
        height: 630,
        alt: 'PrairieSignal - AI Enablement for Service Businesses',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Enablement — Andreas & Co.",
    description: "Practical AI automations for service businesses. Rescue same-day revenue, keep clients loyal, reduce busywork.",
    images: ['/hero-dark-gold.svg'],
    creator: '@prairiesignal',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
