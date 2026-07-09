import { test } from "@playwright/test";
import { CarPage } from "../../pages/car/car.page";

test.describe("VNExpress - Thi lý thuyết", () => {
    test.setTimeout(60000);
    test.beforeEach("Open login popup", async ({ page }) => {
        const carPage = new CarPage(page);

        await test.step("Go to VNExpress", async () => {
            await carPage.gotoHomePage();
        });
    });
    test("CAR_006 - Open A1 Exam 1", async ({ page }) => {

        const carPage = new CarPage(page);


        await test.step("Open Xe menu", async () => {
            await carPage.clickCarMenu();
        });

        await test.step("Open Thi lý thuyết", async () => {
            await carPage.clickTheoryExam();
        });

        await test.step("Select A1", async () => {
            await carPage.selectLicense();
        });

        await test.step("Open Đề số 1", async () => {
            await carPage.openExam();
        });


    });

});