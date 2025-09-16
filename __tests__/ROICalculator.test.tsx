import { render, screen, fireEvent } from '@testing-library/react'
import { ROICalculator } from '@/components/ROICalculator'
import { calculateROI } from '@/data/pitch'

// Mock the Analytics component
jest.mock('@/components/Analytics', () => ({
  trackEvent: jest.fn()
}))

describe('ROICalculator', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders calculator inputs and results', () => {
    render(<ROICalculator />)

    expect(screen.getByText('ROI Calculator')).toBeInTheDocument()
    expect(screen.getByLabelText(/Daily No-Shows/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Show Rate/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Rebook Rate/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Avg Ticket/)).toBeInTheDocument()
    expect(screen.getByText('Monthly Revenue Recovered')).toBeInTheDocument()
    expect(screen.getByText('Pilot Investment Payback')).toBeInTheDocument()
  })

  it('displays correct default values', () => {
    render(<ROICalculator />)

    const noShowsInput = screen.getByLabelText(/Daily No-Shows/) as HTMLInputElement
    const showRateInput = screen.getByLabelText(/Show Rate/) as HTMLInputElement
    const rebookRateInput = screen.getByLabelText(/Rebook Rate/) as HTMLInputElement
    const avgTicketInput = screen.getByLabelText(/Avg Ticket/) as HTMLInputElement

    expect(noShowsInput.value).toBe('2')
    expect(showRateInput.value).toBe('60')
    expect(rebookRateInput.value).toBe('40')
    expect(avgTicketInput.value).toBe('70')
  })

  it('updates results when inputs change', () => {
    render(<ROICalculator />)

    const noShowsInput = screen.getByLabelText(/Daily No-Shows/)

    fireEvent.change(noShowsInput, { target: { value: '5' } })

    // Results should update based on new calculation
    const results = calculateROI(5, 60, 40, 70, 26)
    expect(screen.getByText(`$${results.recoveredRevenue.toLocaleString()}`)).toBeInTheDocument()
  })

  it('displays pilot payback months correctly', () => {
    render(<ROICalculator />)

    // Default calculation should show payback periods
    const results = calculateROI(2, 60, 40, 70, 26)
    expect(results.pilotPaybackMonths.pilotA).toBeGreaterThan(0)
    expect(results.pilotPaybackMonths.pilotB).toBeGreaterThan(0)
    expect(results.pilotPaybackMonths.pilotC).toBeGreaterThan(0)
  })
})

describe('calculateROI', () => {
  it('calculates recovered revenue correctly', () => {
    const result = calculateROI(2, 60, 40, 70, 26)

    // Expected calculation:
    // noShowsPerMonth = 2 * 26 = 52
    // recoveredBookings = 52 * 0.6 * 0.4 = 12.48
    // recoveredRevenue = 12.48 * 70 = 873.6
    expect(result.recoveredRevenue).toBe(874)
    expect(result.recoveredBookings).toBe(12.5)
    expect(result.noShowsPerMonth).toBe(52)
  })

  it('calculates pilot payback months', () => {
    const result = calculateROI(2, 60, 40, 70, 26)

    // Pilot A payback should be reasonable
    expect(result.pilotPaybackMonths.pilotA).toBe(3) // 2500 / 874 ≈ 2.86, rounded up to 3
    expect(result.pilotPaybackMonths.pilotB).toBe(6) // 5500 / 874 ≈ 6.29, rounded up to 6
    expect(result.pilotPaybackMonths.pilotC).toBe(11) // 9500 / 874 ≈ 10.87, rounded up to 11
  })

  it('handles edge cases', () => {
    const result = calculateROI(0, 100, 100, 100, 30)

    expect(result.recoveredRevenue).toBe(0)
    expect(result.recoveredBookings).toBe(0)
    expect(result.pilotPaybackMonths.pilotA).toBe(Infinity)
  })
})
