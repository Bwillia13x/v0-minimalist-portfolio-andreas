"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function MarketingPage() {
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
          {["marketing", "timeline", "content", "samples"].map((section) => (
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
          id="marketing"
          ref={(el) => { sectionsRef.current[0] = el; }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <header className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">PRAIRIESIGNAL / MARKETING</div>
              <h1 className="text-3xl sm:text-4xl font-light">Always On, On-Brand</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                AI helps you publish consistently—social posts, emails, and landing pages—without adding workload. Same voice, better reach.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {["SEO", "Social", "Email", "Blog"].map((chip) => (
                  <span key={chip} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-4 text-sm">
                <Link href="#timeline" className="bg-primary text-primary-foreground rounded-md border border-transparent px-3 py-2 hover:bg-primary/90 transition-colors">See Timeline</Link>
                <Link href="#samples" className="rounded-md border border-border px-3 py-2 hover:border-[color:var(--brand-gold)] transition-colors">View Samples</Link>
                <Link href="#content" className="rounded-md border border-border px-3 py-2 hover:border-[color:var(--brand-gold)] transition-colors">Content Strategy</Link>
              </div>
            </header>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">HOW IT WORKS</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    icon: "🎯",
                    title: "AI-Powered Content Creation",
                    description: "Generate on-brand social posts, email campaigns, and blog content automatically",
                    features: ["Consistent voice", "Trending topics", "Engagement optimization"]
                  },
                  {
                    icon: "📊",
                    title: "Smart Scheduling & Analytics",
                    description: "AI suggests optimal posting times and analyzes performance to improve reach",
                    features: ["Best time scheduling", "Performance tracking", "A/B testing"]
                  },
                  {
                    icon: "✅",
                    title: "Human Approval Workflow",
                    description: "All AI-generated content goes through your approval before publishing",
                    features: ["Review process", "Edit capabilities", "Brand compliance"]
                  },
                  {
                    icon: "📈",
                    title: "SEO & Local Search Optimization",
                    description: "Automatically optimize content for local search and Google My Business",
                    features: ["Local keywords", "Schema markup", "GMB integration"]
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl">{feature.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mt-1">{feature.description}</p>
                        </div>
                      </div>
                      <div className="grid gap-2 sm:grid-cols-1">
                        {feature.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feat}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="timeline"
          ref={(el) => { sectionsRef.current[1] = el; }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Implementation Timeline</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                From brand voice to automated content engine in just 4 weeks.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">PHASED APPROACH</div>
              <div className="space-y-6">
                {[
                  {
                    phase: "Week 1",
                    title: "Brand Voice & Foundation",
                    description: "Establish consistent voice and prepare technical foundations",
                    tasks: [
                      "Brand voice guidelines creation",
                      "SEO audit and keyword research",
                      "Social media account optimization",
                      "Content calendar template setup"
                    ]
                  },
                  {
                    phase: "Week 2",
                    title: "Content Engine Setup",
                    description: "Configure AI tools and approval workflows",
                    tasks: [
                      "AI prompt library setup",
                      "Approval workflow configuration",
                      "Social media scheduling tools",
                      "Initial content batch creation"
                    ]
                  },
                  {
                    phase: "Week 3",
                    title: "Campaign Launch & Optimization",
                    description: "Launch automated campaigns and optimize performance",
                    tasks: [
                      "Automated posting schedule",
                      "Email campaign automation",
                      "Performance monitoring setup",
                      "A/B testing framework"
                    ]
                  },
                  {
                    phase: "Week 4",
                    title: "Scale & Refine",
                    description: "Expand successful campaigns and refine based on data",
                    tasks: [
                      "Campaign expansion",
                      "Advanced analytics implementation",
                      "Team training and handover",
                      "Performance optimization"
                    ]
                  }
                ].map((phase, index) => (
                  <div
                    key={index}
                    className="group grid lg:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="lg:col-span-3">
                      <div className="text-lg font-medium text-primary">{phase.phase}</div>
                    </div>
                    <div className="lg:col-span-6 space-y-3">
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {phase.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                    </div>
                    <div className="lg:col-span-3 space-y-2">
                      {phase.tasks.map((task, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {task}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="content"
          ref={(el) => { sectionsRef.current[2] = el; }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Content Types We Handle</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Consistent, engaging content across all your marketing channels.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">CONTENT LIBRARY</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    title: "Social Media Posts",
                    description: "Instagram, Facebook, and LinkedIn posts with optimal timing and hashtags",
                    examples: ["Before/after photos", "Tip Tuesday posts", "Behind-the-scenes content", "Customer testimonials"]
                  },
                  {
                    title: "Email Campaigns",
                    description: "Welcome sequences, rebooking reminders, and promotional newsletters",
                    examples: ["Appointment confirmations", "Service promotions", "Loyalty program updates", "Seasonal campaigns"]
                  },
                  {
                    title: "Blog & SEO Content",
                    description: "Local SEO-optimized articles and service landing pages",
                    examples: ["Local service guides", "Style trend articles", "Staff spotlights", "How-to tutorials"]
                  },
                  {
                    title: "Promotional Materials",
                    description: "Seasonal campaigns, special offers, and event promotions",
                    examples: ["Holiday promotions", "New service launches", "Referral campaigns", "Membership drives"]
                  }
                ].map((content, index) => (
                  <div
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {content.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{content.description}</p>
                      <div className="space-y-2">
                        <div className="text-xs text-muted-foreground font-mono">EXAMPLES:</div>
                        {content.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="samples"
          ref={(el) => { sectionsRef.current[3] = el; }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Sample Content & Resources</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                See the quality and consistency of our AI-powered content creation.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">CONTENT SAMPLES</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    title: "Instagram Post (Services)",
                    content: "✂️ Transform your look with our signature fade and style. Clean lines, sharp details, and that fresh feeling you can't get anywhere else.\n\nBook your appointment today! 💺\n#AndreasBarbershop #CalgaryBarber #FreshCut #BarberLife",
                    type: "Social Media"
                  },
                  {
                    title: "Rebooking Email",
                    content: "Hi [Client Name],\n\nIt's been about 6 weeks since your last visit - we miss seeing you!\n\nWe have a great window this Tuesday at 2 PM for your usual fade and style. Should I hold it for you?\n\nBest,\nAndreas & Co Barbershop",
                    type: "Email"
                  },
                  {
                    title: "Blog Post (Local SEO)",
                    content: "The Complete Guide to Men's Haircuts in Calgary\n\nFrom classic fades to modern styles, Calgary's top barbershops are keeping men looking sharp. Here's what you need to know about finding the perfect cut in our city.",
                    type: "SEO Content"
                  },
                  {
                    title: "Review Response",
                    content: "Thanks so much for the 5-star review, Mike! We're thrilled you loved your haircut and the friendly service. Looking forward to seeing you again soon!\n\nBest regards,\nThe Andreas & Co Team",
                    type: "Customer Service"
                  }
                ].map((sample, index) => (
                  <div
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                          {sample.title}
                        </h3>
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {sample.type}
                        </span>
                      </div>
                      <div className="p-4 bg-muted/5 rounded-lg">
                        <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-sans leading-relaxed">
                          {sample.content}
                        </pre>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">RESOURCES & TOOLS</div>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    title: "Brand Voice Guide",
                    description: "Complete style guide with voice, tone, and brand guidelines",
                    download: "Download PDF"
                  },
                  {
                    title: "Content Calendar Template",
                    description: "Monthly content planning template with AI suggestions",
                    download: "Download Excel"
                  },
                  {
                    title: "Social Media Image Pack",
                    description: "Branded graphics and templates for consistent posting",
                    download: "Download ZIP"
                  },
                  {
                    title: "Email Template Library",
                    description: "Ready-to-use email templates for all customer touchpoints",
                    download: "Download HTML"
                  }
                ].map((resource, index) => (
                  <div
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{resource.description}</p>
                      <button className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">
                        {resource.download} →
                      </button>
                    </div>
                  </div>
                ))}
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


