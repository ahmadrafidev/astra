import { test, expect } from '@playwright/test';

test.describe('Select Client', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/select');
  });

  test('should Select title correctly', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Select' })).toBeVisible();
  });

});
