const { test } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.password = page.locator("#password");
    this.signInButton = page.locator("#signIn");
  }
  async login(username, password) {
    await this.usernameInput.type(username);
    await this.password.type(password);
    await this.signInButton.click();
  }
  async goto() {
    await this.page.goto("http://www.google.com");
  }
}
module.exports = { LoginPage };
