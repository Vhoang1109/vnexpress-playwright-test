import { Page } from "@playwright/test";

export class CarPage {
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
    async clickCarMenu() {
        await this.page.locator("#wrap-main-nav").getByRole("link", { name: "Xe" }).click();
    }

    async clickTheoryExam() {
        await this.page.getByRole("link", { name: "Thi lý thuyết" }).click();
    }

    async selectLicenseA1() {
        await this.page.getByRole("link", { name: "A1" }).click();
    }

    async openExam1() {
        await this.page.getByRole("link", { name: "Đề số 1 Play", exact: true }).click();
    }
}