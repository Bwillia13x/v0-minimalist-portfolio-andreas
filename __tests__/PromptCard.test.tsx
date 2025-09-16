import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { PromptCard } from '@/components/PromptCard'
import type { PromptEntry } from '@/data/prompt-pack'

// Mock the trackEvent function
jest.mock('@/components/Analytics', () => ({
  trackEvent: jest.fn()
}))

// Mock navigator.clipboard
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(() => Promise.resolve())
  }
})

const mockEntry: PromptEntry = {
  id: "test-sms",
  title: "Test SMS Prompt",
  body: "Hi [Client_First], it's [Your_Name] at Andreas & Co. We have a great window tomorrow at [Time]. Want me to hold it? Reply Y/N.",
  channel: "sms",
  tags: ["Rebooking", "Basic"],
  maxChars: 140,
  variables: ["Client_First", "Your_Name", "Time"]
}

describe('PromptCard', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders prompt title and content', () => {
    render(<PromptCard entry={mockEntry} />)

    expect(screen.getByText('Test SMS Prompt')).toBeInTheDocument()
    expect(screen.getByText('SMS')).toBeInTheDocument()
    expect(screen.getByText('Rebooking')).toBeInTheDocument()
    expect(screen.getByText('Basic')).toBeInTheDocument()
  })

  it('shows character counter for SMS with maxChars', () => {
    render(<PromptCard entry={mockEntry} />)

    const charCounter = screen.getByText(/chars/)
    expect(charCounter).toBeInTheDocument()
    expect(charCounter).toHaveTextContent(/\/\s*140/)
  })

  it('shows opt-out toggle for SMS prompts', () => {
    render(<PromptCard entry={mockEntry} />)

    const checkbox = screen.getByRole('checkbox', { name: /add opt-out/i })
    expect(checkbox).toBeInTheDocument()
  })

  it('appends opt-out text when toggle is checked', () => {
    render(<PromptCard entry={mockEntry} />)

    const checkbox = screen.getByRole('checkbox', { name: /add opt-out/i })
    fireEvent.click(checkbox)

    // The textarea should now contain the opt-out text
    const textarea = screen.getByRole('textbox', { name: /Test SMS Prompt prompt/i })
    expect(textarea).toHaveValue(
      mockEntry.body + ' Reply STOP to opt out.'
    )
  })

  it('updates character count when opt-out is added', () => {
    render(<PromptCard entry={mockEntry} />)

    const checkbox = screen.getByRole('checkbox', { name: /add opt-out/i })
    fireEvent.click(checkbox)

    // Character count should include the opt-out text
    const charCounter = screen.getByText(/chars/)
    const optOutLength = ' Reply STOP to opt out.'.length
    const expectedLength = mockEntry.body.length + optOutLength
    expect(charCounter).toHaveTextContent(new RegExp(`${expectedLength}\\s*/\\s*140`))
  })

  it('disables copy button when over character limit', () => {
    const longEntry: PromptEntry = {
      ...mockEntry,
      body: 'A'.repeat(150), // Over 140 chars
      maxChars: 140
    }

    render(<PromptCard entry={longEntry} />)

    const copyButton = screen.getByRole('button', { name: /Over limit/i })
    expect(copyButton).toBeDisabled()
  })

  it('copies text to clipboard when copy button is clicked', async () => {
    render(<PromptCard entry={mockEntry} />)

    const copyButton = screen.getByRole('button', { name: /Copy/i })
    fireEvent.click(copyButton)

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockEntry.body)
    })

    // Button text should change to "Copied!"
    await waitFor(() => {
      expect(screen.getByText('Copied!')).toBeInTheDocument()
    })
  })

  it('shows variable badges when variables are present', () => {
    render(<PromptCard entry={mockEntry} />)

    expect(screen.getByText('[Client_First]')).toBeInTheDocument()
    expect(screen.getByText('[Your_Name]')).toBeInTheDocument()
    expect(screen.getByText('[Time]')).toBeInTheDocument()
  })

  it('shows replace variables button when variables are present', () => {
    render(<PromptCard entry={mockEntry} />)

    expect(screen.getByText('Replace variables')).toBeInTheDocument()
  })
})
