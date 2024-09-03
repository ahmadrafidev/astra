import { test, expect } from '@playwright/test';

test.describe('Carousel Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/carousel');
  });

  test('should render the carousel with images correctly', async ({ page }) => {
    // Check if the carousel region is visible
    await expect(page.locator('[aria-roledescription="carousel"]')).toBeVisible();

    // Check if all images are rendered
    const images = await page.locator('[aria-roledescription="carousel"] img');
    await expect(images).toHaveCount(3);  

    // Verify that the first image is visible
    await expect(images.first()).toBeVisible();
  });

  test('should navigate to the next and previous images using arrows', async ({ page }) => {
    // Initial check - the first image should be visible
    const images = await page.locator('[aria-roledescription="carousel"] img');
    await expect(images.first()).toBeVisible();

    // Click the next arrow and verify that the second image is visible
    await page.click('button[aria-label="Next slide"]');
    await expect(images.nth(1)).toBeVisible();

    // Click the previous arrow and verify that the first image is visible again
    await page.click('button[aria-label="Previous slide"]');
    await expect(images.first()).toBeVisible();
  });

  test('should autoplay images correctly', async ({ page }) => {
    // Check that autoplay advances the slides after the set interval
    const images = await page.locator('[aria-roledescription="carousel"] img');

    // Wait for the autoplay interval + a buffer
    await page.waitForTimeout(3500);

    // Verify that the second image is visible after autoplay
    await expect(images.nth(1)).toBeVisible();
  });

  test('should navigate to a specific image using dots', async ({ page }) => {
    // Ensure all dots are rendered correctly
    const dots = await page.locator('[aria-roledescription="carousel"] button[aria-label^="Go to slide"]');
    await expect(dots).toHaveCount(3);

    // Click on the third dot and verify that the third image is visible
    await dots.nth(2).click();
    const images = await page.locator('[aria-roledescription="carousel"] img');
    await expect(images.nth(2)).toBeVisible();
  });
});
