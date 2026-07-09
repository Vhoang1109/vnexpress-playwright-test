// pages/base/base.page.ts
import { Page } from "@playwright/test";

export class BasePage {
    protected page: Page;
    protected readonly baseUrl = "https://vnexpress.net";

    constructor(page: Page) {
        this.page = page;
    }

    async gotoHomePage() {
        await this.page.goto(this.baseUrl, {
            timeout: 60000,
            waitUntil: "domcontentloaded",
        });
    }
}