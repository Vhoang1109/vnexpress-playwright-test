import { test } from "@playwright/test";
import { NewsPage } from "../../pages/news/news.page";
import { newsCategories } from "../../test-data/news-data";

test.describe("VNExpress - Thời sự", () => {
    test.setTimeout(60000);

    test("NEWS_E2E_001 - User browses Thời sự categories and opens articles", async ({ page }) => {
        const newsPage = new NewsPage(page);
        await test.step("Go to homepage", async () => {
            await newsPage.gotoHomePage();
        });

        await test.step("Click Thời sự menu", async () => {
            await newsPage.clickNewsMenu();
        });

        for (const category of newsCategories) {
            await test.step(`Open ${category.name} then back to Thời sự`, async () => {
                await newsPage.openCategory(category.name, category.path);
                await newsPage.backToNewsPage();
            });
        }

        await test.step("Open main article by image then back to Thời sự", async () => {
            await newsPage.clickMainArticleImage();
            await newsPage.verifyArticleDetailOpened();
            await newsPage.backToNewsPage();
        });

        await test.step("Open main article by heading then back to Thời sự", async () => {
            await newsPage.clickMainArticleHeading();
            await newsPage.verifyArticleDetailOpened();
            await newsPage.backToNewsPage();
        });

        await test.step("Open main article by description", async () => {
            await newsPage.clickMainArticleDescription();
            await newsPage.verifyArticleDetailOpened();
        });
    });
});