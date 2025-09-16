import { trackEvent } from "@/components/Analytics"

interface StatProps {
  value: string | number
  label: string
  description?: string
  trend?: 'up' | 'down' | 'neutral'
  className?: string
}

export function Stat({ value, label, description, trend, className = "" }: StatProps) {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-600'
      case 'down':
        return 'text-red-600'
      default:
        return 'text-primary'
    }
  }

  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        )
      case 'down':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div
      className={`p-6 border border-border rounded-lg bg-card cursor-pointer hover:bg-card/80 transition-colors ${className}`}
      onClick={() => trackEvent('stat_interaction', { value, label, trend })}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className={`text-3xl font-bold ${getTrendColor()}`}>
          {value}
        </div>
        {trend && getTrendIcon()}
      </div>
      <div className="text-sm text-muted-foreground mb-1">{label}</div>
      {description && (
        <div className="text-xs text-muted-foreground/80">{description}</div>
      )}
    </div>
  )
}
