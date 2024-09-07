import { test, expect } from '@playwright/test';

test.describe('Pagination component tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/pagination'); 
  });

  test('should disable "Previous" button on the first page', async ({ page }) => {
    // Locate and check the "Previous" button is disabled on the first page
    const prevButton = page.locator('button', { hasText: 'Previous' });
    await expect(prevButton).toBeDisabled();
  });

  test('should disable "Next" button on the last page', async ({ page }) => {
    // Click to go to the last page
    const lastPageButton = page.locator('button', { hasText: '10' });
    await lastPageButton.click();

    // Ensure the "Next" button is disabled on the last page
    const nextButton = page.locator('button', { hasText: 'Next' });
    await expect(nextButton).toBeDisabled();
  });

  test('should change page when clicking pagination buttons', async ({ page }) => {
    // Click on page 3
    const pageThreeButton = page.locator('button', { hasText: '3' });
    await pageThreeButton.click();

    const activePageButton = page.locator('button', { hasText: '3' });
    await expect(activePageButton).toHaveClass(/bg-black/);

    // Ensure the "Previous" button is not disabled
    const prevButton = page.locator('button', { hasText: 'Previous' });
    await expect(prevButton).not.toBeDisabled();
  });

  test('should update the active class when switching pages', async ({ page }) => {
    const pageFiveButton = page.locator('button', { hasText: '5' });
    await pageFiveButton.click();

    const activePageButton = page.locator('button', { hasText: '5' });
    await expect(activePageButton).toHaveClass(/bg-black/); 
  });

  test('should navigate to the next page when clicking the "Next" button', async ({ page }) => {
    const nextButton = page.locator('button', { hasText: 'Next' });
    await nextButton.click();

    const activePageButton = page.locator('button', { hasText: '2' });
    await expect(activePageButton).toHaveClass(/bg-black/); 
  });
});
