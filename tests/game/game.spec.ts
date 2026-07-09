import { test } from "@playwright/test";
import { GamePage } from "../../pages/game/game.page";
import { gameData } from "../../test-data/game-data";

test.describe("VNExpress - Thư giãn - Trò chơi", () => {
    let gamePage: GamePage;

    test.beforeEach(async ({ page }) => {
        gamePage = new GamePage(page);

        await gamePage.gotoGamePage();
        await gamePage.verifyGameListVisible();
    });

    test.afterEach(async () => {
        await gamePage.closeLoginPopupIfVisible();
    });

    for (const game of gameData) {
        test(`Click nút Chơi game ${game.gameName}`, async () => {
            await gamePage.clickPlayButtonByGameSlug(game.gameSlug);
            await gamePage.closeLoginPopupIfVisible();
        });

        test(`Click ảnh game ${game.gameName}`, async () => {
            await gamePage.clickGameImageByGameSlug(game.gameSlug);
            await gamePage.verifyGameDetailPageOpened(game.gameSlug);
        });
    }
});