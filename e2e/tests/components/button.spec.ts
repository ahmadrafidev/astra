// e2e/tests/buttonClient.spec.ts
import { test, expect } from '@playwright/test';

test.describe('ButtonClient Component', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the ButtonClient page
    await page.goto('http://localhost:3000/components/button');
  });

  test('should render all button variants correctly', async ({ page }) => {
    await expect(page.locator('button', { hasText: 'Default Button' })).toBeVisible();
    await expect(page.locator('button', { hasText: 'Destructive Button' })).toBeVisible();
    await expect(page.locator('button', { hasText: 'Outline Button' })).toBeVisible();
    await expect(page.locator('button', { hasText: 'Secondary Button' })).toBeVisible();
    await expect(page.locator('button', { hasText: 'Ghost Button' })).toBeVisible();
    await expect(page.locator('button', { hasText: 'Link Button' })).toBeVisible();
  });

  test('should apply correct classes for button variants', async ({ page }) => {
    await expect(page.locator('button', { hasText: 'Default Button' })).toHaveClass(/bg-gray-800/);
    await expect(page.locator('button', { hasText: 'Destructive Button' })).toHaveClass(/bg-red-600/);
    await expect(page.locator('button', { hasText: 'Outline Button' })).toHaveClass(/border-gray-400/);
    await expect(page.locator('button', { hasText: 'Secondary Button' })).toHaveClass(/bg-gray-600/);
    await expect(page.locator('button', { hasText: 'Ghost Button' })).toHaveClass(/bg-transparent/);
    await expect(page.locator('button', { hasText: 'Link Button' })).toHaveClass(/underline/);
  });
});
