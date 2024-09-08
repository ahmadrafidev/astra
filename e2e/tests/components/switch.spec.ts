import { test, expect } from '@playwright/test';

test.describe('Switch Client', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/switch');
  });

  test('should switch title correctly', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Switch' })).toBeVisible();
  });

});
