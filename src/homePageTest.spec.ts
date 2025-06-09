import {test, expect} from "@playwright/test";
import {HomePage} from "./pages/HomePage";

test.beforeEach(async ({page}) => {
    await page.goto("http://localhost:4200");
})

test('testing navBar', async ({page}) => {
    const homePage = new HomePage(page);
    await homePage.openDashBoard()
    await homePage.openForms()
    await homePage.openFormsLayouts()
    await homePage.openDatePicker()
    await homePage.closeForms()
    await homePage.openModalAndOverlays()
    await homePage.openDialog()
    await homePage.openWindow()
    await homePage.openPopover()
    await homePage.openToaster()
    await homePage.openTooltip()

})
