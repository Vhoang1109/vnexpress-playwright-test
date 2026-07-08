import { expect, Locator, Page } from "@playwright/test";

export class ContactPage {
    page: Page;

    nameInput: Locator;
    emailInput: Locator;
    categorySelect: Locator;
    titleInput: Locator;
    contentInput: Locator;

    submitButton: Locator;
    loginPopupTitle: Locator;
    closePopupButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.nameInput = page.locator("#fName");
        this.emailInput = page.locator("#fEmail");
        this.categorySelect = page.locator("#fCategory");
        this.titleInput = page.locator("#fTitle");
        this.contentInput = page.locator("#fContent");

        this.submitButton = page.getByRole("button", { name: "Gửi", });

        this.loginPopupTitle = page.getByText("Đăng nhập / Tạo tài khoản");

        this.closePopupButton = page.getByRole("button", {
            name: "×",
        });
    }

    async gotoContactPage() {
        await this.page.goto("https://vnexpress.net/lien-he-toa-soan", {
            timeout: 60000,
            waitUntil: "domcontentloaded",
        });

        await expect(this.nameInput).toBeVisible();
    }

    async fillContactForm(
        name: string,
        email: string,
        category: string,
        title: string,
        content: string
    ) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.categorySelect.selectOption(category);
        await this.titleInput.fill(title);
        await this.contentInput.fill(content);
    }

    async submitContactForm() {
        await this.submitButton.click();
    }

    async closeLoginPopupIfVisible() {
        const closeButton = this.page.getByRole("button", { name: "×" });

        if (await closeButton.isVisible({ timeout: 5000 })) {
            await closeButton.click();
        }
    }
}