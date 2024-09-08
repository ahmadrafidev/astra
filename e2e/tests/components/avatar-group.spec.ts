import { test, expect } from '@playwright/test';

test.describe('ButtonClient Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/avatar-group');
  });

  test('should avatar group title correctly', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Avatar Group' })).toBeVisible();
  });

});
