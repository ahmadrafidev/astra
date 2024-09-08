import { test, expect } from '@playwright/test';

test.describe('Slider Client', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/slider');
  });

  test('should Slider title correctly', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Slider' })).toBeVisible();
  });

});
