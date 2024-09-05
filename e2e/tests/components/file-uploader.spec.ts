import { test, expect } from '@playwright/test';

test.describe('FileUploader Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/file-uploader');
  });

  test('should render FileUploader component correctly', async ({ page }) => {
    const fileUploader = page.locator('text=Drag and drop your file here');
    await expect(fileUploader).toBeVisible();
  });
  
  test('should display error for large file', async ({ page }) => {
    const fileUploader = page.locator('text=Drag and drop your file here');
    await expect(fileUploader).toBeVisible();

    const inputFile = page.locator('input[type="file"]');
    await inputFile.setInputFiles({
      name: 'largefile.pdf',
      mimeType: 'application/pdf',
      buffer: Buffer.alloc(11 * 1024 * 1024), // 11MB file
    });

    const errorMessage = page.locator('text=File size exceeds 10MB limit.');
    await expect(errorMessage).toBeVisible();
  });

  test('should display error for invalid file type', async ({ page }) => {
    const fileUploader = page.locator('text=Drag and drop your file here');
    await expect(fileUploader).toBeVisible();

    const inputFile = page.locator('input[type="file"]');
    await inputFile.setInputFiles({
      name: 'invalidfile.txt',
      mimeType: 'text/plain',
      buffer: Buffer.from('this is a test file content'),
    });

    const errorMessage = page.locator('text=File type not allowed.');
    await expect(errorMessage).toBeVisible();
  });
});
