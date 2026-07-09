import { test } from "@playwright/test";
import { EduPage } from "../../pages/education/edu.page";
import { eduData } from "../../test-data/edu-data";

test.describe("VNExpress - Education", () => {

    test.beforeEach(async ({ page }) => {
        const eduPage = new EduPage(page);

        await test.step("Go to home page", async () => {
            await eduPage.gotoHomePage();
        });

        await test.step("Open Điểm thi page", async () => {
            await eduPage.clickEducate();
            await eduPage.clickAdmissions();
            await eduPage.clickExamScore();
        });
    });

    test("EDU_001 - Search valid exam number", async ({ page }) => {
        const eduPage = new EduPage(page);

        await test.step("Enter valid exam number", async () => {
            await eduPage.searchExamNumber(
                eduData.validExamNumber.sbd
            );
        });

        await test.step("Click View Result", async () => {
            await eduPage.clickViewResult();
        });
    });

    test("EDU_002 - Search invalid exam number", async ({ page }) => {
        const eduPage = new EduPage(page);

        await test.step("Enter invalid exam number", async () => {
            await eduPage.searchExamNumber(
                eduData.invalidExamNumber.sbd
            );
        });

        await test.step("Click View Result", async () => {
            await eduPage.clickViewResult();
        });

    });

    test("EDU_003 - Search with empty exam number", async ({ page }) => {
        const eduPage = new EduPage(page);

        await test.step("Leave exam number empty", async () => {
            await eduPage.searchExamNumber(
                eduData.emptyExamNumber.sbd
            );
        });

        await test.step("Click View Result", async () => {
            await eduPage.clickViewResult();
        });
    });

    test("EDU_004 - Search with short exam number", async ({ page }) => {
        const eduPage = new EduPage(page);

        await test.step("Enter short exam number", async () => {
            await eduPage.searchExamNumber(eduData.shortExamNumber.sbd
            );
        });

        await test.step("Click View Result", async () => {
            await eduPage.clickViewResult();
        });

        // await test.step("Verify invalid message", async () => {
        //     await eduPage.verifyInvalidExamNumber();
        // });
    });

});