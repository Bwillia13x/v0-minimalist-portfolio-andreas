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
