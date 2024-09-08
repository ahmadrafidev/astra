import { test, expect } from '@playwright/test';

test.describe('ButtonClient Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/text-area');
  });

  test('should text area title correctly', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'TextArea' })).toBeVisible();
  });

});
