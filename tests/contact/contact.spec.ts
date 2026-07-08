import { test } from "@playwright/test";
import { ContactPage } from "../../pages/contact/contact.page";

test.describe("VNExpress - Contact Form", () => {
  test("Fill contact form and handle login popup", async ({ page }) => {
    const contactPage = new ContactPage(page);

    await test.step("Go to contact page", async () => {
      await contactPage.gotoContactPage();
    });

    await test.step("Fill contact form", async () => {
      await contactPage.fillContactForm(
        "pvh",
        "abc@gmail.com",
        "webmaster@vnexpress.net",
        "test",
        "I love you"
      );
    });

    await test.step("Submit contact form", async () => {
      await contactPage.submitContactForm();
    });

    await test.step("Close login popup if displayed", async () => {
      await contactPage.closeLoginPopupIfVisible();
    });
  });
});