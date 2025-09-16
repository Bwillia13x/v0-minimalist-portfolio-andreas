"use client"

import { useState, useMemo, useEffect } from 'react'
import { trackEvent } from '@/components/Analytics'
import type { PromptEntry } from '@/data/prompt-pack'

interface PromptCardProps {
  entry: PromptEntry
  showOptOut?: boolean
}

export function PromptCard({ entry, showOptOut = true }: PromptCardProps) {
  const [copied, setCopied] = useState(false)
  const [includeOptOut, setIncludeOptOut] = useState(false)
  const [showVariableModal, setShowVariableModal] = useState(false)

  const baseText = useMemo(() => entry.body.trim(), [entry.body])

  const finalText = useMemo(() => {
    if (includeOptOut && entry.channel === 'sms') {
      return baseText + ' Reply STOP to opt out.'
    }
    return baseText
  }, [baseText, includeOptOut, entry.channel])

  const textLength = finalText.length
  const isOverLimit = entry.maxChars ? textLength > entry.maxChars : false

  const handleCopy = async () => {
    if (isOverLimit) return

    try {
      await navigator.clipboard.writeText(finalText)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)

      trackEvent?.('prompt_copied', {
        id: entry.id,
        channel: entry.channel,
        length: textLength
      })
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  const handleVariableReplace = () => {
    setShowVariableModal(true)
  }

  // Handle ESC key to close modal
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && showVariableModal) {
      setShowVariableModal(false)
    }
  }

  // Add/remove event listener for ESC key
  useEffect(() => {
    if (showVariableModal) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [showVariableModal])

  const VariableModal = () => {
    const [replacements, setReplacements] = useState<Record<string, string>>({})

    const applyReplacements = () => {
      let newText = baseText
      Object.entries(replacements).forEach(([variable, value]) => {
        if (value.trim()) {
          newText = newText.replace(new RegExp(`\\[${variable}\\]`, 'g'), value)
        }
      })

      // Update the text somehow - for now just copy the replaced version
      navigator.clipboard.writeText(newText)
      setShowVariableModal(false)
      trackEvent?.('variables_replaced', { id: entry.id, variables: Object.keys(replacements) })
    }

    return (
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        role="dialog"
        aria-modal="true"
        aria-labelledby="variable-modal-title"
        aria-describedby="variable-modal-description"
      >
        <div className="bg-background border border-border rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
          <h3 id="variable-modal-title" className="text-lg font-medium mb-2">Replace Variables</h3>
          <p id="variable-modal-description" className="text-sm text-muted-foreground mb-4">
            Fill in the variables to customize this prompt template.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); applyReplacements(); }}>
            <div className="space-y-3">
              {entry.variables?.map(variable => (
                <div key={variable} className="flex items-center gap-2">
                  <label
                    htmlFor={`variable-${variable}`}
                    className="text-sm font-medium min-w-[100px]"
                  >
                    [{variable}]
                  </label>
                  <input
                    id={`variable-${variable}`}
                    type="text"
                    placeholder={`Enter ${variable.toLowerCase().replace('_', ' ')}`}
                    value={replacements[variable] || ''}
                    onChange={(e) => setReplacements(prev => ({ ...prev, [variable]: e.target.value }))}
                    className="flex-1 bg-transparent border border-border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    aria-describedby={`variable-${variable}-help`}
                  />
                  <span id={`variable-${variable}-help`} className="sr-only">
                    Replace [{variable}] in the prompt template
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                Apply & Copy
              </button>
              <button
                type="button"
                onClick={() => setShowVariableModal(false)}
                className="border border-border px-4 py-2 rounded-md text-sm hover:border-muted-foreground/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="rounded-2xl border border-border bg-card p-5 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-lg font-medium text-foreground mb-2">{entry.title}</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs rounded-full border border-border px-2 py-1 text-muted-foreground uppercase">
                {entry.channel}
              </span>
              {entry.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs rounded-full border border-border px-2 py-1 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Opt-out toggle for SMS */}
          {entry.channel === 'sms' && showOptOut && (
            <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={includeOptOut}
                onChange={(e) => setIncludeOptOut(e.target.checked)}
                className="rounded border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-describedby="opt-out-help"
              />
              <span>add opt-out</span>
              <span id="opt-out-help" className="sr-only">
                Include "Reply STOP to opt out" text in the SMS prompt
              </span>
            </label>
          )}
        </div>

        {/* Text area */}
        <textarea
          readOnly
          value={finalText}
          className="w-full bg-transparent text-sm text-foreground/90 border border-border rounded-lg p-3 leading-6 resize-none focus:outline-none"
          rows={Math.min(8, Math.ceil(textLength / 60))}
          aria-label={`${entry.title} prompt`}
        />

        {/* Variable badges */}
        {entry.variables && entry.variables.length > 0 && (
          <div className="flex flex-wrap gap-2" role="group" aria-label="Template variables">
            <span className="text-xs text-muted-foreground" id={`variables-${entry.id}`}>Variables:</span>
            {entry.variables.map(variable => (
              <span
                key={variable}
                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                aria-describedby={`variables-${entry.id}`}
              >
                [{variable}]
              </span>
            ))}
            <button
              onClick={handleVariableReplace}
              className="text-xs text-primary hover:text-primary/80 underline focus:outline-none focus:ring-2 focus:ring-primary/50 rounded px-1"
              aria-label={`Replace variables in ${entry.title} prompt`}
              aria-describedby={`variables-${entry.id}`}
            >
              Replace variables
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between text-sm">
          <div className={`font-mono ${
            isOverLimit ? 'text-destructive' : 'text-muted-foreground'
          }`}>
            {entry.maxChars ? `${textLength}/${entry.maxChars} chars` : `${textLength} chars`}
            {isOverLimit && ' - Over limit!'}
          </div>

          <button
            onClick={handleCopy}
            disabled={isOverLimit}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              isOverLimit
                ? 'text-muted-foreground cursor-not-allowed'
                : copied
                  ? 'text-green-600 bg-green-50 dark:bg-green-900/20'
                  : 'text-primary hover:bg-primary/10'
            }`}
            aria-label={`Copy ${entry.title} prompt`}
          >
            {copied ? 'Copied!' : isOverLimit ? 'Over limit' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Variable replacement modal */}
      {showVariableModal && <VariableModal />}
    </>
  )
}
