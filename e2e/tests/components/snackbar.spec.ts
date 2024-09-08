import { test, expect } from '@playwright/test';

test.describe('Snackbar Client', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/snackbar');
  });

  test('should Snackbar title correctly', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Snackbar' })).toBeVisible();
  });

});
