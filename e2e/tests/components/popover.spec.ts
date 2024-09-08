import { test, expect } from '@playwright/test';

test.describe('Popover Client', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/popover');
  });

  test('should Popover title correctly', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Popover' })).toBeVisible();
  });

});
