import { test } from "@playwright/test";

import { International } from "../../pages/international/int.page"


test("navigate to international", async ({ page }) => {

    const international = new International(page);

    await test.step("Go to VNExpress", async () => {
        await international.gotoHomePage();
    });

    await test.step("Click International menu", async () => {
        await international.clickInternational();
    });
});


