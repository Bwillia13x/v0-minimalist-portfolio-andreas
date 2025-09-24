import { pitchData } from "@/data/pitch"
import { StatusBadge } from "@/components/StatusBadge"

export default function PitchPrint() {
  return (
    <html>
      <head>
        <title>PrairieSignal — Andreas & Co Pitch (Print)</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{
          __html: `
            @page { size: Letter; margin: 0.5in; }
            @media print {
              body { color: #000; background: #fff; }
              .no-print { display: none !important; }
              * { -webkit-print-color-adjust: exact; color-adjust: exact; }
            }
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.4;
              color: #000;
              background: #fff;
              margin: 0;
              padding: 0;
            }
            h1, h2, h3 { page-break-after: avoid; }
            .section { margin-bottom: 2rem; page-break-inside: avoid; }
            .card { border: 1px solid #ccc; padding: 1rem; margin-bottom: 1rem; background: #fff; }
            .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
            .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
            .badge { padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; font-weight: 500; }
            .badge-planned { background: #dbeafe; color: #1e40af; }
            .badge-in_progress { background: #fef3c7; color: #92400e; }
            .badge-done { background: #dcfce7; color: #166534; }
            .timeline-bar { height: 8px; background: #e5e7eb; border-radius: 4px; margin: 1rem 0; }
            .timeline-fill { height: 100%; background: linear-gradient(to right, #6366f1, #a78bfa); border-radius: 4px; }
          `
        }} />
      </head>
      <body>
        {/* Header */}
        <div className="section">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '0.75rem', color: '#666', fontFamily: 'monospace', marginBottom: '0.5rem' }}>
              PRAIRIESIGNAL / ANDREAS & CO
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: '300', marginBottom: '0.5rem' }}>
              Andreas & Co Barbershop
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#666', maxWidth: 'none' }}>
              A concise growth plan: modern website refresh, AI-enabled marketing, and AI assistants for operations and quality of life.
            </p>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="section">
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', borderBottom: '2px solid #000', paddingBottom: '0.5rem' }}>
            Executive Summary
          </h2>

          <div className="grid-2">
            <div className="card">
              <h3 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.5rem' }}>Scope</h3>
              <p style={{ fontSize: '0.875rem', color: '#666' }}>
                Website refresh + AI-enabled marketing + AI assistants
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.5rem' }}>Timeline</h3>
              <p style={{ fontSize: '0.875rem', color: '#666' }}>
                4–6 weeks total (Phase 0–2)
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.5rem' }}>Est. Cost</h3>
              <p style={{ fontSize: '0.875rem', color: '#666' }}>
                Pilot B ${pitchData.priceBands.pilotB.toLocaleString()} → Pilot C ${pitchData.priceBands.pilotC.toLocaleString()}
              </p>
              <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.25rem' }}>
                Pass-through at cost (${pitchData.priceBands.passthroughRange[0]}–${pitchData.priceBands.passthroughRange[1]}/mo)
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.5rem' }}>Outcomes</h3>
              <p style={{ fontSize: '0.875rem', color: '#666' }}>
                Fewer no-shows, steadier bookings, faster responses, and clear Monday-morning insights.
              </p>
            </div>
          </div>

          {/* Assumptions */}
          <div className="card" style={{ marginTop: '1.5rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '1rem' }}>Assumptions & Constraints</h3>
            <ul style={{ fontSize: '0.875rem', color: '#666' }}>
              {pitchData.assumptions.map((assumption, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  • {assumption}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Implementation Roadmap */}
        <div className="section">
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', borderBottom: '2px solid #000', paddingBottom: '0.5rem' }}>
            Implementation Roadmap
          </h2>

          {/* Timeline Band */}
          <div style={{ marginBottom: '2rem' }}>
            <div className="timeline-bar">
              <div className="timeline-fill" style={{ width: '83.33%' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#666' }}>
              {pitchData.phases.map((phase, index) => (
                <span key={phase.id}>{phase.title}</span>
              ))}
            </div>
          </div>

          {/* Phase Details */}
          {pitchData.phases.map((phase, index) => (
            <div key={phase.id} className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '500' }}>
                  Phase {index === 0 ? '0' : index} — {phase.title}
                </h3>
                <span className={`badge badge-${phase.status || 'planned'}`}>
                  {phase.status === 'planned' ? 'Planned' : phase.status === 'in_progress' ? 'In Progress' : 'Done'}
                </span>
              </div>

              <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem' }}>
                {phase.goal}
              </p>

              <div style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>
                <strong>Duration:</strong> {phase.duration}
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ fontSize: '0.875rem' }}>Deliverables:</strong>
                <ul style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.5rem' }}>
                  {phase.deliverables.map((deliverable, idx) => (
                    <li key={idx} style={{ marginBottom: '0.25rem' }}>• {deliverable}</li>
                  ))}
                </ul>
              </div>

              <div style={{ fontSize: '0.875rem' }}>
                <strong>Exit Criteria:</strong> {phase.exit}
              </div>

              {phase.deps && (
                <div style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                  <strong>Dependencies:</strong> {phase.deps.join(', ')}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Website Refresh */}
        <div className="section">
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', borderBottom: '2px solid #000', paddingBottom: '0.5rem' }}>
            Website Refresh
          </h2>

          <div className="grid-2">
            {pitchData.website.core.map((page, index) => (
              <div key={index} className="card">
                <h3 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.5rem' }}>
                  {page.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem' }}>
                  {page.description}
                </p>
                <ul style={{ fontSize: '0.875rem', color: '#666' }}>
                  {page.features.map((feature, idx) => (
                    <li key={idx} style={{ marginBottom: '0.25rem' }}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Content Needs */}
          <div className="card" style={{ marginTop: '1rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '1rem' }}>Content We&apos;ll Need</h3>
            <div className="grid-2">
              {pitchData.website.contentNeeds.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
                  <span>•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Assistants */}
        <div className="section">
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', borderBottom: '2px solid #000', paddingBottom: '0.5rem' }}>
            AI Assistants
          </h2>

          {pitchData.assistants.map((assistant, index) => (
            <div key={assistant.id} className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{assistant.icon}</span>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '500' }}>{assistant.title}</h3>
              </div>

              <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem' }}>
                {assistant.description}
              </p>

              <div className="grid-2">
                {assistant.bullets.map((bullet, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
                    <span>•</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #ccc', fontSize: '0.875rem' }}>
                <strong>Approval Path:</strong> {assistant.approvalPath}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #ccc', textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', color: '#666' }}>
            © 2025 PrairieSignal. All rights reserved.
          </p>
          <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.5rem' }}>
            Confidential proposal for Andreas & Co Barbershop
          </p>
        </div>
      </body>
    </html>
  )
}
