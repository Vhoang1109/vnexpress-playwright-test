import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://diemthi.vnexpress.net/?_gl=1*vrdatv*_gcl_au*MzU2ODQ4MzcwLjE3ODM1NzQ3Mzg.');
  await page.getByRole('button', { name: 'Xem kết quả' }).click();
  await page.getByRole('textbox', { name: 'Nhập số báo danh' }).click();
  await page.getByRole('textbox', { name: 'Nhập số báo danh' }).fill('');
  await page.getByRole('button', { name: 'Xem kết quả' }).click();
});