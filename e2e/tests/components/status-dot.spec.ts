import { test, expect } from '@playwright/test';

test.describe('StatusDot Client', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/status-dot');
  });

  test('should StatusDot title correctly', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Status Dot' })).toBeVisible();
  });

});
