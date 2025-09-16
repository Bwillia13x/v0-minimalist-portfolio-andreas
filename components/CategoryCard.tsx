"use client"

import type { PromptCategory } from '@/data/prompt-pack'

interface CategoryCardProps {
  category: PromptCategory
  count: number
  onClick?: () => void
}

export function CategoryCard({ category, count, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg text-left w-full"
      aria-label={`Filter by ${category.title}`}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="text-2xl">{category.icon}</div>
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
              {category.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mt-1">{category.summary}</p>
          </div>
        </div>
        <div className="text-sm text-primary font-mono">{count} prompts</div>
      </div>
    </button>
  )
}
