import { expect, Page } from "@playwright/test";
import { BasePage } from "../base-page/base.page";

export class EduPage extends BasePage {

    eduLocatorXpath: string = "(//a[@title='Giáo dục'])[1]";
    eduAdmissionsXpath: string = "(//a[@title='Tuyển sinh'])[1]";
    eduExamScoreXpath: string = "//a[@title='Điểm thi']";
    eduSbdXpath: string = "//input[@id='tc-search-input']";
    eduBtnXpath: string = "//button[@type='button']";

    constructor(page: Page) {
        super(page);
    }

    // Actions
    async clickEducate() {
        await this.page.locator(this.eduLocatorXpath).click();
    }

    async clickAdmissions() {
        await this.page.locator(this.eduAdmissionsXpath).click();
    }

    async clickExamScore() {
        await this.page.locator(this.eduExamScoreXpath).click();
    }

    async searchExamNumber(sbd: string) {
        const textbox = this.page.locator(this.eduSbdXpath);

        await textbox.fill(sbd);
    }

    async clickViewResult() {
        await this.page.locator(this.eduBtnXpath).click();
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