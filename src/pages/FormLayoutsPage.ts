import {type Page, type Locator} from "@playwright/test";
import { BasePage} from "./BasePage";

export class  FormLayoutsPage extends BasePage {
    readonly page!: Page;
    readonly inlineForm: Locator;
    readonly inlineText: Locator;
    readonly inLineTextEmail: Locator;
    readonly rememberMeCheckBox: Locator;
    readonly submitButton: Locator;
    readonly usingGrid: Locator;
    readonly usingGridMail: Locator;
    readonly usingGridPassword: Locator;
    readonly usingGridRadioOptions1: Locator;
    readonly usingGridRadioOptions2: Locator;
    readonly usingGridSignInButton: Locator;

    constructor(page: Page) {
        super(page);
    //Inline Form Locators;
    this.inlineForm = page.locator('.inline-form-card');
    this.inlineText = page.getByPlaceholder("Jane Doe");
    this.inLineTextEmail = this.inlineForm.getByPlaceholder('Email')
    this.rememberMeCheckBox = this.inlineForm.getByText('Remember me')
    this.submitButton = this.inlineForm.getByText('Submit');
    //Using the grids form locators;
    this.usingGrid = page.locator('.col-md-6').first()
    this.usingGridMail = this.usingGrid.getByPlaceholder('Email')
    this.usingGridPassword = this.usingGrid.getByPlaceholder('Password')
    this.usingGridRadioOptions1 = this.usingGrid.locator('text=Option 1')
    this.usingGridRadioOptions2 = this.usingGrid.locator('text=Option 2')
    this.usingGridSignInButton = this.usingGrid.getByText('Sign In')

    }
    async submitUsingTheInlineForm(){
        await this.inlineText.fill('Jane Doe');
        await this.inLineTextEmail.fill('example@example.com');
        await this.rememberMeCheckBox.click();
        await this.usingGridSignInButton.click();
    }
    async submitUsingTheGridForm(){
        await this.usingGridMail.fill('example@example.com');
        await this.usingGridPassword.fill('password');
        await this.usingGridRadioOptions1.click();
        await this.usingGridRadioOptions2.click();
        await this.usingGridSignInButton.click();
    }

}