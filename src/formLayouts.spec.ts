import { test } from '@playwright/test';
import { FormLayoutsPage } from './pages/FormLayoutsPage';

test.describe("Form Layouts", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("http://localhost:4200");
        await page.click("text=Forms")
        await page.click("text=Form Layouts")
    })

    test("inlineForm", async ({page}) => {
        const formLayoutsPage = new FormLayoutsPage(page);
        await formLayoutsPage.submitUsingTheInlineForm()

    })
    test("using the grid", async ({page}) => {
        const formLayoutsPage = new FormLayoutsPage(page);
        await formLayoutsPage.submitUsingTheGridForm()
    })

});