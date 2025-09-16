import { render, screen } from '@testing-library/react'
import { TocSpy } from '@/components/TocSpy'

// Mock the Analytics component
jest.mock('@/components/Analytics', () => ({
  trackEvent: jest.fn()
}))

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}

describe('TocSpy', () => {
  const mockTrackEvent = jest.requireMock('@/components/Analytics').trackEvent

  beforeEach(() => {
    mockTrackEvent.mockClear()
    // Clear any existing headings
    document.body.innerHTML = ''
  })

  it('renders nothing when no headings are found', () => {
    const { container } = render(<TocSpy />)
    expect(container.firstChild).toBeNull()
  })

  it('renders TOC items when headings are present', () => {
    // Create mock headings
    document.body.innerHTML = `
      <main>
        <h2 id="section-1">Section 1</h2>
        <h3 id="subsection-1">Subsection 1</h3>
        <h2 id="section-2">Section 2</h2>
      </main>
    `

    render(<TocSpy />)

    expect(screen.getByText('Section 1')).toBeInTheDocument()
    expect(screen.getByText('Subsection 1')).toBeInTheDocument()
    expect(screen.getByText('Section 2')).toBeInTheDocument()
  })

  it('applies correct indentation based on heading level', () => {
    document.body.innerHTML = `
      <main>
        <h2 id="section-1">Section 1</h2>
        <h3 id="subsection-1">Subsection 1</h3>
      </main>
    `

    render(<TocSpy />)

    const subsectionButton = screen.getByText('Subsection 1').closest('button')
    expect(subsectionButton).toHaveStyle({ paddingLeft: '12px' }) // (level - 1) * 12px
  })

  it('handles scroll to section when button is clicked', () => {
    document.body.innerHTML = `
      <main>
        <h2 id="section-1">Section 1</h2>
      </main>
    `

    // Mock scrollIntoView
    const mockScrollIntoView = jest.fn()
    const sectionElement = document.getElementById('section-1')
    if (sectionElement) {
      sectionElement.scrollIntoView = mockScrollIntoView
    }

    render(<TocSpy />)

    const button = screen.getByText('Section 1')
    button.click()

    expect(mockScrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start'
    })
  })

  it('only includes headings with IDs', () => {
    document.body.innerHTML = `
      <main>
        <h2>Heading without ID</h2>
        <h2 id="heading-with-id">Heading with ID</h2>
      </main>
    `

    render(<TocSpy />)

    expect(screen.queryByText('Heading without ID')).not.toBeInTheDocument()
    expect(screen.getByText('Heading with ID')).toBeInTheDocument()
  })

  it('handles empty title gracefully', () => {
    document.body.innerHTML = `
      <main>
        <h2 id="empty-title"></h2>
      </main>
    `

    render(<TocSpy />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})
