# Cypress-TS-CucumberPo-Web

![Diseño sin título (1)](https://github.com/user-attachments/assets/6ee66bcc-bd11-49b0-bc43-d082e2703d79)


- [Actions-CI/CD](./ACTIONS.md)

## Requirements  🧾 

- Node.js: Make sure you have Node.js installed on your system. You can download it from https://nodejs.org/en/download.
- Text Editor: Recomended Visual Studio Code (VSCode) You can download it from https://code.visualstudio.com/download


## Installation   🖥️

To install the necessary tools and set up the project, follow these steps depending on your operating system (macOS, Windows, or Linux):

Open your terminal.

Clone this repository:

```bash
git clone https://github.com/thiagotobiasturk/Cypress-TS-CucumberPo-Web.git 
```
Navigate to the project folder:

```bash
 cd Cypress-TS-CucumberPo-Web
```
Install dependencies:

```bash
npm i
```

Open the chosen text editor with the following command.

```bash

code .

```
On VSCode Press 'Ctrl + shift +  x ' to open the extensions view.

And install the Cuke Step Definition Generator

![image](https://github.com/user-attachments/assets/8770598b-d3e8-4339-b601-f7cd42b10129)


On VSCode Press ' Ctrl + , ' to open the settings view.

![image](https://github.com/user-attachments/assets/fc742eb5-e29f-4598-b26e-c1bd9fb54845)


Search for "Cucumber" and click on "Edit in settings.json".

![image](https://github.com/user-attachments/assets/0edf50e5-f289-4517-b352-5152f7bba56b)


Paste the following configuration:

```json

{
    "cucumber.features": [
        "cypress/e2e/features/*.feature"
    ],
    "cucumber.glue": [
        "cypress/e2e/steps/*.ts"
    ],
    "workbench.startupEditor": "none",
    "github.copilot.editor.enableAutoCompletions": true,
    "explorer.confirmDragAndDrop": false
}

```

Save the changes by pressing ' Ctrl + S ' .

Close the settings tab and the settings.json file.


# Instructions for Setting Up Testing in Cypress 📝 

  Focus on the following three folders located within cypress/e2e:
- features: This folder contains your feature files with the .feature extension.
- pages: This folder is used for storing page objects and related utilities.
- steps: This folder holds the step definitions, usually written in TypeScript .





## Summary of Cucumber Features and Types ✏️

Features are our test cases.
This is where the user stories are written.

Cucumber Features:

Definition: Features in Cucumber represent high-level functionalities of the application. They describe what the application should do from an end-user perspective and are written in plain language.
Purpose: To define and document the behavior of the application in a way that is understandable to both technical and non-technical stakeholders.
Types of Features:

Feature File:

Description: A .feature file contains one or more scenarios that describe a particular aspect of the feature.
Structure: Each feature file starts with the Feature: keyword, followed by a description of the feature. Below that, scenarios are defined using the Scenario: keyword.
Scenario:

Description: A scenario represents a single test case or a particular use case within a feature.
Structure: Scenarios are described using the Given, When, and Then keywords to outline the steps needed to test the feature.
Scenario Outline:

Description: A scenario outline is used for scenarios that need to be tested with multiple sets of data. It allows parameterization of scenarios.
Structure: It includes a Scenario Outline: keyword and uses Examples: to provide different data sets.
Background:

Description: The background section defines steps that are common to all scenarios in a feature file.
Structure: It starts with the Background: keyword and includes steps that are executed before each scenario.

Example Feature File Structure:

```cucumber

Feature: User Login

  Background:
    Given the user is on the login page

  Scenario: Successful login with valid credentials
    When the user enters valid credentials
    And the user submits the login form
    Then the user should be redirected to the dashboard

  Scenario Outline: Unsuccessful login with invalid credentials
    When the user enters "<username>" and "<password>"
    And the user submits the login form
    Then the user should see an error message

    Examples:
      | username | password |
      | user1    | pass1    |
      | user2    | pass2    |


```

Key Points:

Features describe what is to be tested.
Scenarios outline specific test cases.
Scenario outlines allow for data-driven testing.
Background steps set up the initial context for scenarios.


## Step Definitions File ⌨️

- File: login.spec.ts
- Description:
The login.spec.ts file contains the step definitions for the scenarios defined in the .feature file. It uses Cypress to implement the test logic and interact with the user interface.

Structure:

Imports: Imports necessary modules for step definitions, including the LoginPage class to interact with the login page.
Given: Defines the step to navigate to the login page.
When: Defines the steps to enter credentials and submit the login form.
Then: Defines the steps to verify the outcome of the test (redirection or error message).
Scenario Outline: Handles data-driven tests for unsuccessful login scenarios using When to enter credentials and Then to verify error messages.

Example Code:

```typescript
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/login.pages";

const loginPage = new LoginPage();

Given(/^the user is on the login page$/, () => {
  loginPage.visit();
});

When(/^the user enters valid credentials$/, () => {
  loginPage.fillUsername();
  loginPage.fillPassword();
});

When(/^the user submits the login form$/, () => {
  loginPage.submit();
});

Then(/^the user should be redirected to the dashboard$/, () => {
  loginPage.LoggedInSuccesfully();
});

When('the user enters {string} and {string}', (username, password) => {
  loginPage.enterCredentials(username, password);
});

Then(/^the user should see an error message$/, () => {
  loginPage.Unsuccessfullogin();
});

```

Key Points:

Given: Sets up the initial state for scenarios.
When: Defines the actions performed by the user.
Then: Verifies the expected outcome after actions are performed.
Scenario Outline: Handles multiple data sets for a single scenario.

## Page Object File ⌨️

- File: login.pages.ts
- Description:
The login.pages.ts file uses the Page Object Model pattern to encapsulate interactions with the login page. This pattern improves code reusability and maintainability.

Structure:

Private Properties: Defines CSS selectors for page elements.
Public Methods:
visit(): Navigates to the login page.
enterCredentials(username, password): Enters the username and password into the respective fields.
fillUsername(): Enters a default username.
fillPassword(): Enters a default password.
submit(): Submits the login form.
LoggedInSuccesfully(): Verifies that the user has been successfully redirected (not explicitly verified yet).
Unsuccessfullogin(): Verifies that an error message is shown (not explicitly verified yet).

Example Code:

```typescript
// cypress/pageobjects/LoginPage.ts

export default class LoginPage {
  private usernameInput = '#username';
  private passwordInput = '#password';
  private submitButton = '#submit';
  private messageInput = '.post-title';
  private messageErrorInput = '#error';

  visit() {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
  }

  enterCredentials(username: string, password: string) {
    cy.get(this.usernameInput).type(username);
    cy.get(this.passwordInput).type(password);
  }

  fillUsername() {
    cy.get(this.usernameInput).type('student');
  }

  fillPassword() {
    cy.get(this.passwordInput).type('Password123');
  }

  submit() {
    cy.get(this.submitButton).click();
  }

  LoggedInSuccesfully() {
    cy.get(this.messageInput).should('be.visible'); // Verify that the message is visible
  }

  Unsuccessfullogin() {
    cy.get(this.messageErrorInput).should('be.visible'); // Verify that the error message is visible
  }
}

```

Key Points:

Private Properties: Encapsulate CSS selectors for interacting with page elements.
Public Methods: Represent actions that can be performed on the page and result verifications.

# Running Tests in the Framework

- In this testing framework, you have three different commands to run your tests. Each command provides a different way of executing and viewing the test results:

## 1. Running Tests with npm test

```bash
npm test
```
![image](https://github.com/user-attachments/assets/493cf0b5-a216-4973-b44c-93002f8c3628)

- Description:
- This command runs the tests in headless mode. "Headless" means that the tests are executed in the background without a visible browser window.

How It Works:

Tests are executed entirely from the terminal.
No graphical user interface (GUI) is displayed, which is useful for automated testing in continuous integration (CI) environments.
Use Case:

Automation: Ideal for running tests as part of a CI/CD pipeline or automated testing setup where you don’t need to see the browser.

## 2. Running Tests with npm run test:headful

```bash
npm run test:headful
```

- The command npm run test:headful provides a way to run tests with a visual browser interface similar to npm run open, but with some key differences. Here’s a detailed explanation:

- Description
- When you run npm run test:headful, Cypress executes your tests with a visible browser window. Here’s how this process works:

1. Visual Browser Interface
Browser Visibility:
The command launches the tests in a browser window that you can see during execution.
Unlike npm run open, which allows for interactive selection of tests, npm run test:headful automatically runs all the tests specified without manual intervention.

2. Real-Time Execution
Execution View:

![image](https://github.com/user-attachments/assets/dcc606dd-74f2-4a5b-af15-f99564b9aa37)

You can watch the tests being executed in real time within the browser window.
This provides visual feedback on how tests interact with your application as they run.

![image](https://github.com/user-attachments/assets/2c42269c-257d-449c-8a57-1773518182a9)

3. Automatic Closure
Post-Execution Behavior:
Once the tests are complete, the browser window closes automatically.
This is different from npm run open, where the browser remains open for further interactions or inspections.
Use Cases
Test Observation:

Useful when you need to see how tests execute in a real browser environment but don’t require manual test selection or interaction.
Provides a visual confirmation of test actions and outcomes without needing to manually manage test execution.
Automated Execution:

Ideal for scenarios where you want to run all tests in a visible browser environment, with the convenience of automatic cleanup after execution.
Comparison with npm run open
npm run open:

Offers an interactive GUI to select and run specific tests.
Allows for manual test selection and real-time interaction.
The browser window remains open for further interaction.
npm run test:headful:

Runs all tests automatically in a visible browser window.
Provides real-time execution visibility but does not allow manual test selection.
Closes the browser window automatically after test completion.

## 3. Running Tests with npm run open

```bash
npm run open
```

Description
When you run npm run open, Cypress launches a graphical user interface (GUI) called the Cypress Test Runner. This GUI allows you to interactively manage and run your tests. Here’s a breakdown of what you can do with it:

1. Choose Your Browser
Browser Selection:

![image](https://github.com/user-attachments/assets/8d89d3d9-9573-4193-acbd-4b89bd0396a6)

Upon launching, Cypress provides the option to select which browser you want to use for running your tests.
You can choose from installed browsers like Chrome, Firefox, Edge, etc., depending on your setup and preferences.


2. Select Tests Using the GUI
Interactive Test Selection:

![image](https://github.com/user-attachments/assets/b3074b81-cca7-4c6d-986e-d861c21d90fa)

The Test Runner presents a list of available test files or scenarios.
You can manually select which test files or specific test cases you want to execute.
This is useful for running specific tests without executing the entire suite, which can save time during development and debugging.

3. View Test Execution
Real-Time Execution:

![image](https://github.com/user-attachments/assets/b52025f2-cf62-4c72-8ba3-b2e2b4ee667e)

As you run the tests, the Test Runner displays a real-time view of the browser window where the tests are being executed.
You can watch the tests interact with the application as they run, providing immediate visual feedback.
Detailed Results:

The GUI also shows detailed information about each test step, including passed, failed, or skipped steps.
You can inspect the state of the application and the actions being performed by the tests.
Use Cases
Interactive Testing:

Ideal for developers who want to manually select tests and see their execution in a real browser environment.
Allows for dynamic testing where you can pause, inspect, and rerun tests as needed.
Debugging:

Helps in debugging issues by providing a visual representation of how tests interact with the application.
You can observe application behavior and test results directly, making it easier to identify problems.


# How Test Reports Are Generated 📑

![image](https://github.com/user-attachments/assets/b2b0010f-1327-4b9d-815d-3080f968e3c9)

![image](https://github.com/user-attachments/assets/4b409009-4218-4327-be15-acaadfca5e3b)
In this testing framework, the generation of test reports depends on which command you use to run your tests. Here’s how it works:

1. Running Cypress with npm run open

```bash
npm run open
```
- Description: This command opens Cypress in interactive mode, allowing you to manually run and interact with your tests in a browser.
- Report Generation: When using this command, reports are not generated automatically. After running your tests, you need to manually generate the report.
- 
How to Generate the Report Manually:
Open a new terminal window.
Run the following command to generate the HTML report:

```bash
node cucumber-html-report.js
```
The report will be created in the reports directory.

2. Running Cypress with npm test or npm run test:headful

```bash
npm test
```
or

```bash
npm run test:headful
```
- Description: These commands run Cypress tests either in headless mode (without a visible browser) or in headful mode (with a visible browser).
- Report Generation: When using these commands, the HTML report is generated automatically as part of the test execution process. You do not need to run a separate command to generate the report.


## Viewing and Sharing Test Reports 🗂️
To view and share the generated test reports, follow these steps:

1. Viewing the Report
Navigate to the Project Directory:

Go to the location where you cloned the project. This is typically done in your file explorer.
Open the reports Folder:

Inside the project directory, find and open the reports folder.
Locate the Report Folder:

Inside the reports folder, you will find a folder named cucumber-htmlreport.html.
Open the Report:

Inside the cucumber-htmlreport.html folder, locate the index.html file. Open this file with your web browser to view the test report.

![image](https://github.com/user-attachments/assets/bdbcc386-e909-4b76-8e48-4755b28001c9)

2. Sharing the Report 🤝
- To Share the Report Locally:

If you want someone else to view the report from their own machine, you need to share the entire cucumber-htmlreport.html folder.
Why Share the Entire Folder? The index.html file is not a simple link but a local file that relies on other files within the cucumber-htmlreport.html folder to function correctly. These additional files include:
Assets: These are typically images, stylesheets, or scripts used by the report.
Features: This folder may contain detailed information related to your test features.
How to Share:

Compress the cucumber-htmlreport.html folder into a ZIP file (or any other preferred archive format).
Share the compressed file with others. They can then extract the contents and open the index.html file in their browser to view the report.

[cucumber-htmlreport.html.zip](https://github.com/user-attachments/files/16457164/cucumber-htmlreport.html.zip) 🗂️


# Author 🛠️
www.linkedin.com/in/thiago-tobias-turk-4462542a9
