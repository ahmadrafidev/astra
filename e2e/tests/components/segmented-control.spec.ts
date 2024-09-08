import { test, expect } from '@playwright/test';

test.describe('Segmented Control', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/segmented-control');
  });

  test('should Segmented Control title correctly', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Segmented Control' })).toBeVisible();
  });

});
