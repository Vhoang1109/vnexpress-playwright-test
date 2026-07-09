import { Page } from "@playwright/test";

export class International {
    page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async gotoHomePage() {
        await this.page.goto("https://vnexpress.net/", {
            waitUntil: "domcontentloaded",
            timeout: 60000,
        });
    }
    async clickInternational() {
        await this.page.getByTitle("VnExpress International").click();
    }

}