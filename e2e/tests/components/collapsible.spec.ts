import { test, expect } from '@playwright/test';

test.describe('Collapsible Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/collapsible');
  });

  test('should render all collapsible variants correctly', async ({ page }) => {
    // Default Collapsible
    const defaultCollapsibleButton = page.locator('button:has-text("Default Collapsible")');
    const defaultCollapsibleContentContainer = page.locator('text=This is the content for the default collapsible section').locator('..').locator('..');
    
    await expect(defaultCollapsibleButton).toBeVisible();

    // Verify the collapsible is initially hidden
    await expect(defaultCollapsibleContentContainer).toHaveCSS('max-height', '0px');
    await expect(defaultCollapsibleContentContainer).toHaveCSS('opacity', '0');

    // Click to open the "Default Collapsible"
    await defaultCollapsibleButton.click();

    // Wait for the transition to complete
    await page.waitForTimeout(500); // Adjust this if necessary

    // Verify the content is now visible
    await expect(defaultCollapsibleContentContainer).not.toHaveCSS('max-height', '0px');
    await expect(defaultCollapsibleContentContainer).toHaveCSS('opacity', '1');
  });

  test('should correctly handle Initially Open Collapsible', async ({ page }) => {
    const initiallyOpenCollapsibleButton = page.locator('button:has-text("Initially Open Collapsible")');
    const initiallyOpenCollapsibleContentContainer = page.locator('text=This collapsible section is open by default').locator('..').locator('..');

    await expect(initiallyOpenCollapsibleButton).toBeVisible();
    await expect(initiallyOpenCollapsibleContentContainer).not.toHaveCSS('max-height', '0px');
    await expect(initiallyOpenCollapsibleContentContainer).toHaveCSS('opacity', '1');
  });

  test('should correctly handle Customized and Disabled Collapsible', async ({ page }) => {
    const customizedCollapsibleButton = page.locator('button:has-text("Customized Collapsible")');
    const customizedCollapsibleContentContainer = page.locator('text=This collapsible section has a custom icon and content background color').locator('..').locator('..');
    const disabledCollapsibleButton = page.locator('button:has-text("Disabled Collapsible")');

    await expect(customizedCollapsibleButton).toBeVisible();
    await expect(customizedCollapsibleContentContainer).toHaveCSS('max-height', '0px');
    await expect(customizedCollapsibleContentContainer).toHaveCSS('opacity', '0');

    await expect(disabledCollapsibleButton).toBeVisible();
    await expect(disabledCollapsibleButton).toBeDisabled();
  });
});
