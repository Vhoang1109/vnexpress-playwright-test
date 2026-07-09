import { expect, FrameLocator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly loginFrame: FrameLocator;

    constructor(page: Page) {
        this.page = page;
        this.loginFrame = page.locator("iframe").nth(2).contentFrame();
    }

    async gotoLoginPage() {
        await this.page.goto("https://vnexpress.net/", {
            timeout: 60000,
            waitUntil: "domcontentloaded",
        });
    }

    async openLoginPopup() {
        await this.page.getByRole("link", { name: "Đăng nhập" }).click();
    }

    async verifyEmailTextbox() {
        await expect(
            this.loginFrame.getByRole("textbox", { name: "Nhập Email của bạn" })
        ).toBeVisible();
    }

    async fillEmail(email: string) {
        const emailTextbox = this.loginFrame.getByRole("textbox", {
            name: "Nhập Email của bạn",
        });

        await expect(emailTextbox).toBeVisible();

        await emailTextbox.click();
        await emailTextbox.clear();
        await emailTextbox.pressSequentially(email, { delay: 80 });

        await expect(emailTextbox).toHaveValue(email);
    }

    async clickContinue() {
        const continueBtn = this.loginFrame.getByRole("button", {
            name: "Tiếp tục",
        });
        await expect(continueBtn).toBeEnabled();
        await continueBtn.click();
    }

    async verifyPasswordTextbox() {
        await expect(
            this.loginFrame.getByRole("textbox", { name: "Mật khẩu" })
        ).toBeVisible();
    }

    async fillPassword(password: string) {
        const passwordTextbox = this.loginFrame.getByRole("textbox", {
            name: "Mật khẩu",
        });

        await expect(passwordTextbox).toBeVisible();
        await passwordTextbox.fill(password);
    }

    async clickLogin() {
        const loginBtn = this.loginFrame.getByRole("button", {
            name: "Đăng nhập",
        });

        await expect(loginBtn).toBeEnabled();
        await loginBtn.click();
    }
}