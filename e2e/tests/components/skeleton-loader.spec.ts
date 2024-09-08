import { test, expect } from '@playwright/test';

test.describe('Skeleton Loader Client', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/skeleton-loader');
  });

  test('should Skeleton Loader title correctly', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'SkeletonLoader' })).toBeVisible();
  });

});
