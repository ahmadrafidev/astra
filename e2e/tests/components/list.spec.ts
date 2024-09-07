import { test, expect } from '@playwright/test';

test.describe('List component tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/list');
  });

  test('should render an unordered list without icons', async ({ page }) => {
    const unorderedList = page.locator('ul').filter({ hasText: 'Apple' });
    await expect(unorderedList).toBeVisible();

    // Verify items are rendered
    const apple = page.locator('li', { hasText: 'Apple' }).first();
    const banana = page.locator('li', { hasText: 'Banana' }).first();
    const cherry = page.locator('li', { hasText: 'Cherry' }).first();

    await expect(apple).toBeVisible();
    await expect(banana).toBeVisible();
    await expect(cherry).toBeVisible();
  });

  test('should render an unordered list with icons', async ({ page }) => {
    const unorderedListWithIcons = page.locator('ul').filter({ hasText: 'Shopping List' }).first();
    await expect(unorderedListWithIcons).toBeVisible();

    // Verify items and their icons (explicitly choosing the first element for disambiguation)
    const shoppingList = page.locator('li', { hasText: 'Shopping List' }).first();
    const favorites = page.locator('li', { hasText: 'Favorites' }).first();
    const wishlist = page.locator('li', { hasText: 'Wishlist' }).first();

    await expect(shoppingList).toBeVisible();
    await expect(shoppingList.locator('span:has(svg)')).toBeVisible(); // Check for the span containing the svg
    await expect(favorites).toBeVisible();
    await expect(favorites.locator('span:has(svg)')).toBeVisible(); // Check for the span containing the svg
    await expect(wishlist).toBeVisible();
    await expect(wishlist.locator('span:has(svg)')).toBeVisible(); // Check for the span containing the svg
  });

  test('should render an ordered list without icons', async ({ page }) => {
    const orderedList = page.locator('ol').filter({ hasText: 'First item' });
    await expect(orderedList).toBeVisible();

    // Verify items are rendered
    const firstItem = page.locator('li', { hasText: 'First item' }).first();
    const secondItem = page.locator('li', { hasText: 'Second item' }).first();
    const thirdItem = page.locator('li', { hasText: 'Third item' }).first();

    await expect(firstItem).toBeVisible();
    await expect(secondItem).toBeVisible();
    await expect(thirdItem).toBeVisible();
  });

  test('should render an ordered list with icons', async ({ page }) => {
    const orderedListWithIcons = page.locator('ol').filter({ hasText: 'Shopping List' }).first();
    await expect(orderedListWithIcons).toBeVisible();

    // Verify items and their icons (explicitly choosing the first element for disambiguation)
    const shoppingList = page.locator('li', { hasText: 'Shopping List' }).first();
    const favorites = page.locator('li', { hasText: 'Favorites' }).first();
    const wishlist = page.locator('li', { hasText: 'Wishlist' }).first();

    await expect(shoppingList).toBeVisible();
    await expect(shoppingList.locator('span:has(svg)')).toBeVisible(); // Check for the span containing the svg
    await expect(favorites).toBeVisible();
    await expect(favorites.locator('span:has(svg)')).toBeVisible(); // Check for the span containing the svg
    await expect(wishlist).toBeVisible();
    await expect(wishlist.locator('span:has(svg)')).toBeVisible(); // Check for the span containing the svg
  });
});
