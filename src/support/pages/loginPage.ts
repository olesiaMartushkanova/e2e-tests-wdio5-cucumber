import { expect } from 'chai';

const USERNAME_FIELD = '.tx-username';
const PASSWORS_FIELD = '.tx-password';
const LOGIN_BTN = '#login';
const DISPLAY_NAME = '.site-menu-partner-session-label';

export const enterUsername = (username) => {
    const usernameField = $(USERNAME_FIELD);
    usernameField.setValue(username);
};
export const enterPassword = (password) => {
    const passwordField = $(PASSWORS_FIELD);
    passwordField.setValue(password);
};

export const clickLoginButton = () => {
    const loginBtn = $(LOGIN_BTN);
    loginBtn.click();
};

export const isUserLoggedIn = (expectedName) => {
    const name = $(DISPLAY_NAME);
    name.waitForDisplayed(5000);
    expect(name.getText()).to.equal(expectedName);
};
