import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../base-page/base.page";

export class CarPage extends BasePage {
    // Locators
    carMenu: Locator;
    theoryExamLink: Locator;
    licenseA1Link: Locator;
    exam1Link: Locator;

    constructor(page: Page) {
        super(page);

        this.carMenu = page.locator("#wrap-main-nav").getByRole("link", { name: "Xe" });

        this.theoryExamLink = page.getByRole("link", {
            name: "Thi lý thuyết",
        });

        this.licenseA1Link = page.getByRole("link", {
            name: "A1",
        });

        this.exam1Link = page.getByRole("link", {
            name: "Đề số 1 Play",
            exact: true,
        });
    }

    // Actions
    async clickCarMenu() {
        await this.carMenu.click();
    }

    async clickTheoryExam() {
        await this.theoryExamLink.click();
    }

    async selectLicense() {
        await this.licenseA1Link.click();
    }

    async openExam() {
        await this.exam1Link.click();
    }

    // Verification
    async verifyExamOpened() {
        await expect(this.exam1Link).toBeVisible();
    }
}