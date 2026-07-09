import { expect, Locator, Page } from "@playwright/test";

export class NewsPage {
    page: Page;

    homeUrl: string;
    newsUrl: string;

    newsMenu: Locator;
    newsHeading: Locator;
    mainArticle: Locator;

    constructor(page: Page) {
        this.page = page;

        this.homeUrl = `https://vnexpress.net`;
        this.newsUrl = `${this.homeUrl}/thoi-su`;

        this.newsMenu = page.locator("#wrap-main-nav").getByRole("link", { name: "Thời sự" });

        this.newsHeading = page.getByRole("heading", { name: "Thời sự" });
        this.mainArticle = page.locator("article").first();
    }

    async gotoHomePage() {
        await this.page.goto(this.homeUrl, {
            timeout: 60000,
            waitUntil: "domcontentloaded",
        });

        await expect(this.newsMenu).toBeVisible();
    }

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
        const descriptionLink = this.mainArticle
            .locator(".description a")
            .first();

        await expect(descriptionLink).toBeVisible();
        await descriptionLink.click();
    }

    async verifyArticleDetailOpened() {
        await expect(this.page).not.toHaveURL(this.newsUrl);
        await expect(this.page.locator("h1")).toBeVisible();
    }
}