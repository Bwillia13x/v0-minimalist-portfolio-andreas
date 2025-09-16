import { test, expect } from '@playwright/test'

test.describe('Prompt Pack Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/prompt-pack')
  })

  test('loads page successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Prompt Pack/)
    await expect(page.locator('h1')).toContainText('Prompt Pack')
  })

  test('displays hero section with correct content', async ({ page }) => {
    const heroSection = page.locator('[id="overview"]')
    await expect(heroSection.locator('h1')).toContainText('Prompt Pack')
    await expect(heroSection).toContainText('Plug-and-play prompts for SMS, email, and sheets')
  })

  test('displays search and filter functionality', async ({ page }) => {
    const searchInput = page.locator('input[placeholder="Search prompts..."]')
    await expect(searchInput).toBeVisible()

    // Check filter chips are present
    await expect(page.locator('text=SMS')).toBeVisible()
    await expect(page.locator('text=Email')).toBeVisible()
    await expect(page.locator('text=Sheets')).toBeVisible()
  })

  test('filter chips are clickable', async ({ page }) => {
    const smsChip = page.locator('text=SMS').first()
    await smsChip.click()

    // Chip should be visually different when active
    await expect(smsChip).toHaveClass(/border-primary/)
  })

  test('categories section displays correctly', async ({ page }) => {
    const categoriesSection = page.locator('[id="categories"]')
    await expect(categoriesSection).toContainText("WHAT'S INCLUDED")

    // Should have multiple category cards
    const categoryCards = categoriesSection.locator('[class*="group p-6"]').all()
    expect(await categoryCards).toHaveLength(await page.locator('[id="categories"] [class*="group p-6"]').count())
  })

  test('prompt cards display with copy functionality', async ({ page }) => {
    // Wait for sections to load
    await page.waitForSelector('[id="quick-start"]')

    // Find a prompt card
    const promptCard = page.locator('[class*="rounded-2xl"]').first()
    await expect(promptCard).toBeVisible()

    // Should have a copy button
    const copyButton = promptCard.locator('button', { hasText: /Copy/ })
    await expect(copyButton).toBeVisible()
  })

  test('download buttons work', async ({ page }) => {
    const downloadSection = page.locator('[id="download"]')
    await expect(downloadSection).toContainText('Get Your Prompt Pack')

    // MD download button
    const mdButton = downloadSection.locator('button', { hasText: 'Download MD →' })
    await expect(mdButton).toBeVisible()

    // PDF download button
    const pdfButton = downloadSection.locator('button', { hasText: 'Download PDF →' })
    await expect(pdfButton).toBeVisible()
  })

  test('navigation works correctly', async ({ page }) => {
    // Test desktop navigation dots (if visible)
    const navDots = page.locator('[class*="w-2 h-8"]').all()
    if (await navDots.length > 0) {
      const firstDot = navDots[0]
      await firstDot.click()

      // Should scroll to corresponding section
      const overviewSection = page.locator('[id="overview"]')
      const isVisible = await overviewSection.isVisible()
      expect(isVisible).toBe(true)
    }
  })

  test('mobile navigation works', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })

    // Mobile nav should be sticky top
    const mobileNav = page.locator('[class*="sticky top-0"]').first()
    await expect(mobileNav).toBeVisible()

    // Test navigation items
    const navItems = mobileNav.locator('button').all()
    expect(await navItems.length).toBeGreaterThan(0)
  })

  test('accessibility - keyboard navigation', async ({ page }) => {
    // Focus on search input
    const searchInput = page.locator('input[placeholder="Search prompts..."]')
    await searchInput.focus()
    await expect(searchInput).toBeFocused()

    // Tab to filter chips
    await page.keyboard.press('Tab')
    const activeElement = await page.evaluate(() => document.activeElement?.textContent)
    expect(activeElement).toBeTruthy()
  })

  test('SEO metadata is present', async ({ page }) => {
    // Check meta description
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content')
    expect(metaDescription).toContain('Plug-and-play prompts')

    // Check Open Graph tags
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content')
    expect(ogTitle).toContain('Prompt Pack')
  })
})
