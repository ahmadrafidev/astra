import { test, expect } from '@playwright/test';

test.describe('Dock Component', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the Dock component page
    await page.goto('/components/dock');
  });

  test('should render Default Dock with correct items', async ({ page }) => {
    // Locate the Default Dock container
    const defaultDockContainer = page.locator('#default-dock');

    // Ensure the Default Dock container is visible
    await expect(defaultDockContainer).toBeVisible();

    // Verify the number of dock items in the Default Dock
    const defaultDockItems = defaultDockContainer.locator('a');
    await expect(defaultDockItems).toHaveCount(6);
  });

  test('should render Glassmorphism Dock with correct items', async ({ page }) => {
    // Locate the Glassmorphism Dock container
    const glassmorphismDockContainer = page.locator('#glassmorphism-dock');

    // Ensure the Glassmorphism Dock container is visible
    await expect(glassmorphismDockContainer).toBeVisible();

    // Verify the number of dock items in the Glassmorphism Dock
    const glassmorphismDockItems = glassmorphismDockContainer.locator('a');
    await expect(glassmorphismDockItems).toHaveCount(6);
  });
});
