import {
    Given, When, Before, Then, After
} from 'cucumber';
import {
    enterPassword, enterUsername, clickLoginButton, isUserLoggedIn
} from 'src/support/pages/loginPage';

Before('@openBaseUrl', () => {
    browser.maximizeWindow();
    browser.url(browser.options.baseUrl);
});

Given(/^I enter (.*) and (.*)$/, (username, password) => {
    enterUsername(username);
    enterPassword(password);
});

When(/^I submit my login$/, () => {
    clickLoginButton();
});

Then(/^I am successfully logged in as (.*) user$/, (expectedName) => {
    isUserLoggedIn(expectedName);
});

After('@takeScreenshot', () => {
       const name = `TEST_RESULT-${Date.now()}`;
        browser.takeScreenshot();
        browser.saveScreenshot(`./errorShots/${name}.png`);
});
