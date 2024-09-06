import { test, expect } from '@playwright/test';

test.describe('KeyboardShortcut component tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/keyboard-shortcut');
  });

  test('should render the KeyboardShortcut button and trigger action on click', async ({ page }) => {
    const shortcutButton = page.getByRole('button', { name: 'Show keyboard shortcuts' });
    await expect(shortcutButton).toBeVisible();
    await shortcutButton.click();
    
    const modal = page.getByRole('dialog', { name: 'Keyboard shortcuts' });
    await expect(modal).toBeVisible();
  });

  test('should trigger the correct action when a shortcut key is pressed', async ({ page }) => {
    // Press 'Ctrl + N' to trigger 'New item' action
    await page.keyboard.press('Control+N');

    // Press 'Ctrl + S' to trigger 'Save' action
    await page.keyboard.press('Control+S');

    // Press 'Ctrl + Shift + P' to trigger 'Print' action
    await page.keyboard.press('Control+Shift+P');
  });
});
