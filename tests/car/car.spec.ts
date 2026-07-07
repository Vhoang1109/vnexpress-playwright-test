import { test } from "@playwright/test";
import { CarPage } from "../../pages/car/car.page";

test.describe("VNExpress - Thi lý thuyết", () => {

    test("Open A1 Exam 1", async ({ page }) => {

        const carPage = new CarPage(page);

        await test.step("Go to VNExpress", async () => {
            await carPage.gotoHomePage();
        });

        await test.step("Open Xe menu", async () => {
            await carPage.clickCarMenu();
        });

        await test.step("Open Thi lý thuyết", async () => {
            await carPage.clickTheoryExam();
        });

        await test.step("Select A1", async () => {
            await carPage.selectLicenseA1();
        });

        await test.step("Open Đề số 1", async () => {
            await carPage.openExam1();
        });

    });

});

