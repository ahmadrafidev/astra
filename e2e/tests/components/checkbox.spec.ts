import { test, expect } from '@playwright/test';

test.describe('CheckboxClient Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/checkbox');
  });

  test('should render and interact with checkboxes correctly', async ({ page }) => {
    // Check if the "Basic Checkbox" is visible and can be interacted with
    const basicCheckbox = page.locator('input[type="checkbox"]').first();
    await expect(basicCheckbox).toBeVisible();
    await expect(basicCheckbox).not.toBeChecked();

    // Click the basic checkbox to check it
    await basicCheckbox.check();
    await expect(basicCheckbox).toBeChecked();

    // Check if the "Checkbox with message" is visible and can be interacted with
    const errorCheckbox = page.locator('input[type="checkbox"]').nth(1);
    await expect(errorCheckbox).toBeVisible();
    await expect(errorCheckbox).not.toBeChecked();

    // Click the error checkbox to check it
    await errorCheckbox.check();
    await expect(errorCheckbox).toBeChecked();

    // Uncheck the error checkbox to trigger the error message
    await errorCheckbox.uncheck();
    await expect(page.locator('text=You must accept the terms and conditions.')).toBeVisible();

    // Click the error checkbox again to remove the error message
    await errorCheckbox.check();
    await expect(errorCheckbox).toBeChecked();
    await expect(page.locator('text=You must accept the terms and conditions.')).not.toBeVisible();
  });
});
