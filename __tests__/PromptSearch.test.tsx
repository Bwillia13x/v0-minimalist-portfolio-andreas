import { render, screen, fireEvent } from '@testing-library/react'
import { PromptSearch } from '@/components/PromptSearch'

describe('PromptSearch', () => {
  const mockOnChange = jest.fn()

  beforeEach(() => {
    mockOnChange.mockClear()
  })

  it('renders search input and filter chips', () => {
    render(<PromptSearch onChange={mockOnChange} />)

    expect(screen.getByPlaceholderText('Search prompts...')).toBeInTheDocument()
    expect(screen.getByText('SMS')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Sheets')).toBeInTheDocument()
    expect(screen.getByText('Owner')).toBeInTheDocument()
    expect(screen.getByText('Safety')).toBeInTheDocument()
  })

  it('calls onChange when search query changes', () => {
    render(<PromptSearch onChange={mockOnChange} />)

    const searchInput = screen.getByPlaceholderText('Search prompts...')
    fireEvent.change(searchInput, { target: { value: 'rebooking' } })

    expect(mockOnChange).toHaveBeenCalledWith('rebooking', [])
  })

  it('toggles filter chips correctly', () => {
    render(<PromptSearch onChange={mockOnChange} />)

    const smsChip = screen.getByText('SMS')
    fireEvent.click(smsChip)

    expect(mockOnChange).toHaveBeenCalledWith('', ['SMS'])

    // Click again to remove filter
    fireEvent.click(smsChip)
    expect(mockOnChange).toHaveBeenCalledWith('', [])
  })

  it('shows active filters when applied', () => {
    render(<PromptSearch onChange={mockOnChange} />)

    const smsChip = screen.getByText('SMS')
    fireEvent.click(smsChip)

    expect(screen.getByText('Active filters:')).toBeInTheDocument()
    expect(screen.getByText('SMS')).toBeInTheDocument()
  })

  it('shows search query in active filters', () => {
    render(<PromptSearch onChange={mockOnChange} />)

    const searchInput = screen.getByPlaceholderText('Search prompts...')
    fireEvent.change(searchInput, { target: { value: 'test query' } })

    expect(screen.getByText('"test query"')).toBeInTheDocument()
  })

  it('shows clear button when filters are active', () => {
    render(<PromptSearch onChange={mockOnChange} />)

    const smsChip = screen.getByText('SMS')
    fireEvent.click(smsChip)

    const clearButton = screen.getByText('Clear')
    expect(clearButton).toBeInTheDocument()

    fireEvent.click(clearButton)
    expect(mockOnChange).toHaveBeenCalledWith('', [])
  })
})
