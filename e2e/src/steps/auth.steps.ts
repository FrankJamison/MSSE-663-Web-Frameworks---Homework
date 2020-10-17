import { Given, Then } from 'cucumber';
import { AuthPage } from '../pages/auth.po';

const chaiAsExpected = require('chai').use(require('chai-as-promised'));
const expect = chaiAsExpected.expect;

const authPage: AuthPage = new AuthPage();

Given(/^I navigate to the login page$/, async () => {
  await authPage.navigateToLogin();
});

// Thens

Then(/^I see the authenticated home page$/, async () => {
  expect(await authPage.isAuthHomePageDisplayed()).to.be.true;
});

// This assumes you have a registered user with the below credentials
Then(/^I enter my credentials$/, async () => {
    await authPage.enterValuesInInputField('#username', 'admin');
    await authPage.enterValuesInInputField('#password', 'password');
    await authPage.clickElement('#login-btn')
});

Then(/^I see the heroes list$/, async() => {
  expect(await authPage.isElementVisible('#characters-list')).to.be.true;
});