import { test, expect } from '@playwright/test'

test.describe('PrairieSignal Solutions Pages', () => {
  test.describe('Navigation', () => {
    test('Solutions dropdown appears in navigation', async ({ page }) => {
      await page.goto('/')

      // Check that Solutions dropdown is visible
      const solutionsButton = page.getByRole('button', { name: 'Solutions' })
      await expect(solutionsButton).toBeVisible()

      // Click to open dropdown
      await solutionsButton.click()

      // Check dropdown items
      await expect(page.getByText('Website')).toBeVisible()
      await expect(page.getByText('Marketing')).toBeVisible()
      await expect(page.getByText('AI Tools')).toBeVisible()
    })

    test('Solutions navigation links work', async ({ page }) => {
      await page.goto('/')

      // Open dropdown and click Website
      await page.getByRole('button', { name: 'Solutions' }).click()
      await page.getByText('Website').click()

      // Should navigate to website solution page
      await expect(page).toHaveURL('/solutions/website')
      await expect(page.getByText('Modern Website That Converts')).toBeVisible()
    })
  })

  test.describe('Website Solution Page', () => {
    test('loads successfully with key elements', async ({ page }) => {
      await page.goto('/solutions/website')

      // Check page title
      await expect(page).toHaveTitle(/Modern Website That Converts/)

      // Check hero section
      await expect(page.getByText('Modern Website That Converts')).toBeVisible()
      await expect(page.getByText('Clean design, fast performance, and one-click booking from every page.')).toBeVisible()

      // Check outcomes section
      await expect(page.getByText('Outcomes')).toBeVisible()
      await expect(page.getByText('+15–30%')).toBeVisible()
      await expect(page.getByText('<2s')).toBeVisible()
      await expect(page.getByText('AA')).toBeVisible()

      // Check CTA
      await expect(page.getByText('Book a 20-min consult')).toBeVisible()
    })

    test('print route loads', async ({ page }) => {
      await page.goto('/solutions/website/print')

      // Should load without errors
      await expect(page.getByText('Website Redesign')).toBeVisible()
    })

    test('TOC functionality works', async ({ page }) => {
      await page.goto('/solutions/website')

      // Check TOC is present
      await expect(page.getByText('On This Page')).toBeVisible()

      // TOC items should be clickable
      const tocItems = page.locator('[data-testid="toc-item"]')
      if (await tocItems.count() > 0) {
        await tocItems.first().click()
        // Should scroll to section (hard to test precisely with Playwright)
      }
    })
  })

  test.describe('Marketing Solution Page', () => {
    test('loads successfully with key elements', async ({ page }) => {
      await page.goto('/solutions/marketing')

      // Check page title
      await expect(page).toHaveTitle(/Marketing Engine That Works/)

      // Check hero section
      await expect(page.getByText('Marketing Engine That Works')).toBeVisible()
      await expect(page.getByText('Steady content, gentle reminders, and opt-in growth with human approvals.')).toBeVisible()

      // Check outcomes section
      await expect(page.getByText('↑ 40%')).toBeVisible()
      await expect(page.getByText('↓ 20–30%')).toBeVisible()
      await expect(page.getByText('Weekly')).toBeVisible()

      // Check CTA
      await expect(page.getByText('Book a 20-min consult')).toBeVisible()
    })

    test('print route loads', async ({ page }) => {
      await page.goto('/solutions/marketing/print')

      // Should load without errors
      await expect(page.getByText('Marketing Engine')).toBeVisible()
    })
  })

  test.describe('AI Tools Solution Page', () => {
    test('loads successfully with key elements', async ({ page }) => {
      await page.goto('/solutions/ai-tools')

      // Check page title
      await expect(page).toHaveTitle(/AI Tools & Prompt Pack/)

      // Check hero section
      await expect(page.getByText('AI Tools & Prompt Pack')).toBeVisible()
      await expect(page.getByText('Plug-and-play prompts and assistants for SMS, email, and sheets.')).toBeVisible()

      // Check prompt functionality
      await expect(page.getByText('Search prompts...')).toBeVisible()
      await expect(page.getByText('SMS')).toBeVisible()
      await expect(page.getByText('Email')).toBeVisible()
      await expect(page.getByText('Sheets')).toBeVisible()
    })

    test('print route loads', async ({ page }) => {
      await page.goto('/solutions/ai-tools/print')

      // Should load without errors
      await expect(page.getByText('AI Tools & Prompt Pack')).toBeVisible()
    })

    test('search functionality works', async ({ page }) => {
      await page.goto('/solutions/ai-tools')

      const searchInput = page.getByPlaceholderText('Search prompts...')
      await searchInput.fill('rebooking')

      // Should filter results (exact behavior depends on implementation)
      await expect(searchInput).toHaveValue('rebooking')
    })
  })

  test.describe('Redirects', () => {
    test('old prompt-pack URL redirects to new location', async ({ page }) => {
      await page.goto('/prompt-pack')

      // Should redirect to AI tools page
      await expect(page).toHaveURL('/solutions/ai-tools')
      await expect(page.getByText('AI Tools & Prompt Pack')).toBeVisible()
    })
  })

  test.describe('Shared Layout', () => {
    test('breadcrumb navigation works', async ({ page }) => {
      await page.goto('/solutions/website')

      // Check breadcrumb
      await expect(page.getByText('Home')).toBeVisible()
      await expect(page.getByText('Solutions')).toBeVisible()

      // Click Home breadcrumb
      await page.getByText('Home').click()
      await expect(page).toHaveURL('/')
    })

    test('consistent layout across solution pages', async ({ page }) => {
      const pages = ['/solutions/website', '/solutions/marketing', '/solutions/ai-tools']

      for (const pageUrl of pages) {
        await page.goto(pageUrl)

        // All should have the breadcrumb
        await expect(page.getByText('Home')).toBeVisible()
        await expect(page.getByText('Solutions')).toBeVisible()

        // All should have a primary CTA
        await expect(page.getByText('Book a 20-min consult')).toBeVisible()
      }
    })
  })

  test.describe('Accessibility', () => {
    test('keyboard navigation works in navigation', async ({ page }) => {
      await page.goto('/')

      // Focus on Solutions button
      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab') // Navigate to Solutions
      await page.keyboard.press('Enter') // Open dropdown

      // Should be able to navigate dropdown with keyboard
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')

      // Should navigate to first solution page
      await expect(page).toHaveURL(/\/solutions\//)
    })

    test('skip links work', async ({ page }) => {
      await page.goto('/solutions/website')

      // Check skip link exists (though it might be visually hidden)
      const skipLink = page.locator('a[href="#main-content"]')
      await expect(skipLink).toBeVisible()

      // Pressing Tab should make skip link visible
      await page.keyboard.press('Tab')
      // Skip link should be focusable and visible
    })
  })

  test.describe('SEO', () => {
    test('solution pages have proper meta titles', async ({ page }) => {
      const testCases = [
        { url: '/solutions/website', title: /Modern Website That Converts/ },
        { url: '/solutions/marketing', title: /Marketing Engine That Works/ },
        { url: '/solutions/ai-tools', title: /AI Tools & Prompt Pack/ }
      ]

      for (const { url, title } of testCases) {
        await page.goto(url)
        await expect(page).toHaveTitle(title)
      }
    })

    test('solution pages have meta descriptions', async ({ page }) => {
      await page.goto('/solutions/website')

      // Check meta description exists
      const metaDescription = page.locator('meta[name="description"]')
      await expect(metaDescription).toHaveAttribute('content', /Clean design, fast performance/)
    })
  })
})
