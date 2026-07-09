import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vnexpress.net/', {
    timeout: 60000,
    waitUntil: "domcontentloaded"
  });
  await page.locator('#wrap-main-nav').getByRole('link', { name: 'Thời sự' }).click();
  await page.getByRole('link', { name: 'Chính trị' }).first().click();
  await page.getByRole('link', { name: 'Dân sinh' }).click();
  await page.getByRole('link', { name: 'Việc làm' }).click();
  await page.getByRole('link', { name: 'Giao thông' }).first().click();
  await page.getByRole('link', { name: 'Quỹ Hy vọng' }).click();
  await page.getByRole('link', { name: 'Thời sự' }).nth(1).click();
  await page.getByRole('link', { name: 'Suối từng cuốn ôtô ở Đồng Nai' }).first().click();
  await page.getByRole('link', { name: 'Thời sự' }).nth(1).click();
});