import { render, screen, fireEvent } from '@testing-library/react'
import { Stat } from '@/components/Stat'

// Mock the Analytics component
jest.mock('@/components/Analytics', () => ({
  trackEvent: jest.fn()
}))

describe('Stat', () => {
  const mockTrackEvent = jest.requireMock('@/components/Analytics').trackEvent

  beforeEach(() => {
    mockTrackEvent.mockClear()
  })

  it('renders value, label, and description', () => {
    render(
      <Stat
        value="42%"
        label="Test Metric"
        description="A test description"
      />
    )

    expect(screen.getByText('42%')).toBeInTheDocument()
    expect(screen.getByText('Test Metric')).toBeInTheDocument()
    expect(screen.getByText('A test description')).toBeInTheDocument()
  })

  it('shows up trend indicator when trend is up', () => {
    render(
      <Stat
        value="42%"
        label="Test Metric"
        trend="up"
      />
    )

    const trendIcon = document.querySelector('svg')
    expect(trendIcon).toBeInTheDocument()
    expect(screen.getByText('42%')).toHaveClass('text-green-600')
  })

  it('shows down trend indicator when trend is down', () => {
    render(
      <Stat
        value="42%"
        label="Test Metric"
        trend="down"
      />
    )

    const trendIcon = document.querySelector('svg')
    expect(trendIcon).toBeInTheDocument()
    expect(screen.getByText('42%')).toHaveClass('text-red-600')
  })

  it('tracks click events', () => {
    render(
      <Stat
        value="42%"
        label="Test Metric"
        trend="up"
      />
    )

    const statElement = screen.getByText('42%').closest('div')
    fireEvent.click(statElement!)

    expect(mockTrackEvent).toHaveBeenCalledWith('stat_interaction', {
      value: '42%',
      label: 'Test Metric',
      trend: 'up'
    })
  })

  it('applies custom className', () => {
    render(
      <Stat
        value="42%"
        label="Test Metric"
        className="custom-class"
      />
    )

    const statElement = screen.getByText('42%').closest('div')
    expect(statElement).toHaveClass('custom-class')
  })

  it('handles numeric values', () => {
    render(
      <Stat
        value={42}
        label="Test Metric"
      />
    )

    expect(screen.getByText('42')).toBeInTheDocument()
  })
})
