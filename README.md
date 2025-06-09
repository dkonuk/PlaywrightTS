# Page Object Model for Playwright Tests

This repository contains a Page Object Model (POM) structure for testing a web application using Playwright with TypeScript.

## Structure

The project follows a standard Page Object Model structure:

```
src/
├── pages/
│   ├── BasePage.ts         # Base page object with common methods
│   ├── HomePage.ts         # Home page object
│   ├── FormLayoutsPage.ts  # Form layouts page object
│   └── components/         # Reusable components (if needed)
├── formLayouts.spec.ts     # Tests using the page objects
└── dersDeneme.spec.ts      # Original test file (for reference)
```

## Page Object Model

The Page Object Model is a design pattern that creates an object repository for web UI elements. It helps in reducing code duplication and improves test maintenance.

### BasePage

The `BasePage` class contains common methods used across all page objects:

- `navigateTo(url)`: Navigate to a specific URL
- `waitForElement(selector)`: Wait for an element to be visible
- `clickElement(selector)`: Click on an element
- `fillField(selector, value)`: Fill a form field

### HomePage

The `HomePage` class represents the home page of the application and provides methods for navigation:

- `navigateToHome()`: Navigate to the home page
- `clickFormsSection()`: Click on the Forms section
- `navigateToFormLayouts()`: Navigate to the Form Layouts page

### FormLayoutsPage

The `FormLayoutsPage` class represents the Form Layouts page and provides methods for interacting with the forms:

- `fillAndSubmitInlineForm(name, email, rememberMe)`: Fill and submit the inline form
- `fillAndSubmitUsingGridForm(email, password, option)`: Fill and submit the "Using the Grid" form
- `fillAndSubmitBasicForm(email, password, checkMeOut)`: Fill and submit the Basic form

## Usage

Here's an example of how to use the Page Object Model in a test:

```typescript
import { test } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test('should fill and submit inline form', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHome();
    
    const formLayoutsPage = await homePage.navigateToFormLayouts();
    await formLayoutsPage.fillAndSubmitInlineForm('John Doe', 'john@example.com', true);
});
```

## Extending the Model

To add a new page object:

1. Create a new class that extends `BasePage`
2. Define selectors for the elements on the page
3. Create methods for the actions that can be performed on the page

Example:

```typescript
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class NewPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    // Define selectors
    private someElementSelector = '.some-element';

    // Define methods
    async performSomeAction(): Promise<void> {
        await this.clickElement(this.someElementSelector);
    }
}
```

## Running Tests

To run the tests:

```bash
npx playwright test
```