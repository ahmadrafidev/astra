import { test, expect } from '@playwright/test';

test.describe('Spinner Client', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/spinner');
  });

  test('should spinner title correctly', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Spinner' })).toBeVisible();
  });

});
