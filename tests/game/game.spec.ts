import { test } from "@playwright/test";
import { GamePage } from "../../pages/game/game.page";
import { gameData01, gameData02, gameData03 } from "../../test-data/game-data";

test.describe("VNExpress - Thư giãn - Trò chơi", () => {
    test.beforeAll(async () => {
        console.log("Start VNExpress Game Test Suite");
    });

    test.beforeEach(async ({ page }) => {
        const gamePage = new GamePage(page);

        await test.step("BeforeEach - Go to Game page", async () => {
            await gamePage.gotoGamePage();
        });

        await test.step("BeforeEach - WFA: Verify 3 games are visible", async () => {
            await gamePage.verifyGameListVisible();
        });
    });

    test.afterEach(async ({ page }) => {
        const gamePage = new GamePage(page);

        await test.step("AfterEach - Close login popup if visible", async () => {
            await gamePage.closeLoginPopupIfVisible();
        });

        await test.step("AfterEach - Back to Game page", async () => {
            await gamePage.backToGamePage();
        });
    });

    test.afterAll(async () => {
        console.log("End VNExpress Game Test Suite");
    });

    test("GAME_001 - Click nút Chơi game Xếp chữ", async ({ page }) => {
        const gamePage = new GamePage(page);

        await test.step("WFA + Click nút Chơi game Xếp chữ", async () => {
            await gamePage.clickPlayButtonByGameSlug(gameData01.gameSlug);
        });

        await test.step("Close popup login if visible", async () => {
            await gamePage.closeLoginPopupIfVisible();
        });
    });

    test("GAME_002 - Click ảnh game Xếp chữ", async ({ page }) => {
        const gamePage = new GamePage(page);

        await test.step("WFA + Click ảnh game Xếp chữ", async () => {
            await gamePage.clickGameImageByGameSlug(gameData01.gameSlug);
        });

        await test.step("WFA: Verify Xếp chữ page opened", async () => {
            await gamePage.verifyGameDetailPageOpened(gameData01.gameSlug);
        });
    });

    test("GAME_003 - Click nút Chơi game Chính tả", async ({ page }) => {
        const gamePage = new GamePage(page);

        await test.step("WFA + Click nút Chơi game Chính tả", async () => {
            await gamePage.clickPlayButtonByGameSlug(gameData02.gameSlug);
        });

        await test.step("Close popup login if visible", async () => {
            await gamePage.closeLoginPopupIfVisible();
        });
    });

    test("GAME_004 - Click ảnh game Chính tả", async ({ page }) => {
        const gamePage = new GamePage(page);

        await test.step("WFA + Click ảnh game Chính tả", async () => {
            await gamePage.clickGameImageByGameSlug(gameData02.gameSlug);
        });

        await test.step("WFA: Verify Chính tả page opened", async () => {
            await gamePage.verifyGameDetailPageOpened(gameData02.gameSlug);
        });
    });

    test("GAME_005 - Click nút Chơi game Sudoku", async ({ page }) => {
        const gamePage = new GamePage(page);

        await test.step("WFA + Click nút Chơi game Sudoku", async () => {
            await gamePage.clickPlayButtonByGameSlug(gameData03.gameSlug);
        });

        await test.step("Close popup login if visible", async () => {
            await gamePage.closeLoginPopupIfVisible();
        });
    });

    test("GAME_006 - Click ảnh game Sudoku", async ({ page }) => {
        const gamePage = new GamePage(page);

        await test.step("WFA + Click ảnh game Sudoku", async () => {
            await gamePage.clickGameImageByGameSlug(gameData03.gameSlug);
        });

        await test.step("WFA: Verify Sudoku page opened", async () => {
            await gamePage.verifyGameDetailPageOpened(gameData03.gameSlug);
        });
    });
});