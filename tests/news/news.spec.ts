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

        for (const { name, slug } of newsCategories) {
            await test.step(`Open ${name}`, async () => {
                await newsPage.openCategory(name, slug);

                if (slug === "huong-toi-ky-nguyen-moi") {
                    await newsPage.backToNewsPage();
                }
            });
        };

        await test.step("Back to Thời sự", async () => {
            await newsPage.backToNewsPage();
        });

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