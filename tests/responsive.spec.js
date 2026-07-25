import { expect, test } from '@playwright/test'

for (const viewport of [
  { width: 320, height: 700 },
  { width: 390, height: 844 },
  { width: 768, height: 900 },
  { width: 1440, height: 900 },
]) {
  test(`has no unwanted horizontal overflow at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport)
    await page.goto('/')
    const dimensions = await page.evaluate(() => ({
      document: document.documentElement.scrollWidth,
      viewport: document.documentElement.clientWidth,
      body: document.body.scrollWidth,
    }))
    expect(dimensions.document).toBeLessThanOrEqual(dimensions.viewport)
    expect(dimensions.body).toBeLessThanOrEqual(dimensions.viewport)
  })
}

test('navigation and tour dialog remain functional', async ({ page }) => {
  await page.goto('/')
  if (page.viewportSize().width < 760) {
    await page.getByRole('button', { name: 'Open menu' }).click()
  }
  await page.getByRole('link', { name: 'Programs', exact: true }).click()
  await expect(page.locator('#programs')).toBeInViewport()
  await page.getByRole('button', { name: 'Schedule a tour', exact: true }).first().click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.getByLabel('Full name').fill('Jordan Lee')
  await page.getByLabel('Phone number').fill('5125550100')
  await page.getByLabel('Program of interest').selectOption('Cosmetology')
  await page.getByRole('button', { name: 'Request my tour' }).click()
  await expect(page.getByRole('heading', { name: 'We’ll be in touch.' })).toBeVisible()
})
