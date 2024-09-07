import { test, expect } from '@playwright/test';

test.describe('PhoneNumber component tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/phone-number');
  });

  test('should display default country and dial code', async ({ page }) => {
    // Check that the default selected country is displayed (Afghanistan +93)
    const dropdown = page.locator('text=🇦🇫 +93');
    await expect(dropdown).toBeVisible();
  });

  test('should change the selected country and update dial code', async ({ page }) => {
    // Open the dropdown and select another country (United States)
    await page.locator('text=🇦🇫 +93').click(); // Open the dropdown
    await page.locator('text=🇺🇸 +1').click(); // Select United States

    // Check that the selected country and dial code are updated to United States
    const selected = page.locator('text=🇺🇸 +1');
    await expect(selected).toBeVisible();
  });

  test('should allow entering and displaying a phone number', async ({ page }) => {
    // Select the phone number input specifically using a more precise selector
    const phoneNumberInput = page.locator('input[placeholder^="+"]'); 

    // Enter a phone number in the input field
    await phoneNumberInput.fill('123456789');

    // Check that the input field holds the correct phone number
    await expect(phoneNumberInput).toHaveValue('123456789');
  });
});
