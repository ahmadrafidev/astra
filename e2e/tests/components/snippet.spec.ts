import { test, expect } from '@playwright/test';

test.describe('Snippet Client', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/snippet');
  });

  test('should Snippet title correctly', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Snippet' })).toBeVisible();
  });

});
