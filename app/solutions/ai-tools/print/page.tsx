"use client"

export default function AIToolsPrint() {
  return (
    <div className="min-h-screen bg-white text-black p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center border-b border-gray-300 pb-6">
          <h1 className="text-3xl font-light mb-2">AI Tools & Prompt Pack</h1>
          <p className="text-gray-600">Plug-and-play prompts and assistants for SMS, email, and sheets.</p>
          <div className="text-sm text-gray-500 mt-2">PrairieSignal - AI Tools Solution Overview</div>
        </header>

        {/* Categories Overview */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium border-b border-gray-200 pb-2">What&rsquo;s Included</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "SMS Templates",
                description: "Rebooking, reminders, confirmations",
                count: "25+ prompts"
              },
              {
                title: "Email Automation",
                description: "Welcome, follow-up, campaigns",
                count: "15+ prompts"
              },
              {
                title: "Sheets Automation",
                description: "Data enrichment, analysis",
                count: "20+ prompts"
              },
              {
                title: "Review Management",
                description: "Response templates, campaigns",
                count: "12+ prompts"
              }
            ].map((category, index) => (
              <div key={index} className="border border-gray-200 rounded p-4">
                <h3 className="font-medium mb-1">{category.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{category.count}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Prompts */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium border-b border-gray-200 pb-2">Sample Prompts</h2>
          <div className="space-y-6">
            {[
              {
                title: "Rebooking SMS - Basic",
                channel: "SMS",
                body: "Hi [Client_First], it's [Your_Name] at Andreas & Co. We have your regular Tuesday slot free next week at [Time]. Want me to hold it? Reply Y/N.",
                variables: ["Client_First", "Your_Name", "Time"]
              },
              {
                title: "Appointment Reminder",
                channel: "SMS",
                body: "Hi [Client_First], this is a reminder of your appointment tomorrow at [Time]. Looking forward to seeing you! Reply STOP to opt out.",
                variables: ["Client_First", "Time"]
              },
              {
                title: "Review Request",
                channel: "Email",
                body: "Hi [Client_First], thank you for visiting Andreas & Co yesterday. Would you mind leaving us a quick review? [Review Link]",
                variables: ["Client_First", "Review Link"]
              }
            ].map((prompt, index) => (
              <div key={index} className="border border-gray-200 rounded p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{prompt.title}</h3>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">{prompt.channel}</span>
                </div>
                <p className="text-sm text-gray-700 mb-3 font-mono bg-gray-50 p-2 rounded">{prompt.body}</p>
                <div className="flex flex-wrap gap-2">
                  {prompt.variables.map((variable, idx) => (
                    <span key={idx} className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                      [{variable}]
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium border-b border-gray-200 pb-2">Key Features</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-medium mb-3">Smart Features</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Character counter for SMS (≤140)</li>
                <li>• Opt-out toggle for compliance</li>
                <li>• Variable replacement system</li>
                <li>• Copy-to-clipboard functionality</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-medium mb-3">Safety & Compliance</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• PIPEDA/PIPA compliant</li>
                <li>• Human-in-the-loop approval</li>
                <li>• Audit trails for all usage</li>
                <li>• No PII storage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium border-b border-gray-200 pb-2">Getting Started</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                step: "1",
                title: "Download",
                description: "Get the complete prompt library (MD/PDF)"
              },
              {
                step: "2",
                title: "Customize",
                description: "Replace variables with your business details"
              },
              {
                step: "3",
                title: "Implement",
                description: "Use with your preferred automation tools"
              }
            ].map((step, index) => (
              <div key={index} className="text-center border border-gray-200 rounded p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">{step.step}</div>
                <h3 className="font-medium mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
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
