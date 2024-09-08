import { test, expect } from '@playwright/test';

test.describe('Timeline Client', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/timeline');
  });

  test('should timeline title correctly', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Timeline' })).toBeVisible();
  });

});
