import { test } from '@playwright/test'
import { EduPage } from '../../pages/education/edu.page'
// with POM
test('Click education', async ({ page }) => {
    const eduPage = new EduPage(page);

    await test.step("Goto home page", async () => {
        await eduPage.gotoHomePage();
    });

    await test.step("Click Giáo dục menu by XPath", async () => {
        await eduPage.clickEducate();
    });

    await test.step("Click Tuyển sinh by XPath", async () => {
        await eduPage.clickAdmissions();
    });

    await test.step("Click Điểm thi by XPath", async () => {
        await eduPage.clickExamScore();
    });

    await test.step("Search SBD ", async () => {
        await eduPage.searchExamNumber("01020266");
    });
    await test.step("Click view results", async () => {
        await eduPage.clickViewResult();
    });
});

