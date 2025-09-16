"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Section } from "@/components/Section"
import { trackEvent } from "@/components/Analytics"

export default function SolutionsPage() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const handleSolutionClick = (solution: string) => {
    trackEvent("solution_selected", { solution, source: "solutions_overview" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <main className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <section className="min-h-screen py-20 sm:py-32 flex items-center">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to home
              </Link>
              <div className="text-xs text-muted-foreground font-mono">PRAIRIESIGNAL</div>
            </div>

            <div className="space-y-6">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">
                SOLUTIONS
              </div>
              <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground">
                AI-Powered Solutions for Service Businesses
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Transform your barbershop, salon, or service business with our comprehensive suite of AI automation tools.
                From modern websites to intelligent marketing and operational efficiency.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Link
                  href="#overview"
                  className="bg-primary text-primary-foreground rounded-md px-4 py-2 hover:bg-primary/90 transition-colors"
                >
                  Explore Solutions
                </Link>
                <Link
                  href="/contact"
                  className="border border-border rounded-md px-4 py-2 hover:bg-surface transition-colors"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Overview */}
        <Section id="overview" title="Our Solutions">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Choose the solution that fits your needs, or combine them for maximum impact.
          </p>

          <div className="grid gap-8 lg:grid-cols-3 mt-8">
            {/* Website Solution */}
            <div className="group p-8 border border-border rounded-lg hover:border-primary/50 transition-all duration-500 hover:shadow-lg bg-surface">
              <div className="space-y-6">
                <div className="text-3xl">🌐</div>
                <div>
                  <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                    Modern Website
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mt-2">
                    Fast, mobile-optimized website that converts visitors into clients with built-in booking and clear service presentation.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">✓ Mobile-first design</div>
                  <div className="text-sm text-muted-foreground">✓ Built-in booking system</div>
                  <div className="text-sm text-muted-foreground">✓ SEO optimized</div>
                  <div className="text-sm text-muted-foreground">✓ Fast loading</div>
                </div>
                <Link
                  href="/solutions/website"
                  onClick={() => handleSolutionClick("website")}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Marketing Solution */}
            <div className="group p-8 border border-border rounded-lg hover:border-primary/50 transition-all duration-500 hover:shadow-lg bg-surface">
              <div className="space-y-6">
                <div className="text-3xl">📢</div>
                <div>
                  <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                    Marketing Engine
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mt-2">
                    AI-powered marketing automation that keeps clients engaged with personalized campaigns and automated content.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">✓ Automated campaigns</div>
                  <div className="text-sm text-muted-foreground">✓ Client re-engagement</div>
                  <div className="text-sm text-muted-foreground">✓ Social media content</div>
                  <div className="text-sm text-muted-foreground">✓ Review management</div>
                </div>
                <Link
                  href="/solutions/marketing"
                  onClick={() => handleSolutionClick("marketing")}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Learn more →
                </Link>
              </div>
            </div>

            {/* AI Tools Solution */}
            <div className="group p-8 border border-border rounded-lg hover:border-primary/50 transition-all duration-500 hover:shadow-lg bg-surface">
              <div className="space-y-6">
                <div className="text-3xl">🤖</div>
                <div>
                  <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                    AI Tools & Automation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mt-2">
                    Intelligent automation tools and prompt packs that reduce administrative work and improve client communication.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">✓ Smart rebooking</div>
                  <div className="text-sm text-muted-foreground">✓ Business intelligence</div>
                  <div className="text-sm text-muted-foreground">✓ Inventory management</div>
                  <div className="text-sm text-muted-foreground">✓ Client campaigns</div>
                </div>
                <Link
                  href="/solutions/ai-tools"
                  onClick={() => handleSolutionClick("ai-tools")}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* Combined Benefits */}
        <Section title="Why Choose PrairieSignal">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-light">Human-Centered AI</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our AI tools are designed to enhance human expertise, not replace it. Every automation includes human oversight
                and approval to ensure quality and maintain your personal touch with clients.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-sm">
                    <strong>Privacy-First:</strong> PIPEDA compliant with complete data control
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-sm">
                    <strong>Human Oversight:</strong> All AI suggestions require your approval
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-sm">
                    <strong>Calgary Focus:</strong> Local expertise for Alberta businesses
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-light">Proven Results</h3>
              <div className="space-y-4">
                <div className="p-4 border border-border rounded-lg bg-surface">
                  <div className="text-sm font-medium text-primary mb-1">60% Reduction in No-Shows</div>
                  <div className="text-xs text-muted-foreground">
                    Calgary barbershop saved $1,680/month with smart rebooking
                  </div>
                </div>
                <div className="p-4 border border-border rounded-lg bg-surface">
                  <div className="text-sm font-medium text-primary mb-1">3 Hours Saved Weekly</div>
                  <div className="text-xs text-muted-foreground">
                    Edmonton salon owners gained back valuable time with automated reporting
                  </div>
                </div>
                <div className="p-4 border border-border rounded-lg bg-surface">
                  <div className="text-sm font-medium text-primary mb-1">35% More Repeat Visits</div>
                  <div className="text-xs text-muted-foreground">
                    Gentle client re-engagement improved retention across multiple locations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section title="Ready to Transform Your Business?">
          <div className="text-center space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Start with one solution or implement all three. Our team will help you choose the best path for your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground rounded-md px-6 py-3 hover:bg-primary/90 transition-colors font-medium"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/solutions/website"
                className="border border-border rounded-md px-6 py-3 hover:bg-surface transition-colors"
              >
                View All Solutions
              </Link>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="py-12 sm:py-16 border-t border-border mt-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 PrairieSignal. All rights reserved.</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
