import Link from "next/link"
import { trackEvent } from "@/components/Analytics"

interface CtaButton {
  text: string
  href: string
  variant: 'primary' | 'secondary'
  onClick?: () => void
}

interface CtaBarProps {
  title?: string
  description?: string
  primaryCta: CtaButton
  secondaryCta?: CtaButton
  className?: string
}

export function CtaBar({
  title = "Ready to Get Started?",
  description = "Transform your business with AI-powered automation that actually works.",
  primaryCta,
  secondaryCta,
  className = ""
}: CtaBarProps) {
  const handlePrimaryClick = () => {
    if (primaryCta.onClick) {
      primaryCta.onClick()
    } else {
      trackEvent('consult_clicked', { source: 'cta-bar-primary' })
    }
  }

  const handleSecondaryClick = () => {
    if (secondaryCta?.onClick) {
      secondaryCta.onClick()
    } else {
      trackEvent('cta_clicked', { source: 'cta-bar-secondary', button: secondaryCta?.text })
    }
  }

  return (
    <section className={`py-20 sm:py-32 ${className}`}>
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="text-center space-y-6">
          {title && (
            <h2 className="text-3xl sm:text-4xl font-light">{title}</h2>
          )}
          {description && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={primaryCta.href}
              onClick={handlePrimaryClick}
              className="bg-primary text-primary-foreground rounded-md px-6 py-3 hover:bg-primary/90 transition-colors font-medium"
            >
              {primaryCta.text}
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                onClick={handleSecondaryClick}
                className="border border-border rounded-md px-6 py-3 hover:border-primary transition-colors"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
