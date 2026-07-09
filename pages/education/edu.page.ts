import { expect, Page } from "@playwright/test";
import { BasePage } from "../base-page/base.page";

export class EduPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    // Actions
    async clickEducate() {
        await this.page.locator("(//a[@title='Giáo dục'])[1]").click();
    }

    async clickAdmissions() {
        await this.page.locator("(//a[@title='Tuyển sinh'])[1]").click();
    }

    async clickExamScore() {
        await this.page.locator("//a[@title='Điểm thi']").click();
    }

    async searchExamNumber(sbd: string) {
        const textbox = this.page.locator("//input[@id='tc-search-input']");

        await textbox.fill(sbd);
    }

    async clickViewResult() {
        await this.page.locator("//button[@type='button']").click();
    }

    // Verification
    async verifyInvalidExamNumber() {
        await expect(this.page.getByText("Số báo danh không đúng")).toBeVisible();
    }

    async verifyEmptyExamNumber() {
        await expect(this.page.getByText("Vui lòng nhập số báo danh")).toBeVisible();
    }

    async verifyResultOpened() {
        await expect(this.page.locator("table")).toBeVisible();
    }
}