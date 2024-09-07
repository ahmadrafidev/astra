import { test, expect } from '@playwright/test';

test.describe('PinCode component tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/pin-code');
  });

  test('should focus on the next input when a digit is entered', async ({ page }) => {
    const pinInputs = page.locator('input[type="password"]');
    
    // Type a number in the first input and check focus moves to the next input
    await pinInputs.first().fill('1');
    await expect(pinInputs.nth(1)).toBeFocused();
  });

  test('should show error when a non-numeric value is entered', async ({ page }) => {
    const pinInputs = page.locator('input[type="password"]');
    
    // Try entering an invalid (non-numeric) character in the first input
    await pinInputs.first().fill('a');
    
    // Ensure the error message appears
    const errorMessage = page.locator('text=Only numeric values are allowed');
    await expect(errorMessage).toBeVisible();
  });
  
  test('should handle incomplete PIN without triggering onComplete', async ({ page }) => {
    const pinInputs = page.locator('input[type="password"]');

    // Only fill part of the PIN
    await pinInputs.first().fill('1');
    await pinInputs.nth(1).fill('2');

    // Ensure onComplete is not triggered (e.g., no success message appears)
    const onCompleteMessage = page.locator('text=Entered Default PIN:');
    await expect(onCompleteMessage).not.toBeVisible();
  });
});
