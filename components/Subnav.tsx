"use client"

import { useEffect, useState } from 'react'

interface NavItem {
  id: string
  label: string
}

interface SubnavProps {
  items: NavItem[]
  activeSection: string
}

export function Subnav({ items, activeSection }: SubnavProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = isMobile ? 100 : 80
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  if (isMobile) {
    return (
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="flex gap-4 p-4 overflow-x-auto">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm whitespace-nowrap px-3 py-2 rounded-md transition-colors ${
                activeSection === item.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label={`Navigate to ${item.label}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    )
  }

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`w-2 h-8 rounded-full transition-all duration-500 ${
              activeSection === item.id
                ? 'bg-primary shadow-[0_0_0_2px_rgba(122,90,248,0.3)]'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
            }`}
            aria-label={`Navigate to ${item.label}`}
          />
        ))}
      </div>
    </nav>
  )
}
