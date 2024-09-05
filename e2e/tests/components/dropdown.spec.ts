import { test, expect } from '@playwright/test';

test.describe('Dropdown Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/dropdown');
  });

  test('should display the correct number of options', async ({ page }) => {
    // Locate the dropdown by its placeholder or some unique text it contains
    const dropdown = page.locator('text=Select an option');

    // Click the dropdown to open the options
    await dropdown.click();

    // Wait for the dropdown options to be visible
    const options = page.locator('[role=option]'); // Assuming options have a role="option"

    // Verify the correct number of options
    await expect(options).toHaveCount(3);
  });
});
