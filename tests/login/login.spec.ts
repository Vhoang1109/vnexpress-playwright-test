import { test } from "@playwright/test";
import { LoginPage } from "../../pages/login/login.page";

test.describe("VNExpress Login", () => {

  test("Login success", async ({ page }) => {

    const loginPage = new LoginPage(page);

    await test.step("Go to VNExpress", async () => {
      await loginPage.gotoLoginPage();
    });

    await test.step("Open Login Popup", async () => {
      await loginPage.openLoginPopup();
    });

    await test.step("Verify Email Textbox", async () => {
      await loginPage.verifyEmailTextbox();
    });

    await test.step("Fill Email", async () => {
      await loginPage.fillEmail("vhoang1928@gmail.com");
    });


    await test.step("Verify Password Textbox", async () => {
      await loginPage.verifyPasswordTextbox();
    });

    await test.step("Fill Password", async () => {
      await loginPage.fillPassword("@Hoang1109");
    });

    await test.step("Click Login", async () => {
      await loginPage.clickLogin();
    });

  });

});