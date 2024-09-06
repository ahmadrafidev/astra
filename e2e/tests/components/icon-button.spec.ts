import { test, expect } from '@playwright/test';

test.describe('IconButton component tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/icon-button');
  });

  test('should render and interact with contained variant buttons', async ({ page }) => {
    const deleteButton = page.locator('div').filter({ hasText: /^Contained Variant$/ }).getByRole('button', { name: 'Delete' });
    await expect(deleteButton).toBeVisible();
    await deleteButton.click();
    await expect(page).toHaveURL('/components/icon-button'); 
  });

  test('should render and interact with outlinedBorder variant buttons', async ({ page }) => {
    const editButton = page.locator('div').filter({ hasText: /^Outlined Border Variant$/ }).getByRole('button', { name: 'Edit' });
    await expect(editButton).toBeVisible();
    await editButton.click();
    await expect(page).toHaveURL('/components/icon-button');
  });

  test('should render and interact with outlinedNoBorder variant buttons', async ({ page }) => {
    const addButton = page.locator('div').filter({ hasText: /^Outlined No Border Variant$/ }).getByRole('button', { name: 'Add' });
    await expect(addButton).toBeVisible();
    await addButton.click();
    await expect(page).toHaveURL('/components/icon-button'); 
  });
});
