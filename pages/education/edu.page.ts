import { expect, Page } from "@playwright/test";

export class EduPage {
    page: Page;

    eduLocatorXpath = "(//a[@title='Giáo dục'])[1]";
    eduAdmissionsXpath = "(//a[@title='Tuyển sinh'])[1]";
    eduExamScoreXpath = "//a[@title='Điểm thi']";
    eduSbdXpath = "//input[@id='tc-search-input']";
    eduBtnXpath = "//button[@type='button']";

    constructor(page: Page) {
        this.page = page;
    }

    async gotoHomePage() {
        await this.page.goto("https://vnexpress.net/");
    }

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

        await textbox.click();
        await textbox.fill(sbd);
    }

    async clickViewResult() {
        await this.page.locator(this.eduBtnXpath).click();
    }

    // verify (web-first assersion)

    async verifyInvalidExamNumber() {
        await expect(
            this.page.getByText("Số báo danh không đúng")
        ).toBeVisible();
    }

    async verifyEmptyExamNumber() {
        await expect(
            this.page.getByText("Vui lòng nhập số báo danh")
        ).toBeVisible();
    }

    async verifyResultOpened() {
        await expect(this.page.locator("table")).toBeVisible();
    }
}