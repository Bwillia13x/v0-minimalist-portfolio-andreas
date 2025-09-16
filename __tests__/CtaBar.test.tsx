import { render, screen, fireEvent } from '@testing-library/react'
import { CtaBar } from '@/components/CtaBar'

// Mock the Analytics component
jest.mock('@/components/Analytics', () => ({
  trackEvent: jest.fn()
}))

describe('CtaBar', () => {
  const mockTrackEvent = jest.requireMock('@/components/Analytics').trackEvent

  beforeEach(() => {
    mockTrackEvent.mockClear()
  })

  it('renders title, description, and CTAs', () => {
    render(
      <CtaBar
        title="Test Title"
        description="Test description"
        primaryCta={{
          text: "Primary CTA",
          href: "/test",
          variant: "primary"
        }}
        secondaryCta={{
          text: "Secondary CTA",
          href: "/secondary",
          variant: "secondary"
        }}
      />
    )

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()
    expect(screen.getByText('Primary CTA')).toBeInTheDocument()
    expect(screen.getByText('Secondary CTA')).toBeInTheDocument()
  })

  it('renders with default title when not provided', () => {
    render(
      <CtaBar
        primaryCta={{
          text: "Primary CTA",
          href: "/test",
          variant: "primary"
        }}
      />
    )

    expect(screen.getByText('Ready to Get Started?')).toBeInTheDocument()
  })

  it('tracks primary CTA clicks', () => {
    render(
      <CtaBar
        primaryCta={{
          text: "Primary CTA",
          href: "/test",
          variant: "primary"
        }}
      />
    )

    const primaryButton = screen.getByText('Primary CTA')
    fireEvent.click(primaryButton)

    expect(mockTrackEvent).toHaveBeenCalledWith('consult_clicked', { source: 'cta-bar-primary' })
  })

  it('tracks secondary CTA clicks', () => {
    render(
      <CtaBar
        primaryCta={{
          text: "Primary CTA",
          href: "/test",
          variant: "primary"
        }}
        secondaryCta={{
          text: "Secondary CTA",
          href: "/secondary",
          variant: "secondary"
        }}
      />
    )

    const secondaryButton = screen.getByText('Secondary CTA')
    fireEvent.click(secondaryButton)

    expect(mockTrackEvent).toHaveBeenCalledWith('cta_clicked', {
      source: 'cta-bar-secondary',
      button: 'Secondary CTA'
    })
  })

  it('handles custom onClick handlers', () => {
    const mockPrimaryClick = jest.fn()
    const mockSecondaryClick = jest.fn()

    render(
      <CtaBar
        primaryCta={{
          text: "Primary CTA",
          href: "/test",
          variant: "primary",
          onClick: mockPrimaryClick
        }}
        secondaryCta={{
          text: "Secondary CTA",
          href: "/secondary",
          variant: "secondary",
          onClick: mockSecondaryClick
        }}
      />
    )

    fireEvent.click(screen.getByText('Primary CTA'))
    fireEvent.click(screen.getByText('Secondary CTA'))

    expect(mockPrimaryClick).toHaveBeenCalled()
    expect(mockSecondaryClick).toHaveBeenCalled()
  })

  it('renders only primary CTA when secondary is not provided', () => {
    render(
      <CtaBar
        primaryCta={{
          text: "Primary CTA",
          href: "/test",
          variant: "primary"
        }}
      />
    )

    expect(screen.getByText('Primary CTA')).toBeInTheDocument()
    expect(screen.queryByText('Secondary CTA')).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <CtaBar
        primaryCta={{
          text: "Primary CTA",
          href: "/test",
          variant: "primary"
        }}
        className="custom-class"
      />
    )

    const section = screen.getByText('Ready to Get Started?').closest('section')
    expect(section).toHaveClass('custom-class')
  })
})
