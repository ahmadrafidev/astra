import { test, expect } from '@playwright/test';

test.describe('Error Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/error'); 
  });

  test('should display all Error components with correct titles and messages', async ({ page }) => {
    // Check visibility of the first Error component
    const networkError = page.locator('text=Network error');
    await expect(networkError).toBeVisible();
    await expect(networkError).toHaveText('Network error');
    
    const networkMessage = page.locator('text=Please check your internet connection or try again');
    await expect(networkMessage).toBeVisible();

    // Check visibility of the second Error component
    const paymentError = page.locator('text=Your card was declined!');
    await expect(paymentError).toBeVisible();
    await expect(paymentError).toHaveText('Your card was declined!');

    const paymentMessage = page.locator('text=Please check your payment information or try again');
    await expect(paymentMessage).toBeVisible();

    // Check visibility of the third Error component
    const authenticationError = page.locator('text=Wrong credentials');
    await expect(authenticationError).toBeVisible();
    await expect(authenticationError).toHaveText('Wrong credentials');

    const authenticationMessage = page.locator('text=Please check your email and password or try again');
    await expect(authenticationMessage).toBeVisible();
  });

  test('should trigger primary and secondary actions correctly', async ({ page }) => {
    // Click on "Retry" button of the first Error component
    const retryButton1 = page.locator('button:has-text("Retry")').nth(0);
    await expect(retryButton1).toBeVisible();
    await retryButton1.click();
    
    // Click on "Cancel" button of the first Error component
    const cancelButton1 = page.locator('button:has-text("Cancel")').nth(0);
    await expect(cancelButton1).toBeVisible();
    await cancelButton1.click();
    
    // Click on "Retry" button of the second Error component
    const retryButton2 = page.locator('button:has-text("Retry")').nth(1);
    await expect(retryButton2).toBeVisible();
    await retryButton2.click();

    // Click on "Cancel" button of the second Error component
    const cancelButton2 = page.locator('button:has-text("Cancel")').nth(1);
    await expect(cancelButton2).toBeVisible();
    await cancelButton2.click();

    // Click on "Retry" button of the third Error component
    const retryButton3 = page.locator('button:has-text("Retry")').nth(2);
    await expect(retryButton3).toBeVisible();
    await retryButton3.click();

    // Click on "Cancel" button of the third Error component
    const cancelButton3 = page.locator('button:has-text("Cancel")').nth(2);
    await expect(cancelButton3).toBeVisible();
    await cancelButton3.click();
  });
});
