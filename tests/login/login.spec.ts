import { test } from "@playwright/test";
import { LoginPage } from "../../pages/login/login.page";
import { loginData } from "../../test-data/login-data";

test.describe("VNExpress Login", () => {
  test.setTimeout(60000);

  test.beforeEach("Open login popup", async ({ page }) => {
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
  });

  test("LOGIN_001 - Login success", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step("Fill Email", async () => {
      await loginPage.fillEmail(loginData.validUser.email);
      await loginPage.clickContinue();
    });

    await test.step("Verify Password Textbox", async () => {
      await loginPage.verifyPasswordTextbox();
    });

    await test.step("Fill Password", async () => {
      await loginPage.fillPassword(loginData.validUser.password);
    });

    await test.step("Click Login", async () => {
      await loginPage.clickLogin();
    });
  });

  test("LOGIN_002 - Login fail with wrong password", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step("Fill Email", async () => {
      await loginPage.fillEmail(loginData.invalidUser.email);
      await loginPage.clickContinue();
    });

    await test.step("Verify Password Textbox", async () => {
      await loginPage.verifyPasswordTextbox();
    });

    await test.step("Fill Wrong Password", async () => {
      await loginPage.fillPassword(loginData.invalidUser.password);
    });

    await test.step("Click Login", async () => {
      await loginPage.clickLogin();
    });
  });

  test("LOGIN_003 - Login fail with empty password", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step("Fill Email", async () => {
      await loginPage.fillEmail(loginData.emptyPassword.email);
      await loginPage.clickContinue();
    });

    await test.step("Verify Password Textbox", async () => {
      await loginPage.verifyPasswordTextbox();
    });

    await test.step("Fill Empty Password", async () => {
      await loginPage.fillPassword(loginData.emptyPassword.password);
    });

    await test.step("Click Login", async () => {
      await loginPage.clickLogin();
    });
  });

    test("LOGIN_004 - Login fail with empty email", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step("Fill Email", async () => {
      await loginPage.fillEmail(loginData.emptyEmail.email);
      await loginPage.clickContinue();
    });

    await test.step("Verify Password Textbox", async () => {
      await loginPage.verifyEmailTextbox();
    });

    await test.step("Click Login", async () => {
      await loginPage.clickLogin();
    });
  });
});