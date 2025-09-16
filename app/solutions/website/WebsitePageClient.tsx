"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Section } from "@/components/Section"
import { Stat } from "@/components/Stat"
import { CtaBar } from "@/components/CtaBar"
import { trackEvent } from "@/components/Analytics"

export default function WebsitePageClient() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const handleCTAClick = (cta: string) => {
    if (typeof window !== "undefined" && window.plausible) {
      trackEvent("cta_clicked", { cta, location: "website-page" })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--ps-primary)] text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <main id="main-content" className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Hero Section */}
        <section className="min-h-screen py-20 sm:py-32 flex items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">
                PRAIRIESIGNAL / SOLUTIONS
              </div>
              <h1 className="text-4xl sm:text-5xl font-light tracking-tight">
                Modern Website That Converts
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Clean design, fast performance, and one-click booking from every page.
                Transform your service business website into a conversion machine.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Link
                  href="/contact"
                  className="bg-primary text-primary-foreground rounded-md px-6 py-3 hover:bg-primary/90 transition-colors font-medium"
                  onClick={() => handleCTAClick("consult")}
                >
                  Book a 20-min consult
                </Link>
                <Link
                  href="#outcomes"
                  className="border border-border rounded-md px-6 py-3 hover:border-primary transition-colors"
                >
                  See Results
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <Section id="outcomes" title="Outcomes" eyebrow="RESULTS">
          <div className="grid gap-6 lg:grid-cols-3">
            <Stat value="+15–30%" label="Site-to-booking conversion increase" />
            <Stat value="<2s" label="Largest Contentful Paint (LCP)" />
            <Stat value="AA" label="WCAG accessibility compliance" />
          </div>
        </Section>

        {/* Core Pages Section */}
        <Section id="pages" title="Core Pages" eyebrow="FOUNDATION">
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Homepage",
                description: "Hero section with clear value prop, social proof, and prominent booking CTA",
                features: ["Clear value proposition", "Trust signals", "Mobile-first design", "Fast loading"]
              },
              {
                title: "Services & Pricing",
                description: "Transparent pricing with clear service tiers and booking integration",
                features: ["Service packages", "Price transparency", "Booking integration", "FAQ section"]
              },
              {
                title: "Team & Gallery",
                description: "Build trust with professional photos and team member profiles",
                features: ["Professional photos", "Team bios", "Certifications", "Client testimonials"]
              },
              {
                title: "Location & Contact",
                description: "Local SEO optimized with maps, hours, and contact information",
                features: ["Google Maps integration", "Business hours", "Contact forms", "Local SEO"]
              }
            ].map((page, index) => (
              <div
                key={index}
                className="group p-6 border border-border rounded-lg hover:border-primary/50 transition-all duration-500 hover:shadow-lg bg-card"
              >
                <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                  {page.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">{page.description}</p>
                <div className="space-y-2">
                  {page.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Technical Foundation */}
        <Section id="tech" title="Technical Foundation" eyebrow="PERFORMANCE">
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Modern Stack",
                features: ["Next.js 15 for performance", "Tailwind CSS for styling", "TypeScript for reliability", "Vercel for hosting"]
              },
              {
                title: "SEO & Performance",
                features: ["Core Web Vitals optimized", "Schema.org structured data", "Local SEO optimized", "Mobile-first responsive"]
              }
            ].map((tech, index) => (
              <div key={index} className="p-6 border border-border rounded-lg bg-card">
                <h3 className="font-medium mb-4">{tech.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {tech.features.map((feature, idx) => (
                    <div key={idx}>{feature}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Content Needs */}
        <Section id="content" title="Content We'll Need" eyebrow="REQUIREMENTS">
          <div className="p-6 border border-border rounded-lg bg-card">
            <div className="grid gap-2 md:grid-cols-2">
              {[
                "Logo files (SVG preferred)",
                "High-quality service photos",
                "Team member headshots",
                "Service descriptions and pricing",
                "Business hours and location details",
                "Contact information and policies",
                "Client testimonials",
                "Brand colors and guidelines"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <CtaBar
          title="Ready to Get Started?"
          description="Transform your online presence with a website that actually drives bookings."
          primaryCta={{
            text: "Book a 20-min consult",
            href: "/contact",
            variant: "primary"
          }}
          secondaryCta={{
            text: "View Pricing Options",
            href: "/pricing",
            variant: "secondary"
          }}
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Modern Website That Converts",
              "description": "Clean design, fast performance, and one-click booking from every page",
              "provider": {
                "@type": "Organization",
                "name": "PrairieSignal",
                "url": "https://prairiesignal.ca",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Calgary",
                  "addressRegion": "AB",
                  "addressCountry": "CA"
                }
              },
              "areaServed": {
                "@type": "Place",
                "name": "Calgary, Alberta"
              },
              "serviceType": "Web Design & Development",
              "url": "https://prairiesignal.ca/solutions/website"
            })
          }}
        />
      </main>
    </div>
  )
}
