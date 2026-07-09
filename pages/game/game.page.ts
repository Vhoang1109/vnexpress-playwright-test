import { expect, Locator, Page } from "@playwright/test";

export class GamePage {
    page: Page;

    gameUrl: string;
    homeUrl: string;

    gameHeading: Locator;
    loginPopup: Locator;
    closePopupButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.homeUrl = "https://vnexpress.net/";
        this.gameUrl = "https://vnexpress.net/thu-gian/tro-choi";

        this.gameHeading = page.getByRole("heading", { name: "Trò chơi" });
        this.loginPopup = page.getByText("Đăng nhập / Tạo tài khoản");
        this.closePopupButton = page.getByRole("button", { name: "×" });
    }

    async gotoGamePage() {
        await this.page.goto(this.gameUrl, {
            timeout: 60000,
            waitUntil: "domcontentloaded",
        });

        await expect(this.page).toHaveURL(this.gameUrl);
        await expect(this.gameHeading).toBeVisible();
    }

    getGameLink(gameSlug: string): Locator {
        return this.page
            .locator(`a[href*="/thu-gian/tro-choi/${gameSlug}"]`)
            .first();
    }

    getGameCard(gameSlug: string): Locator {
        return this.getGameLink(gameSlug).locator("xpath=ancestor::article[1]");
    }

    async verifyGameListVisible() {
        await expect(this.getGameLink("xep-chu")).toBeVisible();
        await expect(this.getGameLink("chinh-ta")).toBeVisible();
        await expect(this.getGameLink("sudoku")).toBeVisible();
    }

    async clickPlayButtonByGameSlug(gameSlug: string) {
        const gameCard = this.getGameCard(gameSlug);
        const playButton = gameCard
            .locator("a.button-play.btn_check_login")
            .first();

        await expect(gameCard).toBeVisible();
        await expect(playButton).toBeVisible();
        await expect(playButton).toBeEnabled();

        await playButton.click();
    }

    async clickGameImageByGameSlug(gameSlug: string) {
        const gameCard = this.getGameCard(gameSlug);
        const gameImage = gameCard.locator(".thumb-art a").first();

        await expect(gameCard).toBeVisible();
        await expect(gameImage).toBeVisible();

        await gameImage.click();
    }

    async verifyGameDetailPageOpened(gameSlug: string) {
        await expect(this.page).toHaveURL(
            new RegExp(`/thu-gian/tro-choi/${gameSlug}`),
            { timeout: 15000 }
        );
    }

    async closeLoginPopupIfVisible() {
        if (await this.closePopupButton.isVisible().catch(() => false)) {
            await this.closePopupButton.click();
        }
    }

    async backToGamePage() {
        await this.page.goto(this.gameUrl, {
            timeout: 60000,
            waitUntil: "domcontentloaded",
        });

        await expect(this.page).toHaveURL(this.gameUrl);
        await expect(this.gameHeading).toBeVisible();
    }
}