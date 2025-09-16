"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode, useEffect } from "react"
import { TocSpy } from "@/components/TocSpy"

interface SolutionsLayoutProps {
  children: ReactNode
}

export default function SolutionsLayout({ children }: SolutionsLayoutProps) {
  const pathname = usePathname()

  // Extract current page from pathname
  const currentPage = pathname.split('/').pop() || 'website'

  // Breadcrumb data
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions/website' },
    { label: getPageTitle(currentPage), href: pathname }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Breadcrumb Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <div key={`${crumb.href}-${index}`} className="flex items-center gap-2">
                {index > 0 && (
                  <svg
                    className="w-4 h-4 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
                <Link
                  href={crumb.href}
                  className={`hover:text-primary transition-colors ${
                    index === breadcrumbs.length - 1
                      ? 'text-foreground font-medium'
                      : 'text-muted-foreground'
                  }`}
                >
                  {crumb.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Solutions Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { id: 'website', label: 'Website', href: '/solutions/website' },
              { id: 'marketing', label: 'Marketing', href: '/solutions/marketing' },
              { id: 'ai-tools', label: 'AI Tools', href: '/solutions/ai-tools' }
            ].map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`px-3 py-1.5 rounded-md border transition-all ${
                  pathname === item.href
                    ? 'bg-primary text-primary-foreground border-transparent'
                    : 'border-border hover:border-muted-foreground/60 text-foreground'
                } focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Solutions Menu */}
          <div className="md:hidden">
            <select
              value={pathname}
              onChange={(e) => window.location.href = e.target.value}
              className="bg-background border border-border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="/solutions/website">Website</option>
              <option value="/solutions/marketing">Marketing</option>
              <option value="/solutions/ai-tools">AI Tools</option>
            </select>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex">
        {/* Sidebar Scrollspy - Hidden on mobile */}
        <aside className="hidden lg:block w-64 border-r border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-6">
            <h2 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
              On This Page
            </h2>
            <TocSpy />
          </div>
        </aside>

        {/* Page Content */}
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </main>
    </div>
  )
}

function getPageTitle(page: string): string {
  switch (page) {
    case 'website':
      return 'Website Design'
    case 'marketing':
      return 'Marketing Engine'
    case 'ai-tools':
      return 'AI Tools'
    default:
      return 'Solutions'
  }
}
