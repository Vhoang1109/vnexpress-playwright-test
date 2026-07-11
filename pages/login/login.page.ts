import { expect, FrameLocator, Page } from "@playwright/test";
import { BasePage } from "../base-page/base.page";

export class LoginPage extends BasePage {
    loginFrame: FrameLocator;

    constructor(page: Page) {
        super(page);

        this.loginFrame = page.frameLocator("iframe.iframe_guest");
    }

    // Navigation
    async gotoLoginPage() {
        await this.gotoHomePage();
    }

    // Actions
    async openLoginPopup() {
        await this.page.getByRole("link", { name: "Đăng nhập" }).click();
    }

    async fillEmail(email: string) {
        const emailTextbox = this.loginFrame.getByRole("textbox", {
            name: "Nhập Email của bạn",
        });

        await expect(emailTextbox).toBeVisible();
        await emailTextbox.click();
        await emailTextbox.clear();
        await emailTextbox.pressSequentially(email, { delay: 100 });
        await expect(emailTextbox).toHaveValue(email);
    }

    async clickContinue() {
        const continueBtn = this.loginFrame.getByRole("button", {
            name: "Tiếp tục",
        });

        await expect(continueBtn).toBeEnabled();
        await continueBtn.click();
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

    // Verification
    async verifyEmailTextbox() {
        await expect(this.loginFrame.getByRole("textbox", { name: "Nhập Email của bạn", })).toBeVisible();
    }

    async verifyPasswordTextbox() {
        await expect(this.loginFrame.getByRole("textbox", { name: "Mật khẩu", })).toBeVisible();
    }

    async verifyEmailRequiredMessage() {
        await expect(this.loginFrame.getByText("Hãy nhập email")).toBeVisible();
    }
}