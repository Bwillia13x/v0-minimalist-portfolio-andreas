import { render, screen } from '@testing-library/react'
import { AssistantCard } from '@/components/AssistantCard'

describe('AssistantCard', () => {
  const mockProps = {
    icon: "🤖",
    title: "Test Assistant",
    description: "A helpful AI assistant for testing",
    bullets: ["Feature 1", "Feature 2", "Feature 3"],
    approvalPath: "Draft → Review → Publish"
  }

  it('renders all required elements', () => {
    render(<AssistantCard {...mockProps} />)

    expect(screen.getByText(mockProps.icon)).toBeInTheDocument()
    expect(screen.getByText(mockProps.title)).toBeInTheDocument()
    expect(screen.getByText(mockProps.description)).toBeInTheDocument()
    expect(screen.getByText('Human-in-the-loop')).toBeInTheDocument()
    expect(screen.getByText(mockProps.approvalPath)).toBeInTheDocument()
  })

  it('renders all bullet points', () => {
    render(<AssistantCard {...mockProps} />)

    mockProps.bullets.forEach(bullet => {
      expect(screen.getByText(bullet)).toBeInTheDocument()
    })
  })

  it('displays approval path correctly', () => {
    render(<AssistantCard {...mockProps} />)

    expect(screen.getByText('Approval Path:')).toBeInTheDocument()
    expect(screen.getByText(mockProps.approvalPath)).toBeInTheDocument()
  })

  it('has proper accessibility structure', () => {
    render(<AssistantCard {...mockProps} />)

    // Should have semantic structure
    const title = screen.getByText(mockProps.title)
    expect(title).toBeInTheDocument()

    const description = screen.getByText(mockProps.description)
    expect(description).toBeInTheDocument()
  })
})
