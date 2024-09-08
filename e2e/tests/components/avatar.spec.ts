import { test, expect } from '@playwright/test';

test.describe('ButtonClient Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/avatar');
  });

  test('should avatar title correctly', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Avatar' })).toBeVisible();
  });

});
