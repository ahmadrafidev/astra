import { test, expect } from '@playwright/test';

test.describe('Input component tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/input');
  });

  test('should render and interact with a basic email input', async ({ page }) => {
    const emailInput = page.locator('input[type="email"]').first();
    await expect(emailInput).toBeVisible();

    await emailInput.fill('test@example.com');
    await expect(emailInput).toHaveValue('test@example.com');
  });

  test('should render and display an input with icon', async ({ page }) => {
    const emailWithIcon = page.locator('input[type="email"]').nth(1);
    await expect(emailWithIcon).toBeVisible();

    // Verify the icon is present in the input
    const icon = emailWithIcon.locator('~ div svg');
    await expect(icon).toBeVisible();
  });

  test('should render and display an input with error', async ({ page }) => {
    const emailWithError = page.locator('input[type="email"]').nth(2);
    await expect(emailWithError).toBeVisible();

    // Check for the error message
    const errorMessage = page.locator('p', { hasText: 'This is an error message.' });
    await expect(errorMessage).toBeVisible();
  });

  test('should render a disabled input', async ({ page }) => {
    const disabledInput = page.locator('input[disabled]');
    await expect(disabledInput).toBeVisible();
    await expect(disabledInput).toBeDisabled();
  });
});
