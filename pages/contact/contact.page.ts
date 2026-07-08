import { expect, Locator, Page } from "@playwright/test";
import { ContactData } from "../../test-data/contact-data";

export class ContactPage {
    page: Page;

    nameInput: Locator;
    emailInput: Locator;
    categorySelect: Locator;
    titleInput: Locator;
    contentInput: Locator;

    submitButton: Locator;
    closePopupButton: Locator;

    constructor(page: Page) {
        this.page = page;

        // Contact form fields
        this.nameInput = page.locator("#fName");
        this.emailInput = page.locator("#fEmail");
        this.categorySelect = page.locator("#fCategory");
        this.titleInput = page.locator("#fTitle");
        this.contentInput = page.locator("#fContent");

        // Actions
        this.submitButton = page.getByRole("button", { name: "Gửi" });
        this.closePopupButton = page.getByRole("button", { name: "×" });
    }

    async gotoContactPage() {
        await this.page.goto("https://vnexpress.net/lien-he-toa-soan", {
            timeout: 60000,
            waitUntil: "domcontentloaded",
        });

        await expect(this.nameInput).toBeVisible();
    }

    async fillContactForm(data: ContactData) {
        await this.nameInput.fill(data.name);
        await this.emailInput.fill(data.email);
        await this.categorySelect.selectOption({ label: data.category });
        await this.titleInput.fill(data.title);
        await this.contentInput.fill(data.content);
    }

    async submitContactForm() {
        await expect(this.submitButton).toBeEnabled();
        await this.submitButton.click();
    }

    async closeLoginPopupIfVisible() {
        // VNExpress có thể bật popup login sau khi gửi form
        if (await this.closePopupButton.isVisible({ timeout: 5000 })) {
            await this.closePopupButton.click();
            await expect(this.closePopupButton).toBeHidden();
        }
    }
}