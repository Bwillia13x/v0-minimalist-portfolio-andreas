"use client"

import { useEffect, useState } from 'react'
import { trackEvent } from '@/components/Analytics'

interface PromptSearchProps {
  onChange: (query: string, filters: string[]) => void
}

export function PromptSearch({ onChange }: PromptSearchProps) {
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState<string[]>([])
  const chips = ['SMS', 'Email', 'Sheets', 'Owner', 'Safety', 'Campaigns', 'Inventory', 'Reviews']

  const toggleFilter = (chip: string) => {
    setFilters(prev => {
      const newFilters = prev.includes(chip)
        ? prev.filter(f => f !== chip)
        : [...prev, chip]
      return newFilters
    })
  }

  useEffect(() => {
    onChange(query, filters)
    if (query) {
      trackEvent?.('prompt_search', { query, filters })
    }
  }, [query, filters, onChange])

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search prompts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent border border-border rounded-lg p-3 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          aria-label="Search prompts"
        />
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div className="flex flex-wrap gap-2">
        {chips.map(chip => (
          <button
            key={chip}
            onClick={() => toggleFilter(chip)}
            className={`text-xs rounded-full border px-3 py-1 transition-all duration-200 ${
              filters.includes(chip)
                ? 'border-primary text-primary bg-primary/10'
                : 'border-border text-muted-foreground hover:border-muted-foreground/50'
            }`}
            aria-pressed={filters.includes(chip)}
            aria-label={`Filter by ${chip}`}
          >
            {chip}
          </button>
        ))}
      </div>

      {(query || filters.length > 0) && (
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Active filters:</span>
          {query && <span className="text-primary">"{query}"</span>}
          {filters.length > 0 && (
            <span>
              {filters.map(f => (
                <span key={f} className="inline-block bg-primary/10 text-primary rounded px-1 mx-1">
                  {f}
                </span>
              ))}
            </span>
          )}
          {(query || filters.length > 0) && (
            <button
              onClick={() => {
                setQuery('')
                setFilters([])
              }}
              className="text-muted-foreground hover:text-foreground ml-2"
              aria-label="Clear all filters"
            >
              Clear
            </button>
          )}
        </div>
      )}
    </div>
  )
}
