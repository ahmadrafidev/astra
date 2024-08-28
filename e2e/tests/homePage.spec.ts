import { test, expect } from '@playwright/test';

test.describe('HomePage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the correct landing page elements', async ({ page }) => {
    // Check if the main header is visible
    await expect(page.locator('h1:text("Building Blocks of Modern UI")')).toBeVisible();

    // Check if the 'Browse Components' button navigates correctly
    await page.click('text=Browse Components');
    await expect(page).toHaveURL('/components');

    // Go back to home page
    await page.goto('/');

    // Check if the 'Get Started' button navigates correctly
    await page.click('text=Get Started');
    await expect(page).toHaveURL('/about');

    // Go back to home page
    await page.goto('/');

    // Ensure the "Inside AstraUI" section is visible
    await expect(page.locator('h2:text("Inside AstraUI.")')).toBeVisible();

    // Check if the "Foundations Overview" link works
    await page.click('text=Foundations Overview');
    await expect(page).toHaveURL('/foundations');
  });

  test('should display interactive showcase correctly', async ({ page }) => {
    // Scroll to the interactive showcase section
    await page.locator('#interactive-showcase').scrollIntoViewIfNeeded();

    // Check if the InteractiveShowcase component is visible
    await expect(page.locator('#interactive-showcase')).toBeVisible();
  });
});
