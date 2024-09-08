import { test, expect } from '@playwright/test';

test.describe('ButtonClient Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/accordion');
  });

  test('should accordion title correctly', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Accordion' })).toBeVisible();
  });

});
