import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../base-page/base.page";

export class NewsPage extends BasePage {
    newsUrl: string;

    newsMenu: Locator;
    newsHeading: Locator;
    mainArticle: Locator;

    constructor(page: Page) {
        super(page);

        this.newsUrl = `${this.baseUrl}/thoi-su`;

        this.newsMenu = page.locator("#wrap-main-nav").getByRole("link", { name: "Thời sự" });

        this.newsHeading = page.getByRole("heading", { name: "Thời sự" });
        this.mainArticle = page.locator("article").first();
    }

    // Navigation
    async clickNewsMenu() {
        await this.newsMenu.click();

        await expect(this.page).toHaveURL(this.newsUrl);
        await expect(this.newsHeading).toBeVisible();
    }

    async openCategory(categoryName: string, slug: string) {
        const category = this.page.getByRole("link", { name: categoryName, exact: true }).first();

        await expect(category).toBeVisible();
        await category.click();

        await expect(this.page).toHaveURL(`${this.newsUrl}/${slug}`);
    }

    async backToNewsPage() {
        await this.page.goto(this.newsUrl, {
            waitUntil: "domcontentloaded",
            timeout: 60000,
        });

        await expect(this.page).toHaveURL(this.newsUrl);
        await expect(this.newsHeading).toBeVisible();
    }

    // Actions
    async clickMainArticleImage() {
        const imageLink = this.mainArticle.locator(".thumb-art a").first();

        await expect(imageLink).toBeVisible();
        await imageLink.click();
    }

    async clickMainArticleHeading() {
        const headingLink = this.mainArticle.locator(".title-news a").first();

        await expect(headingLink).toBeVisible();
        await headingLink.click();
    }

    async clickMainArticleDescription() {
        const descriptionLink = this.mainArticle.locator(".description a").first();

        await expect(descriptionLink).toBeVisible();
        await descriptionLink.click();
    }

    // Verification
    async verifyArticleDetailOpened() {
        await expect(this.page).not.toHaveURL(this.newsUrl);
        await expect(this.page.locator("h1")).toBeVisible();
    }
}