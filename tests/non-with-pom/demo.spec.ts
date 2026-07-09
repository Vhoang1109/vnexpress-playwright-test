import { test } from "@playwright/test";
test('test form registration', async ({ page }) => {

    await test.step('fill into', async () => {
        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html")

        await page.locator("//input[@id='username']").fill("Viet Hoang + Automation");
        await page.fill("//input[@id='email']", "vhoang1109@gmail.com");
        await page.locator("//textarea[@id='bio']").pressSequentially("Hello", {
            delay: 200 // bo dem 200 mili giây, 1000 1s, 2000 2s
        });

        //select radiobox
        await page.locator("//input[@id='female']").check();

        // select checkbox
        await page.locator("//input[@id='reading']").setChecked(true);
        await page.locator("//input[@id='reading']").setChecked(false);
        // selectOption
        await page.locator("//select[@id='country']").selectOption("Canada")

        await page.locator("//input[@id='dob']").fill('2002-09-11')
        // select input file
        await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-05/test/file-test.txt")
        // select
        await page.locator("//input[@id='rating']").click({
            
        });
    });
});


test('check mouse and key board', async ({ page }) => {

    await test.step('click chuot', async () => {
        await page.goto("https://material.playwrightvn.com/018-mouse.html");
        await page.locator("//div[@id='clickArea']").click();
    });

    await test.step('double click', async () => {
        // cach1
        await page.locator("//div[@id='clickArea']").click({
            clickCount: 2
        });
        await page.locator("//div[@id='clickArea']").dblclick();

    });

    await test.step('click chuot phai', async () => {
        await page.locator("//div[@id='clickArea']").click({
            button: "right"
        });

        await test.step('click + shift', async () => {
            await page.locator("//div[@id='clickArea']").click({
                modifiers: ["Shift"]
            });
        });
    });
});