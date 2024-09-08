import { test, expect } from '@playwright/test';

test.describe('ButtonClient Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/badge');
  });

  test('should badge title correctly', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Badge' })).toBeVisible();
  });

});
