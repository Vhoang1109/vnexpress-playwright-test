import { Page } from "@playwright/test";

export class EduPage {
    page: Page;

    eduLocatorXpath: string = "(//a[@title='Giáo dục'])[1]";
    eduAdmissionsXpath: string = "(//a[@title='Tuyển sinh'])[1]";
    eduExamScoreXpath: string = "//a[@title='Điểm thi']";
    eduSbdXpath: string = "//input[@id='tc-search-input']";
    eduBtnXpath: string = "//button[@type='button']";

    //trong hàm tạo có bao nhiêu tk, khi dùng khởi tạo bấy nhiêu
    constructor(page: Page) {
        this.page = page
    };

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
        await this.page.locator(this.eduSbdXpath).fill(sbd);
        await this.page.locator(this.eduBtnXpath).click();

    }

    async clickViewResult() {
        await this.page.locator(this.eduBtnXpath).click();
    }

};

