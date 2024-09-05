import { test, expect } from '@playwright/test';

test.describe('Tooltip Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/tooltip');
  });

  test('should display the default tooltip on hover', async ({ page }) => {
    // Locate the button for the default tooltip
    const defaultTooltipButton = page.locator('button:has-text("Default Tooltip")');
    await expect(defaultTooltipButton).toBeVisible();

    // Hover over the button to trigger the tooltip
    await defaultTooltipButton.hover();

    // Check for the visibility of the tooltip
    const defaultTooltip = page.locator('div[role="tooltip"]:has-text("Default tooltip")');
    await expect(defaultTooltip).toBeVisible();
  });

  test('should display the arrow bottom tooltip on hover', async ({ page }) => {
    // Locate the button for the arrow bottom tooltip
    const arrowBottomTooltipButton = page.locator('button:has-text("Arrow Bottom Tooltip")');
    await expect(arrowBottomTooltipButton).toBeVisible();

    // Hover over the button to trigger the tooltip
    await arrowBottomTooltipButton.hover();

    // Check for the visibility of the tooltip
    const arrowBottomTooltip = page.locator('div[role="tooltip"]:has-text("Arrow Bottom Tooltip")');
    await expect(arrowBottomTooltip).toBeVisible();
  });

  test('should display the arrow top tooltip on hover', async ({ page }) => {
    // Locate the button for the arrow top tooltip
    const arrowTopTooltipButton = page.locator('button:has-text("Arrow Top Tooltip")');
    await expect(arrowTopTooltipButton).toBeVisible();

    // Hover over the button to trigger the tooltip
    await arrowTopTooltipButton.hover();

    // Check for the visibility of the tooltip
    const arrowTopTooltip = page.locator('div[role="tooltip"]:has-text("Arrow Top Tooltip")');
    await expect(arrowTopTooltip).toBeVisible();
  });
});
