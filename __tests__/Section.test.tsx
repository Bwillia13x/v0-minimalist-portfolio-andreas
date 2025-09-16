import { render, screen } from '@testing-library/react'
import { Section } from '@/components/Section'

describe('Section', () => {
  it('renders children correctly', () => {
    render(
      <Section>
        <p>Test content</p>
      </Section>
    )

    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('renders title when provided', () => {
    render(
      <Section title="Test Title">
        <p>Content</p>
      </Section>
    )

    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders eyebrow when provided', () => {
    render(
      <Section eyebrow="SECTION" title="Test Title">
        <p>Content</p>
      </Section>
    )

    expect(screen.getByText('SECTION')).toBeInTheDocument()
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('applies correct id attribute', () => {
    render(
      <Section id="test-section">
        <p>Content</p>
      </Section>
    )

    const section = screen.getByRole('region')
    expect(section).toHaveAttribute('id', 'test-section')
  })

  it('has correct accessibility attributes', () => {
    render(
      <Section>
        <p>Content</p>
      </Section>
    )

    // Should have proper semantic structure
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })
})
