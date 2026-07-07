import { expect, Page } from "@playwright/test";

export class CarPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoCarPage() {
    await this.page.goto("https://vnexpress.net/oto-xe-may", {
      waitUntil: "domcontentloaded",
    });
  }

  async clickTheoryExam() {
    await this.page.getByRole("link", { name: "Thi lý thuyết" }).click();
  }

  async verifyTheoryExamPage() {
    await expect(this.page).toHaveURL(/thi-ly-thuyet/);
  }
}