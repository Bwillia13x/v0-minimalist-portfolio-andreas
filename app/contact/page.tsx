"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function ContactPage() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["contact"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-primary shadow-[0_0_0_2px_rgba(122,90,248,0.3)]" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <section
          id="contact"
          ref={(el) => { sectionsRef.current[0] = el; }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <header className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">PRAIRIESIGNAL / CONTACT</div>
              <h1 className="text-3xl sm:text-4xl font-light">Let’s fill your chairs</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                20 minutes to map your quick wins. Calgary-based, PIPEDA/PIPA-aware.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Discovery", "Readiness", "Pilot"].map((chip) => (
                  <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
                    {chip}
                  </span>
                ))}
              </div>
            </header>

            {/* Process Overview */}
            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">WHAT HAPPENS IN 20 MINUTES</div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    time: "5 min",
                    title: "Discovery",
                    description: "Learn about your current challenges and goals"
                  },
                  {
                    time: "10 min",
                    title: "Solutions",
                    description: "Show how AI automation can help your specific situation"
                  },
                  {
                    time: "3 min",
                    title: "Next Steps",
                    description: "Map out clear path forward if it makes sense"
                  },
                  {
                    time: "2 min",
                    title: "Q&A",
                    description: "Answer any questions about pricing, timeline, or fit"
                  }
                ].map((step, index) => (
                  <div key={index} className="rounded-lg border border-border p-4">
                    <div className="text-xs text-primary font-mono mb-2">{step.time}</div>
                    <div className="font-medium text-sm mb-1">{step.title}</div>
                    <div className="text-xs text-muted-foreground">{step.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Proof */}
            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">WHAT CLIENTS SAY</div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg border border-border p-6">
                  <div className="text-sm text-muted-foreground font-mono mb-2">BARBERSHOP OWNER • CALGARY</div>
                  <p className="text-sm text-muted-foreground mb-3 italic">
                    &ldquo;The team understood our business immediately. They didn&rsquo;t try to sell us something we didn&rsquo;t need, just helped us identify the highest-impact opportunities.&rdquo;
                  </p>
                  <div className="text-xs text-muted-foreground">Result: 40% reduction in no-shows</div>
                </div>
                <div className="rounded-lg border border-border p-6">
                  <div className="text-sm text-muted-foreground font-mono mb-2">SALON MANAGER • EDMONTON</div>
                  <p className="text-sm text-muted-foreground mb-3 italic">
                    &ldquo;Finally found someone who speaks our language. No tech jargon, just practical solutions that work in a busy barbershop.&rdquo;
                  </p>
                  <div className="text-xs text-muted-foreground">Result: $800/month additional revenue</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                <div className="space-y-6">
                  <div className="text-sm text-muted-foreground font-mono">GET STARTED</div>
                  <div className="grid gap-4">
                    <Link href="#book" className="group block p-6 border border-primary/20 bg-primary/5 rounded-lg hover:border-primary/40 transition-all duration-500 hover:shadow-lg">
                      <div className="space-y-2">
                        <div className="font-medium group-hover:text-primary transition-colors duration-300">📅 Book Free 20-Min Consult</div>
                        <div className="text-sm text-muted-foreground">Map your quick wins together • No commitment</div>
                      </div>
                    </Link>
                    <Link href="mailto:hello@prairiesignal.ca" className="group block p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg">
                      <div className="space-y-2">
                        <div className="font-medium group-hover:text-muted-foreground transition-colors duration-300">✉️ hello@prairiesignal.ca</div>
                        <div className="text-sm text-muted-foreground">Direct email • 24hr response</div>
                      </div>
                    </Link>
                    <Link href="/demo" className="group block p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg">
                      <div className="space-y-2">
                        <div className="font-medium group-hover:text-muted-foreground transition-colors duration-300">🎬 Watch Live Demo</div>
                        <div className="text-sm text-muted-foreground">See AI automation in action • 2 minutes</div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="text-sm text-muted-foreground font-mono">WHAT TO EXPECT</div>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Human-first approach:</strong> We speak your language, not tech jargon</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Privacy-compliant:</strong> PIPEDA/PIPA-aware, Calgary-based</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Practical focus:</strong> Low-lift automations that actually work</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>No pressure:</strong> Honest advice, clear next steps if it fits</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">FREQUENTLY ASKED</div>
              <div className="space-y-6">
                <div className="rounded-lg border border-border p-6">
                  <h3 className="font-medium mb-3">Do you only work with barbershops?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We specialize in barbershops and salons, but our automation approach works for any service business
                    with appointments and customer communication. We&rsquo;ve helped spas, dental offices, and fitness studios.
                  </p>
                </div>

                <div className="rounded-lg border border-border p-6">
                  <h3 className="font-medium mb-3">How quickly do you see results?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Most clients see initial improvements within 2-4 weeks. Rebooking automation shows results immediately,
                    while complex workflows take 6-8 weeks to fully optimize.
                  </p>
                </div>

                <div className="rounded-lg border border-border p-6">
                  <h3 className="font-medium mb-3">What if we&rsquo;re not technical?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    That&rsquo;s perfectly fine! We handle all technical setup and provide training. Our solutions are designed for busy owners who don&rsquo;t have time for complex technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 PrairieSignal. All rights reserved.</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
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

              <button
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle conversation panel"
              >
                <span className="sr-only">Toggle conversation panel</span>
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}


