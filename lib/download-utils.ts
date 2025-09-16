import { trackEvent } from '@/components/Analytics'
import type { PromptPack } from '@/data/prompt-pack'

export function downloadMarkdown(pack: PromptPack, format: 'md' | 'pdf' = 'md') {
  const lines: string[] = [
    '# PrairieSignal Prompt Pack',
    '',
    'A comprehensive collection of AI prompts for service businesses.',
    '',
    '## Overview',
    '',
    '- **Total Prompts**: ' + pack.sections.reduce((sum, section) => sum + section.entries.length, 0),
    '- **Last Updated**: ' + new Date().toLocaleDateString(),
    '- **Canadian Localization**: All prompts use Canadian spelling',
    '- **Safety First**: Human approval recommended for all automations',
    '',
    '---',
    ''
  ]

  // Add categories summary
  lines.push('## Categories')
  lines.push('')
  pack.categories.forEach(category => {
    const section = pack.sections.find(s => s.entries.some(e => e.tags.some(t => category.filters.includes(t))))
    const count = section?.entries.filter(e => e.tags.some(t => category.filters.includes(t))).length || 0
    lines.push(`- **${category.title}**: ${count} prompts`)
    lines.push(`  ${category.summary}`)
    lines.push('')
  })

  lines.push('---', '')

  // Add sections and prompts
  pack.sections.forEach(section => {
    lines.push(`## ${section.title}`, '')

    if (section.description) {
      lines.push(section.description, '')
    }

    section.entries.forEach(entry => {
      lines.push(`### ${entry.title}`, '')
      lines.push(`**Channel**: ${entry.channel}`)
      lines.push(`**Tags**: ${entry.tags.join(', ')}`)
      if (entry.maxChars) {
        lines.push(`**Character Limit**: ${entry.maxChars}`)
      }
      lines.push('')
      lines.push('```', entry.body, '```', '')

      if (entry.variables && entry.variables.length > 0) {
        lines.push('**Variables to replace**:', '')
        entry.variables.forEach(variable => {
          lines.push(`- [${variable}]`)
        })
        lines.push('')
      }
    })
  })

  // Add footer
  lines.push('---', '')
  lines.push('**PrairieSignal Prompt Pack**')
  lines.push('Built for service businesses • Human-in-the-loop AI')
  lines.push('© 2025 PrairieSignal. All rights reserved.')

  const content = lines.join('\n')
  const blob = new Blob([content], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = `PrairieSignal_Prompt_Pack_${new Date().toISOString().split('T')[0]}.md`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)

  URL.revokeObjectURL(url)

  trackEvent?.('prompt_downloaded', { format })
}

export function downloadPDF(pack: PromptPack) {
  // For now, we'll create a print-optimized version
  // In a real implementation, you'd use a library like jsPDF or send to a server

  // Create print-optimized HTML
  const printContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>PrairieSignal Prompt Pack</title>
      <style>
        @media print {
          body { font-family: system-ui, -apple-system, sans-serif; margin: 0; padding: 20px; }
          h1 { color: #000; page-break-after: avoid; }
          h2 { color: #333; margin-top: 30px; page-break-after: avoid; }
          h3 { color: #555; page-break-after: avoid; }
          pre { background: #f5f5f5; padding: 15px; border-radius: 4px; white-space: pre-wrap; font-size: 12px; }
          .section { margin-bottom: 40px; }
          .footer { margin-top: 50px; border-top: 1px solid #ccc; padding-top: 20px; font-size: 10px; color: #666; }
        }
      </style>
    </head>
    <body>
      <h1>PrairieSignal Prompt Pack</h1>
      <p>A comprehensive collection of AI prompts for service businesses.</p>

      <h2>Overview</h2>
      <ul>
        <li><strong>Total Prompts:</strong> ${pack.sections.reduce((sum, section) => sum + section.entries.length, 0)}</li>
        <li><strong>Last Updated:</strong> ${new Date().toLocaleDateString()}</li>
        <li><strong>Canadian Localization:</strong> All prompts use Canadian spelling</li>
        <li><strong>Safety First:</strong> Human approval recommended for all automations</li>
      </ul>

      ${pack.sections.map(section => `
        <div class="section">
          <h2>${section.title}</h2>
          ${section.description ? `<p>${section.description}</p>` : ''}

          ${section.entries.map(entry => `
            <h3>${entry.title}</h3>
            <p><strong>Channel:</strong> ${entry.channel}</p>
            <p><strong>Tags:</strong> ${entry.tags.join(', ')}</p>
            ${entry.maxChars ? `<p><strong>Character Limit:</strong> ${entry.maxChars}</p>` : ''}
            <pre>${entry.body}</pre>
            ${entry.variables && entry.variables.length > 0 ?
              `<p><strong>Variables:</strong> ${entry.variables.map(v => `[${v}]`).join(', ')}</p>` :
              ''}
          `).join('')}
        </div>
      `).join('')}

      <div class="footer">
        <p><strong>PrairieSignal Prompt Pack</strong></p>
        <p>Built for service businesses • Human-in-the-loop AI</p>
        <p>© 2025 PrairieSignal. All rights reserved.</p>
      </div>
    </body>
    </html>
  `

  const printWindow = window.open('', '_blank')
  if (printWindow) {
    printWindow.document.write(printContent)
    printWindow.document.close()
    printWindow.print()
  }

  trackEvent?.('prompt_downloaded', { format: 'pdf' })
}
