import { test, expect } from '@playwright/test';

test.describe('Stepper Client', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/stepper');
  });

  test('should stepper title correctly', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Stepper' })).toBeVisible();
  });

});
