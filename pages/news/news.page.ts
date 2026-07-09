import { expect, Locator, Page } from "@playwright/test";
import { newsCategories } from "../../test-data/news.data";

export class NewsPage {
    page: Page;

    baseUrl: string;
    homeUrl: string;
    newsUrl: string;

    newsMenu: Locator;
    newsHeading: Locator;
    mainArticle: Locator;

    constructor(page: Page) {
        this.page = page;

        this.baseUrl = "https://vnexpress.net";
        this.homeUrl = `${this.baseUrl}/`;
        this.newsUrl = `${this.baseUrl}/thoi-su`;

        this.newsMenu = page
            .locator("#wrap-main-nav")
            .getByRole("link", { name: "Thời sự" });

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

    async gotoNewsPage() {
        await this.page.goto(this.newsUrl, {
            timeout: 60000,
            waitUntil: "domcontentloaded",
        });

        await expect(this.page).toHaveURL(this.newsUrl);
        await expect(this.newsHeading).toBeVisible();
    }

    // async verifyNewsCategoriesVisible() {
    //     for (const category of newsCategories) {
    //         await expect(
    //             this.page.getByRole("link", { name: category.name }).first()
    //         ).toBeVisible();
    //     }
    // }

    async openCategory(categoryName: string, path: string) {
        const category = this.page
            .getByRole("link", { name: categoryName })
            .first();

        await expect(category).toBeVisible();
        await category.click();

        await expect(this.page).toHaveURL(`${this.baseUrl}${path}`);
    }

    async backToNewsPage() {
        await this.page.goBack();

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