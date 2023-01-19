const { test } = require("@playwright/test");

class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator("//input[@name='q']");
  }
  async search(keyword) {
    await this.searchInput.type(keyword);
    await this.page.keyboard.press("Enter");
  }
  async goto() {
    await this.page.goto("http://www.google.com");
  }
}
module.exports = { SearchPage };
