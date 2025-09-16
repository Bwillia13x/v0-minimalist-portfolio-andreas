import Image from "next/image"

interface BeforeAfterProps {
  before: {
    title: string
    description: string
    image?: string
    alt?: string
  }
  after: {
    title: string
    description: string
    image?: string
    alt?: string
  }
  className?: string
}

export function BeforeAfter({ before, after, className = "" }: BeforeAfterProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 ${className}`}>
      {/* Before */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-red-600">{before.title}</h3>
        </div>
        <p className="text-muted-foreground">{before.description}</p>
        {before.image && (
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
            <Image
              src={before.image}
              alt={before.alt || before.title}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      {/* After */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-green-600">{after.title}</h3>
        </div>
        <p className="text-muted-foreground">{after.description}</p>
        {after.image && (
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
            <Image
              src={after.image}
              alt={after.alt || after.title}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </div>
  )
}
