import { expect, Locator, Page } from "@playwright/test";
import { ContactData } from "../../test-data/contact-data";
import { BasePage } from "../base-page/base.page";

export class ContactPage extends BasePage {
   
    contactUrl: string;

    nameInput: Locator;
    emailInput: Locator;
    categorySelect: Locator;
    titleInput: Locator;
    contentInput: Locator;
    submitButton: Locator;
    closePopupButton: Locator;

    constructor(page: Page) {
        super(page);

        this.contactUrl = `${this.baseUrl}/lien-he-toa-soan`;

        this.nameInput = page.locator("#fName");
        this.emailInput = page.locator("#fEmail");
        this.categorySelect = page.locator("#fCategory");
        this.titleInput = page.locator("#fTitle");
        this.contentInput = page.locator("#fContent");

        this.submitButton = page.getByRole("button", { name: "Gửi" });
        this.closePopupButton = page.getByRole("button", { name: "×" });
    }

    async gotoContactPage() {
        await this.page.goto(this.contactUrl, {
            timeout: 60000,
            waitUntil: "domcontentloaded",
        });

        await this.verifyContactPageLoaded();
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
        if (await this.closePopupButton.isVisible({ timeout: 5000 }).catch(() => false)) {
            await this.closePopupButton.click();
            await expect(this.closePopupButton).toBeHidden();
        }
    }

    async verifyContactPageLoaded() {
        await expect(this.nameInput).toBeVisible();
    }
}