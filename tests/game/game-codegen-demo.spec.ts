import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vnexpress.net/', {
    timeout: 60000,
    waitUntil: "domcontentloaded"
  });
  await page.locator('.next-nav > a').click();
  await page.locator('#wrap-main-nav').getByRole('link', { name: 'Thư giãn' }).click();
  await page.getByRole('link', { name: 'Trò chơi' }).click();
  // await page.getByRole('link', { name: 'Trò chơi' }).first().click();
  await page.getByRole('link', { name: 'xepchu' }).click();
  await page.getByRole('button', { name: '×' }).click();

  //  case nay test 4 hooks
  await page.getByRole('link', { name: 'Thư giãn' }).nth(1).click();
  await page.getByRole('link', { name: 'VnExpress - Bao tieng Viet', description: 'Báo VnExpress - Báo tiếng Việt nhiều người xem nhất' }).click();
});