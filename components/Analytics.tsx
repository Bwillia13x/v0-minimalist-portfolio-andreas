"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    plausible?: (event: string, options?: Record<string, any>) => void
  }
}

export function trackEvent(event: string, props?: Record<string, any>) {
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(event, { props })
  }
}

export function Analytics() {
  useEffect(() => {
    const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
    if (!domain) return

    const existing = document.querySelector(
      `script[src="https://plausible.io/js/script.js"][data-domain="${domain}"]`
    ) as HTMLScriptElement | null
    if (existing) return

    const script = document.createElement("script")
    script.src = "https://plausible.io/js/script.js"
    script.defer = true
    script.setAttribute("data-domain", domain)
    script.addEventListener("load", () => {
      if (typeof window !== "undefined" && window.plausible) {
        window.plausible("pageview")
      }
    })

    document.head.appendChild(script)
  }, [])

  return null
}
