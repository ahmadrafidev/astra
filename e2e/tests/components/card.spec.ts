import { test, expect } from '@playwright/test';

test.describe('CardPageClient Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/card');
  });

  test('should render all card variants correctly', async ({ page }) => {
    // Check if the first card with title "White Horse" and its image is visible
    await expect(page.locator('h3:text("White Horse")')).toBeVisible();
    await expect(page.locator('img[alt="White Horse"]')).toBeVisible();

    // Check if the second card with title "Card Title 2" is visible
    await expect(page.locator('h3:text("Card Title 2")')).toBeVisible();

    // Check if the third card with title "Card Title 3" and the "Action" button is visible
    await expect(page.locator('h2:text("Card Title 3")')).toBeVisible();
    await expect(page.locator('button:text("Action")')).toBeVisible();

    // Check if the fourth card with title "White Horse Again" and the "Try Click Me" button is visible
    await expect(page.locator('h2:text("White Horse Again")')).toBeVisible();
    await expect(page.locator('button:text("Try Click Me")')).toBeVisible();
  });

  test('should perform actions on interactive card', async ({ page }) => {
    // Click the button on the interactive card and check for any alert or action
    page.once('dialog', dialog => {
      expect(dialog.message()).toBe('neigh');
      dialog.dismiss().catch(() => {});
    });

    await page.click('button:has-text("Try Click Me")');
  });
});
