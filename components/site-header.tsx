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
  { href: '/solutions/website', label: 'Website' },
  { href: '/solutions/marketing', label: 'Marketing' },
  { href: '/solutions/ai-tools', label: 'AI Tools' },
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
        <nav className="-mx-2 overflow-x-auto" aria-label="Primary">
          <ul className="flex items-center gap-1 px-2 py-1 border border-border/70 rounded-full bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/50 shadow-sm">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`group relative text-sm px-3 py-1.5 rounded-full border transition-all ${
                      active
                        ? 'bg-primary text-primary-foreground border-transparent shadow-[inset_0_-1px_0_rgba(255,255,255,0.15)]'
                        : 'border-border/70 hover:border-muted-foreground/60 hover:bg-muted/30 text-foreground'
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60`}
                  >
                    {item.label}
                    <span
                      className={`pointer-events-none absolute left-3 right-3 bottom-1 h-0.5 rounded-full transition-opacity ${
                        active ? 'opacity-80 bg-[var(--brand-gold)]' : 'opacity-0 group-hover:opacity-60 bg-[var(--brand-gold)]'
                      }`}
                    />
                  </Link>
                </li>
              )
            })}

            <li className="ml-1">
              <Link
                href="/andreas"
                className="text-sm px-3 py-1.5 rounded-full border border-[var(--ps-primary)] text-[var(--ps-primary)] hover:bg-[var(--ps-primary)] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 shadow-[0_0_0_1px_var(--ps-primary)]"
                aria-label="Pitch"
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


