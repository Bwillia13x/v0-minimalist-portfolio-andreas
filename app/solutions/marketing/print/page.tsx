"use client"

export default function MarketingPrint() {
  return (
    <div className="min-h-screen bg-white text-black p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center border-b border-gray-300 pb-6">
          <h1 className="text-3xl font-light mb-2">Marketing Engine That Works</h1>
          <p className="text-gray-600">Steady content, gentle reminders, and opt-in growth with human approvals.</p>
          <div className="text-sm text-gray-500 mt-2">PrairieSignal - Marketing Solution Overview</div>
        </header>

        {/* Outcomes */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium border-b border-gray-200 pb-2">Outcomes</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 border border-gray-200 rounded">
              <div className="text-2xl font-bold text-green-600 mb-1">↑ 40%</div>
              <div className="text-sm text-gray-600">Review velocity</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded">
              <div className="text-2xl font-bold text-red-600 mb-1">↓ 20–30%</div>
              <div className="text-sm text-gray-600">No-show rate</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded">
              <div className="text-2xl font-bold text-blue-600 mb-1">Weekly</div>
              <div className="text-sm text-gray-600">Content delivery</div>
            </div>
          </div>
        </section>

        {/* Marketing Programs */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium border-b border-gray-200 pb-2">Marketing Programs</h2>
          <div className="space-y-6">
            {[
              {
                title: "Content Marketing System",
                description: "Monthly themes and weekly content calendar",
                cadence: "2 posts/wk + 1 reel/wk; Instagram / Google",
                features: ["Monthly content themes", "Weekly posts and reels", "UGC integration", "Brand consistency"]
              },
              {
                title: "Review & Referral Motion",
                description: "Automated review requests and referral incentives",
                cadence: "Review request day+1; referral quarterly",
                features: ["Post-service review requests", "Referral program", "Loyalty incentives", "Social proof collection"]
              },
              {
                title: "Email & SMS Automation",
                description: "Personalized touchpoints throughout customer journey",
                cadence: "Welcome, Reminders, Win-back; ≤140 chars for SMS",
                features: ["Welcome sequences", "Appointment reminders", "Win-back campaigns", "Seasonal promotions"]
              },
              {
                title: "Paid Advertising (Lightweight)",
                description: "Geo-fenced offers and seasonal campaigns",
                cadence: "$10–$30/day; 2-week sprints",
                features: ["Local targeting", "Seasonal offers", "Performance tracking", "Budget optimization"]
              }
            ].map((program, index) => (
              <div key={index} className="border border-gray-200 rounded p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium text-lg">{program.title}</h3>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">{program.cadence}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{program.description}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-green-600 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* AI Assistance */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium border-b border-gray-200 pb-2">AI Assistance</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-medium mb-3">Content Generation</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Post ideas and captions</li>
                <li>• Hashtag optimization</li>
                <li>• Review response drafts</li>
                <li>• Campaign copy variations</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-medium mb-3">Performance Analysis</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Engagement insights</li>
                <li>• Content performance tracking</li>
                <li>• Audience analysis</li>
                <li>• Optimization recommendations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Privacy & Guardrails */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium border-b border-gray-200 pb-2">Privacy & Guardrails</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-medium mb-3">Compliance</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• PIPEDA/PIPA compliant data handling</li>
                <li>• Opt-out language in every message</li>
                <li>• Human approval for all campaigns</li>
                <li>• Audit trail of all communications</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-medium mb-3">Best Practices</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Quiet hours respected (8 PM - 8 AM)</li>
                <li>• Maximum 2 messages per week per customer</li>
                <li>• Easy unsubscribe process</li>
                <li>• Regular performance monitoring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 border-t border-gray-300 pt-6 mt-12">
          <div>PrairieSignal - AI Enablement for Service Businesses</div>
          <div className="mt-2">hello@prairiesignal.ca • prairiesignal.ca</div>
        </footer>
      </div>
    </div>
  )
}
