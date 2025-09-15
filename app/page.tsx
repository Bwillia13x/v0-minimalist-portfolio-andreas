"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
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
          {["intro", "work", "thoughts", "connect"].map((section) => (
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
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]">
            <img src="/hero-dark-gold.svg" alt="PrairieSignal AI Enablement background" className="w-full h-full object-cover opacity-60" />
          </div>
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PRAIRIESIGNAL / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  AI That Never Sleeps
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Practical, low-lift automations that rescue same-day revenue, keep clients loyal, and reduce front-desk busywork. Humans approve, AI drafts.
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-xs">
                  {["Rebooking", "Owner Pack", "Inventory", "Campaigns"].map((chip) => (
                    <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
                      {chip}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-2 text-sm">
                  <Link href="/demo" className="bg-primary text-primary-foreground rounded-md border border-transparent px-3 py-2 hover:bg-primary/90 transition-colors">Open the Live Demo</Link>
                  <Link href="/prompt-pack" className="rounded-md border border-border px-3 py-2 hover:border-[color:var(--brand-gold)] transition-colors">Download Prompt Pack (PDF/MD)</Link>
                  <Link href="/pricing" className="text-muted-foreground hover:text-[color:var(--brand-gold)] transition-colors">See Pricing & ROI →</Link>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Pilot-ready
                  </div>
                  <div>Andreas & Co.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">MODEL MIX</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>ChatGPT</div>
                  <div>Claude</div>
                  <div>Gemini</div>
                  <div>Paradigm</div>
                  <div>Shortcut</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["Fast", "Safe", "Plain English"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">AI Capabilities</h2>
              <div className="text-sm text-muted-foreground font-mono">01 — 04</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "01",
                  role: "Smart Rebooking System",
                  company: "AI-Powered Appointment Recovery",
                  description: "Imagine uploading your appointment list and instantly getting personalized text messages for each client. The AI analyzes their history, predicts the best time to contact them, and drafts friendly messages asking if they'd like to rebook. You review and approve before anything goes out.",
                  tech: ["Personalization", "Smart Timing", "Risk Assessment"],
                  example: "Sarah missed her haircut last month. AI suggests texting her Tuesday at 2 PM with: 'Hi Sarah, it's Andreas at Andreas & Co. We have your regular Tuesday slot free next week at 2 PM. Want me to hold it?'"
                },
                {
                  year: "02",
                  role: "Weekly Business Intelligence",
                  company: "Clear insights every Monday morning",
                  description: "Instead of spending hours analyzing spreadsheets, get a simple summary of what's working and what needs attention. The AI compares this week to the last 4 weeks and highlights trends, opportunities, and potential problems in plain English.",
                  tech: ["Automated Analysis", "Trend Detection", "Actionable Insights"],
                  example: "This week: Revenue up 12% from last month. Your Tuesday 2 PM slots are 90% booked (usually 75%). Consider adding more evening appointments - demand is growing there."
                },
                {
                  year: "03",
                  role: "Smart Inventory Assistant",
                  company: "Never run out of popular products",
                  description: "The AI tracks your product sales, predicts demand 4 weeks ahead, and alerts you before you run low on popular items. It also suggests product bundles that complement your services to increase average transaction value.",
                  tech: ["Demand Forecasting", "Stock Alerts", "Bundle Suggestions"],
                  example: "Alert: Shaving cream will run out in 12 days based on current sales. Consider bundling it with haircut packages - similar clients spend 23% more when you suggest complementary products."
                },
                {
                  year: "04",
                  role: "Customer Campaign Manager",
                  company: "Gentle reminders that respect boundaries",
                  description: "Automatically reach out to clients who haven't visited in a while, but with built-in respect for their time. Messages only go during business hours, include easy opt-out options, and require your approval before sending.",
                  tech: ["Respectful Outreach", "Opt-out Protection", "Personalized Messaging"],
                  example: "Mike hasn't been in for 8 weeks. At 10 AM on Wednesday: 'Hi Mike, it's Andreas at Andreas & Co. We miss seeing you! Would you like to book your next appointment?' (Client can reply 'STOP' anytime to opt out)"
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                    {job.example && (
                      <div className="mt-4 p-3 bg-muted/5 rounded-lg border-l-2 border-primary">
                        <div className="text-xs text-primary font-medium mb-1">Real Example:</div>
                        <div className="text-sm text-muted-foreground italic">{job.example}</div>
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="thoughts"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Resources</h2>

            {/* Success Stories */}
            <div className="space-y-8">
              <h3 className="text-xl font-light">Real Results</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg border border-border p-6">
                  <div className="text-sm text-muted-foreground font-mono mb-2">BARBERSHOP OWNER • CALGARY</div>
                  <p className="text-sm text-muted-foreground mb-3 italic">
                    "We were losing 20% of our appointments to no-shows. After implementing the rebooking system,
                    that dropped to 8%. The AI handles the outreach while we focus on great haircuts."
                  </p>
                  <div className="text-xs text-muted-foreground">60% reduction in lost revenue</div>
                </div>
                <div className="rounded-lg border border-border p-6">
                  <div className="text-sm text-muted-foreground font-mono mb-2">SALON MANAGER • EDMONTON</div>
                  <p className="text-sm text-muted-foreground mb-3 italic">
                    "The weekly owner reports save me 3 hours every Monday. I get clear insights on what's working
                    and what needs attention. Game changer for running the business."
                  </p>
                  <div className="text-xs text-muted-foreground">$12k annual savings in admin time</div>
                </div>
              </div>
            </div>

            {/* Expanded Resources */}
            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">TOOLS & GUIDES</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    title: "Complete Prompt Library",
                    excerpt: "50+ ready-to-use prompts for SMS, email, reviews, and business analysis. Copy-paste and customize for your needs.",
                    url: "/prompt-pack",
                    type: "Templates",
                    time: "5 min read"
                  },
                  {
                    title: "Interactive Demo",
                    excerpt: "Watch AI process real appointment data and generate personalized SMS campaigns with approval workflows.",
                    url: "/demo",
                    type: "Demo",
                    time: "2 min watch"
                  },
                  {
                    title: "Pricing Calculator",
                    excerpt: "See potential ROI and choose the right package. Includes real examples from similar businesses.",
                    url: "/pricing",
                    type: "Calculator",
                    time: "3 min read"
                  },
                  {
                    title: "Free Consultation",
                    excerpt: "20-minute call to discuss your specific needs and see how AI can transform your operations.",
                    url: "/contact",
                    type: "Consultation",
                    time: "20 min call"
                  },
                ].map((card, index) => (
                  <Link
                    key={index}
                    href={card.url}
                    className="group block p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                          {card.title}
                        </h3>
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {card.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{card.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <span>Open</span>
                          <svg
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                        <div className="text-xs text-muted-foreground">{card.time}</div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          </div>
        </section>

        <section id="connect" ref={(el) => (sectionsRef.current[3] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's turn ideas into bookings</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  20 minutes to map your quick wins. Calgary-based, PIPEDA/PIPA-aware.
                </p>

                <div className="space-y-4">
                  <Link
                    href="/demo"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">Book a 20-min consult</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">CONNECT</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Email", handle: "hello@prairiesignal.ca", url: "mailto:hello@prairiesignal.ca" },
                  { name: "Website", handle: "prairiesignal.ca", url: "https://prairiesignal.ca" },
                  { name: "LinkedIn", handle: "PrairieSignal", url: "#" },
                  { name: "Demo", handle: "Live Preview", url: "/demo" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Additional Resources */}
            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">LEARN & IMPLEMENT</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
                {[
                  {
                    title: "Getting Started Guide",
                    description: "Step-by-step instructions for implementing AI automation in your business. From setup to first results.",
                    category: "Guide",
                    items: ["Technical setup", "Staff training", "First automation"]
                  },
                  {
                    title: "ROI Case Studies",
                    description: "Real examples of businesses that transformed their operations with AI automation.",
                    category: "Case Studies",
                    items: ["Barbershop success", "Dental practice results", "ROI calculations"]
                  },
                  {
                    title: "Best Practices",
                    description: "Proven strategies for maximizing results and avoiding common pitfalls.",
                    category: "Tips",
                    items: ["Communication guidelines", "Privacy compliance", "Performance monitoring"]
                  }
                ].map((resource, index) => (
                  <div
                    key={index}
                    className="group p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-medium group-hover:text-muted-foreground transition-colors duration-300">
                          {resource.title}
                        </h3>
                        <span className="text-xs px-2 py-1 bg-muted/20 text-muted-foreground rounded-full">
                          {resource.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm">{resource.description}</p>
                      <div className="space-y-1">
                        {resource.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                      <button className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">
                        Learn more →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Wins */}
            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">QUICK WINS TO START TODAY</div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-medium mb-3">Week 1: Appointment Reminders</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Set up automated SMS reminders for tomorrow's appointments. Simple setup, immediate impact.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Reduce no-shows by 20-30%</li>
                    <li>• Takes 30 minutes to set up</li>
                    <li>• Works with any booking system</li>
                  </ul>
                </div>

                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-medium mb-3">Week 2: Review Response</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Automatically respond to Google reviews with personalized, professional replies.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Improve online reputation</li>
                    <li>• Convert satisfied customers to advocates</li>
                    <li>• Handle 90% of reviews automatically</li>
                  </ul>
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

              <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
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
