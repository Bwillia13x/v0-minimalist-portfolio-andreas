'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

type NavItem = {
  href: string
  label: string
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/demo', label: 'Live Demo' },
  { href: '/prompt-pack', label: 'Prompt Pack' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/security', label: 'Security' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 2)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b ${isScrolled ? 'border-border/80' : 'border-transparent'} bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50`}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 h-14 flex items-center justify-between gap-4">
        <Link href="/" className="text-sm font-medium tracking-wide">
          PrairieSignal
        </Link>
        <nav className="-mx-2 overflow-x-auto">
          <ul className="flex items-center gap-1 px-2">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`text-sm px-3 py-1.5 rounded-md border transition-all ${
                      active
                        ? 'bg-primary text-primary-foreground border-transparent'
                        : 'border-border hover:border-muted-foreground/60 text-foreground'
                    } focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
            <li>
              <Link
                href="/andreas"
                className="text-sm px-3 py-1.5 rounded-md border border-border hover:border-muted-foreground/60 focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
              >
                Pitch
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}


