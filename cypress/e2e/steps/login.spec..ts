import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
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
	loginPage.enterCredentials(username, password)
});

Then(/^the user should see an error message$/, () => {
loginPage.Unsuccessfullogin();
});
