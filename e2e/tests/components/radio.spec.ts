import { test, expect } from '@playwright/test';

test.describe('Radio Client', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/radio');
  });

  test('should Radio title correctly', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Radio' })).toBeVisible();
  });

});
