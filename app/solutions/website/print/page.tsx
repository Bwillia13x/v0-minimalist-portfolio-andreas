"use client"

export default function WebsitePrint() {
  return (
    <div className="min-h-screen bg-white text-black p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center border-b border-gray-300 pb-6">
          <h1 className="text-3xl font-light mb-2">Modern Website That Converts</h1>
          <p className="text-gray-600">Clean design, fast performance, and one-click booking from every page.</p>
          <div className="text-sm text-gray-500 mt-2">PrairieSignal - Website Solution Overview</div>
        </header>

        {/* Outcomes */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium border-b border-gray-200 pb-2">Outcomes</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 border border-gray-200 rounded">
              <div className="text-2xl font-bold text-blue-600 mb-1">+15–30%</div>
              <div className="text-sm text-gray-600">Site-to-booking conversion</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded">
              <div className="text-2xl font-bold text-blue-600 mb-1">&lt;2s</div>
              <div className="text-sm text-gray-600">Largest Contentful Paint</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded">
              <div className="text-2xl font-bold text-blue-600 mb-1">AA</div>
              <div className="text-sm text-gray-600">WCAG accessibility</div>
            </div>
          </div>
        </section>

        {/* Core Pages */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium border-b border-gray-200 pb-2">Core Pages</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "Homepage & Brand Story",
                description: "Hero section with booking CTA, brand story, and social proof",
                features: ["Hero booking CTA", "Brand narrative", "Trust indicators", "Mobile optimization"]
              },
              {
                title: "Services & Pricing",
                description: "Clear service offerings with prominent booking links",
                features: ["Service packages", "Pricing transparency", "Booking integration", "Seasonal offers"]
              },
              {
                title: "Team & Gallery",
                description: "Staff profiles, work gallery, and Instagram integration",
                features: ["Team profiles", "Before/after gallery", "Instagram feed", "Staff specialties"]
              },
              {
                title: "Location & Contact",
                description: "Complete location info, hours, and contact methods",
                features: ["Google Maps integration", "Parking info", "Contact forms", "Business hours"]
              }
            ].map((page, index) => (
              <div key={index} className="border border-gray-200 rounded p-4">
                <h3 className="font-medium mb-2">{page.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{page.description}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {page.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technology */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium border-b border-gray-200 pb-2">Technology Stack</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-medium mb-3">Technology Stack</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Next.js + Tailwind CSS for modern performance</li>
                <li>• Image optimization and lazy loading</li>
                <li>• Analytics integration and tracking</li>
                <li>• SEO optimization and meta management</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-medium mb-3">Performance & SEO</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Local SEO: schema markup, GMB sync</li>
                <li>• Core Web Vitals optimization</li>
                <li>• Mobile accessibility compliance</li>
                <li>• Fast loading times and smooth UX</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Needs */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium border-b border-gray-200 pb-2">Content We'll Need</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Logo/SVG files",
              "Service list with descriptions",
              "Price ranges and packages",
              "10+ professional photos",
              "Business hours and contact info",
              "Booking system integration details"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-sm">{item}</span>
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
