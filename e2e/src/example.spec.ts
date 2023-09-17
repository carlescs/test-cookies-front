import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  const title = page.locator('h1');
  await expect(title).toHaveText('Test Cookies');
});
