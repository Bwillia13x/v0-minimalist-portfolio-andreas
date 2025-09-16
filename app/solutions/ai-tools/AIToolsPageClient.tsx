"use client"

import Link from "next/link"
import { useEffect, useRef, useState, useMemo } from "react"
import { promptPack } from "@/data/prompt-pack"
import { PromptSearch } from "@/components/PromptSearch"
import { PromptCard } from "@/components/PromptCard"
import { CategoryCard } from "@/components/CategoryCard"
import { CtaBar } from "@/components/CtaBar"
import { downloadMarkdown, downloadPDF } from "@/lib/download-utils"
import { trackEvent } from "@/components/Analytics"

export default function AIToolsPageClient() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState<string>("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const handleSearchChange = (query: string, filters: string[]) => {
    setSearchQuery(query)
    setSelectedFilters(filters)
  }

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? "" : categoryId)
    trackEvent('category_selected', { category_id: categoryId })
  }

  const handleDownload = async (format: 'md' | 'pdf') => {
    try {
      if (format === 'md') {
        await downloadMarkdown(promptPack, 'md')
      } else {
        await downloadPDF(promptPack)
      }
      trackEvent('download_completed', { format, source: 'ai-tools-page' })
    } catch (error) {
      console.error('Download failed:', error)
      trackEvent('download_failed', { format, error: error instanceof Error ? error.message : 'Unknown error' })
    }
  }

  const filteredPrompts = useMemo(() => {
    let filtered = promptPack.sections.flatMap(section => section.entries)

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(prompt =>
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.body.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Filter by selected filters
    if (selectedFilters.length > 0) {
      filtered = filtered.filter(prompt =>
        selectedFilters.includes(prompt.channel) ||
        prompt.tags.some(tag => selectedFilters.includes(tag))
      )
    }

    // Filter by active category
    if (activeCategory) {
      const category = promptPack.categories.find(cat => cat.id === activeCategory)
      if (category) {
        filtered = filtered.filter(prompt =>
          category.filters.some(filter => prompt.channel === filter || prompt.tags.includes(filter))
        )
      }
    }

    return filtered
  }, [searchQuery, selectedFilters, activeCategory])

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
                AI Tools & Prompt Pack
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Plug-and-play prompts and assistants for SMS, email, and sheets.
                Ready-to-use AI automation templates for service businesses.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <button
                  onClick={() => handleDownload('md')}
                  className="bg-primary text-primary-foreground rounded-md px-6 py-3 hover:bg-primary/90 transition-colors font-medium"
                >
                  Download MD Pack →
                </button>
                <Link
                  href="#prompts"
                  className="border border-border rounded-md px-6 py-3 hover:border-primary transition-colors"
                >
                  Browse Prompts
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12">
          <div className="space-y-6">
            <PromptSearch onChange={handleSearchChange} />

            {/* Categories */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {promptPack.categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  count={filteredPrompts.filter(prompt =>
                    category.filters.some(filter =>
                      prompt.channel === filter || prompt.tags.includes(filter)
                    )
                  ).length}
                  onClick={() => handleCategoryClick(category.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Prompts Section */}
        <section id="prompts" className="py-12">
          <div className="space-y-8">
            {promptPack.sections.map((section) => {
              const sectionPrompts = filteredPrompts.filter(prompt =>
                section.entries.some(entry => entry.id === prompt.id)
              )

              if (sectionPrompts.length === 0) return null

              return (
                <div key={section.id} className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-light">{section.title}</h2>
                    <span className="text-sm text-muted-foreground">
                      {sectionPrompts.length} prompts
                    </span>
                  </div>

                  {section.description && (
                    <p className="text-muted-foreground">{section.description}</p>
                  )}

                  <div className="grid gap-6">
                    {sectionPrompts.map((prompt) => (
                      <PromptCard key={prompt.id} entry={prompt} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Download Section */}
        <section className="py-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="group p-6 border border-primary/20 bg-primary/5 rounded-lg hover:border-primary/40 transition-all duration-500 hover:shadow-lg">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-medium group-hover:text-primary transition-colors duration-300">
                    Complete Prompt Library
                  </h3>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    Free Download
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {promptPack.sections.reduce((sum, section) => sum + section.entries.length, 0)}+ ready-to-use prompts for every business scenario
                </p>
                <button
                  onClick={() => handleDownload('md')}
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Download MD →
                </button>
              </div>
            </div>

            <div className="group p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-medium group-hover:text-muted-foreground transition-colors duration-300">
                    Implementation Guide
                  </h3>
                  <span className="text-xs px-2 py-1 bg-muted/20 text-muted-foreground rounded-full">
                    PDF Guide
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Step-by-step instructions for getting started with AI automation
                </p>
                <button
                  onClick={() => handleDownload('pdf')}
                  className="border border-border px-4 py-2 rounded-md text-sm hover:border-muted-foreground/50 transition-colors"
                >
                  Download PDF →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CtaBar
          title="Ready to Automate?"
          description="Transform your business operations with ready-to-use AI tools and templates."
          primaryCta={{
            text: "Download Prompt Pack",
            href: "#",
            variant: "primary",
            onClick: () => handleDownload('md')
          }}
          secondaryCta={{
            text: "View Implementation Guide",
            href: "#",
            variant: "secondary",
            onClick: () => handleDownload('pdf')
          }}
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "PrairieSignal AI Tools & Prompt Pack",
              "description": "Plug-and-play prompts and assistants for SMS, email, and sheets",
              "brand": {
                "@type": "Brand",
                "name": "PrairieSignal"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "CAD",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "PrairieSignal"
                }
              },
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
              "url": "https://prairiesignal.ca/solutions/ai-tools"
            })
          }}
        />
      </main>
    </div>
  )
}
