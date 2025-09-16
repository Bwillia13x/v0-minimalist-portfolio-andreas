"use client"

import { useEffect, useState } from "react"
import { trackEvent } from "@/components/Analytics"

interface TocItem {
  id: string
  title: string
  level: number
}

interface TocSpyProps {
  containerId?: string
}

export function TocSpy({ containerId = "toc-content" }: TocSpyProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    // Find all headings in the main content area
    const headings = document.querySelectorAll('main h1, main h2, main h3, main h4, main h5, main h6')

    const items: TocItem[] = Array.from(headings)
      .filter(heading => heading.id) // Only include headings with IDs
      .map(heading => ({
        id: heading.id,
        title: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1)) // h1 = 1, h2 = 2, etc.
      }))

    setTocItems(items)

    // Set up intersection observer for scrollspy
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newActiveId = entry.target.id
            if (activeId !== newActiveId) {
              setActiveId(newActiveId)
              // Track section views
              const currentItem = items.find(item => item.id === newActiveId)
              trackEvent('section_view', {
                section_id: newActiveId,
                section_title: currentItem?.title
              })
            }
          }
        })
      },
      {
        rootMargin: '-20% 0px -80% 0px', // Active when heading is in top 20% of viewport
        threshold: 0
      }
    )

    headings.forEach((heading) => {
      observer.observe(heading)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (tocItems.length === 0) {
    return null
  }

  return (
    <nav id={containerId} className="space-y-2">
      {tocItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`block w-full text-left text-sm hover:text-primary transition-colors duration-200 ${
            activeId === item.id
              ? 'text-primary font-medium'
              : 'text-muted-foreground'
          }`}
          style={{
            paddingLeft: `${(item.level - 1) * 12}px` // Indent based on heading level
          }}
        >
          <span className={`inline-block w-2 h-2 rounded-full mr-2 flex-shrink-0 ${
            activeId === item.id ? 'bg-primary' : 'bg-muted-foreground/50'
          }`} />
          {item.title}
        </button>
      ))}
    </nav>
  )
}
