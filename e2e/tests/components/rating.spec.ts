import { test, expect } from '@playwright/test';

test.describe('Rating Client', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/rating');
  });

  test('should Rating title correctly', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Rating' })).toBeVisible();
  });

});
