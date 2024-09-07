import { test, expect } from '@playwright/test';

test.describe('Marquee component tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/marquee');
  });

  test('should render and display marquee text', async ({ page }) => {
    // Verify that the Marquee is rendered and visible
    const marquee = page.locator('span', { hasText: 'Welcome to our website! Check out the latest updates and offers.' });
    await expect(marquee).toBeVisible();
  });

  test('should scroll text as per direction prop', async ({ page }) => {
    // Set a short timeout to allow for the marquee movement
    await page.waitForTimeout(1000);

    // Grab the marquee element's initial position
    const marqueeContainer = page.locator('span', { hasText: 'Welcome to our website! Check out the latest updates and offers.' });
    const initialPosition = await marqueeContainer.evaluate(el => el.getBoundingClientRect().left);

    // Wait for the marquee to move
    await page.waitForTimeout(1000);

    // Grab the position again to verify movement
    const newPosition = await marqueeContainer.evaluate(el => el.getBoundingClientRect().left);

    // Check if the text has moved (based on the direction)
    expect(newPosition).not.toBe(initialPosition);
  });
});
