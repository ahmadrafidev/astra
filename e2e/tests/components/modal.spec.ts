import { test, expect } from '@playwright/test';

test.describe('Modal component tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/modal');
  });

  test('should open and close the default modal', async ({ page }) => {
    const openButton = page.locator('button', { hasText: 'Open Default Modal' });
    await expect(openButton).toBeVisible();
    await openButton.click();

    // Verify the modal is opened
    const modal = page.locator('h2', { hasText: 'Default Modal' });
    await expect(modal).toBeVisible();

    // Close the modal using the default close button (X icon)
    const closeButton = page.locator('button[aria-label="Close"]');
    await closeButton.click();
    await expect(modal).not.toBeVisible();
  });

  test('should open and close the form modal', async ({ page }) => {
    const openButton = page.locator('button', { hasText: 'Open Form Modal' });
    await expect(openButton).toBeVisible();
    await openButton.click();

    // Verify the form modal is opened
    const formModal = page.locator('h2', { hasText: 'Form Modal' });
    await expect(formModal).toBeVisible();

    // Verify form elements are visible
    const nameInput = page.locator('input[name="name"]');
    await expect(nameInput).toBeVisible();

    const emailInput = page.locator('input[name="email"]');
    await expect(emailInput).toBeVisible();

    // Close the form modal using the default close button (X icon)
    const closeButton = page.locator('button[aria-label="Close"]');
    await closeButton.click();
    await expect(formModal).not.toBeVisible();
  });

  test('should open and close the custom modal', async ({ page }) => {
    const openButton = page.locator('button', { hasText: 'Open Custom Modal' });
    await expect(openButton).toBeVisible();
    await openButton.click();

    // Verify the custom modal is opened
    const customModal = page.locator('h2', { hasText: 'Custom Modal' });
    await expect(customModal).toBeVisible();

    // Close the custom modal using the custom close button
    const closeButton = page.locator('button', { hasText: 'Close Modal' });
    await closeButton.click();
    await expect(customModal).not.toBeVisible();
  });
});
