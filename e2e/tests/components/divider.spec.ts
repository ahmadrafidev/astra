import { test, expect } from '@playwright/test';

test.describe('Divider Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/components/divider');
  });

  test('should render dividers correctly with the specified orientations and sizes', async ({ page }) => {
    // Locate all dividers by their role and orientation
    const dividers = page.locator('div[role="separator"][aria-orientation="horizontal"]');
    
    // Expect there to be exactly two horizontal dividers
    await expect(dividers).toHaveCount(2);
    
    // Check the first horizontal divider (size md)
    const firstDivider = dividers.nth(0);
    await expect(firstDivider).toBeVisible();
    await expect(firstDivider).toHaveClass(/h-0\.5/); // Ensure it has the class for medium size
    await expect(firstDivider).toHaveClass(/bg-gray-600/);

    // Check the second horizontal divider (size sm)
    const secondDivider = dividers.nth(1);
    await expect(secondDivider).toBeVisible();
    await expect(secondDivider).toHaveClass(/h-px/); // Ensure it has the class for small size
    await expect(secondDivider).toHaveClass(/bg-gray-600/);
  });

  test('should render divider sections with correct content', async ({ page }) => {
    // Verify section content around dividers
    const section1 = page.locator('text=Section 1');
    await expect(section1).toBeVisible();

    const section2 = page.locator('text=Section 2');
    await expect(section2).toBeVisible();

    const section3 = page.locator('text=Section 3');
    await expect(section3).toBeVisible();
  });
});
