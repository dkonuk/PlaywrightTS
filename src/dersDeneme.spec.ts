import {test, expect} from "@playwright/test";

test.beforeEach(async ({page}) => {
    await page.goto("http://localhost:4200");
})


test.describe("Form Layouts", () => {
    test.beforeEach(async ({page}) => {
        await page.click("text=Forms")
        await page.click("text=Form Layouts")
    })

test("inlineForm", async ({page}) => {
    const inlineForm = page.locator('.inline-form-card');
    const inlineText = await page.getByPlaceholder("Jane Doe");
    const inLineTextEmail = inlineForm.getByPlaceholder('Email')
    const rememberMecheckBox = inlineForm.getByText('Remember me')
    const submitButton = inlineForm.getByText('Submit')
    await inlineText.fill("Deniz")
    await inLineTextEmail.fill("example@example.com")
    await rememberMecheckBox.click()
    await submitButton.click()
})
test("using the grid", async ({page}) => {
    const usingGrid = page.locator('.col-md-6').first()
    const usingGridMail = usingGrid.getByPlaceholder('Email')
    const usingGridPassword = usingGrid.getByPlaceholder('Password')
    const usingGridRadioOpitons1 = usingGrid.locator('text=Option 1')
    const usingGridRadioOpitons2 = usingGrid.locator('text=Option 2')
    const usingGridSignInButton = usingGrid.getByText('Sign In')

    await usingGridMail.fill("example@example.com")
    await usingGridPassword.fill("example@example.com")
    await usingGridRadioOpitons1.click()
    await usingGridRadioOpitons2.click()
    await usingGridSignInButton.click()
})
test("Basic Form", async ({page}) => {
    const basicFormEmail = page.getByText('Email address');
    const basicFormPassword = page.locator('#exampleInputPassword1')
    const basicFormCheckBox = page.getByText('Check me out')
    const basicFormSubmitButton = page.getByText('Submit').nth(1);

    await basicFormEmail.fill("example@example.com")
    await basicFormPassword.fill("example@example.com")
    await basicFormCheckBox.click()
    await basicFormSubmitButton.click()
})

})

