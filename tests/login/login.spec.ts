import { test } from "@playwright/test";
import { LoginPage } from "../../pages/login/login.page";
import { loginData } from "../../test-data/login-data";

test.describe("VNExpress Login", () => {
  test.setTimeout(60000);

  let loginPage: LoginPage;

  test.beforeEach("Open login popup", async ({ page }) => {
    loginPage = new LoginPage(page);

    await test.step("Go to VNExpress", async () => {
      await loginPage.gotoLoginPage();
    });

    await test.step("Open Login Popup", async () => {
      await loginPage.openLoginPopup();
    });

    await test.step("Verify Email Textbox", async () => {
      await loginPage.verifyEmailTextbox();
    });
  });

  test("LOGIN_001 - Login success", async () => {
    await loginPage.fillEmail(loginData.validUser.email);
    await loginPage.clickContinue();

    await loginPage.verifyPasswordTextbox();

    await loginPage.fillPassword(loginData.validUser.password);
    await loginPage.clickLogin();
  });

  test("LOGIN_002 - Login fail with wrong password", async () => {
    await loginPage.fillEmail(loginData.invalidUser.email);
    await loginPage.clickContinue();

    await loginPage.verifyPasswordTextbox();

    await loginPage.fillPassword(loginData.invalidUser.password);
    await loginPage.clickLogin();
  });

  test("LOGIN_003 - Login fail with empty password", async () => {
    await loginPage.fillEmail(loginData.emptyPassword.email);
    await loginPage.clickContinue();

    // await loginPage.verifyPasswordTextbox();

    await loginPage.fillPassword(loginData.emptyPassword.password);
  });

  test("LOGIN_004 - Login fail with empty email", async () => {
    await loginPage.fillEmail(loginData.emptyEmail.email);
    await loginPage.clickContinue();
  });
});