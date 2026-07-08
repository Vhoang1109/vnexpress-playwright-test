import { test, expect } from '@playwright/test';
test("Submit contact form", async ({ page }) => {
    await page.goto("https://vnexpress.net/", {
        timeout: 60000,
        waitUntil: "domcontentloaded",
    });
    await page.locator('.next-nav > a').click();
    await page.getByRole('link', { name: 'Tất cả', exact: true }).click();
    await page.getByRole('link', { name: 'Tòa soạn', description: 'Tòa soạn', exact: true }).click();
    //await page.locator('//input[@name="fName"]').fill('pvh');
    await page.locator('#fName').fill('pvh')
    await page.locator("#fEmail").fill("abc@gmail.com"); await page.locator('#fCategory').selectOption('webmaster@vnexpress.net');
    await page.locator('#fTitle').click();
    await page.locator('#fTitle').fill('test');
    await page.locator('#fContent').click();
    await page.locator('#fContent').fill('I love you');
    //await page.getByRole('button', { name: 'Choose File' }).setInputFiles('Screenshot 2026-07-06 113606.png');
    await page.getByRole("button", { name: "Gửi" }).click();
    await page.getByRole('button', { name: '×' }).click();
    // await page.locator("//div[@class='mfp-container mfp-s-ready mfp-iframe-holder']").click()
});

