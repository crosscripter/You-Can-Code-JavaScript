import { test, expect } from '@playwright/test';

// End-to-End test!
test('Calculator adds two numbers correctly', async ({ page }) => {
  await page.goto('http://localhost:5173'); // Update this URL

  // Input the first and second number and click add
  await page.click('button:has-text("5")');
  await page.click('button:has-text("+")');
  await page.click('button:has-text("3")');

  // Calculate the result
  await page.click('button:has-text("=")');

  // Verify the result
  const display = await page.locator('input[type=text]');
  const result = await display.inputValue();
  expect(result).toBe('8');
});
