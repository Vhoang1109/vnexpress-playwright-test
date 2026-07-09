import { Page } from "@playwright/test";
import { BasePage } from "../base-page/base.page";

export class International extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async clickInternational() {
        await this.page.getByTitle("VnExpress International").click();
    }
}