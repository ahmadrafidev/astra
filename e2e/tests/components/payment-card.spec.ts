import { test, expect } from '@playwright/test';

test.describe('PaymentCard component tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/payment-card');
  });

  test('should show error when card number is invalid', async ({ page }) => {
    // Fill invalid card number
    await page.fill('input#cardNumber', '1234');
    await page.fill('input#expiry', '12/25');
    await page.fill('input#cvv', '123');

    // Submit the form
    await page.click('button[type="submit"]');
    
    // Check for card number error message
    const cardNumberError = page.locator('#cardNumberError');
    await expect(cardNumberError).toBeVisible();
    await expect(cardNumberError).toHaveText('Invalid card number. Must be exactly 16 digits.');
  });

  test('should show error when expiry date is invalid', async ({ page }) => {
    // Fill valid card number but invalid expiry
    await page.fill('input#cardNumber', '1234123412341234');
    await page.fill('input#expiry', '13/22'); 
    await page.fill('input#cvv', '123');

    // Submit the form
    await page.click('button[type="submit"]');

    // Check for expiry error message
    const expiryError = page.locator('#expiryError');
    await expect(expiryError).toBeVisible();
    await expect(expiryError).toHaveText('Invalid expiry date. Use MM/YY format.');
  });

  test('should show error when CVV is invalid', async ({ page }) => {
    // Fill valid card number and expiry but invalid CVV
    await page.fill('input#cardNumber', '1234123412341234');
    await page.fill('input#expiry', '12/25');
    await page.fill('input#cvv', '12'); 

    // Submit the form
    await page.click('button[type="submit"]');

    // Check for CVV error message
    const cvvError = page.locator('#cvvError');
    await expect(cvvError).toBeVisible();
    await expect(cvvError).toHaveText('Invalid CVV. Must be exactly 3 digits.');
  });
});
