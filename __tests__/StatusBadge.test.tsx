import { render, screen } from '@testing-library/react'
import { StatusBadge } from '@/components/StatusBadge'

describe('StatusBadge', () => {
  it('renders planned status correctly', () => {
    render(<StatusBadge status="planned" />)

    const badge = screen.getByText('Planned')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('badge-planned')
  })

  it('renders in_progress status correctly', () => {
    render(<StatusBadge status="in_progress" />)

    const badge = screen.getByText('In Progress')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('badge-in_progress')
  })

  it('renders done status correctly', () => {
    render(<StatusBadge status="done" />)

    const badge = screen.getByText('Done')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('badge-done')
  })

  it('applies custom className', () => {
    render(<StatusBadge status="planned" className="custom-class" />)

    const badge = screen.getByText('Planned')
    expect(badge).toHaveClass('custom-class')
  })
})
