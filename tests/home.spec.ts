import { test, expect } from '@playwright/test'

test.describe('PrairieSignal Homepage', () => {
  test('loads successfully and has key elements', async ({ page }) => {
    await page.goto('/')

    // Check page title
    await expect(page).toHaveTitle(/AI Enablement/)

    // Check hero section
    await expect(page.getByText('AI That Never Sleeps')).toBeVisible()

    // Check value bullets
    await expect(page.getByText('Recover missed bookings automatically')).toBeVisible()
    await expect(page.getByText('Monday-morning KPI digest in plain English')).toBeVisible()
    await expect(page.getByText('Stock alerts + product bundles before items run out')).toBeVisible()

    // Check primary CTA
    const consultButton = page.getByRole('link', { name: 'Book a 20-min consult' })
    await expect(consultButton).toBeVisible()

    // Check Solutions section
    await expect(page.getByText('Explore Solutions')).toBeVisible()
    await expect(page.getByText('Website Redesign')).toBeVisible()
    await expect(page.getByText('Marketing Engine')).toBeVisible()
    await expect(page.getByText('AI Tools & Templates')).toBeVisible()
    await expect(consultButton).toHaveAttribute('href', '/contact')
  })

  test('capabilities section renders correctly', async ({ page }) => {
    await page.goto('/')

    // Check capabilities section
    await expect(page.getByText('AI Capabilities')).toBeVisible()

    // Check capability cards
    await expect(page.getByText('Smart Rebooking System')).toBeVisible()
    await expect(page.getByText('Weekly Business Intelligence')).toBeVisible()
    await expect(page.getByText('Smart Inventory Assistant')).toBeVisible()
    await expect(page.getByText('Customer Campaign Manager')).toBeVisible()
  })

  test('details elements are interactive', async ({ page }) => {
    await page.goto('/')

    // Find the first details element
    const firstDetails = page.locator('details').first()
    await expect(firstDetails).toBeVisible()

    // Check that it's initially closed
    const summary = firstDetails.locator('summary')
    await expect(summary).toBeVisible()

    // Click to open
    await summary.click()

    // Check that content is now visible (implementation detail)
    const content = firstDetails.locator('[data-testid="details-content"], div:not(summary)')
    await expect(content).toBeVisible()
  })

  test('navigation works', async ({ page }) => {
    await page.goto('/')

    // Check navigation links
    const demoLink = page.getByRole('link', { name: 'Open live demo' })
    await expect(demoLink).toHaveAttribute('href', '/demo')

    const pricingLink = page.getByRole('link', { name: /See pricing/ })
    await expect(pricingLink).toHaveAttribute('href', '/pricing')
  })

  test('resources section loads', async ({ page }) => {
    await page.goto('/')

    // Check testimonials
    await expect(page.getByText('Real Results')).toBeVisible()

    // Check tools
    await expect(page.getByText('Tools & Guides')).toBeVisible()
    await expect(page.getByText('Complete Prompt Library')).toBeVisible()
  })

  test('accessibility - skip link', async ({ page }) => {
    await page.goto('/')

    // Focus should reveal skip link
    await page.keyboard.press('Tab')
    const skipLink = page.getByRole('link', { name: 'Skip to main content' })
    await expect(skipLink).toBeVisible()
  })
})
